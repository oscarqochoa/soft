<template>
  <b-card>
    <template #header>
      <b-card-title>Payments</b-card-title>
    </template>
    <b-row>
      <b-col cols="12" sm="6" md="3">
        <card-lead-payment-section
          :modul="modul"
          title="Realtor"
          :cards="lead.cards"
          :is-busy="isBusyRealtor"
          :method="10"
          :is-loading="isLoading"
          @onSubmit="onSubmit"
        />
      </b-col>
      <b-col cols="12" sm="6" md="3">
        <card-lead-payment-section
          :modul="modul"
          title="Lien"
          :cards="lead.cards"
          :is-busy="isBusyRealtor"
          :method="41"
          :is-loading="isLoading"
          @onSubmit="onSubmit"
        />
      </b-col>
      <b-col cols="12" sm="6" md="3">
        <card-lead-payment-section
          :modul="modul"
          title="Court"
          :cards="lead.cards"
          :is-busy="isBusyRealtor"
          :method="42"
          :is-loading="isLoading"
          @onSubmit="onSubmit"
        />
      </b-col>
      <b-col cols="12" sm="6" md="3">
        <card-lead-payment-section
          :modul="modul"
          title="Other"
          :cards="lead.cards"
          :is-busy="isBusyRealtor"
          :method="12"
          :is-loading="isLoading"
          @onSubmit="onSubmit"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

import CardLeadPaymentSection from './CardLeadPaymentSection.vue'

export default {
  components: {
    CardLeadPaymentSection,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      /* S_TEMPLATES: event => event.CrmTemplateStore.S_TEMPLATES */
    })
  },
  created () {
    this.authUser = this.currentUser
  },
  data () {
    return {
      authUser: {},
      court: new Object,
      isBusyRealtor: false,
      isLoading: false,
      lien: new Object,
      realtor: new Object,
      other: new Object,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      A_LEAD_PAYMENT: 'CrmLeadStore/A_LEAD_PAYMENT'
    }),
    async onSubmit (item) {
      this.showConfirmSwal()
      .then(async result => {
        if (result.value) {
          this.isLoading = true
          item.amount = item.amount.replaceAll(',', '')
          item.lead_id = this.lead.id
          item.user_id = this.authUser.user_id
          const response = await this.A_LEAD_PAYMENT(item)
          if (this.isResponseSuccess(response))
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong. ' + response.message)
          this.isLoading = false
        }
      }).catch(error => {
        console.log('Something went wrong onSubmit', error)
        this.showErrorSwal()
        this.isLoading = false
      })
    }
  },
  mounted () {},
  props: {
    modul: {
      type: Number,
      required: true
    },
    onlyRead: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    }
  },
  setup() {},
}
</script>
