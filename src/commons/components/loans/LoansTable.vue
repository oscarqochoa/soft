<template>
  <h1>{{tab}} siempre es asi</h1>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import moment from "moment";
import loansService from "@/commons/components/loans/services/loans.service";
export default {
  name: "LoansTable",
  props: {
    tab: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {
      module: this.$route.meta.module,
      loan: [],
      advance: false,
      user_session: null,
      startdate: "",
      enddate: "",
      start_page: "",
      perpage: "",
      next_page: "",
      last_page: "",
      total_data: "",
      spinner: false,
      nameUser: "",
      status: 1,
      searchadvance: false,
      administrator: "",
      showModalLoanPay: false,
      showModalLoanPays: false,
      showModalLoanReport: false,
      showModalDate: false,
      modalTracking: false,
      modalTrackingPayDay: false,
      idLoan: null,
      idDue: null,
      status_search: "",
      isNoRefresh: false,
      formatDate: {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      },
      loanSelected: [],
      dateNow: moment().format("YYYY-MM-DD")
    };
  },
  created() {
    this.search();
    console.log(this.currentUser);
  },
  mounted() {},
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      skin: "appConfig/skin",
      loading: "commissions-store/loading"
    })
  },
  methods: {
    async search() {
      const params = {
        page: 1,
        type: this.tab,
        nameUser: this.nameUser,
        user_id: this.currentUser.user_id,
        role_id: 5,
        id_module: this.module,
        startdate: this.startdate,
        enddate: this.enddate,
        status: this.status,
        status_search: this.status_search
      };
      const loans = await loansService.getLoans(params);
      console.log(loans);
    }
  }
};
</script>

<style>
</style>