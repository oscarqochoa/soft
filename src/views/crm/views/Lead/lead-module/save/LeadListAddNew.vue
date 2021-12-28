<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-xl"
    shadow
    backdrop
    no-header
    right
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Create Lead
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <basic-information-lead :user-data="userData" />
          <lead-information-lead :user-data="userData" />
          <billing-information-lead :user-data="userData" />
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              <template v-if="isLoading">
                <b-spinner small />
                <span>Loading...</span>
              </template>
              <span v-else>Save</span>
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="resetuserData(); $refs.refFormObserver.reset(); $emit('update:is-add-new-user-sidebar-active', false)"
            >
              Cancel
            </b-button>
          </div>

        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import { required, alphaNum, email } from '@validations'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

import formValidation from '@core/comp-functions/forms/form-validation'
import countries from '@/@fake-db/data/other/countries'

import BasicInformationLead from './BasicInformationLead.vue'
import BillingInformationLead from './BillingInformationLead.vue'
import LeadInformationLead from './LeadInformationLead.vue'


export default {
  components: {
    BasicInformationLead,
    LeadInformationLead,
    BillingInformationLead,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    const resetRowData = () => {}
    const {
      getValidationState,
      resetForm,
    } = formValidation(resetRowData)
    return {
      getValidationState,
      resetForm,
      modul: 2,
      blankUserData: {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        programs: [],
        dob: '',
        language: '',
        stateLead: null,
        social: '',
        ssn: '',
        itin: '',
        other: '',
        phone: '',
        mobile: '',
        other: '',
        address: {
          prename: 'main',
          streetReal: '',
          street: '',
          city: '',
          state: 'CA',
          zipcode: '',
          country: 'United States',
        },
        origin_country: 146,
        another_address: '',
        otherAddress: {
          prename: 'origin',
          streetReal: '',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: 'United States',
        },
        user_id: null,
        source_id: '',
        leadstatus_id: '',
        sourcesname_id: '',
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
        cardExpiMonth: '',
        cardExpiYear: '',
        cardHoldername: '',
        cardSecurityCode: '',
        cardAddress: {
          prename: 'card',
          streetReal: '',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: 'United States',
        },
        programId: null,
        work: '',
        creditReport: true,
        payment: '0',
        ammount: '',
        description: '',
        cardNumber: '',
        typeCredit: '0',
        dateOnline: '',
        plataform: null,
        usernameOnline: '',
        passwordonline: '',
        memberNumberOnline: '',
      },
      userData: {},
      required,
      alphaNum,
      email,
      countries,
      isLoading: false,
    }
  },
  created () {
    this.resetuserData()
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  methods: {
    ...mapActions({
      A_SET_LEADS: 'CrmLeadStore/A_SET_LEADS'
    }),
    resetuserData () {
      this.blankUserData.user_id = this.currentUser.user_id
      this.userData = JSON.parse(JSON.stringify(this.blankUserData))
    },
    getSelectValue (element) {
      if (typeof element === 'string')
        return (element) ? element : ''
      else
        return (element) ? element.value : ''
    },
    async onSubmit () {
      try {
        this.isLoading = true
        let route = '';
        switch (this.modul) {
          case (2) : route = 'show/'; break
          case (3) : route = '/bussiness/leads'; break
          case (4) : route = '/administration/leads'; break
          case (5) : route = '/debtsolution/leads'; break
          case (6) : route = '/creditexperts/leads'; break
          case (7) : route = '/boostcredit/leads'; break
          case (8) : route = '/taxresearch/leads'; break
          case (10) : route = '/claimdepartment/leads'; break
          case (11) : route = '/specialists/leads'; break
        }
        if ( ![ this.userData.cardNumber1, this.userData.cardNumber2, this.userData.cardNumber3, this.userData.cardNumber4 ].includes('')) {
          this.userData.cardNumber = `${this.userData.cardNumber1}-${this.userData.cardNumber2}-${this.userData.cardNumber3}-${this.userData.cardNumber4}`
        }
        //VALIDATION ITIN & SSN
        const val = this.userData.social.substr(0, 1)
        if (val == 9) {
          this.userData.itin = this.userData.social
        } else {
          this.userData.ssn = this.userData.social
        }
        const { role_id } = this.currentUser
        const { email, user_id, first_name, last_name, middle_name, source_id, sourcesname_id, programId, phone, mobile, work, creditReport, payment, ammount, programs, leadstatus_id, address, description, cardExpiMonth, cardExpiYear, ssn, cardHoldername, cardNumber, cardSecurityCode, dob, cardAddress, typeCredit, dateOnline, plataform, usernameOnline, passwordonline, memberNumberOnline, language, itin, other, state_lead, another_address, otherAddress, origin_country } = this.userData
        console.log('preData', this.userData)
        const body = {
          id: '',
          email,
          user_id,
          first_name,
          last_name,
          middle_name,
          source_id,
          sourcesname_id,
          program_id: programId,
          phone,
          mobile,
          work,
          credit_report: creditReport,
          payment,
          ammount,
          program: programs.map(el => ({ id: el.id, value: el.label, name: el.label })),
          leadstatus_id,
          street: address.street,
          city: address.city,
          state: address.state,
          country: address.country,
          zipcode: address.zipcode,
          description,
          card_expi_month: cardExpiMonth,
          card_expi_year: cardExpiYear,
          ssn,
          cardholdername: cardHoldername,
          cardnumber: cardNumber,
          cardsecuritycode: cardSecurityCode,
          dob,
          super: role_id,
          created_by: user_id,
          usercreator: user_id,
          datecreator: this.$moment(dob, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD'),
          streetcard: cardAddress.street,
          citycard: cardAddress.city,
          zipcodecard: cardAddress.zipcode,
          statecard: cardAddress.state,
          countrycard: cardAddress.country,
          type_credit: typeCredit,
          dateonline: dateOnline,
          plataform,
          usernameonline: usernameOnline,
          passwordonline,
          membernumberonline: memberNumberOnline,
          language,
          itin,
          other,
          state_lead,
          another_address,
          otherstreet: otherAddress.street,
          othercity: otherAddress.city,
          otherstate: otherAddress.state,
          othercountry: otherAddress.country,
          otherzipcode: otherAddress.zipcode,
          originCountry: origin_country
        }
        const response = await this.A_SET_LEADS(body)
        console.log('response', response)
        if (response && (response.status == 200 || response.status == 201)) {
          this.isLoading = false
          this.$refs.refFormObserver.reset()
          this.$emit('update:is-add-new-user-sidebar-active', false)
          this.resetuserData()
          const idUser = response.data.id
          /* *INTEGRATE* if (this.module == 2) {
            window.location.href = `${route}${idUser}`
          } else {
            window.location.href = `${route}`
          } */
          this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong.`)
      } catch (error) {
        console.log('spmething went wrong onSubmit: ', error)
        this.isLoading = false
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
.sidebar-xl {
  width: 90rem !important;
}
</style>
