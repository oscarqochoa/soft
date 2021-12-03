<template>
  <b-card>
    <b-row>
      <b-col class="col-12 mb-1">
        <span class="title-card">PERSONAL INFORMATION</span>
      </b-col>
      <b-col md="6">
        <!-- First Name -->
        <validation-provider
          #default="validationContext"
          name="First Name"
          rules="required"
        >
          <b-form-group
            label="First Name"
            label-for="first-name"
          >
            <b-form-input
              id="first-name"
              v-model="userData.firstName"
              autofocus
              :state="getValidationState(validationContext)"
              trim
              placeholder="John Doe"
              @keyup="capitalize('firstName')"
            />

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- MiddleName -->
        <validation-provider
          #default="validationContext"
          name="MiddleName"
          rules="required"
        >
          <b-form-group
            label="MiddleName"
            label-for="middle-name"
          >
            <b-form-input
              id="middle-name"
              v-model="userData.middleName"
              :state="getValidationState(validationContext)"
              trim
            />

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- LastName -->
        <validation-provider
          #default="validationContext"
          name="LastName"
          rules="required"
        >
          <b-form-group
            label="LastName"
            label-for="last-name"
          >
            <b-form-input
              id="last-name"
              v-model="userData.lastName"
              :state="getValidationState(validationContext)"
              trim
              @keyup="capitalize('lastName')"
            />

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Email -->
        <validation-provider
          #default="validationContext"
          name="Email"
          :rules="`${!disabledemail ? 'required|' : ''}email`"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="userData.email"
              :state="getValidationState(validationContext)"
              trim
            />

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <b-form-group>
          <b-form-checkbox
            id="without-email"
            name="without-email"
            value="without-email"
            @input="disabledemail = !disabledemail"
          >
            Client has not email
          </b-form-checkbox>

        </b-form-group>
      </b-col>
      <b-col md="6">
        <!-- Programs -->
        <validation-provider
          #default="validationContext"
          name="Programs"
          rules="required"
        >
          <b-form-group
            label="Programs"
            label-for="programs"
          >
            <v-select
              v-model="userData.programs"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              multiple
              label="label"
              :options="programOptions"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Dob -->
        <validation-provider
          #default="validationContext"
          name="Dob"
          rules="required"
        >
          <b-form-group
            label="Dob"
            label-for="dob"
          >
            <b-form-datepicker
              id="dob"
              locale="en"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              placeholder="From"
              v-model="userData.dob"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>

          </b-form-group>
        </validation-provider>
        <!-- Language -->
        <validation-provider
          #default="validationContext"
          name="Language"
          rules="required"
        >
          <b-form-group
            label="Language"
            label-for="language"
            :state="getValidationState(validationContext)"
          >
            <v-select
              v-model="userData.language"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="languageOptions"
              :clearable="false"
              input-id="language"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Lead State -->
        <validation-provider
          #default="validationContext"
          name="Lead State"
          rules="required"
        >
          <b-form-group
            label="Status"
            label-for="state-lead"
            :state="getValidationState(validationContext)"
          >
            <v-select
              v-model="userData.stateLead"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="stateLeadOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="state-lead"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
    </b-row>
    <address-information-lead
      :user-data="userData"
      :status-lead-options="statusLeadOptions"
      :language-options="languageOptions"
      :state-options="stateOptions"
      :country-options="countryOptions"
    />
  </b-card>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import vSelect from 'vue-select'
import AddressInformationLead from './AddressInformationLead.vue'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    AddressInformationLead,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  model: {
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    userData: {
      required: true
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
    }
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      disabledemail: false,
    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      programs: '',
      dob: '',
      language: '',
      stateLead: '',
    }
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(resetuserData)

    return {
      refFormObserver,
      getValidationState,
    }
  },
  methods: {
    capitalize (el) {
      const element = this.userData[el]
      this.userData[el] = element.substr(0, 1).toUpperCase() + element.substr(1)
    }
  },
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
