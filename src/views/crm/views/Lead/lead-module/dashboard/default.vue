<template>
  <b-row>
    <b-col cols="12" lg="6">
      <card-lead-client :modul="modul" :only-read="onlyRead" :lead="lead" />
    </b-col>
    <b-col cols="12" lg="6">
      <b-card title="CREDIT REPORT" sub-title="This Lead do not have credit report"/>
    </b-col>
    <b-col cols="12" lg="6">
      <card-lead-appointment :modul="modul" :only-read="onlyRead" :lead="lead" />
    </b-col>
  </b-row>
</template>

<script>

import CardLeadClient from './CardLeadClient.vue'
import CardLeadAppointment from './CardLeadAppointment.vue'

export default {
  components: {
    CardLeadClient,
    CardLeadAppointment,
  },
  props: {},
  data () {
    return {
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
  created () {},
  computed: {
    onlyRead () {
      return this.modul === 18
    },
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .card {
    height: calc(100% - 2rem);
  }
</style>
