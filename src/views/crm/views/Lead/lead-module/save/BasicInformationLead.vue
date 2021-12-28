<template>
  <b-card>
    <template #header>
      <b-card-title>PERSONAL INFORMATION</b-card-title>
    </template>
    <b-row>
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
              v-model="userData.first_name"
              autofocus
              :state="getValidationState(validationContext)"
              trim
              @keyup="capitalize('first_name')"
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
        >
          <b-form-group
            label="MiddleName"
            label-for="middle-name"
          >
            <b-form-input
              id="middle-name"
              v-model="userData.middle_name"
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
              v-model="userData.last_name"
              :state="getValidationState(validationContext)"
              trim
              @keyup="capitalize('last_name')"
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
        >
          <b-form-group
            label="Programs"
            label-for="programs"
            :state="getValidationState(validationContext)"
          >
            <v-select
              v-model="userData.programs"
              multiple
              label="label"
              input-id="programs"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="G_PROGRAMS"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Dob -->
        <validation-provider
          #default="validationContext"
          name="DOB"
        >
          <b-form-group
            label="DOB"
            label-for="dob"
            :state="getValidationState(validationContext)"
          >
            <flat-pickr
              id="dob"
              v-model="userData.dob"
              class="form-control"
              :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'm/d/Y', locale: 'en' }"
              placeholder="From"
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
              :options="G_LANGUAGES"
              :clearable="false"
              input-id="language"
              :reduce="el => el.value"
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
        >
          <b-form-group
            label="Status"
            label-for="state-lead"
            :state="getValidationState(validationContext)"
          >
            <v-select
              v-model="userData.state_lead"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="G_STATE_LEADS"
              :clearable="false"
              input-id="state-lead"
              :reduce="el => el.id"
            />
            
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
    </b-row>
    <address-information-lead :user-data="userData" :blank-user-fields="blankUserFields" @onModalTrackingChangeOpen="$emit('onModalTrackingChangeOpen', $event)" />
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, alphaNum, email } from '@validations'

import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'

import formValidation from '@core/comp-functions/forms/form-validation'

import AddressInformationLead from './AddressInformationLead.vue'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    flatPickr,
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
      type: Object,
      required: true
    },
    blankUserFields: {
      type: Object,
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
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      G_PROGRAMS: 'CrmGlobalStore/G_PROGRAMS',
      G_LANGUAGES: 'CrmGlobalStore/G_LANGUAGES',
      G_STATE_LEADS: 'CrmLeadStore/G_STATE_LEADS',
    }),
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
  methods: {
    capitalize (el) {
      const element = this.userData[el]
      this.userData[el] = element.substr(0, 1).toUpperCase() + element.substr(1)
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
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
