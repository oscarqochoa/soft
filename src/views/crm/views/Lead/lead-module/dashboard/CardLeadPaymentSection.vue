<template>
	<validation-observer
		ref="refFormObserver"
	>
		<!-- Form -->
    <b-card>
      <template #header>
        <b-row>
          <b-col cols="12">
            <validation-provider
              #default="validationContext"
              :name="title"
              rules="required"
            >
              <b-form-group
                :label="title"
                label-for="observation"
                label-cols-md="3"
              >
                <b-form-input
                  v-if="title === 'Other'"
                  id="observation"
                  v-model="item.observation"
                  :state="getValidationState(validationContext)"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12">
            <validation-provider
              #default="validationContext"
              name="Ammount"
              rules="required"
            >
              <b-form-group
                label="Amount"
                label-for="amount"
                label-cols-md="3"
              >
                <b-form-input
                  id="amount"
                  ref="amount"
                  v-model="item.amount"
                  :state="getValidationState(validationContext)"
                  @blur="refactorNumber"
                />
                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
      </template>
      <b-table
        show-empty
        sticky-header
        small
        responsive
        :fields="fields"
        :items="cards"
        :busy="isBusy"
      >

        <template #cell(radio)="data">
          <validation-provider
            #default="validationContext"
            name="Ammount"
            rules="required"
          >
            <b-form-radio
              v-model="item.card"
              :id="`yes-or-not-card-list${ data.index }`"
              name="yes-or-not-card-list"
              class="mt-0"
              :value="data.item.id"
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </validation-provider>
        </template>

        <template #cell(cardnumber)="data">
          {{ 'XXXX-XXXX-XXXX-' + data.item.cardnumber }}
        </template>

        <template #cell(cardsecuritycode)="data">
          {{ data.item.cardsecuritycode.length === 3 ? 'XX' + data.item.cardsecuritycode.substr(2) : 'XXX' + data.item.cardsecuritycode.substr(3) }}
        </template>
      </b-table>

      <b-card-footer class="text-center">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-success"
          @click="onSubmit"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">SUBMIT</span>
          <b-spinner v-else />
        </b-button>
      </b-card-footer>
    </b-card>
	</validation-observer>
</template>

<script>

import { mapGetters } from 'vuex'

import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    flatPickr,
    vSelect,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  created () {
    this.authUser = this.currentUser
    this.setDataBlank('item')
  },
  data () {
    return {
      authUser: {},
      blankItem: {},
      fields: [
        { key: 'radio', label: '' },
        { key: 'cardnumber', label: 'Card Number' },
        { key: 'card_expi_month', label: 'MM' },
        { key: 'card_expi_year', label: 'YY' },
        { key: 'cardsecuritycode', label: 'CVV' },
      ],
      item: {
        amount: '',
        method: '',
        card_id: '',
        observation: '',
      },
    }
  },
  directives: { Ripple },
  methods: {
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      const object = this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`]
      for (let subkey in object) {
        this[key][subkey] = object[subkey]
      }
      this.$refs.refFormObserver.reset()
    },
    refactorNumber () {
      console.log('GSS', this.$refs.amount.value)
      this.$refs.amount.value = this.globalFunction()
      console.log('GSS2', this.$refs.amount.value)
    },
    globalFunction () {
      const amount = this.item.amount
      if (amount.indexOf('.') != -1) {
        let numw = amount.replace(/,/gi, '')
        let dec = numw.split('.')
        let num = dec[0].split(/(?=(?:\d{3})+$)/).join(',')
        num = num + '.' + dec[1]
      } else {
        let numw = amount.replace(/,/gi, '')
        let num = numw.split(/(?=(?:\d{3})+$)/).join(',')
        num = num + '.00'
      }
      return num
    },
    async onSubmit () {
      if (await this.$refs.refFormObserver.validate())
        this.$emit('onSubmit', this.item)
    }
  },
  mounted () {},
  props: {
    modul: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    isBusy: {
      type: Boolean,
      required: true
    },
    method: {
      type: Number,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
  },
  setup () {
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(() => {})

    return {
      refFormObserver,
      getValidationState
    }
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-flatpicker.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
