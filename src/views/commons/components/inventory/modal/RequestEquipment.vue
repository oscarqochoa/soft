<template>
  <div>
    <b-modal
      modal
      title="REQUEST EQUIPMENT"
      v-model="mutableModalRequestEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <div>
        <ValidationObserver ref="form">
          <form @submit.prevent="saveRequest">
            <div>
              <div class="">
                <b-row>
                  <b-col sm="5">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <b-form-group id="input-group-3" label="CATEGORY:">
                        <v-select
                          v-model="category"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="optionsCategory"
                          :reduce="(val) => val.id"
                          label="name"
                          :class="{ 'border border-danger': errors[0] }"
                          class="per-page-selector d-inline-block w-100"
                        />
                      </b-form-group>
                    </ValidationProvider>
                  </b-col>
                  <b-col sm="5">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <b-form-group id="input-group-3" label="ASSIGN TO:">
                        <v-select
                          v-model="employess"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="optionsEmployees"
                          :reduce="(val) => val.id"
                          label="name_user"
                          :class="{ 'border border-danger': errors[0] }"
                          class="per-page-selector d-inline-block w-100"
                        />
                      </b-form-group>
                    </ValidationProvider>
                  </b-col>
                  <b-col sm="2">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <b-form-group
                        id="input-group-2"
                        label="NUMBER:"
                        style="color: #706d7d"
                      >
                        <b-form-input
                          style="width: 100%"
                          type="number"
                          v-mask="'######'"
                          v-model="cant"
                          disabled
                          class="input-background-white"
                          :class="{ 'border border-danger': errors[0] }"
                        ></b-form-input>
                      </b-form-group>
                    </ValidationProvider>
                  </b-col>
                  <b-col sm="12" v-if="category == 1">
                    <b-form-group
                      label="PROGRAMS:"
                      style="color: #706d7d"
                      label-for="input-1"
                    >
                      <b-form-checkbox-group
                        id="checkbox-group-1"
                        v-model="programs"
                        :options="optionsPrograms"
                        name="flavour-1"
                      ></b-form-checkbox-group>
                    </b-form-group>
                  </b-col>
                  <b-col sm="12">
                    <ValidationProvider rules="required" v-slot="{ errors }">
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
                          class="input-background-white"
                          :class="{ 'border border-danger': errors[0] }"
                        ></b-form-textarea>
                      </b-form-group>
                    </ValidationProvider>
                  </b-col>
                </b-row>
              </div>

              <b-form-group>
                <b-button variant="primary" style="float: right" type="submit">
                  SEND
                </b-button>
              </b-form-group>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import vSelect from "vue-select";
export default {
  props: {
    modalRequest: {
      type: Boolean,
    },
    global: {
      type: Object,
    },
    module: {
      type: [Number, String],
    },
  },
  components: {
    vSelect,
  },
  computed: {
    ...mapGetters("inventory-store", ["listCategoryAll"]),
  },
  data() {
    return {
      mutableModalRequestEquipment: this.modalRequest,
      optionsCategory: [],
      category: null,
      employess: null,
      optionsEmployees: [],
      selectedOperator: 0,
      cant: 1,
      commentary: "",
      programs: [], // Must be an array reference!
      optionsPrograms: [
        { text: "SKYPE", value: "SKYPE" },
        { text: "OUTLOOK", value: "OUTLOOK" },
        { text: "RING CENTRAL", value: "RING CENTRAL" },
        { text: "ONE DRIVE", value: "ONE DRIVE" },
        { text: "VPN", value: "VPN" },
        { text: "USER SOFT", value: "USER SOFT" },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModalRequest", false);
    },
    ...mapActions("inventory-store", ["LIST_CATEGORIES"]),
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
            console.log(error);
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
    getSelectUsers() {
      amgApi
        .post("/inventory/get-list-users-by-module-id", {
          moduleId: this.module,
        })
        .then((response) => {
          if (response.status == 200) {
            this.optionsEmployees = response.data;
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
    saveRequest() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.$swal
            .fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, send it!",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-danger ml-1",
              },
            })
            .then((result) => {
              if (result.value) {
                amgApi
                  .post("/inventory/save-request-equipment", {
                    userId: this.global.user_id,
                    categoryId: this.category,
                    employessId: this.employess,
                    selectedOperator: this.selectedOperator,
                    cant: this.cant,
                    commentary: this.commentary,
                    moduleId: this.module,
                    programsToInstall: this.programs,
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      this.$swal.fire({
                        icon: "success",
                        title: "REQUEST SEND",
                      });
                      this.$emit("closeModalRequest");
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
            });
        }
      });
    },
  },
  created() {
    this.getSelectCategory();
    this.getSelectUsers();
  },
};
</script>