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
          >IMPORT LOAN</b-button>
          <b-button variant="primary" :block="!bigWindow" @click="openModalLoan()">REQUEST LOAN</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card body-class="pb-0">
      <b-nav tabs>
        <b-nav-item
          v-if="isManagement"
          :to="`/${route}/loans/general`"
          exact
          exact-active-class="active"
        >LOANS</b-nav-item>
        <b-nav-item
          :to="`/${route}/loans/loans-module/`"
          exact
          exact-active-class="active"
        >LOANS BY MODULE</b-nav-item>
        <b-nav-item :to="`/${route}/loans/my-loans`" exact exact-active-class="active">MY LOANS</b-nav-item>
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
  created() {},

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
      modalRequest: "loans-store/modalRequest"
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
      if (status) this.$store.commit("loans-store/ADD_ONE_RESEARCH");

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