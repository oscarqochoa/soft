<template>
  <div>
    <b-card>
      <b-row>
        <b-col lg="6">
          <h2>Schedules</h2>
        </b-col>
      </b-row>
    </b-card>

    <b-card body-class="pb-0">
      <b-nav pills>
        <b-nav-item
          :to="`/${route}/schedules/report/`"
          exact
          exact-active-class="active "
          link-classes="border-secondary hover-primary"
        >Reports by Module</b-nav-item>
        <b-nav-item
          :to="`/${route}/schedules/overtime/`"
          exact
          exact-active-class="active border-primary-i"
          link-classes="border-secondary hover-primary"
        >
          Overtime
          <span class="ml-1" v-if="counterTab.supervisor>0">
            <feather-icon
              icon
              :badge="counterTab.supervisor > 99 ? '99+' : counterTab.supervisor"
              badge-classes="badge-danger badge-glow"
            />
          </span>
        </b-nav-item>
        <b-nav-item
          :to="`/${route}/schedules/justifications`"
          exact
          exact-active-class="active border-primary-i"
          link-classes=" border-secondary hover-primary"
        >
          Justifications
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
    <!-- <ModalRequestLoan v-if="modalRequest.show" :info="modalRequest" @hide="closeModalLoan" /> -->
  </div>
</template>

<script>
/* import ModalRequestLoan from "./modals/ModalRequestLoan.vue"; */
import { mapGetters } from "vuex";
export default {
  name: "SchedulesComponent",
  components: {
    /* ModalRequestLoan */
  },
  created() {
    this.$store.dispatch("loans-store/loadCounterTab");
  },

  data() {
    return {};
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
    route() {
      return this.$route.meta.route;
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>