<template>
  <div>
    <filter-slot
        v-scrollbar
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
        <b-table 
          slot="table"
          no-provider-filtering
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
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
          :filter="searchInput"
          >
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
    </filter-slot>
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
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
export default {
    components: {
    vSelect,
    ModalPending,
    FilterSlot,
  },
  props:{
    status:{
      type:[Number,String],
      
    }
  },
  data() {
    return {
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      objectLead:null,
      sortBy: "created_at",
      sortDesc: true,
      searchInput: "",
      orderby: "",
      order: "",
      startPage: null,
      endPage: "",
      totalData: "",
      nextPage: "",
      toPage: null,
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
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      filters:[],
      filter: [
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "From",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "To",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
        },
      ],
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
    onEnter(){
      this.$refs.refClientsList.refresh();
    },
    resetSearch() {
      this.searchInput = "";
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        page: ctx.currentPage,
        leadname: this.filterPrincipal.model,
        startdate: this.filter[0].model,
        enddate: this.filter[1].model,
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
        this.totalRows = data.data.total;
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
