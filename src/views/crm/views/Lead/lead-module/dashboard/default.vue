<template>
  <b-row>
    <b-col cols="12" lg="6">
      <card-lead-client
        v-if="Object.keys(S_LEAD).length"
        :modul="modul"
        :only-read="onlyRead"
        :lead="S_LEAD"
      />
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-credit-report
        v-if="Object.keys(S_LEAD).length"
        :modul="modul"
        :only-read="onlyRead"
        :lead="S_LEAD"
        :is-busy-credit-report-obtained="isBusyCreditReportObtained"
        :is-busy-credit-report-pending="isBusyCreditReportPending"
      />
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-appointment
        v-if="Object.keys(S_LEAD).length"
        :modul="modul"
        :only-read="onlyRead"
        :is-busy="isBusyAppointment"
        :lead="S_LEAD"
      />
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-task
        v-if="Object.keys(S_LEAD).length"
        :modul="modul"
        :only-read="onlyRead"
        :lead="S_LEAD"
      />
    </b-col>
  </b-row>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import CardLeadClient from './CardLeadClient.vue'
import CardLeadAppointment from './CardLeadAppointment.vue'
import CardLeadCreditReport from './CardLeadCreditReport.vue'
import CardLeadTask from './CardLeadTask.vue'

export default {
  components: {
    CardLeadClient,
    CardLeadAppointment,
    CardLeadCreditReport,
    CardLeadTask
  },
  props: {},
  data () {
    return {
      isBusyAppointment: false,
      isBusyCreditReportObtained: false,
      isBusyCreditReportPending: false,
      modul: 2,
    }
  },
  created () {
    this.getLead()
    this.getCreditReports()
    this.getCreditReportPendings()
    this.getEvents()
    this.getOwners()
    this.getPrograms()
  },
  computed: {
    ...mapState({
      S_LEAD: state => state.CrmLeadStore.S_LEAD
    }),
    onlyRead () {
      return this.modul === 18
    },
  },
  watch: {},
  methods: {
    ...mapActions({
      A_GET_LEAD: 'CrmLeadStore/A_GET_LEAD',
      A_GET_OWNERS: 'CrmGlobalStore/A_GET_OWNERS',
      A_GET_EVENTS: 'CrmEventStore/A_GET_EVENTS',
      A_GET_PROGRAMS: 'CrmGlobalStore/A_GET_PROGRAMS',
      A_GET_CREDIT_REPORTS: 'CrmCreditReportStore/A_GET_CREDIT_REPORTS',
      A_GET_CREDIT_REPORT_PENDINGS: 'CrmCreditReportStore/A_GET_CREDIT_REPORT_PENDINGS',
    }),
    async getLead () {
      try {
        await this.A_GET_LEAD({ id: this.$route.params.id })
      } catch (error) {
        console.log('Something went wrong getLead', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async getCreditReports () {
      try {
        this.isBusyCreditReportObtained = true
        await this.A_GET_CREDIT_REPORTS({ id: this.$route.params.id })
        this.isBusyCreditReportObtained = false
      } catch (error) {
        console.log('Something went wrong getCreditReports', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async getCreditReportPendings () {
      try {
        this.isBusyCreditReportPending = true
        await this.A_GET_CREDIT_REPORT_PENDINGS({ id: this.$route.params.id, modul: this.modul })
        this.isBusyCreditReportPending = false
      } catch (error) {
        console.log('Something went wrong getCreditReportPendings', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async getEvents () {
      try {
        this.isBusyAppointment = true
        await this.A_GET_EVENTS({ idLead: this.$route.params.id })
        this.isBusyAppointment = false
      } catch (error) {
        console.log('Something went wrong getEvents', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async getOwners () {
      try {
        const roles = [2, 4].includes(this.modul) ? '[1,2,5]' : '[1,2,3,5]'
        await this.A_GET_OWNERS({ modul: this.modul, body: { roles, type: '1' } })
      } catch (error) {
        console.log('Something went wrong getOwners:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async getPrograms () {
      try {
        await this.A_GET_PROGRAMS()
      } catch (error) {
        console.log('Something went wrong getPrograms', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .card {
    height: calc(100% - 2rem);
  }
</style>
