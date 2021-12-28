<template>
  <b-card>
    <template #header>
      <b-card-title>{{ title ? title : `Credit Cards` }}</b-card-title>
    </template>
    <b-table
      show-empty
      sticky-header
      striped
      responsive="sm"
      :fields="fieldsTask"
      :items="lead.cards"
      class="mb-0"
    >
      <template #cell(cardholdername)="data">
        <span class="text-capitalize"> {{ data.item.cardholdername }} </span>
      </template>

      <template #cell(cardnumber)="data">
        {{ 'XXXX-XXXX-XXXX-' + data.item.cardnumber }}
      </template>

      <template #cell(cardsecuritycode)="data">
        {{ data.item.cardsecuritycode.length === 3 ? 'XX' + data.item.cardsecuritycode.substr(2) : 'XXX' + data.item.cardsecuritycode.substr(3) }}
      </template>

      <template #cell(actions)="data">
        <div class="d-flex justify-content-center">
          <b-button
            variant="flat-info"
            class="button-little-size rounded-circle"
            :disabled="isActionButtonLoading || isLoading"
            @click="onModalCardOpen(data.item.id)"
          >
            <feather-icon
              v-if="!isActionButtonLoading && !isLoading"
              icon="EyeIcon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            v-if="(authUser.role_id == 1 || authUser.role_id == 2) && !onlyRead"
            variant="flat-danger"
            class="button-little-size rounded-circle ml-1"
            :disabled="isActionButtonLoading || isLoading"
            @click="onDeleteCard(data.item.id)"
          >
            <feather-icon
              v-if="!isActionButtonLoading && !isLoading"
              icon="Trash2Icon"
            />
            <b-spinner v-else small />
          </b-button>
        </div>
      </template>

    </b-table>
    
    <template v-if="!onlyRead" #footer>
      <div class="text-right">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="primary"
          @click="$bvModal.show(`modal-card-create-${ key }`)"
        >
          <span class="align-middle">Add</span>
        </b-button>
      </div>
    </template>

    <!-- modal CARD CREATE -->
    <b-modal
      :id="`modal-card-create-${ key }`"
      modal-class="modal-warning"
      centered
      size="lg"
      title="CREATE CREDIT CARD"
      hide-footer
      no-close-on-backdrop
    >
      <modal-card-create
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        @onReloadCards="onReloadCards"
      />
    </b-modal>

    <!-- modal CARD SHOW -->
    <b-modal
      :id="`modal-card-show-${ key }`"
      ok-only
      modal-class="modal-warning"
      centered
      size="lg"
      title="CREDIT CARD"
      hide-footer
      no-close-on-backdrop
    >
      <modal-card-show
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :card="card"
      />
    </b-modal>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

import ModalCardShow from '../../lead-card/ModalCardShow.vue'
import ModalCardCreate from '../../lead-card/ModalCardCreate.vue'

export default {
  components: {
    ModalCardShow,
    ModalCardCreate,
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
    this.getStatesEeuu()
  },
  data () {
    return {
      key: Math.random(),
      authUser: new Object,
      card: new Object,
      fieldsTask: [
        { key: 'cardholdername', label: 'Card Holder Name' },
        { key: 'cardnumber', label: 'Card Number' },
        { key: 'type_card', label: 'Type' },
        { key: 'card_expi_month', label: 'MM' },
        { key: 'card_expi_year', label: 'YY' },
        { key: 'cardsecuritycode', label: 'CVV' },
        { key: 'actions' }
      ],
      isActionButtonLoading: false,
      isLoading: false,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      A_GET_EEUU_STATES: 'CrmGlobalStore/A_GET_EEUU_STATES',
      A_GET_CREDIT_CARD: 'CrmCreditCardStore/A_GET_CREDIT_CARD',
      A_DELETE_CREDIT_CARD: 'CrmCreditCardStore/A_DELETE_CREDIT_CARD',
    }),
    async getStatesEeuu() {
      try {
        await this.A_GET_EEUU_STATES()
      } catch (error) {
        console.log('Something went wrong getStatesEeuu', error)
        this.showToast(
          'danger',
          'top-right',
          'Oop!',
          'AlertOctagonIcon',
          this.getInternalErrors(error)
        )
      }
    },
    async onModalCardOpen (id) {
      try {
        this.isActionButtonLoading = true
        const response = await this.A_GET_CREDIT_CARD({ id })
        if (this.isResponseSuccess(response)) {
          this.card = response.data[0]
          this.$bvModal.show(`modal-card-show-${ key }`)
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        this.isActionButtonLoading = false
      } catch (error) {
        console.log('Something went wrong onModalCardOpen', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        this.isActionButtonLoading = false
      }
    },
    onReloadCards (cards) {
      console.log('cards', cards)
      this.lead.cards = cards
    },
    onDeleteCard (id) {
      this.isActionButtonLoading = true
      this.showSwalGeneric('Delete Credit Card', 'You won\'t be able to revert this!', 'warning',
        { 
          input: 'textarea',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        }
      )
      .then(async result => {
        if (result.value) {
          const response = await this.A_DELETE_CREDIT_CARD({
            cardid: id,
            leadid: this.lead.id,
            user_id: this.authUser.user_id,
            comment: result.value,
          })
          if (this.isResponseSuccess(response)) {
            this.lead.cards = response.data
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
            this.isActionButtonLoading = false
          } else {
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
            this.isActionButtonLoading = false
          }
        }
        this.isActionButtonLoading = false
      }).catch(error => {
        console.log('Something went wrong onDeleteCard', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        this.isActionButtonLoading = false
      })
    },
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
    },
    title: {
      type: String,
      required: false
    }
  },
  setup() {},
}
</script>
