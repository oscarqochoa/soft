<template>
  <div>
    <b-modal
      modal
      :title="statusEquipment"
      v-model="mutableIfModalEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <div>
        <ValidationObserver ref="form">
          <form @submit.prevent="saveAssignEquipment">
            <div>
              <b-row>
                <b-col sm="12">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <b-form-group id="input-group-2" label="COMMENTARY:">
                      <b-form-textarea
                        id="textarea"
                        v-model="commentary"
                        placeholder="Argue Something ..."
                        rows="3"
                        max-rows="6"
                        class="input-background-white"
                        :class="{ 'border border-danger': errors[0] }"
                      ></b-form-textarea>
                    </b-form-group>
                  </ValidationProvider>
                </b-col>
              </b-row>

              <b-form-group>
                <b-button
                  variant="primary"
                  style="
                    background: #ff7f00;
                    float: right;
                    border-color: rgb(255, 127, 0);
                  "
                  type="submit"
                >
                  {{ statusButton }}
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
export default {
  props: {
    modalRepairEquipment: {
      type: Boolean,
    },
    global: {
      type: Object,
    },
    idEquipment: {
      type: [Number, String],
    },
    statusNewEquipment: {
      type: [Number, String],
    },
    assignedTo: {
      type: [Number, String],
    },
    num: {
      type: [Number, String],
    },
  },
  components: {},
  computed: {
    statusEquipment() {
      return [1, 2].includes(this.statusNewEquipment)
        ? "RETURN EQUIPMENT"
        : "EQUIPMENT MAINTENANCE";
    },
    statusButton() {
      return [1, 2].includes(this.statusNewEquipment)
        ? "RETURN "
        : "SEND FOR REPAIR";
    },
  },
  data() {
    return {
      mutableIfModalEquipment: this.modalRepairEquipment,
      commentary: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModalRepairEquipment", false);
    },
    saveAssignEquipment() {
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
              confirmButtonText: "Yes, send it!",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger",
              },
            })
            .then((result) => {
              if (result.value) {
                amgApi
                  .post("/inventory/save-repair-equipment", {
                    userId: this.global.user_id,
                    equipmentId: this.idEquipment,
                    commentary: this.commentary,
                    statusNewEquipment: this.statusNewEquipment,
                    assignedTo: this.assignedTo,
                    num: this.num,
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      this.$swal({
                        icon: "success",
                        title: "SENT TO REPAIR",
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                      });

                      this.$emit("closeModalRepairEquipment", false);
                      this.$emit("updateRepairEquipment", false);
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
};
</script>