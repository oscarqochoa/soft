<template>
  <b-row>
    <b-col cols="12" lg="6">
      <card-lead-client :modul="modul" :only-read="onlyRead" :lead="lead" />
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-credit-report
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :is-busy-credit-report-obtained="isBusyCreditReportObtained"
        :is-busy-credit-report-service="isBusyCreditReportService"
      />
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-appointment :modul="modul" :only-read="onlyRead" :is-busy="isBusyAppointment" :lead="lead" />
    </b-col>
  </b-row>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import CardLeadClient from './CardLeadClient.vue'
import CardLeadAppointment from './CardLeadAppointment.vue'
import CardLeadCreditReport from './CardLeadCreditReport.vue'

export default {
  components: {
    CardLeadClient,
    CardLeadAppointment,
    CardLeadCreditReport,
  },
  props: {},
  data () {
    return {
      isBusyAppointment: false,
      isBusyCreditReportObtained: false,
      isBusyCreditReportService: false,
      modul: 2,
      lead: {
        dob: '1997-28-08',
        email: 'jjohan@gmail.com',
        id: this.$route.params.id,
        itin: 98516356587,
        language: 'es',
        lead_name: '34  34',
        lead_programs: true,
        mobile: '931090820',
        name_programs: [ 'program name 1', 'program 2' ],
        nickname: 'JJohan',
        origin_country: 'Nose ja',
        snn: 21354698798,
        state: 'CA',
        states_eeuu_slug: 'eeuu',
        status_sn_id: 1,
        street: 'migrs usja',
        zipcode: 34,
      }
    }
  },
  created () {
    this.getCreditReports()
    this.getCreditReportPendings()
    this.getEvents()
    this.getOwners()
    this.getPrograms()
  },
  computed: {
    onlyRead () {
      return this.modul === 18
    },
  },
  watch: {},
  methods: {
    ...mapActions({
      A_GET_OWNERS: 'CrmLeadStore/A_GET_OWNERS',
      A_GET_EVENTS: 'CrmEventStore/A_GET_EVENTS',
      A_GET_PROGRAMS: 'CrmLeadStore/A_GET_PROGRAMS',
      A_GET_CREDIT_REPORTS: 'CrmCreditReportStore/A_GET_CREDIT_REPORTS',
      A_GET_CREDIT_REPORT_PENDINGS: 'CrmCreditReportStore/A_GET_CREDIT_REPORT_PENDINGS',
    }),
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
        this.isBusyCreditReportService = true
        await this.A_GET_CREDIT_REPORT_PENDINGS({ id: this.$route.params.id, modul: this.modul })
        this.isBusyCreditReportService = false
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    height: calc(100% - 2rem);
  }
</style>
