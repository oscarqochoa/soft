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
                :value="initial_payment.program"
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
                :value="initial_payment.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label>Amount</label>
          <b-input-group prepend="$">
            <b-form-input
              disabled
              :value="initial_payment.amount"
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
            >
              Credit Card
            </b-form-radio>
            <b-form-radio
              v-model="method"
              name="some-radios"
              value="others"
            >
              Others
            </b-form-radio>
            <b-checkbox v-if="method === 'credit-card'">
              Charge
            </b-checkbox>
          </b-form-radio-group>
        </b-col>
      </b-row>
      <b-row
        v-if="method === 'credit-card'"
        class="mt-2"
      >
        <b-table
          :fields="fields"
          :items="payments"
        />
      </b-row>
      <b-row class="mt-1 d-flex align-items-center justify-content-end">
        <b-button
          variant="info"
          @click="openModalCreateCard"
        >
          <feather-icon icon="PlusIcon" /> Add
        </b-button>
      </b-row>
    </b-container>
    <modal-card-create
      v-if="modalCard"
      :idlead="initial_payment.lead_id"
      :session="initial_payment.session_id"
      :if-modal-card="modalCard"
      @click="closeModalCreateCard"
      @new="getListCards"
    />
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
    },
  },
  data() {
    return {
      method: '',
      fields: [
        {
          key: 'transaction_id',
          label: 'Transaction ID',
          sortable: false,
        },
        {
          key: 'amount',
          label: 'Amount',
          sortable: false,
        },
        {
          key: 'card_number',
          label: 'Credit Card',
          sortable: false,
        },
        {
          key: 'user',
          label: 'User',
          sortable: false,
        },
        {
          key: 'settlement_date',
          label: 'Date',
          sortable: false,
        },
      ],
      payments: {},
      modalCard: false,
    }
  },
  async created() {
    await this.getListCards()
  },
  methods: {
    async getListCards() {
      try {
        this.payments = await CrmService.getListCards({
          sale_id: this.initial_payment.sale_id,
        })
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
