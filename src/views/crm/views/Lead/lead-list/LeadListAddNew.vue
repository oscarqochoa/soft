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
    @hidden="resetForm"
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
          <basic-information-lead
            :user-data="userData"
            :state-lead-options="stateLeadOptions"
            :status-lead-options="statusLeadOptions"
            :program-options="programOptions"
            :language-options="languageOptions"
            :state-options="stateOptions"
            :country-options="countryOptions"
          />
          <lead-information-lead
            :user-data="userData"
            :status-lead-options="statusLeadOptions"
            :source-name-options="sourceNameOptions"
            :source-lead-options="sourceLeadOptions"
            :user-creator-owner-options="userCreatorOwnerOptions"
          />
          <billing-information-lead
            :user-data="userData"
            :state-options="stateOptions"
          />
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
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
import { mapGetters } from "vuex";
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import countries from '@/@fake-db/data/other/countries'
import BasicInformationLead from './create/BasicInformationLead.vue'
import LeadInformationLead from './create/LeadInformationLead.vue'
import BillingInformationLead from './create/BillingInformationLead.vue'


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
    stateLeadOptions: {
      type: Array,
      required: true,
    },
    statusLeadOptions: {
      type: Array,
      required: true,
    },
    programOptions: {
      type: Array,
      required: true,
    },
    languageOptions: {
      type: Array,
      required: true,
    },
    stateOptions: {
      type: Array,
      required: true,
    },
    countryOptions: {
      type: Array,
      required: true,
    },
    sourceNameOptions: {
      type: Array,
      required: true,
    },
    sourceLeadOptions: {
      type: Array,
      required: true,
    },
    userCreatorOwnerOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      modul: 2,
      blankUserData: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        programs: [],
        dob: '',
        language: '',
        stateLead: '',
        social: {
          value: ''
        },
        ssn: '',
        itin: '',
        other: '',
        phone: '',
        mobile: '',
        other: '',
        address: {
          prename: 'main',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
        },
        originCountry: { value: 146, label: 'México' },
        anotherAddress: false,
        otherAddress: {
          prename: 'origin',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
        },
        ownerId: '',
        sourceId: '',
        leadStatusId: '',
        sourceNameId: '',
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
        cardExpiMonth: '',
        cardExpiYear: '',
        cardSecurityCode: '',
        cardAddress: {
          prename: 'card',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
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
        passwordOnline: '',
        memberNumberOnline: '',
      },
      userData: {},
      required,
      alphaNum,
      email,
      countries,
      refFormObserver: formValidation(this.resetuserData).refFormObserver,
      getValidationState: formValidation(this.resetuserData).getValidationState,
      resetForm: formValidation(this.resetuserData).resetForm
    }
  },
  created () {
    this.resetuserData()
    /* const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetuserData) */
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token"
    }),
  },
  methods: {
    resetuserData () {
      this.userData = JSON.parse(JSON.stringify(this.blankUserData))
    },
    getSelectValue (element) {
      return (element) ? element.value : null
    },
    async onSubmit () {
      try {
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
        const val = this.userData.social.value.substr(0, 1)
        if (val == 9) {
          this.userData.itin = this.userData.social.value
        } else {
          this.userData.ssn = this.userData.social.value
        }
        const { id: user_id, id: role_id } = this.currentUser
        const { email, firstName, lastName, middleName, sourceId, sourceNameId, programId, phone, mobile, work, creditReport, payment, ammount, programs, leadStatusId, address, description, cardExpiMonth, cardExpiYear, ssn, cardHoldername, cardNumber, cardSecurityCode, dob, cardAddress, typeCredit, dateOnline, plataform, usernameOnline, passwordOnline, memberNumberOnline, language, itin, other, stateLead, anotherAddress, otherAddress, originCountry } = this.userData
        const body = {
          id: '',
          email,
          user_id,
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          source_id: this.getSelectValue(sourceId),
          sourcesname_id: this.getSelectValue(sourceNameId),
          program_id: programId,
          phone,
          mobile,
          work,
          credit_report: creditReport,
          payment,
          ammount,
          program: programs.map(el => ({ id: el.value, value: el.label, name: el.label })),
          leadstatus_id: this.getSelectValue(leadStatusId),
          street: address.street,
          city: address.city,
          state: this.getSelectValue(address.state),
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
          datecreator: new Date().toJSON().substring(0, 10),
          streetcard: cardAddress.street,
          citycard: cardAddress.city,
          zipcodecard: cardAddress.zipcode,
          statecard: this.getSelectValue(cardAddress.state),
          countrycard: cardAddress.country,
          type_credit: typeCredit,
          dateonline: dateOnline,
          plataform,
          usernameonline: usernameOnline,
          passwordonline: passwordOnline,
          membernumberonline: memberNumberOnline,
          language: this.getSelectValue(language),
          itin,
          other,
          state_lead: stateLead,
          another_address: anotherAddress,
          otherstreet: otherAddress.street,
          othercity: otherAddress.city,
          otherstate: this.getSelectValue(otherAddress.state),
          othercountry: otherAddress.country,
          otherzipcode: otherAddress.zipcode,
          originCountry: this.getSelectValue(originCountry.value)
        }
        console.log('this.userData', body)
      } catch (error) {
        console.log('spmething went wrong onSubmit: ', error)
      }
      /* store.dispatch('app-user/addUser', userData.value)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-user-sidebar-active', false)
        }) */
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
  width: 90rem;
}
</style>
