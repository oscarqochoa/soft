<template>
  <b-row>
    <b-col sm="12">
      <!-- Street -->
      <validation-provider
        #default="validationContext"
        :name="`Mailing address (${addressData.prename})`"
      >
        <b-form-group
          label="Mailing address"
          :label-for="`${addressData.prename}-street`"
        >
          <vue-google-autocomplete
            :ref="`${addressData.prename}-street`"
            :id="`${addressData.prename}-street`"
            class="form-control input-form fond-white border-hover"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="us"
            v-model="addressData.street"
            style="height:40px !important;width: 100%"
          />

          <b-form-invalid-feedback :state="getValidationState(validationContext)">
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>
    </b-col>
    <b-col md="6">
      <!-- City -->
      <validation-provider
        #default="validationContext"
        :name="`City (${addressData.prename})`"
      >
        <b-form-group
          label="City"
          label-for="city"
        >
          <b-form-input
            id="city"
            v-model="addressData.city"
            :state="getValidationState(validationContext)"
            trim
          />

          <b-form-invalid-feedback>
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>
      <!-- Zip Code -->
      <validation-provider
        #default="validationContext"
        :name="`Zip Code (${addressData.prename})`"
      >
        <b-form-group
          label="Zip Code"
          label-for="zipcode"
        >
          <b-form-input
            id="zipcode"
            v-model="addressData.zipcode"
            :state="getValidationState(validationContext)"
            trim
          />

          <b-form-invalid-feedback>
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>
    </b-col>
    <b-col md="6">
      <!-- State -->
      <validation-provider
        :name="`State (${addressData.prename})`"
      >
        <b-form-group
          label="State"
          label-for="country"
        >
          <v-select
            id="country"
            v-model="addressData.state"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="label"
            :options="stateOptions"
          />
        </b-form-group>
      </validation-provider>
      <!-- Country -->
      <validation-provider
        #default="validationContext"
        :name="`Country (${addressData.prename})`"
      >
        <b-form-group
          label="Country"
          label-for="country"
        >
          <b-form-input
            id="country"
            v-model="addressData.country"
            :state="getValidationState(validationContext)"
            trim
          />

          <b-form-invalid-feedback>
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>
    </b-col>
  </b-row>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'

import vSelect from 'vue-select'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    VueGoogleAutocomplete,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  model: {
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    addressData: {
      required: true
    },
    stateOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      required,
      labssn: false,
      labitin: false,
      hideSSN: false,
      hideITIN: false,
      hideCPN: false,
      addSocial: false,
      location: null,
      hideWithOtherAddress: false
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
    getAddressData (mainAddress) {
      const location = mainAddress
      const address = `${location.street_number} ${location.route}`
      this.addressData.street = address
      this.addressData.state = location.administrative_area_level_1
      this.addressData.city = location.locality
      this.addressData.zipcode = location.postal_code
    },
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
