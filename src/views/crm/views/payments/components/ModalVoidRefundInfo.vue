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
    >
      <div>
        <div class="campos-detail-modal row" style="margin: 0">
          <div class="col-lg-8 col-12 col-xl-8 col-md-8 p-1">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Client</span>
              </div>
              <b-form-input disabled v-model="dataVoidRefund.client_name" />
            </div>
          </div>
          <div class="col-lg-8 col-12 col-xl-8 col-md-8 pb-1">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2"
                  >Transaction ID</span
                >
              </div>
              <b-form-input disabled v-model="dataVoidRefund.transaction_id" />
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
          <div class="col-lg-8 col-12 col-xl-8 col-md-8 pb-1">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Done by</span>
              </div>
              <b-form-input disabled v-model="statusDone"></b-form-input>
            </div>
          </div>

          <div class="col-lg-12 mt-1">
            <div class="form-group row">
              <span>Comment</span>
              <b-textarea
                disabled
                class="input-form"
                v-model="dataVoidRefund.comment"
                style="height: 140px"
              ></b-textarea>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>


<script>
import moment from "moment";
export default {
  props: {
    modalVoidRefund: {
      type: Boolean,
    },
    idtransaction: {
      type: [Number, String],
    },
  },
  data() {
    return {
      mutableIfModal: this.modalVoidRefund,
      dataVoidRefund: [],
    };
  },
  computed: {
    statusAmount() {
      return "$ " + this.dataVoidRefund.amount;
    },
    statusDate() {
      return moment(this.dataVoidRefund.settlement_date).format("MM/DD/YYYY");
    },
    statusDone() {
      return (
        this.dataVoidRefund.updated_by +
        " | " +
        moment(this.dataVoidRefund.updated_at).format("MM/DD/YYYY hh:mm A")
      );
    },
    statusTitle() {
      return this.dataVoidRefund.type_transaction == 39
        ? "VOID"
        : this.dataVoidRefund.type_transaction == 40
        ? "REFUND"
        : "";
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeInfo", false);
    },
    getVoidRefund(idtransaction) {
      this.$store.commit("app/SET_LOADING", true);
      amgApi
        .post("/getvoidrefund", {
          idtransaction: idtransaction,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("app/SET_LOADING", false);
            this.dataVoidRefund = response.data[0];
          }
        })
        .catch((err) => {
          console.error(err);
          this.$store.commit("app/SET_LOADING", false);
        });
    },
  },
  created() {
    this.getVoidRefund(this.idtransaction);
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