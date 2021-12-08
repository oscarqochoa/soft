<template>
  <b-row>
    <b-col>
      <b-row>
        <b-col md="6">
          <!-- SNN? -->
          <validation-provider
            #default="validationContext"
            name="SNN?"
          >
            <b-form-group
              :label="`${!labssn && !labitin ? 'SNN' : statusLabs}`"
              label-for="snn?"
              label-cols-md="2"
            >
              <b-input-group>
                <b-form-input
                  id="snn?"
                  v-model="userData.social.value"
                  autofocus
                  :state="getValidationState(validationContext)"
                  trim
                  maxlength="11"
                  v-mask="'###-##-####'"
                  @input="security"
                />
                <b-input-group-append is-text variant="warning">
                  <feather-icon
                    :icon="addSocial ? 'MinusIcon' : 'PlusIcon'"
                    class="cursor-pointer"
                    @click="toggleSocial"
                  />
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </validation-provider>
          <!-- SNN -->
          <validation-provider
            v-if="hideSSN"
            #default="validationContext"
            name="SNN"
          >
            <b-form-group
              label="SNN"
              label-for="snn"
              label-cols-md="2"
            >
              <b-form-input
                id="snn"
                v-model="userData.ssn"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                maxlength="11"
                v-mask="'###-##-####'"
              />
            </b-form-group>
          </validation-provider>
          <!-- ITIN -->
          <validation-provider
            v-if="hideITIN"
            #default="validationContext"
            name="ITIN"
          >
            <b-form-group
              label="ITIN"
              label-for="itin"
              label-cols-md="2"
            >
              <b-form-input
                id="itin"
                v-model="userData.itin"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                maxlength="11"
                v-mask="'###-##-####'"
              />
            </b-form-group>
          </validation-provider>
          <!-- CPN -->
          <validation-provider
            v-if="hideCPN"
            #default="validationContext"
            name="CPN"
          >
            <b-form-group
              label="CPN"
              label-for="cpn"
              label-cols-md="2"
            >
              <b-form-input
                id="cpn"
                v-model="userData.other"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                maxlength="11"
                v-mask="'###-##-####'"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- Phone -->
          <validation-provider
            #default="validationContext"
            name="Phone"
          >
            <b-form-group
              label="Phone (H)"
              label-for="phone"
            >
              <b-form-input
                id="phone"
                v-model="userData.phone"
                :state="getValidationState(validationContext)"
                trim
                maxlength="14"
                @keyup.native="phone()"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- Mobile -->
          <validation-provider
            #default="validationContext"
            name="Mobile"
            rules="required"
          >
            <b-form-group
              label="Phone (M)"
              label-for="mobile"
            >
              <b-form-input
                id="mobile"
                v-model="userData.mobile"
                :state="getValidationState(validationContext)"
                trim
                maxlength="14"
                @keyup.native="mobile()"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <address-lead :addressData="userData.address" :state-options="stateOptions"></address-lead>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <b-form-checkbox
              id="another-address"
              name="another-address"
              value="another-address"
              @input="withotheraddress"
              class="mt-2"
            >
              Another address?
            </b-form-checkbox>

          </b-form-group>
        </b-col>
        <b-col md="6">
          <!-- Origin Country -->
          <validation-provider
            #default="validationContext"
            name="Origin Country"
            rules="required"
          >
            <b-form-group
              label="Origin Country"
              label-for="originCountry"
            >
              <v-select
                id="originCountry"
                v-model="userData.originCountry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="label"
                :options="countryOptions"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <address-lead v-if="hideWithOtherAddress" :addressData="userData.otherAddress" :state-options="stateOptions"></address-lead>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex'
import {
  BSidebar, BForm, BFormGroup, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, alphaNum, email } from '@validations'

import vSelect from 'vue-select'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

import formValidation from '@core/comp-functions/forms/form-validation'
import countries from '@/@fake-db/data/other/countries'

import AddressLead from './AddressLead.vue'

export default {
  components: {
    AddressLead,
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
    userData: {
      required: true
    },
    statusLeadOptions: {
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
      countries,
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
    ...mapActions({
      A_UNIQUE_MOBILE: 'CrmLeadStore/A_UNIQUE_MOBILE',
      A_SET_REQUEST_LEADS: 'CrmLeadStore/A_SET_REQUEST_LEADS'
    }),
    security() {
      const val = this.userData.social.value.substr(0, 1)
      if ([ '', '0', '1', '2', '3', '4', '5', '6', '7', '8' ].includes(val)) {
        this.labssn = true
        this.labitin = false

        if (this.hideSSN == true) {
          this.hideITIN = true
          this.hideSSN = false
          this.userData.itin = ''
        }
      } else if (val == 9) {
        this.labssn = false
        this.labitin = true
        if (this.hideITIN == true) {
          this.hideITIN = false
          this.hideSSN = true
          this.userData.ssn = ''
        }
      }
    },
    toggleSocial () {
      const val = this.userData.social.value.substr(0, 1)
      if (!this.addSocial) {
        this.hideSSN = false
        this.hideITIN = true
        this.hideCPN = true
        if (val == 9) {
          this.hideSSN = true
          this.hideITIN = false
        }
      } else {
        this.hideSSN = false
        this.hideITIN = false
        this.hideCPN = false
      }
      this.addSocial = !this.addSocial
    },
    withotheraddress () {
      if (!this.hideWithOtherAddress) {
        this.hideWithOtherAddress = true
        this.userData.anotherAddress = 1
      } else {
        this.hideWithOtherAddress = false
        this.userData.anotherAddress = 0
      }
    },
    phone () {
      var x = this.userData.phone
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.userData.phone = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "")
    },
    async mobile () {
      try {
        var x = this.userData.mobile
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        this.userData.mobile = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "")
        if (this.userData.mobile.length == 14) {
          this.errorFormatMobile = false
          const response = await this.A_UNIQUE_MOBILE({ mobile: this.userData.mobile })
          if (response.status == 200) {
            if (response.data.code == 'mobile') {
              this.$swal.fire({
                type: 'warning',
                title: `The phone number already exists: response.data.message`,
                confirmButtonText: 'REQUEST LEAD TO SOCIAL NETWORK',
                cancelButtonText: 'OK',
              })
              .then(async (result) => {
                if (result.value) {
                  await this.A_SET_REQUEST_LEADS({
                    lead_id: response.data.lead_id,
                    lead_name: response.data.message,
                  })
                }
              })
            }
          }
        }
      } catch (error) {
        console.log('Something went wrong mobile:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
  },
  computed: {
    statusLabs () {
      return this.labssn ? 'SNN' : 'ITIN'
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
