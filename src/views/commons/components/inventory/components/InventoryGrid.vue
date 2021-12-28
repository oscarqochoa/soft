<template>
  <div>
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
          md="4"
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
        <b-col cols="12" md="8">
          <div class="d-flex align-items-end justify-content-end">
            <b-form-group label="From" label-for="from" class="mb-md-0 mb-2">
              <b-form-datepicker
                class="per-page-datepicker d-inline-block mx-50"
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
              <b-form-datepicker
                class="per-page-datepicker d-inline-block mx-50"
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
            <b-form-group class="mb-md-0 mb-2">
              <v-select
                v-model="categoryFilter"
                class="per-page-datepicker d-inline-block mx-50"
                style="font-size: 15px"
                placeholder="Select Category"
                label="name"
                :options="optionsCategory"
                :reduce="(val) => val.id"
              />
            </b-form-group>
            <b-button
              variant="primary"
              class="button-top"
              @click="$refs.refClientsList.refresh()"
            >
              <div class="d-flex">
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
      small
      :api-url="'/inventory/search-equipments'"
      ref="refClientsList"
      :items="myProvider"
      :fields="visibleFields"
      primary-key="id"
      table-class="text-nowrap"
      responsive="sm"
      show-empty
      sticky-header="50vh"
      :sort-by.sync="sortBy"
      :current-page="currentPage"
      :per-page="perPage"
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
  },
  data() {
    return {
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
      categoryFilter: null,
      startPage: "",
      toPage: "",
      totalData: "",
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      fromToObject: {
        from: null,
        to: null,
      },
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
          visible: false,
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
        from: this.fromToObject.from,
        to: this.fromToObject.to,
        statusEquipment: this.statusEquipment,
        order: ctx.sortBy == "" ? "created_at" : ctx.sortBy,
        orderby: ctx.sortDesc == 1 ? "desc" : "asc",
        idCategory: this.categoryFilter,
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
        this.toPage = data.data.to;
        return items || [];
      });
    },
    getSelectCategory() {
      if (this.listCategoryAll != null) {
        this.optionsCategory = this.listCategoryAll;
      } else {
        amgApi
          .get("/inventory/get-list-category", {})
          .then((response) => {
            if (response.status == 200) {
              this.optionsCategory = response.data;
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


