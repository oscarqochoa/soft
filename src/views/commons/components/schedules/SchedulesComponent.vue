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
          <span
            v-if="S_OVERTIME_COUNTER > 0"
            class="ml-1"
          >
            <feather-icon
              icon
              :badge="S_OVERTIME_COUNTER > 99 ? '99+' : S_OVERTIME_COUNTER"
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
          <span
            v-if="S_JUSTIFICATIONS_COUNTER > 0"
            class="ml-1"
          >
            <feather-icon
              icon
              :badge="S_JUSTIFICATIONS_COUNTER > 99 ? '99+' : S_JUSTIFICATIONS_COUNTER"
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
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SchedulesComponent',
  components: {
    /* ModalRequestLoan */
  },

  data() {
    return {}
  },
  created() {
    this.$store.dispatch('loans-store/loadCounterTab')
  },
  computed: {
    ...mapGetters({
      bigWindow: 'app/bigWindow',
      currentUser: 'auth/currentUser',
      researchLoans: 'loans-store/researchLoans',
      counterTab: 'loans-store/counterTab',
      modalRequest: 'loans-store/modalRequest',
      isSupervisor: 'auth/isSupervisor',
    }),
    ...mapState({
      S_OVERTIME_COUNTER: state => state.SchedulesStore.S_COUNTER_OVERTIME,
      S_JUSTIFICATIONS_COUNTER: state => state.SchedulesStore.S_COUNTER_JUSTIFICATIONS,
    }),
    route() {
      return this.$route.meta.route
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style>
</style>
