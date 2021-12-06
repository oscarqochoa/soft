<template>
  <div>
    <b-modal
      v-model="modalUp"
      title-class="h2"
      size="lg"
      title="COMMISSION PAYMENT"
      modal-class="modal-primary"
      :footer-class="showEdit || showAnull? 'justify-content-between':''"
      centered
      @hidden="hideModal()"
    >
      <b-card-text>
        <ModalHeader :info="info" />
        <ValidationObserver ref="form">
          <PaymentBody :info="info" :disabled-payment="disabledPayment" :payment="payment" />
        </ValidationObserver>
      </b-card-text>

      <template #modal-footer>
        <!-- PAY OR ANNUL BY -->
        <div v-if="showEdit || showAnull">
          <span>listo</span>
        </div>

        <!-- buttons -->
        <div>
          <b-button
            v-if="showSave"
            size="sm"
            variant="gradient-success"
            @click="savePayment()"
          >{{saveUpdate}}</b-button>
          <b-button v-if="showEdit" size="sm" variant="gradient-info" @click="editPayment()">EDIT</b-button>
          <b-button
            v-if="showAnull"
            size="sm"
            variant="gradient-danger"
            @click="anullPayment()"
          >ANULL</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import commissionsService from "@/commons/components/commissions/services/commissions.service";
import ModalHeader from "@/commons/components/commissions/modals/ModalHeader.vue";
import PaymentBody from "@/commons/components/commissions/modals/modal-payment/PaymentBody.vue";
export default {
  name: "ModalCommissionsPayment",
  components: {
    ModalHeader,
    PaymentBody
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      modalUp: false,
      disabledPayment: false,
      isPaid: null,
      payment: {
        methoPayment: 2,
        datePayment: moment().format("MM-DD-YYYY"),
        numberPayment: null,
        observation: "",
        approveName: null,
        anullName: null,
        anullDate: null,
        loading: null
      }
    };
  },
  created() {
    this.searchCommission();
  },
  mounted() {
    this.modalUp = this.showModal;
    this.isPaid = this.info.paid_state;

    //Disabled if is paid
    this.disabledPayment =
      this.info.paid_state == 1 || this.info.paid_state == 2;
  },
  computed: {
    ...mapGetters({
      loading: "app/loading"
    }),
    isCeo() {
      return this.info.role_id == 1;
    },
    isSupervisor() {
      return this.info.role_id == 2;
    },
    isCrm() {
      return this.info.module == 2;
    },
    isAdm() {
      return this.info.module == 4;
    },
    isDepartment() {
      return this.info.module != 2 && this.info.module != 4;
    },
    saveUpdate() {
      return this.info.paid_state ? "UPDATE" : "SAVE";
    },
    showEdit() {
      return this.isPaid == 1 || this.isPaid == 2;
    },
    showAnull() {
      return this.isPaid == 3;
    },
    showSave() {
      return this.isPaid == null || this.isPaid == 3;
    }
  },
  methods: {
    hideModal(status) {
      this.modalUp = false;
      this.$emit("hide-modal");
    },
    savePayment() {
      this.$refs.form.validate().then(success => {
        if (success) {
          alert("success");
          console.log("success");
        }
      });
    },
    editPayment() {
      this.disabledPayment = false;
      this.isPaid = 3;
    },
    async searchCommission() {
      if (this.info.paid_state) {
        //start preloader
        this.$store.commit("app/SET_LOADING", true);
        try {
          const params = {
            user_id: this.info.user_id,
            year: this.info.year,
            month: this.info.month
          };
          let response = await commissionsService.searchCommissionsApprove(
            params
          );
          this.payment.methoPayment = response[0].paid_type;
          this.payment.observation = response[0].observation;
          this.payment.datePayment = moment(response[0].payment_date).format(
            "MM-DD-YYYY"
          );
          this.payment.numberPayment = response[0].num_operation;
          this.payment.approveName = response[0].approve_name;
          this.payment.anullName = response[0].annulled_name;
          this.payment.anullDate = response[0].annulled_at;
          this.payment.loading = false;

          //close preloader
          this.$store.commit("app/SET_LOADING", false);
        } catch (error) {
          this.showErroSwal();
          this.$store.commit("app/SET_LOADING", false);
        }
      }
    },

    anullPayment() {}
  },
  watch: {}
};
</script>