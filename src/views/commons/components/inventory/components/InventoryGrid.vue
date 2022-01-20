<template>
  <div>
    <filter-slot
        :filter="filter"
        :filter-principal="filterPrincipal"
        :no-visible-principal-filter="true"
        :total-rows="totalRows"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
      <b-table
      v-scrollbar
      small
      slot="table"
      no-provider-filtering
      :api-url="'/inventory/search-equipments'"
      ref="refClientsList"
      :items="myProvider"
      :fields="visibleFields"
      primary-key="id"
      table-class="text-nowrap"
      responsive="sm"
      show-empty
      sticky-header="70vh"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :current-page="paginate.currentPage"
      :per-page="paginate.perPage"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1"></b-spinner>
          <strong>Loading ...</strong>
        </div>
      </template>
      <template #cell(selected)="data">
        <div v-if="validateLocation(data.item.process)">
          <b-form-checkbox v-model="data.item.selected"></b-form-checkbox>
        </div>
        <div v-else></div>
      </template>
      <template #cell(url_image)="data">
        <div class="image-upload">
          <input type="file" id="file_input" hidden />
          <!-- INPUT_FILE FIN -->
          <div class="form-group">
            <figure>
              <img
                v-if="data.item.url_image"
                width="80"
                height="80"
                :src="data.item.url_image"
              />
              <img
                v-else
                width="80"
                height="80"
                :src="assetsImg + '/images/inventory.jpg'"
              />
            </figure>
          </div>
        </div>
      </template>
      <template #cell(price)="data"
        >{{ data.item.price != null ? "$ " + data.item.price : "" }}
      </template>
      <template #cell(assigned_to)="data">
        <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
          <span>{{data.item.assigned_to}}</span>
          <div>{{data.item.name_module}}</div>
        </div>
      </template>
      <template #cell(tracking)="data">
        <div>
          <b-button
            variant="light"
            @click="openModalTrackingEquipment(data.item.id)"
          >
            TRACKING
          </b-button>
        </div>
      </template>
      <template #cell(created_at)="data">
        <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
          <span>
            {{data.item.created_by}}
          </span>
          <div>{{data.item.created_at | myGlobalDay}}</div>
        </div>
      </template>
      <template #cell(actions)="data">
        <b-dropdown
          variant="link"
          no-caret
          :right="$store.state.appConfig.isRTL"
        >
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="16"
              class="align-middle text-body"
            />
          </template>
          <b-dropdown-item
            @click="viewEquipment(data.item.id, 2)"
            v-if="module != 12"
          >
            <feather-icon icon="EyeIcon" />
            <span class="align-middle ml-50"> INFORMATION</span>
          </b-dropdown-item>

          <b-dropdown-item
            v-if="
              data.item.assigned_to != null &&
              module != 19 &&
              statusEquipment == 2
            "
            @click="
              openValidate(
                data.item.id,
                1,
                data.item.assigned_to,
                data.item.module_id
              )
            "
          >
            <feather-icon icon="CornerUpLeftIcon" />
            <span class="align-middle ml-50">RETURN</span>
          </b-dropdown-item>
          <b-dropdown-item
            v-if="[2].includes(data.item.status)"
            @click="
              openValidate(
                data.item.id,
                3,
                data.item.assigned_to,
                data.item.module_id
              )
            "
          >
            <feather-icon icon="ChevronsRightIcon" />
            <span class="align-middle ml-50">TO REPAIR</span>
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    </filter-slot>
    
    
    <modal-tracking-equipment
      v-if="modalTracking"
      :modalTracking="modalTracking"
      :equipmentId="equipmentId"
      :global="global"
      @close="closeModalTrackingEquipment"
    ></modal-tracking-equipment>
    <modal-view-equipment
      v-if="modalViewEquipment"
      :modalViewEquipment="modalViewEquipment"
      :global="global"
      :idEquipment="idEquipment"
      :edit="edit"
      :optionsCat="optionsCategory"
      @close="closeModalViewEquipment"
    ></modal-view-equipment>
    <modal-repair-equipment
      v-if="modalRepairEquipment"
      :modalRepairEquipment="modalRepairEquipment"
      :global="global"
      :idEquipment="idEquipment"
      :statusNewEquipment="statusNewEquipment"
      :assignedTo="assignedTo"
      :num="num"
      @updateRepairEquipment="updateRepairEquipment"
      @closeModalRepairEquipment="closeModalRepairEquipment"
    ></modal-repair-equipment>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import vSelect from "vue-select";
import ModalTrackingEquipment from "../modal/ModalTrackingEquipment.vue";
import ModalViewEquipment from "../modal/ModalViewEquipment.vue";
import ModalRepairEquipment from "../modal/ModalRepairEquipment.vue";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";

export default {
  props: {
    global: {
      type: Object,
    },
    module: {
      type: [Number, String],
    },
    statusEquipment: {
      type: [Number, String],
    },
  },
  components: {
    vSelect,
    ModalTrackingEquipment,
    ModalViewEquipment,
    ModalRepairEquipment,
    FilterSlot,
  },
  data() {
    return {
      sortBy: "created_at",
      sortDesc: true,
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
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
      categoryFilter: null,
      startPage: null,
      toPage: null,
      totalData: "",
      // currentPage: 1,
      // perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      optionsCategory: [],
      arrayColumns: [
        {
          key: "selected",
          label: "#",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "url_image",
          label: "Image",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "name_category",
          label: "Category",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "price",
          label: "Price",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "condition",
          label: "Condition",
          class: "text-left ",
          sortable: false,
          visible: true,
        },
        {
          key: "name_brand",
          label: "Brand",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "model",
          label: "Model",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "process",
          label: "Current location",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "assigned_to",
          label: "Assigned To",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "tracking",
          label: "Tracking",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "created_at",
          label: "Created By",
          class: "text-left",
          sortable: true,
          visible: true,
        },
        {
          key: "actions",
          label: "Actions",
          class: "text-left",
          sortable: false,
          visible: true,
        },
      ],
      modalTracking: false,
      edit: "",
      modalViewEquipment: false,
      idEquipment: "",
      modalRepairEquipment: false,
      statusNewEquipment: "",
      assignedTo: "",
      num: "",
      sortBy: "created_at",
      filter: [
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Category",
          model: null,
          options: [],
          reduce: "id",
          selectText: "name",
          cols: 12,
        },
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
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    ...mapGetters("inventory-store", ["listCategoryAll"]),
  },
  methods: {
    ...mapActions("inventory-store", ["LIST_CATEGORIES"]),
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        perpage: ctx.perPage,
        from:this.filter[1].model,
        to: this.filter[2].model,
        statusEquipment: this.statusEquipment,
        order: ctx.sortBy == "" ? "created_at" : ctx.sortBy,
        orderby: ctx.sortDesc == 1 ? "desc" : "asc",
        idCategory: this.filter[0].model,
        moduleId: this.module,
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
        return items || [];
      });
    },
    getSelectCategory() {
      if (this.listCategoryAll != null) {
        this.optionsCategory = this.listCategoryAll;
        this.filter[0].options = this.listCategoryAll;
      } else {
        amgApi
          .get("/inventory/get-list-category", {})
          .then((response) => {
            if (response.status == 200) {
              this.optionsCategory = response.data;
              this.filter[0].options = response.data;
              if (this.listCategoryAll == null) {
                this.LIST_CATEGORIES(this.optionsCategory);
              }
            }
          })
          .catch((error) => {
            console.error(error);
            this.showToast(
              "danger",
              "top-right",
              "Error",
              "XIcon",
              "Something went wrong!"
            );
          });
      }
    },
    resetSearch() {
      this.categoryFilter = null;
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
    openModalTrackingEquipment(equipmentId) {
      this.equipmentId = equipmentId;
      this.modalTracking = true;
    },
    closeModalTrackingEquipment() {
      this.modalTracking = false;
    },
    viewEquipment(idEquipment, edit) {
      this.idEquipment = idEquipment;
      this.edit = edit;
      this.modalViewEquipment = true;
    },
    closeModalViewEquipment() {
      this.modalViewEquipment = false;
    },
    validateLocation(current) {
      if (current == this.$route.meta.module && this.$route.meta.module != 19) {
        return true;
      } else {
        return false;
      }
    },
    openValidate(param1, param2, param3, moduleId, num) {
      if (num == 2) {
        // this.openModalRepairEquipment(param1, param2, param3, num);
        console.log("num==2");
      } else {
        this.$swal
          .fire({
            title: "Password",
            allowOutsideClick: false,
            input: "password",
            showCancelButton: true,
            confirmButtonText: "OK!",
            customClass: {
              confirmButton: "btn btn-primary",
              cancelButton: "btn btn-danger",
            },
            inputValidator: (value) => {
              if (!value) {
                return "password is required!";
              }
            },
          })
          .then((result) => {
            if (result.value) {
              this.validatePassword(
                result.value,
                param1,
                param2,
                param3,
                moduleId,
                num
              );
            }
          });
      }
    },
    validatePassword(value, param1, param2, param3, moduleId, num) {
      let module = 0;
      if (num == 1) {
        module = 19;
      } else {
        if (param2 == 3) {
          module = 12;
        } else if (param2 == 1) {
          module = 19;
        } else {
          if (moduleId == null) {
            module = 19;
          } else {
            module = moduleId;
          }
        }
      }
      const params = { module: module, pass: value };
      amgApi
        .post("/inventory/validate-return-equitment", params)
        .then((res) => {
          if (res.data == 0) {
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Password is incorrect",
            });
          } else {
            this.showToast(
              "success",
              "top-right",
              "Success",
              "CheckIcon",
              "Correct password"
            );
            this.openModalRepairEquipment(param1, param2, param3, num);
          }
        })
        .catch((error) => {
          console.error(error);
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong!"
          );
        });
    },
    openModalRepairEquipment(idEquipment, status, assignTo, num) {
      this.idEquipment = idEquipment;
      this.statusNewEquipment = status;
      this.assignedTo = assignTo;
      this.num = num;
      this.modalRepairEquipment = true;
    },
    closeModalRepairEquipment() {
      this.modalRepairEquipment = false;
      // this.resetSearch();
    },
    updateRepairEquipment() {
      this.$refs.refClientsList.refresh();
    },
  },
  created() {
    this.getSelectCategory();
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
  .per-page-datepicker {
    width: 100px;
  }
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


