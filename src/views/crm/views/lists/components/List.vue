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
            >Total Leads Pending : 146789</span>-->
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
            <b-button variant="info" v-if="add" @click="addlist"
              >CREATE LIST</b-button
            >
            <b-button variant="danger" v-if="cancelList" @click="closelist"
              >CANCEL</b-button
            >
          </b-col>
        </b-row>
      </div>
      <div class="m-2" v-if="newList">
        <b-card
          no-body
          class="m-2"
          style="box-shadow: 0px 4px 4 px 0 rgb(200 200 200 /10%)"
          :style="`${classAdd}`"
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
                      ></v-select>
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
                      <small v-if="errors[0]" class="text-danger text-center"
                        >Number {{ errors[0] }}</small
                      >
                    </ValidationProvider>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-button variant="success" type="submit" @click="savegroup">
                    <feather-icon icon="FileIcon" size="15"></feather-icon>SAVE
                  </b-button>
                </b-col>
              </b-row>
            </ValidationObserver>
          </div>
        </b-card>
      </div>

      <filter-slot
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :no-visible-principal-filter="true"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
        <b-table
          v-scrollbar
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
          <template #cell(created_at)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span v-if="data.item.created_at == 'Today'">
                {{ data.item.created_at }}
              </span>
              <span v-else>
                {{ data.item.created_at | myDateGlobalWithHour }}
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
              class="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
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
              class="
                d-flex
                flex-column
                justify-content-center
                align-items-start
              "
              v-if="!getRoles"
            >
              <b-button
                v-if="data.item.cant > 0 && data.item.created_at != 'Today'"
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
                v-if="data.item.created_at == 'Today' && count_alltask>0"
                variant="warning"
                class="ml-1 reset-radius btn-sm"
                @click="openModalTaskToday()"
              >
                <feather-icon icon="EyeIcon"></feather-icon>
              </b-button>
              <b-button
                v-if="data.item.cant <= 0 && data.item.created_at != 'Today'"
                disabled
                variant="warning"
                class="ml-1 reset-radius btn-sm"
              >
                <feather-icon icon="EyeIcon"></feather-icon>
              </b-button>
            </div>
          </template>
        </b-table>
      </filter-slot>
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
    <modal-task-today
      v-if="modalTaskToday"
      :modalTaskToday="modalTaskToday"
      :currentUser="currentUser"
      @close="closeModalTaskToday"
      @updatingTasks="updatingTasks"
    >
    </modal-task-today>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import ModalByUser from "./subcomponents/ModalByUser.vue";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import Button from "@/views/components/button/Button.vue";
import ModalTaskToday from "./subcomponents/ModalTaskToday.vue";
import ListService from "../service/lists.service";
export default {
  components: {
    vSelect,
    ModalByUser,
    FilterSlot,
    Button,
    ModalTaskToday,
  },
  data() {
    return {
      modalTaskToday: false,
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      id: null,
      nameUser: "",
      value: [],
      number: "",
      options: [],
      searchInput: "",
      startPage: null,
      toPage: null,
      totalData: "",
      // currentPage: 1,
      // perPage: 10,
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
    };
  },
  computed: {
    ...mapGetters({
      skin: "appConfig/skin",
    }),
    classAdd() {
      return this.skin == "dark"
        ? "background-color:#333B51"
        : "background-color: floralwhite;";
    },
    getRoles() {
      return this.currentUser.role_id == 1 || this.currentUser.role_id == 2
        ? true
        : false;
    },

    clientRoute() {
      return "/commons/list-users/search-list-Of-user";
    },
    visibleFields() {
      return this.currentUser.role_id == 1 || this.currentUser.role_id == 2
        ? this.arrayColumns.filter((column) => column.visible)
        : this.arrayColumnsTwo.filter((column) => column.visible);
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    updatingTasks() {
      this.$refs.refClientsList.refresh();
    },
    openModalTaskToday() {
      this.modalTaskToday = true;
    },
    closeModalTaskToday() {
      this.modalTaskToday = false;
    },
    refresh() {
      this.$refs.refClientsList.refresh();
    },
    statusRol() {
      this.add = this.currentUser.role_id == 2 ? true : false;
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
          this.currentUser.role_id == 1 || this.currentUser.role_id == 2
            ? null
            : this.currentUser.user_id,
        from: this.filter[0].model,
        to: this.filter[1].model,
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
        if (data.data.data[0] != null) {
          this.count_alltask = data.data.data[0].count_alltask;
          this.count_donetask = data.data.data[0].count_donetask;
        } else {
          this.count_alltask = 0;
          this.count_donetask = 0;
        }
        if (this.currentUser.role_id == 1 || this.currentUser.role_id == 2) {
          return items || [];
        } else {
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

    async deleteuser(id) {
      const confirm = await this.showConfirmSwal(
        "Are you sure?",
        "You won't be able to revert this!"
      );
      if (confirm.isConfirmed) {
        try {
          this.addPreloader();
          const data = await ListService.deleteUser({ id: id });
          this.removePreloader();
          this.$swal
            .fire("Deleted!", "Your file has been deleted.", "success")
            .then((res) => {
              if (res) {
                this.resetSearch();
              }
            });
        } catch (error) {
          console.log();
          this.removePreloader();
          this.showErrorSwal(error);
        }
      }
    },
    async groupusers() {
      try {
        const data = await ListService.groupUser({ roles: "[]", type: "1" });
        this.options = data;
      } catch (error) {
        console.error(error);
        this.showToast("danger","top-right","Error","XIcon","Something went wrong!");
      }
    },
    savegroup() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          return;
        } else {
          const confirm = await this.showConfirmSwal(
            "Are you sure?",
            "Do you want to create a List?"
          );
          if (confirm.isConfirmed) {
            try {
              const params = {
                users: this.value.map((user) => {
                  return user.id;
                }),
                number: this.number,
                create_id: this.currentUser.user_id,
              };
              this.addPreloader();
              const data = await ListService.saveGroup(params);
              this.value = [];
              this.number = "";
              this.$refs.refClientsList.refresh();
              this.removePreloader();
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
            } catch (error) {
              console.error(error);
              this.removePreloader();
              this.showErrorSwal(error);
            }
          }
          
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
  .button-top {
    margin-bottom: 22px;
  }
}

@media (max-width: 740px) {
  .per-page-datepicker {
    width: 110px;
  }
  .button-top {
    margin-bottom: 22px;
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


