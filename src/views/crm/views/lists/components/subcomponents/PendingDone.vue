<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries</span
            >
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalData"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label class="mr-2">entries</label>
            <feather-icon
              class="cursor-pointer"
              icon="RefreshCcwIcon"
              size="20"
              @click="resetSearch"
            />
          </b-col>
          <!-- Search -->
          <b-col cols="12" md="6">
            <div
              class="
                d-flex
                align-items-center
                justify-content-end
                align-items-center
              "
            >
              <b-form-input
                v-model="searchInput"
                class="d-inline-block mr-1"
                placeholder="Client..."
                debounce="300"
              />
              <b-button
                variant="primary"
                @click="filterController = !filterController"
              >
                <div class="d-flex justify-content-between">
                  <span class="mr-50"
                    ><feather-icon icon="FilterIcon" size="15"
                  /></span>

                  <span class="text-nowrap">{{
                    filterController ? "Basic Search" : "Advanced Search"
                  }}</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <transition name="fade">
        <filters-component
          class="mr-2 ml-2 mb-2"
          :filters="filters"
          v-if="filterController"
          fromToFilter
          :fromToObject="fromToObject"
          @onChangeFilter="$refs.refClientsList.refresh()"
        ></filters-component>
      </transition>
      <b-table 
          v-scrollbar
         :api-url="clientRoute"
          ref="refClientsList"
          :items="myProvider"
          :fields="visibleFields"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          sticky-header="50vh"
          :busy="isBusy"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="searchInput">
            <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1"></b-spinner>
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(credit_report)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span v-if="data.item.credit_report =='1'" class="text-danger">
               NO
              </span>
              <span v-else class="text-blue">
                YES
              </span>
            </div>
          </template>
          <template #cell(created_at)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span>
                 {{data.item.created_at | myGlobalDay}}
              </span>
            </div>
          </template>
          <template #cell(action)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
              v-if="changeStatus"
            >
              <b-button v-if="data.item.status == 'pending'"
                variant="success"
                class="mr-1 reset-radius btn-sm"
                @click="modalChange(data.item)">DONE 
                <feather-icon icon="FileIcon"></feather-icon>
              </b-button>
            </div>
            <div
              class="d-flex flex-column justify-content-start align-items-start"
              v-else
            >
              <b-button v-if="data.item.status == 'done'"
                variant="success"
                class="mr-1 reset-radius btn-sm"
                @click="modalChange(data.item)">COMMENT 
                <feather-icon icon="FileIcon"></feather-icon>
              </b-button>
            </div>
          </template>
        </b-table>
    </b-card>
    <modal-pending 
      v-if="modalChanging"
      :ifModalCard="modalChanging"
      :objectLead="objectLead"
      @close="closeModalCreateCard"
      @update="update">
      </modal-pending>
  </div>
</template>

<script>
import { amgApi } from '@/service/axios';
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import ModalPending from './ModalGeneral.vue';
export default {
    components: {
    vSelect,
    ModalPending,
    
  },
  props:{
    status:{
      type:[Number,String],
      
    }
  },
  data() {
    return {
      objectLead:null,
      sortBy: "created_at",
      sortDesc: true,
      searchInput: "",
      orderby: "",
      order: "",
      startPage: "",
      endPage: "",
      totalData: "",
      perPage: 10,
      nextPage: "",
      currentPage: 1,
      toPage: "",
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
      arrayColumns: [
        {
          key: "leadname",
          label: "Lead",
          visible: true,
        },
        {
          key: "status_lead",
          label: "Status",
          visible: true,
        },
        {
          key: "credit_report",
          label: "CR",
          visible: true,
        },
        {
          key: "mobile",
          label: "Mobile",
          visible: true,
        },
        {
          key: "created_at",
          label: "Created",
          sortable: true,
          visible: true,
        },
        {
          key: "action",
          label: "Actions",
          visible: true,
        },
       
      ],
      fromToObject: {
        from: null,
        to: null,
      },
      filters:[],
      filterController: false,
      modalChanging:false,
    };
  },
  computed:{
    changeStatus(){
      return this.status == '1'? true: false 
    },
    clientRoute() {
      return "/get-my-list";
    },
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  created(){
    
  },
  methods:{
    update(){
      this.modalChanging =false
      this.resetSearch()
    },
    closeModalCreateCard() {
      
      this.modalChanging = false;
     
    },
    modalChange(Lead){
      this.objectLead = Lead
      if(this.modalChanging == false){
        this.modalChanging =true
      }else{
        this.modalChanging =false
      }
    },
    resetSearch() {
      this.searchInput = "";
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        page: ctx.currentPage,
        leadname: ctx.filter,
        startdate: this.fromToObject.from,
        enddate: this.fromToObject.to,
        status: this.status == '1'? 1: 2 ,
        user_id:this.currentUser.user_id,
      });

      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        this.startPage = data.data.from;
        this.currentPage = data.data.current_page;
        this.perPage = data.data.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = data.data.last_page;
        this.totalData = data.data.total;
        this.toPage = data.data.to;
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
  },
};
</script>



<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 960px) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>
