<template>
  <div>
    <b-modal
      modal
      title="VIEW EQUIPMENT"
      v-model="mutableIfModalEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <div class="demo-spacing-0">
        <b-alert variant="primary" show>
          <div class="alert-body">
            <span><strong>IMPORTANT INFORMATION</strong></span>
          </div>
        </b-alert>
      </div>
      <div v-if="charge">
        <ValidationObserver ref="form">
          <form @submit.prevent="editEquipments">
            <div>
              <div class="p-3 pt-1 pb-3">
                <b-row>
                  <b-col sm="8">
                    <b-row>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <b-form-group label="CATEGORY:">
                            <v-select
                              v-model="category"
                              :options="optionsCategory"
                              placeholder="Please select an option"
                              :reduce="(val) => val.id"
                              disabled
                              label="name"
                              class="w-100"
                              :class="{ 'border border-danger': errors[0] }"
                            >
                            </v-select>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required|validate-amount"
                          v-slot="{ errors }"
                        >
                          <b-form-group label="PRICE:">
                            <money
                              v-bind="money"
                              v-model="price"
                              style="height: 37px"
                              class="
                                form-control
                                input-form
                                fond-white
                                border-hover
                              "
                              disabled
                              :class="{
                                'border border-danger':
                                  errors[0] && vmoneyValidate,
                              }"
                            ></money>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <b-form-group label="MODEL:">
                            <b-form-input
                              v-model="model"
                              placeholder="Model"
                              size="sm"
                              style="height: 38px"
                              class="
                                form-control
                                input-form
                                fond-white
                                background-white
                              "
                              disabled
                              :class="{ 'border border-danger': errors[0] }"
                            ></b-form-input>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <b-form-group label="CONDITION:">
                            <v-select
                              v-model="condition"
                              :options="optionsCondition"
                              placeholder="Please select an option"
                              :reduce="(val) => val.value"
                              disabled
                              label="text"
                              class="w-100"
                              :class="{ 'border border-danger': errors[0] }"
                            >
                            </v-select>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <b-form-group label="BRAND:">
                            <v-select
                              v-model="brand"
                              :options="optionsBrand"
                              placeholder="Please select an option"
                              :reduce="(val) => val.id"
                              disabled
                              label="name"
                              class="w-100"
                              :class="{ 'border border-danger': errors[0] }"
                            >
                            </v-select>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col sm="6">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <!-- <b-form-group label="PURCHASE DATE:">
                            <b-form-datepicker
                              v-model="dateRegister"
                              size="sm"
                              class="per-page-datepicker d-inline-block"
                              disabled
                              :class="{ 'border border-danger': errors[0] }"
                            ></b-form-datepicker>
                          </b-form-group> -->
                          <b-form-group label="PURCHASE DATE:">
                            <b-form-datepicker
                              v-model="dateRegister"
                              class="per-page-datepicker d-inline-block"
                              disabled
                              size="md"
                              id="to"
                              :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                              }"
                              :class="{ 'border border-danger': errors[0] }"
                            />
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col sm="4">
                    <div
                      class="form-group"
                      style="
                        border: 5px solid #706d7d;
                        border-radius: 15px;
                        padding: 10px;
                      "
                    >
                      <div class="image-upload">
                        <input
                          type="file"
                          id="file_input_1"
                          @change="getImage"
                          hidden
                          :disabled="toggleEditImage"
                        />
                        <!-- INPUT_FILE FIN -->
                        <div
                          class="form-group"
                          :style="
                            toggleEditImage
                              ? 'cursor: no-drop'
                              : 'cursor: pointer'
                          "
                        >
                          <figure @click="inputImage()">
                            <img width="100%" height="190" :src="image" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div style="text-align: center">
                      <div v-if="toggleEditImage">
                        <button
                          type="button"
                          class="mt-2"
                          v-if="[12, 16, 19].includes($route.meta.module)"
                          @click="replaceImage(1)"
                        >
                          <i
                            class="fas fa-edit"
                            style="font-size: 20px; color: blue"
                          ></i>
                        </button>
                      </div>
                      <div v-else>
                        <button
                          type="button"
                          class="mt-2"
                          :disabled="previousImage == viewImage"
                          :style="
                            previousImage == viewImage
                              ? 'cursor: no-drop'
                              : 'cursor: pointer'
                          "
                          @click="saveReplaceImage()"
                        >
                          <i
                            class="fas fa-save"
                            style="font-size: 20px; color: limegreen"
                          ></i>
                        </button>
                        <button
                          type="button"
                          class="mt-2"
                          @click="replaceImage(2)"
                        >
                          <i
                            class="fas fa-times-circle"
                            style="font-size: 20px; color: red"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div
                v-if="category == 1"
                style="background: #f7f6f2; color: #706d7d; padding: 10px"
              >
                SECONDARY INFORMATION
              </div>
              <div v-if="category == 1" class="p-4 mt-3 pt-1 pb-3">
                <b-row>
                  <b-col sm="6">
                    <b-form-group
                      id="input-group-2"
                      label="SERIE:"
                      style="color: #706d7d"
                      label-for="input-2"
                    >
                      <b-form-input
                        v-model="serie"
                        placeholder="..."
                        size="sm"
                        :disabled="disabled"
                        class="input-background-white"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group
                      id="input-group-2"
                      label="PROCESSOR:"
                      label-for="input-2"
                    >
                      <b-form-input
                        v-model="processor"
                        placeholder="..."
                        size="sm"
                        class="input-background-white"
                        :disabled="disabled"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
                    <b-form-group
                      id="input-group-3"
                      label="RAM:"
                      style="color: #706d7d"
                      label-for="input-3"
                    >
                      <b-form-select
                        v-model="ram"
                        :options="optionsRam"
                        size="sm"
                        :disabled="disabled"
                        class="select-icon-none input-background-white"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >Please select an option</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
                    <b-form-group
                      id="input-group-3"
                      label="DISC:"
                      style="color: #706d7d"
                      label-for="input-3"
                    >
                      <b-form-select
                        v-model="disc"
                        :options="optionsDisc"
                        size="sm"
                        :disabled="disabled"
                        class="select-icon-none input-background-white"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >Please select an option</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
                    <b-form-group
                      id="input-group-3"
                      label="S.OPERATIONAL:"
                      style="color: #706d7d"
                      label-for="input-3"
                    >
                      <b-form-select
                        v-model="so"
                        :options="optionsSo"
                        size="sm"
                        :disabled="disabled"
                        class="select-icon-none input-background-white"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >Please select an option</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                    </b-form-group>
                  </b-col>

                  <b-col sm="12">
                    <b-form-group
                      id="input-group-2"
                      label="COMMENTARY:"
                      style="color: #706d7d"
                      label-for="input-2"
                    >
                      <b-form-textarea
                        id="textarea"
                        v-model="commentary"
                        placeholder="Argue Something ..."
                        rows="3"
                        max-rows="3"
                        :disabled="disabled"
                        class="input-background-white"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <b-form-group>
                <b-button
                  squared
                  variant="secondary"
                  style="
                    background: #ff7f00;
                    float: right;
                    border-color: rgb(255, 127, 0);
                  "
                  type="submit"
                  v-if="edit == 1"
                >
                  <i class="fa fa-edit mr-1"></i>EDIT
                </b-button>
              </b-form-group>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div v-else>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1"></b-spinner>
          <strong>Loading ...</strong>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  components: {
    vSelect,
  },
  props: {
    modalViewEquipment: {
      type: Boolean,
    },
    idEquipment: {
      type: [Number, String],
    },
    edit: {
      type: [Number, String],
    },
    optionsCat: {
      type: [],
    },
  },
  data() {
    return {
      mutableIfModalEquipment: this.modalViewEquipment,
      category: null,
      brand: null,
      condition: null,
      optionsCategory: this.optionsCat,
      optionsBrand: [],
      optionsCondition: [
        { value: 1, text: "NEW" },
        { value: 2, text: "REPAIRED" },
        { value: 3, text: "USED" },
        { value: 4, text: "NOT FUNCTIONAL" },
      ],
      disc: null,
      optionsDisc: [
        { value: "128 GB", text: "128 GB" },
        { value: "256 GB", text: "256 GB" },
        { value: "512 GB", text: "512 GB" },
        { value: "1 TB", text: "1 TB" },
        { value: "2 TB", text: "2 TB" },
      ],
      ram: null,
      optionsRam: [
        { value: "4 GB", text: "4 GB" },
        { value: "6 GB", text: "6 GB" },
        { value: "8 GB", text: "8 GB" },
        { value: "12 GB", text: "12 GB" },
        { value: "16 GB", text: "16 GB" },
        { value: "32 GB", text: "32 GB" },
        { value: "64 GB", text: "64 GB" },
      ],
      so: null,
      optionsSo: [
        { value: "WINDOWS 10", text: "WINDOWS 10" },
        { value: "WINDOWS 11", text: "WINDOWS 11" },
      ],
      serie: "",
      processor: "",
      price: "",
      model: "",
      dateRegister: null,
      money: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 2,
        masked: false,
      },
      vmoneyValidate: false,
      newCategory: "",
      newBrand: "",
      equipment: {
        images: "",
      },
      Image: "/images/inventory.jpg",
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
      disabled: this.edit == 1 ? false : true,
      toggleEditImage: true,
      previousImage: "",
      commentary: "",
      viewImage: "",
      charge: false,
    };
  },
  computed: {
    image() {
      return this.viewImage;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    getImage(e) {
      let file = e.target.files[0];
      this.equipment.images = file;
      this.uploadImage(file);
    },
    uploadImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.viewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    searchEquipmentById() {
      amgApi
        .post("/inventory/get-equipment-data-by-id", {
          equipmentId: this.idEquipment,
        })
        .then((response) => {
          if (response.status == 200) {
            this.dataEquipment = response.data[0];
            this.category = this.dataEquipment.category;
            this.brand = this.dataEquipment.brand;
            this.condition = this.dataEquipment.condition;
            // this.disc = this.dataEquipment["disc"];
            // this.ram = this.dataEquipment["ram"];
            // this.so = this.dataEquipment["os"];
            // this.serie = this.dataEquipment["serie"];
            // this.processor = this.dataEquipment["process"];
            this.price = this.dataEquipment.price;
            this.model = this.dataEquipment.model;
            this.dateRegister = this.dataEquipment.purchase_date;
            // this.commentary = this.dataEquipment["commentary"];
            this.viewImage =
              this.dataEquipment.url_image == null
                ? this.assetsImg + this.Image
                : this.dataEquipment.url_image;
            // var x = document.getElementById("app");
            this.charge = true;
          }
        })
        .catch((err) => {
          console.error(err);
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong!"
          );
        });
    },
    getSelectBrand() {
      amgApi.get("/inventory/get-list-brand", {}).then((response) => {
        if (response.status == 200) {
          this.optionsBrand = response.data;
        }
      }).catch(error=>{
        console.error(error)
        this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong!"
          );
      });
    },
  },
  created() {
    this.searchEquipmentById();
    this.getSelectBrand();
  },
  mounted() {},
};
</script>

<style scoped>
.per-page-datepicker {
  height: 25px;
}
</style>