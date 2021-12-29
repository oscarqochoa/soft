<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
          >
            <!-- <span
                        style="display: inline-block;margin-left: 10px;color: black;"
                      >Total Leads Pending : 146789</span> -->
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
            <b-button variant="info" v-if="add" @click="addlist">
              CREATE LIST
            </b-button>
            <b-button variant="danger" v-if="cancelList" @click="closelist">
              CANCEL
            </b-button>
          </b-col>
        </b-row>
      </div>
      <div class="m-2" v-if="newList">
        <b-card
          no-body
          class="m-2"
          style="
            box-shadow: 0px 4px 4 px 0 rgb(200 200 200 /10%);
            background-color: floralwhite;
          "
        >
          <div class="m-2">
            <h3 style="color: #ff9f43 !important; display: inline-block">
              CREATE LIST
            </h3>
            <ValidationObserver ref="form">
              <b-row>
                <b-col md="7">
                  <b-form-group label="Selec User">
                    <ValidationProvider
                      name="comment"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <v-select
                        v-model="value"
                        multiple
                        :options="options"
                        label="user_name"
                      >
                      </v-select>
                      <small v-if="errors[0]" class="text-danger text-center"
                        >User {{ errors[0] }}</small
                      >
                    </ValidationProvider>
                  </b-form-group>
                </b-col>
                <b-col md="5">
                  <b-form-group label="Number of leads by user">
                    <ValidationProvider
                      name="comment"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-input v-model="number" type="number" />
                      <small v-if="errors[0]" class="text-danger text-center">
                        Number {{ errors[0] }}</small
                      >
                    </ValidationProvider>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-button variant="success" type="submit" @click="savegroup">
                    <feather-icon icon="FileIcon" size="15"></feather-icon>
                    SAVE
                  </b-button>
                </b-col>
              </b-row>
            </ValidationObserver>
          </div>
        </b-card>
      </div>
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
            <div class="d-flex align-items-end justify-content-end">
              <b-form-group label="From" label-for="from" class="mb-md-0 mb-2">
                <b-form-datepicker
                  class="per-page-datepicker d-inline-block mx-50"
                  id="from"
                  placeholder="Date"
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
                <b-form-datepicker
                  class="per-page-datepicker d-inline-block mx-50"
                  id="to"
                  placeholder="Date"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  v-model="fromToObject.to"
                />
              </b-form-group>
              <!-- <label>{{filter.label}}</label> -->
              
              <b-button
                variant="primary" class="button-top"
                @click="$refs.refClientsList.refresh()"
              >
                <div class="d-flex ">
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
        <template #cell(created_at)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span v-if="data.item.created_at=='Today'">
              {{ data.item.created_at}}
            </span>
            <span v-else>
              {{ data.item.created_at | myGlobalDay }}
            </span>
          </div>
        </template>
        <template #cell(users)="data" v-if="getRoles">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <b-button
              variant="flat-primary"
              style="
                padding-left: 2px;
                padding-right: 2px;
                padding-top: 5px;
                padding-bottom: 5px;
              "
              v-for="(user, index) in JSON.parse(data.item.users)"
              :key="index"
              @click="modalopen(user.user_name, user.id, data.item.id)"
              >{{ user.user_name }}</b-button
            >
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
              @click="deleteuser(data.item.id)"
            >
              <feather-icon icon="Trash2Icon"></feather-icon>
            </b-button>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-start"
            v-if="!getRoles"
          >
            <b-button
              v-if="data.item.cant > 0"
              variant="warning"
              class="ml-1 reset-radius btn-sm"
              @click="
                modalopen(
                  currentUser.fullName,
                  currentUser.user_id,
                  data.item.id
                )
              "
            >
              <feather-icon icon="EyeIcon"></feather-icon>
            </b-button>
            <b-button
              v-else
              disabled
              variant="warning"
              class="ml-1 reset-radius btn-sm"
            >
              <feather-icon icon="EyeIcon"></feather-icon>
            </b-button>
          </div>
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
      :nameUser="nameUser"
      :id="id"
    ></modal-by-user>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import ModalByUser from "../components/subcomponents/ModalByUser.vue";

export default {
  components: {
    vSelect,
    ModalByUser,
  },
  data() {
    return {
      id: null,
      nameUser: "",
      value: [],
      number: "",
      options: [],
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
      arrayColumnsTwo: [
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
      modalChanging: false,
      idByUser: null,
      objectUser: null,
      cancelList: false,
      add: null,
      newList: false,
    };
  },
  computed: {
    getRoles() {
      return this.currentUser.arrRoles[0].role_id == 1 ||
        this.currentUser.arrRoles[0].role_id == 2
        ? true
        : false;
    },

    clientRoute() {
      return "/listusers";
    },
    visibleFields() {
      return this.currentUser.arrRoles[0].role_id == 1 ||
        this.currentUser.arrRoles[0].role_id == 2
        ? this.arrayColumns.filter((column) => column.visible)
        : this.arrayColumnsTwo.filter((column) => column.visible);
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    refresh() {
      this.$refs.refClientsList.refresh();
    },
    statusRol() {
      this.add = this.currentUser.arrRoles[0].role_id == 2 ? true : false;
    },
    addlist() {
      this.newList = true;
      this.add = false;
      this.cancelList = true;
    },
    closelist() {
      this.newList = false;
      this.add = true;
      this.cancelList = false;
    },
    updateList() {
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
          this.currentUser.arrRoles[0].role_id == 2
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
        if (
         this.currentUser.arrRoles[0].role_id == 1 ||
          this.currentUser.arrRoles[0].role_id == 2
        ) {
         return items || [];
        }else{
          
           let firstOption = {
            created_at: "Today",
            create_name: "System",
            cant: this.count_alltask,
            done: this.count_donetask,
          };
          // let newData = data.data;
          items.unshift(firstOption);
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
            this.currentUser.arrRoles[0].role_id == 2
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
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonAriaLabel: "Thumbs down",
          customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger ",
          },
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          // Send request to the server
          if (result.value) {
            this.$store.commit("app/SET_LOADING", true);
            amgApi
              .post("/deletelist", {
                id: id,
              })
              .then((response) => {
                this.$store.commit("app/SET_LOADING", false);
                this.$swal
                  .fire("Deleted!", "Your file has been deleted.", "success")
                  .then((res) => {
                    if (res) {
                      this.resetSearch();
                    }
                  });
              })
              .catch(() => {
                this.$store.commit("app/SET_LOADING", false);
                swal("Failed!", "There was something wronge.", "warning");
              });
          }
        });
    },
    groupusers() {
      amgApi
        .post("/sellerall/2", {
          roles: "[]",
          type: "1",
        })
        .then((response) => {
          this.options = response.data;
        })
        .catch((resp) => {
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong with users"
          );
        });
    },
    savegroup() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.$swal
            .fire({
              title: "Are you Sure ?",
              text: "Do you want to create a List?",
              icon: "warning",
              showCancelButton: true,
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger ",
              },
              confirmButtonText: "Yes",
            })
            .then((result) => {
              if (result.value) {
                const params = {
                  users: this.value.map((user) => {
                    return user.id;
                  }),
                  number: this.number,
                  create_id: this.currentUser.user_id,
                };
                amgApi.post("/savegroup", params).then((response) => {
                  this.$refs.refClientsList.refresh();
                  this.$swal
                    .fire({
                      icon: "success",
                      title: "List Created in successfully",
                    })
                    .then((res) => {
                      if (res) {
                        // (this.value = []), (this.number = "");
                        // (this.cancelList = false), (this.add = true);
                        // this.newList = false;
                      }
                    });
                });
              }
            });
        }
      });
    },
    modalopen(name, id, idByUser) {
      this.nameUser = name;
      this.id = id;
      this.idByUser = idByUser;
      if (this.modalChanging == false) {
        this.modalChanging = true;
      } else {
        this.modalChanging = false;
      }
    },
    closeModal() {
      this.modalChanging = false;
    },
  },
  created() {
    this.groupusers();
    this.statusRol();
    this.listsgroups();
  },
};
</script>


<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
.per-page-datepicker {
  width: 180px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 1024) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
  .button-top{
    margin-bottom:22px
  }
}

@media (max-width: 740px) {
  .per-page-datepicker {
    width: 110px;
  
  }
  .button-top{
    margin-bottom:22px
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


