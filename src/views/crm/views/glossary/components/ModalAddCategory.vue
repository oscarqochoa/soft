<template>
  <div>
    <b-modal
      modal
       title="CREATE CATEGORY"
      v-model="ifModalCardCategory"
      size="sm"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModalCategory"
      title-tag="h3"
    >
      <ValidationObserver ref="form">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <ValidationProvider
              name="title"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-group label="">
                <b-input-group
                  prepend="NAME"
                  size="md"
                  class="badge-name-group"
                  style=""
                >
                  <b-form-input
                    v-model="category"
                    :class="{ 'border border-danger': errors[0] }"
                  />
                </b-input-group>
              </b-form-group>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
      <b-row>
        <b-col md="12" style="text-align: center" class="mt-3">
          <b-button
            variant="success"
            style="border-radius: 5px !important"
            @click="createCategory()"
            v-if="!spinnerBtnCg"
          >
            <i class="fas fa-save"></i>&nbsp; CREATE
          </b-button>
          <b-button
            variant="success"
            style="border-radius: 5px !important"
            disabled
            v-else
          >
            <b-spinner small type="grow"></b-spinner>Loading...
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
export default {
  props: {
    ifModalCard: {
      type: Boolean,
    },
  },
  data() {
    return {
      category: null,
      spinnerBtnCg: false,
      ifModalCardCategory: this.ifModalCard,
    };
  },
  methods: {
    closeModalCategory() {
      this.$emit("close", false);
    },
    createCategory() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.$swal
            .fire({
              title: "CREATE GLOSSSARY",
              text: "Are you sure?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, create it!",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn--danger",
              },
            })
            .then((result) => {
              if (result.value) {
                this.spinnerBtnCg = true;
                // this.selectCategory = null;
                const params = { name: this.category };
                amgApi
                  .post("/glossary/create-category", params)
                  .then((res) => {
                    //   this.selectCategory = null;
                    //   this.category = null;
                    //   this.getCategories();
                    this.showToast(
                      "success",
                      "top-right",
                      "Success",
                      "CheckIcon",
                      "Category Created"
                    );
                    this.spinnerBtnCg = false;
                    this.$emit("close", false);
                  })
                  .catch((error) => {
                    this.showToast(
                      "danger",
                      "top-right",
                      "Error",
                      "XIcon",
                      "Something went wrong!"
                    );
                    console.log(error);
                  });
              }
            });
        }
      });
    },
  },
};
</script>