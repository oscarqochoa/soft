<template>
  <b-modal
    v-model="modal.url"
    :title="`GENERATE URL LEAD ${url.client.toUpperCase()}`"
    title-class="h3 text-white font-weight-bolder"
    hide-footer
    centered
  >
    <b-container fluid>
      <b-row class="d-flex align-items-center justify-content-end">
        <b-form-checkbox
          v-model="charge"
          class="custom-control-success"
          @change="changeCharge"
        >Charge</b-form-checkbox>
      </b-row>
      <b-row>
        <b-col>
          <p>Program</p>
          <p>{{ url.program }}</p>
        </b-col>
        <b-col>
          <p>Amount</p>
          <money
            v-model="amount"
            v-bind="{decimal: '.', thousands: ',', prefix: '$  ', precision: 2}"
            class="rounded text-center form-control"
          />
        </b-col>
      </b-row>
      <b-row class="mt-1">
        <b-input-group>
          <b-form-input
            v-model="generatedUrl"
            disabled
          />
          <b-input-group-append>
            <b-button
              v-clipboard:copy="generatedUrl"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              variant="primary"
            >
              <feather-icon icon="CopyIcon" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-row>
      <b-row class="mt-1 d-flex font-weight-bold align-items-center justify-content-center">
        <b-button
          variant="success"
          @click="sendGeneratedLinkViaSms"
        >
          <feather-icon icon="MessageCircleIcon" />SEND SMS
        </b-button>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import CryptoJS from 'crypto-js'
import { mapGetters } from 'vuex'

const moment = require('moment-timezone')

export default {
  name: 'UrlModal',
  directives: {
    Ripple,
  },
  props: {
    modal: {
      type: Object,
      default: () => ({
        url: true,
      }),
    },
    url: {
      type: Object,
      default: () => ({
        client: '',
        program: '',
        selectedLead: {},
      }),
    },
  },
  data() {
    return {
      charge: true,
      amount: 0,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    generatedUrl() {
      const encryptedLeadId = CryptoJS.AES.encrypt(
        `${this.url.selectedLead.lead_id}`,
        'Secret Passphrase',
      )
        .toString()
        .replaceAll('/', '-')
      const encryptedProgramId = CryptoJS.AES.encrypt(
        `${this.url.selectedLead.program_id}`,
        'Secret Passphrase',
      )
        .toString()
        .replaceAll('/', '-')
      const encryptedAmount = CryptoJS.AES.encrypt(
        `${this.amount}`,
        'Secret Passphrase',
      )
        .toString()
        .replaceAll('/', '-')
      const encryptedSaleId = CryptoJS.AES.encrypt(
        `${this.url.selectedLead.sale_id}`,
        'Secret Passphrase',
      )
        .toString()
        .replaceAll('/', '-')
      // this.chargeUrl
      const californiaDate = moment()
        .tz('America/Los_Angeles')
        .format('YYYY-MM-DD')

      const encryptedcaliforniaDate = CryptoJS.AES.encrypt(
        `${californiaDate}`,
        'Secret Passphrase',
      )
        .toString()
        .replaceAll('/', '-')

      return `https://payment.alarcongroup.us/${encryptedLeadId}/${encryptedProgramId}/${encryptedAmount}/${encryptedSaleId}/${
        this.charge ? 0 : 1
      }/${encryptedcaliforniaDate}`
    },
  },
  methods: {
    async changeCharge(checked) {
      const message = checked
        ? 'Are you sure to activate the charge?'
        : 'Are you sure to desactivate the charge?'
      const answ = await this.$swal.fire({
        title: 'Warning',
        icon: 'warning',
        text: message,
        showCancelButton: true,
      })
      if (!answ.isConfirmed) this.charge = !this.charge
    },
    async sendGeneratedLinkViaSms() {
      try {
        const res = await amgApi.post('/send-generated-link-sms', {
          leadid: this.url.selectedLead.lead_id,
          user_id: this.$store.state.auth.currentUser.user_id,
          generated_url: this.generatedUrl,
          modul: 2,
          language: this.url.selectedLead.language,
          program: this.url.selectedLead.program,
          last_name: this.url.selectedLead.last_name,
        })
        if (res.status === 200) {
          this.$swal.fire({
            icon: 'success',
            title: 'SMS SENT',
          })
        }
      } catch (error) {
        this.showErrorSwal()
      }
    },
    onCopy() {
      this.showToast('success', 'top-right', 'Text copied', 'CheckIcon', '')
    },
    onError() {
      this.showToast('success', 'top-right', 'Failed to copy', 'XIcon', '')
    },
  },
}
</script>

<style scoped>
</style>
