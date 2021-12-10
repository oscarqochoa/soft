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
                align-items-end
                justify-content-end
                
              "
            >
                <b-form-group label="From" label-for="from" class="mb-md-0 mb-2">
                  <b-form-datepicker class="per-page-datepicker d-inline-block mx-50"
                    id="from"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }"
                    v-model="fromToObject.from"
                    
                  />
                </b-form-group>
                <!-- <label>{{filter.label}}</label> -->
              
             
                <b-form-group label="To" label-for="to" class="mb-md-0 mb-2">
                  <b-form-datepicker class="per-page-datepicker d-inline-block mx-50"
                    id="to"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }"
                    v-model="fromToObject.to"
                    
                  />
                </b-form-group>
                <!-- <label>{{filter.label}}</label> -->
            

              <b-button variant="primary" @click="$refs.refClientsList.refresh()">
                <div class="d-flex justify-content-between">
                  <span class="mr-50"
                    ><feather-icon icon="FilterIcon" size="15"
                  /></span>

                  <span class="text-nowrap">{{ "Search" }}</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- <transition name="fade">
        <filters-component
          class="mr-2 ml-2 mb-2"
          :filters="filters"
          fromToFilter
          :fromToObject="fromToObject"
          @onChangeFilter="$refs.refClientsList.refresh()"
        ></filters-component>
      </transition> -->
    
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
        :filter="searchInput"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(users)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <b-button variant="flat-primary" 
              style="padding-left:2px; padding-right:2px; padding-top:5px;padding-bottom:5px"
                v-for="(user, index) in JSON.parse(data.item.users)"
                :key="index"
                 @click="modalopen(user, data.item.id)"
              >{{ user.user_name }}</b-button>
            </div>
          </template>
        <template #cell(action)="data">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
              v-if="getRoles"
            >
              <b-button 
                variant="danger"
                class="mr-1 reset-radius btn-sm"
                @click="deleteuser(data.item.id)"> 
                <feather-icon icon="Trash2Icon"></feather-icon>
              </b-button>
            </div>
            <!-- <div
              class="d-flex flex-column justify-content-start align-items-start"
              v-else
            >
              <b-button v-if="data.item.status == 'done'"
                variant="success"
                class="mr-1 reset-radius btn-sm"
                @click="modalChange(data.item)">COMMENT 
                <feather-icon icon="FileIcon"></feather-icon>
              </b-button>
            </div> -->
          </template>
      </b-table>
    </b-card>
    <modal-by-user
      v-if="modalChanging"
      :ifModalCard="modalChanging"
      :objectUser="objectUser"
      :idByUser="idByUser"
      @close="closeModal"
      @updateList="updateList"
      ></modal-by-user>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import ModalByUser from '../components/subcomponents/ModalByUser.vue'
export default {
  components: {
    vSelect,
    ModalByUser,
  },
  data() {
    return {
      searchInput: "",
      startPage: "",
      toPage: "",
      totalData: "",
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      filterController: false,
      isBusy: false,
      sortBy: "created_at",
      sortDesc: true,
      arrayColumns: [
        {
          key: "created_at",
          label: "Create Date",
          sortable: true,
          visible: true,
        },
        {
          key: "create_name",
          label: "Create By",
          visible: true,
        },
        {
          key: "cant",
          label: "Number of Leads by user",
          visible: true,
        },
        {
          key: "users",
          label: "Users",
          visible: true,
        },
        {
          key: "done",
          label: "Done",
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
      filters: [],
      count_alltask: 0,
      count_donetask: 0,
      modalChanging:false,
      idByUser:null,
      objectUser:null
    };
  },
  computed: {
      getRoles(){
          return this.currentUser.arrRoles[0].role_id == 1 ||  this.global.layout.role_id == 2? true:false
      },
    clientRoute() {
      return "/listusers";
    },
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    updateList(){
      this.$refs.refClientsList.refresh();
    },
    resetSearch() {
      this.searchInput = "";
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        per_page: ctx.perPage,
        id:
          this.currentUser.arrRoles[0].role_id == 1 ||
          this.global.layout.role_id == 2
            ? null
            : this.currentUser.user_id,
        from: this.fromToObject.from,
        to: this.fromToObject.to,
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
        if (data.data.data[0] != null) {
          this.count_alltask = data.data.data[0].count_alltask;
          this.count_donetask = data.data.data[0].count_donetask;
        } else {
          this.count_alltask = 0;
          this.count_donetask = 0;
        }
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
    listsgroups(valor) {
      this.lists = null;
      amgApi
        .post("/listusers", {
          id:
            this.currentUser.arrRoles[0].role_id == 1 ||
            this.global.layout.role_id == 2
              ? null
              : this.currentUser.user_id,
          from: this.from,
          to: this.to,
        })
        .then((response) => {
          if (response.status == 200) {
            this.lists = response.data.data;
            this.start_page = response.data.current_page;
            this.perpage = response.data.per_page;
            this.next_page = this.start_page + 1;
            this.ultima_pagina = response.data.last_page;
            this.totallists = response.data.total;
            if (response.data.data[0] != null) {
              this.count_alltask = response.data.data[0].count_alltask;
              this.count_donetask = response.data.data[0].count_donetask;
            } else {
              this.count_alltask = 0;
              this.count_donetask = 0;
            }
            if (valor != 1) {
              var boton = document.getElementById("app");
              boton.classList.remove("preloader");
            }
          }
        });
    },
    deleteuser(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonAriaLabel: 'Thumbs down',
          customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ',
            },
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          // Send request to the server
          if (result.value) {
            amgApi
              .post("/deletelist", {
                id: id,
              })
              .then((response) => {
                this.$swal
                  .fire("Deleted!", "Your file has been deleted.", "success")
                  .then((res) => {
                    if (res) {
                      this.resetSearch()
                    }
                  });
              })
              .catch(() => {
                swal("Failed!", "There was something wronge.", "warning");
              });
          }
        });
    },
    modalopen(user,idByUser){
      this.objectUser = user
      this.idByUser =idByUser
      if(this.modalChanging == false){
        this.modalChanging =true
      }else{
        this.modalChanging =false
      }
    },
    closeModal() {
      this.modalChanging = false;
    },
  },
  created() {
    this.listsgroups();
  },
};
</script>


<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
.per-page-datepicker{
    width: 180px;
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
.b-calendar-grid-caption {
  background: transparent !important;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>


