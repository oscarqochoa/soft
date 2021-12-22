<template>
  <div>
    <b-card>
      <b-row>
        <b-col lg="6">
          <h2>LOANS</h2>
        </b-col>
        <b-col lg="6" :class="[positionResponsive]">
          <b-button
            v-if="isManagement"
            variant="info"
            :block="!bigWindow"
            class="mr-1"
            @click="openModalImportLoan"
          >Import Loan</b-button>
          <b-button variant="primary" :block="!bigWindow" @click="openModalLoan()">Request Loan</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card body-class="pb-0">
      <b-nav pills>
        <b-nav-item
          v-if="isManagement"
          :to="`/${route}/loans/general`"
          exact
          exact-active-class="active"
        >
          Loans
          <span class="ml-1" v-if="counterTab.management>0">
            <feather-icon
              icon
              :badge="counterTab.management > 99 ? '99+' : counterTab.management"
              badge-classes="badge-danger badge-glow"
            />
          </span>
        </b-nav-item>
        <b-nav-item
          v-if="isSupervisor"
          :to="`/${route}/loans/loans-module/`"
          exact
          exact-active-class="active"
        >
          Loans by Module
          <span class="ml-1" v-if="counterTab.supervisor>0">
            <feather-icon
              icon
              :badge="counterTab.supervisor > 99 ? '99+' : counterTab.supervisor"
              badge-classes="badge-danger badge-glow"
            />
          </span>
        </b-nav-item>
        <b-nav-item :to="`/${route}/loans/my-loans`" exact exact-active-class="active">
          My Loans
          <span class="ml-1" v-if="counterTab.my_loan>0">
            <feather-icon
              icon
              :badge="counterTab.my_loan > 99 ? '99+' : counterTab.my_loan"
              badge-classes="badge-danger badge-glow"
            />
          </span>
        </b-nav-item>
      </b-nav>

      <router-view :key="this.$route.name" />
    </b-card>
    <ModalRequestLoan v-if="modalRequest.show" :info="modalRequest" @hide="closeModalLoan" />
  </div>
</template>

<script>
import ModalRequestLoan from "./modals/ModalRequestLoan.vue";
import { mapGetters } from "vuex";
export default {
  name: "LoansComponent",
  components: {
    ModalRequestLoan
  },
  created() {
    this.$store.dispatch("loans-store/loadCounterTab");
  },

  data() {
    return {
      tab: this.$route.meta.tab,

      routeVar: this.$route.name
    };
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      currentUser: "auth/currentUser",
      researchLoans: "loans-store/researchLoans",
      counterTab: "loans-store/counterTab",
      modalRequest: "loans-store/modalRequest",
      isSupervisor: "auth/isSupervisor"
    }),
    positionResponsive() {
      return this.bigWindow ? "text-right" : "";
    },
    isManagement() {
      return this.$route.meta.module == 16;
    },
    route() {
      return this.$route.meta.route;
    }
  },
  methods: {
    openModalImportLoan() {
      this.showImportLoan = true;
    },
    closeModalImportLoan() {
      this.$refs.loanTabOne.search();
      this.showImportLoan = false;
    },

    openModalLoan() {
      this.modalRequest.show = true;
    },
    closeModalLoan(status) {
      //Just is a new loan
      if (status) {
        this.$store.commit("loans-store/ADD_ONE_RESEARCH");
        this.$store.dispatch("loans-store/loadCounterTab");
      }

      this.modalRequest.show = false;
    }
  },
  mounted() {
    this.modalRequest.tab = this.tab;
  }
};
</script>

<style>
</style>