<template>
  <b-modal
    v-model="modal.contract_fee"
    title-class="h3 text-white font-weight-bolder"
    size="lg"
    title="CONTRACT FEE"
    scrollable
    :hide-footer="valorEdit"
  >
    <program-client-header
      :client="contractFee.clientName"
      :program="contractFee.programName"
      class="sticky-top"
    />
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
            <p v-if="contractFee.initialPaymentStatus != 2">
              Pending
            </p>
            <money
              v-else
              v-model="initialPayment"
              class="form-control border-0 text-right"
              v-bind="{precision: 2}"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="d-flex align-items-center">
            <span>Per pay</span>
          </b-col>
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
          <b-col class="d-flex align-items-center justify-content-between">
            <span>$</span>
            <money
              v-model="monthlyAmount"
              class="form-control w-75 text-right"
              v-bind="{precision: 2}"
              :disabled="contractSale.program_id == 2 || contractSale.program_id == 4 || valorEdit"
            />
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <b-form-checkbox
              v-model="charge"
              :disabled="valorEdit"
              @change="changeCharge"
            >
              Charge
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <p class="text-center">
              Finished in {{ months }} months
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="mt-1">
        <b-row>
          <b-col>
            <p>Method of Payment :</p>
          </b-col>
          <b-col>
            <b-form-radio
              v-model="methodPayment"
              value="0"
              :disabled="valorEdit"
            >
              Credit Card
            </b-form-radio>
            <b-form-radio
              v-model="methodPayment"
              value="1"
              class="mt-1"
              :disabled="valorEdit"
            >
              Others
            </b-form-radio>
          </b-col>
        </b-row>
        <b-row
          v-if="methodPayment == 0"
          class="mt-1"
        >
          <b-col>
            <p>Type :</p>
          </b-col>
          <b-col>
            <b-form-radio
              v-model="cardType"
              value="0"
              :disabled="valorEdit"
            >
              Automatic
            </b-form-radio>
            <b-form-radio
              v-model="cardType"
              value="1"
              class="mt-1"
              :disabled="valorEdit"
            >
              Manual
            </b-form-radio>
          </b-col>
        </b-row>
        <b-row
          v-if="cardType == 0"
          class="mt-1"
        >
          <b-col
            cols="4"
            class="d-flex align-items-center justify-content-center"
          >
            Start Date :
          </b-col>
          <b-col class="d-flex align-items-center justify-content-between">
            <b-form-select
              v-model="dayCFee"
              :options="paymentDays"
              text-field="day"
              value-field="day"
              style="margin-right: 5px"
              size="sm"
            />
            <b-form-select
              v-model="monthCFee"
              size="sm"
              style="margin-right: 5px"
            >
              <b-form-select-option value="1">
                Jan
              </b-form-select-option>
              <b-form-select-option value="2">
                Feb
              </b-form-select-option>
              <b-form-select-option value="3">
                Mar
              </b-form-select-option>
              <b-form-select-option value="4">
                Apr
              </b-form-select-option>
              <b-form-select-option value="5">
                May
              </b-form-select-option>
              <b-form-select-option value="6">
                Jun
              </b-form-select-option>
              <b-form-select-option value="7">
                Jul
              </b-form-select-option>
              <b-form-select-option value="8">
                Aug
              </b-form-select-option>
              <b-form-select-option value="9">
                Sep
              </b-form-select-option>
              <b-form-select-option value="10">
                Oct
              </b-form-select-option>
              <b-form-select-option value="11">
                Nov
              </b-form-select-option>
              <b-form-select-option value="12">
                Dec
              </b-form-select-option>
            </b-form-select>
            <b-form-select
              v-model="yearCFee"
              :options="years"
              size="sm"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row
      v-if="cardType == 0"
      class="mt-1"
    >
      <b-col>
        <b-row>
          <b-col>
            <b-table
              :items="cards"
              :fields="fieldsT1"
              size="sm"
            >
              <template v-slot:cell(select)="data">
                <b-form-radio
                  v-model="cardId"
                  :value="data.item.id"
                  :disabled="valorEdit"
                  plain
                />
              </template>
            </b-table>
          </b-col>
        </b-row>
        <b-row class="d-flex align-items-center justify-content-end mt-1">
          <b-col class="d-flex align-items-center justify-content-end">
            <b-button
              v-if="!valorEdit"
              variant="important"
              size="sm"
              @click="addCardModal = true"
            >
              <feather-icon icon="PlusIcon" />
              Add
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <template #modal-footer>
      <b-row class="w-100">
        <b-col class="d-flex align-items-center justify-content-center">
          <b-button
            variant="primary"
            size="sm"
            @click="saveContract"
          >
            Save
          </b-button>
        </b-col>
      </b-row>
    </template>
    <modal-card-create
      v-if="addCardModal"
      :if-modal-card="addCardModal"
      :idlead="contractFee.id"
      :session="currentUser.user_id"
      @new="addCard"
      @click="closedModalCar"
    />
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalCardCreate from '@/views/crm/views/payments/components/ModalCardCreate.vue'
import ProgramClientHeader from '@/views/crm/views/sales-made/components/modals/ProgramClientHeader.vue'

export default {
  name: 'ContractFeeModal',
  components: {
    ProgramClientHeader,
    ModalCardCreate,
  },
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
        initialPaymentStatus: null,
        editModal: false,
        statusSale: null,
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
      fieldsT1: [
        {
          label: '',
          key: 'select',
        },
        {
          label: 'Card Holder Name',
          key: 'cardholdername',
        },
        {
          label: 'Card Number',
          key: 'cardnumber',
          formatter: value => `XXXX-XXXX-XXXX-${value}`,
        },
        {
          label: 'Type',
          key: 'type_card',
        },
        {
          label: 'MM',
          key: 'card_expi_month',
        },
        {
          label: 'YY',
          key: 'card_expi_year',
        },
        {
          label: 'CVC',
          key: 'cardsecuritycode',
          formatter: value => `XX${value}`,
        },
      ],
      cardId: -1,
      addCardModal: false,
      years: [],
      yearCFee: null,
      dayCFee: null,
      monthCFee: null,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    valorEdit() {
      return this.contractFee.editModal == false
          || this.contractFee.statusSale == 2
          || this.contractFee.statusSale == 4
          || this.contractSale.st == 1
    },
  },
  async created() {
    this.addPreloader()
    try {
      await this.getCards()
      await this.getPaymentsDays()
      await this.getContractSales()
      console.log(this.contractFee, 'cfee')
      this.perPay = this.fee - this.initialPayment
      if (this.contractSale.program_id == 2) {
        this.monthlyAmount = 0
        this.months = 0
      } else if (this.monthlyAmount > 0) {
        this.months = Math.ceil(this.perPay / this.monthlyAmount)
        if (this.months < 1) this.months = 0
      }
      this.cardId = this.contractSale.card_id
      this.years = this.range(2020, new Date().getFullYear() + 1)
      this.removePreloader()
    } catch (error) {
      this.showErrorSwal(error)
      this.removePreloader()
    }
  },
  methods: {
    async saveContract() {
      if (!this.monthlyAmount) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Monthly amount invalid')
      else if (!this.methodPayment) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Method payment invalid')
      else if (this.methodPayment == 0 && !this.cardType) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Card type invalid')
      else if ((!this.monthCFee || !this.dayCFee || !this.yearCFee) && this.methodPayment == 0 && this.cardType == 0) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Start date invalid')
      else if (!this.cardId && this.methodPayment == 0 && this.cardType == 0) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Please select a card')
      else {
        const params = {
          card_id: this.cardId,
          charge: this.charge,
          day_payment: this.dayCFee,
          initial_amount: (this.contractSale.initial_amount) ? this.contractSale.initial_amount.toString() : '',
          method_payment: (this.methodPayment) ? this.methodPayment.toString() : '',
          month_cfee: this.month_cfee,
          monthly_amount: (this.monthlyAmount) ? this.monthlyAmount.toString() : '',
          months: this.months,
          sale_id: this.contractFee.saleId,
          type_payment: (this.cardType) ? this.cardType.toString() : '',
          year_cfee: (this.yearCFee) ? this.yearCFee.toString() : '',
        }
        this.addPreloader()
        try {
          const response = await amgApi.post('/insertContract', params)
          if (response.status === 200) {
            await this.showSuccessSwal('Contract save succesfully')
            this.$emit('close')
            this.$emit('reload')
            this.removePreloader()
          } else {
            await this.showErrorSwal()
            this.$emit('close')
            this.removePreloader()
          }
        } catch (error) {
          await this.showErrorSwal()
          this.$emit('close')
          this.removePreloader()
        }
      }
    },
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
          this.methodPayment = this.contractSale.method_payment
          this.cardType = this.contractSale.type_payment
        } else {
          this.showErrorSwal()
        }
      } catch (error) {
        console.error(error)
      }
    },
    addCard(cards) {
      this.cards = cards
    },
    closedModalCar() {
      this.addCardModal = false
    },
    async changeCharge(checked) {
      if (checked === false) {
        const response = await this.showConfirmSwal('Desactivate Charge', 'Are you sure to desactivate the charge?')
        if (!response.isConfirmed) this.charge = !this.charge
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
