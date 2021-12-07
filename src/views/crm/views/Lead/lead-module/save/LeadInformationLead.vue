<template>
  <b-card>
    <b-row>
      <b-col class="col-12 mb-1">
        <span class="title-card">LEAD INFORMATION</span>
      </b-col>
      <b-col md="6">
        <!-- Lead Owner -->
        <validation-provider
          #default="validationContext"
          name="Lead Owner"
          rules="required"
        >
          <b-form-group
            label="Lead Owner"
            label-for="userId"
          >
            <v-select
              id="userId"
              v-model="userData.userId"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="label"
              :options="userCreatorOwnerOptions"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Lead Status -->
        <validation-provider
          #default="validationContext"
          name="Lead Status"
          rules="required"
        >
          <b-form-group
            label="Lead Status"
            label-for="leadStatusId"
          >
            <v-select
              v-model="userData.leadStatusId"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="label"
              :options="statusLeadOptions"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
      <b-col md="6">
        <!-- Lead Source -->
        <validation-provider
          #default="validationContext"
          name="Lead Source"
          rules="required"
        >
          <b-form-group
            label="Lead Source"
            label-for="sourceId"
          >
            <v-select
              v-model="userData.sourceId"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="label"
              :options="sourceLeadOptions"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- Source Name -->
        <validation-provider
          #default="validationContext"
          name="Source Name"
          rules="required"
        >
          <b-form-group
            label="Source Name"
            label-for="sourceNameId"
          >
            <v-select
              v-model="userData.sourceNameId"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="label"
              :options="sourceNameOptions"
            />
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import { required, alphaNum, email } from '@validations'
import vSelect from 'vue-select'

import formValidation from '@core/comp-functions/forms/form-validation'


export default {
  components: {
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
      required,
      alphaNum,
      email,
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
