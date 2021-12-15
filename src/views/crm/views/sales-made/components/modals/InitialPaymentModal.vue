<template>
  <b-modal
    v-model="modal.initial_payment"
    centered
    title-class="h3"
    size="lg"
    title="INITIAL PAYMENT"
    hide-footer
    scrollable
  >
    <b-container fluid>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                PROGRAM
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="initial_payment.nameProgram"
            />
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                CLIENT
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="initial_payment.nameClient"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label>Amount</label>
          <b-input-group prepend="$">
            <money
              v-model="amount"
              class="form-control"
              v-bind="{decimal: '.', thousands: ',', prefix: '$  ', precision: 2}"
              :disabled="amount_camp"
            />
          </b-input-group>
        </b-col>
        <b-col>
          <label class="mt-1">Method of Payment</label>
          <b-form-radio-group class="d-flex">
            <b-form-radio
              v-model="method"
              name="some-radios"
              value="credit-card"
              :disabled="valorEdit"
            >
              Credit Card
            </b-form-radio>
            <b-form-radio
              v-model="method"
              name="some-radios"
              value="others"
              :disabled="valorEdit"
            >
              Others
            </b-form-radio>
            <b-checkbox
              v-if="method === 'credit-card'"
              v-model="charge"
              :disabled="valorEdit"
            >
              Charge
            </b-checkbox>
          </b-form-radio-group>
        </b-col>
      </b-row>
      <b-row v-if="(method === 'credit-card' && listCards.length === 0 && initial_payment.idtransaction != null) || (method === 'credit-card' && this.initial_payment.programid == 2)">
        <b-table
          :fields="fieldsT1"
          :items="initial_payment.allcards"
        >
          <template v-slot:cell(selects)="data">
            <b-form-radio
              v-model="cardId"
              :value="data.item.id"
              :disabled="valorEdit"
            />
          </template>
          <template v-slot:cell(actions)="data">
            <b-button
              :disabled="!((initial_payment.role_id == 1 || initial_payment.role_id == 2) && initial_payment.modul == 2)"
              variant="danger"
              size="sm"
              @click="deleteCard(data.item.id)"
            >
              <feather-icon icon="Trash2Icon" />
            </b-button>
          </template>
        </b-table>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import CrmService from '@/views/crm/services/crm.service'
import ModalCardCreate from '@/views/crm/views/payments/components/ModalCardCreate.vue'

export default {
  name: 'InitialPaymentModal',
  components: { ModalCardCreate },
  props: {
    modal: {
      type: Object,
      required: true,
    },
    initial_payment: {
      type: Object,
      required: true,
      default: () => ({
        payments: null,
        nameProgram: null,
        nameClient: null,
        type: null,
        editmodal: null,
        statusSale: null,
        sessionId: null,
        valorInitalPaymetn: null,
        feeprops: null,
        modul: null,
        cfeestatus: null,
        idtransaction: null,
        programid: null,
        allcards: null,
        role_id: null,
      }),
    },
  },
  data() {
    return {
      method: '',
      amount: this.initial_payment.payments.amount,
      charge: true,
      listCards: [],
      cardId: null,
      fieldsT1: [
        {
          label: '',
          key: 'selects',
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
        {
          label: 'Actions',
          key: 'actions',
        },
      ],
    }
  },
  computed: {
    valorEdit() {
      return this.initial_payment.type == 1
          || this.initial_payment.editmodal == false
          || this.initial_payment.statusSale == 2
          || this.initial_payment.statusSale == 4
          || this.initial_payment.valorInitalPaymetn != 1
    },
    amount_camp() {
      return this.method === 'credit-card' || this.method === ''
    },
  },
  async created() {
    await this.getListCards()
  },
  methods: {
    async getListCards() {
      try {
        this.listCards = await CrmService.getListCards({ sale_id: this.initial_payment.payments.sale_id })
      } catch (error) {
        this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
        this.modal.initial_payment = false
      }
    },
    openModalCreateCard() {
      this.modalCard = true
    },
    closeModalCreateCard() {
      this.modalCard = false
    },
  },
}
</script>

<style scoped>

</style>
