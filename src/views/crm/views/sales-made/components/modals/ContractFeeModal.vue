<template>
  <b-modal
    v-model="modal.contract_fee"
    title-class="h3"
    size="lg"
    title="CONTRACT FEE"
    scrollable
  >
    <b-row>
      <b-col>
        <b-row>
          <b-col class="d-flex align-items-center">
            <span>Fee:</span>
          </b-col>
          <b-col class="d-flex align-items-center">
            <span>$</span>
            <money
              v-model="fee"
              class="form-control border-0 text-right"
              v-bind="{precision: 2}"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="d-flex align-items-center">
            <span>Initial Payment:</span>
          </b-col>
          <b-col class="d-flex align-items-center">
            <span>$</span>
            <money
              v-model="initialPayment"
              class="form-control border-0 text-right"
              v-bind="{precision: 2}"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col />
          <b-col class="d-flex align-items-center">
            <span>$</span>
            <money
              v-model="perPay"
              class="form-control border-0 text-right"
              v-bind="{precision: 2}"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="d-flex align-items-center">
            <span>Monthly Payment:</span>
          </b-col>
          <b-col class="d-flex align-items-center">
            <span>$</span>
            <money
              v-model="monthlyAmount"
              class="form-control border-0 text-right"
              v-bind="{precision: 2}"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <b-form-checkbox
              v-model="charge"
            >
              Charge
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <p class="text-center">Finished in {{months}} months</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col />
    </b-row>
    <b-row>
      <b-table />
    </b-row>
    <template #modal-footer />
  </b-modal>
</template>

<script>
export default {
  name: 'ContractFeeModal',
  props: {
    modal: {
      type: Object,
      default: () => ({
        contract_fee: false,
      }),
    },
    contractFee: {
      type: Object,
      default: () => ({
        programName: '',
        clientName: '',
        saleId: null,
        id: null,
      }),
    },
  },
  data() {
    return {
      cards: [],
      methodPayment: '',
      cardType: '',
      charge: true,
      paymentDays: [],
      contractSale: {},
      fee: 0,
      initialPayment: 0,
      perPay: 0,
      monthlyAmount: 0,
      months: 0,
    }
  },
  async created() {
    this.addPreloader()
    try {
      await this.getCards()
      await this.getPaymentsDays()
      await this.getContractSales()
      this.perPay = this.fee - this.initialPayment
      if (this.contractSale.program_id == 2){
        this.monthlyAmount = 0
        this.months = 0
      } else if (this.monthlyAmount > 0) {
        this.months = Math.ceil(this.perPay / this.monthlyAmount)
        if (this.months < 1) this.months = 0
      }
      this.removePreloader()
    } catch (error) {
      this.showErrorSwal(error)
      this.removePreloader()
    }
  },
  methods: {
    async getCards() {
      try {
        this.cards = await amgApi.post('/searchcards', { id: this.contractFee.id })
        if (this.cards.status === 200) {
          this.cards = this.cards.data
        } else {
          this.showErrorSwal()
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getPaymentsDays() {
      try {
        this.paymentDays = await amgApi.get('/paymentdays')
        if (this.paymentDays.status === 200) {
          this.paymentDays = this.paymentDays.data
        } else {
          this.showErrorSwal()
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getContractSales() {
      try {
        const data = await amgApi.post('/contractsales', { id: this.contractFee.saleId })
        if (data.status === 200) {
          [this.contractSale] = data.data
          this.fee = parseFloat(this.contractSale.fee)
          this.initialPayment = parseFloat(this.contractSale.initial_amount)
          if (this.contractSale.program_id == 2) this.monthlyAmount = this.fee
          else this.monthlyAmount = parseFloat(this.contractSale.monthly_amount)
        } else {
          this.showErrorSwal()
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
input:disabled{
  background-color: transparent;
}
</style>
