<template>
  <div>
    <b-modal
      modal
      :title="statusTitle"
      v-model="mutableIfModal"
      size="lg"
      modal-class="modal-primary"
      title-tag="h3"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      :no-close-on-backdrop="true"
    >
      <div>
        <ValidationObserver ref="form">
          <div class="campos-detail-modal row" style="margin: 0">
            <div class="col-lg-8 col-12 col-xl-8 col-md-8 p-1">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Client</span>
                </div>
                <b-form-input disabled v-model="dataVoid.client_name" />
              </div>
            </div>
            <div class="col-lg-8 col-12 col-xl-8 col-md-8 pb-1">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon2"
                    >Transaction ID</span
                  >
                </div>
                <b-form-input disabled v-model="dataVoid.idtransaction" />
              </div>
            </div>
            <div class="col-lg-8 col-12 col-xl-8 col-md-8 pb-1">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Amount</span>
                </div>
                <b-form-input disabled v-model="statusAmount"></b-form-input>
              </div>
            </div>
            <div class="col-lg-8 col-12 col-xl-8 col-md-8 pb-1">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Date</span>
                </div>
                <b-form-input disabled v-model="statusDate"></b-form-input>
              </div>
            </div>

            <div class="col-lg-12 mt-1">
              <ValidationProvider
                name="comment"
                rules="required" 
                v-slot="{ errors }"
              >
                <div class="form-group row">
                  <span>Comment</span>
                  <b-textarea
                    class="input-form"
                    v-model="comment"
                    style="height: 140px"
                    :class="{'border-danger': errors[0]}"
                  ></b-textarea>
                </div>
              </ValidationProvider>
            </div>

            <div class="col-lg-12">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <b-button
                  variant="success"
                  v-if="isCeo == 1 || (isSupervisor == 2 && modul == 4)"
                  @click="sendVoid"
                >
                  SUBMIT
                </b-button>
              </div>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import PaymentService from "../service/payments.service";
export default {
  props: {
    modalRefund: {
      type: Boolean,
    },
    global: {
      type: Object,
    },
    dataVoid: {
      type: Object,
    },
    modul: {
      type: [Number, String],
    },
  },
  data() {
    return {
      mutableIfModal: this.modalRefund,
      comment: "",
    };
  },
  computed: {
    statusAmount() {
      return "$ " + this.dataVoid.amount;
    },
    statusDate() {
      return this.dataVoid.settlement_date
        ? moment(this.dataVoid.settlement_date).format("MM/DD/YYYY")
        : "-";
    },
    statusTitle() {
      return this.dataVoid.type == 1
        ? "VOID"
        : this.dataVoid.type == 2
        ? "REFUND"
        : "";
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
      isSupervisor: "auth/isSupervisor",
      isCeo: "auth/isCeo",
    }),
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    updateGrid() {
      this.$emit("updateGrid", false);
    },
    sendVoid() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          return;
        } else {
          if (this.dataVoid.type == 1) {
            //Void
            const confirm = await this.showConfirmSwal(
              "Are you sure?",
              "You won't be able to revert this!"
            );
            if (confirm.isConfirmed) {
              try {
                this.addPreloader();
                const data = await PaymentService.voidTransaction({
                  idtransaction: this.dataVoid.idtransaction,
                  idmerchant: this.dataVoid.idmerchant,
                  comment: this.comment,
                  iduser: this.currentUser.user_id,
                });
                this.removePreloader();
                if (data.status == 200) {
                  if (data.data.code == 1) {
                    this.closeModal();
                    this.updateGrid();
                    this.$swal
                      .fire({
                        icon: "success",
                        title: "OPERATION SUCCESSFULLY",
                      })
                      
                  } else {
                    this.$swal
                      .fire({
                        icon: "warning",
                        title: data.data.message,
                      })
                      this.closeModal();
                      this.updateGrid();
                  }
                } else {
                  this.$swal
                    .fire({
                      icon: "warning",
                      title: data.data.message,
                    })
                    this.closeModal();
                    this.updateGrid();
                }
              } catch (error) {
                this.removePreloader();
                this.showErrorSwal(error);
              }
            }
          } else {
            //Refund
            const confirm = await this.showConfirmSwal(
              "Are you sure?",
              "You won't be able to revert this!"
            );
            if (confirm.isConfirmed) {
              try {
                this.addPreloader();
                const data = await PaymentService.refundTransaction({
                  idtransaction: this.dataVoid.idtransaction,
                  idmerchant: this.dataVoid.idmerchant,
                  comment: this.comment,
                  iduser: this.currentUser.user_id,
                  amount: this.dataVoid.amount,
                });
                this.removePreloader();
                if (data.status == 200) {
                  if (data.data.code == 1) {
                    this.closeModal();
                    this.$swal
                      .fire({
                        icon: "success",
                        title: "OPERATION SUCCESSFULLY",
                      })
                      this.updateGrid();
                  } else {
                    this.$swal
                      .fire({
                        icon: "warning",
                        title: data.data.message,
                      })
                      this.closeModal();
                      this.updateGrid();
                  }
                } else {
                  this.$swal
                    .fire({
                      icon: "warning",
                      title: data.data.message,
                    })
                    this.closeModal();
                    this.updateGrid();
                }
              } catch (error) {
                this.removePreloader();
                this.showErrorSwal(error);
              }
            }
            
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.input-group > .input-group-prepend {
  flex: 0 0 40%;
}
.input-group .input-group-text {
  width: 100%;
}
</style>