<template>
  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormSendSms"
  >
    <!-- Form -->
    <b-form
      class="p-2"
      @submit.prevent="handleSubmit(onSubmit)"
      @reset.prevent="resetForm"
    >
      <b-form-group>
        <b-input-group prepend="LEADS">
          <div class="form-control h-auto">
            <template v-for="item in nameLeads">
              <span
                :key="item.id"
              >
                <span
                  v-if="modul == 15"
                >
                  {{ item.nick }} ({{ item.name == item.nick ? '' : item.name }})
                </span>
                <span v-else>
                  {{ item.name }}
                </span>
                <feather-icon
                  class="text-danger cursor-pointer"
                  icon="MinusCircleIcon"
                  v-if="nameLeads.length > 1"
                  @click="deleteAccount(item.id)"
                />
              </span>
            </template>
          </div>
        </b-input-group>
      </b-form-group>
      <!-- Add Quick SMS -->
      <validation-provider
        #default="validationContext"
        name="Add Quick SMS"
        rules="required"
      >
        <b-form-group
          label="Add Quick SMS"
          label-for="first-name"
          label-cols-md="2"
        >
          <b-input-group>
            <v-select
              style="flex: 1 1 auto;"
              v-model="smsData.optionsms"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="label"
              :options="quicks"
              @input="onSelectSms()"
            />
            <b-input-group-append
              v-if="[ 1, 2 ].includes(userId) || modul == 15"
            >
              <b-button variant="outline-info" @click="$emit('modalQuickOpen', true)">
                <feather-icon
                  icon="AlignJustifyIcon"
                  class="cursor-pointer mr-1"
                />
                Manage Quick SMS
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <b-form-invalid-feedback :state="getValidationState(validationContext)">
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>
      <!-- Message -->
      <validation-provider
        #default="validationContext"
        name="Message"
        rules="required"
      >
        <b-form-group
          label-for="message"
        >
          <b-form-textarea
            id="message"
            placeholder="Write new message"
            rows="3"
            v-model="smsData.contmessage"
            maxlength="1000"
          />
          <template #description>
            <small tabindex="-1" class="form-text text-danger">Max: 1000 characters</small>
          </template>

          <b-form-invalid-feedback :state="getValidationState(validationContext)">
            {{ validationContext.errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </validation-provider>

      <!-- Form Actions -->
      <div class="d-flex justify-content-end mt-2">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="success"
          type="submit"
        >
          <template v-if="isLoading">
            <b-spinner small />
            <span>Loading...</span>
          </template>
          <span v-else>SEND</span>
        </b-button>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  BSidebar, BForm, BFormGroup, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { required, alphaNum, email } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import crmService from '@/views/crm/services/crm.service'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
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
  props: {
    rowData: {
      type: Object,
      required: true
    },
    smss: {
      type: Array,
      required: true
    },
    modul: {
      type: Number,
      required: true
    },
    typesms: {
      type: Number,
      required: true
    },
    sms: {
      type: Array,
      required: true
    },
    nameLeads: {
      type: Array,
      required: true
    },
    quicks: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  data() {
    let smsData = {
      optionsms: '',
      contmessage: '',
    }
    const blankSmsData = {
      optionsms: '',
      contmessage: '',
    }
    const resetRowData = () => {
      smsData = JSON.parse(JSON.stringify(blankSmsData))
    }
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(resetRowData)

    return {
      refFormObserver,
      getValidationState,
      userId: null,
      roleId: null,
      required,
      smsData,
      isLoading: false,
      savenote: false,
    }
  },
  methods: {
    deleteAccount (id) {
      for (let i = 0; i < this.nameLeads.length; i++) {
        if (this.nameLeads[i].id == id) {
          this.nameLeads.splice(i, 1)
        }
      }
      if (this.typesms == 0) {
        console.log('this.smss',this.smss)
        const index = this.smss.indexOf(id)
        console.log('index', index)
        if (index !== -1)
          this.smss.splice(index, 1)
      } else {
        const index = this.sms.indexOf(id)
        console.log('index', index)
        if (index !== -1)
          this.sms.splice(index, 1)
      }
    },
    onSelectSms () {
      const index = this.quicks.map(el => el.id).indexOf((this.smsData.optionsms) ? this.smsData.optionsms.id : null)
      if (index !== -1) {
        const format = this.quicks[index].sms ? this.quicks[index].sms.replace(/<br \/>/g, "\n") : ''
        this.smsData.contmessage = format
      } else {
        this.smsData.contmessage = ''
      }
    },
    async onSubmit () {
      this.$swal.fire({
        title: 'Are you Sure Send SMS',
        icon: 'question',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ab9220',
        cancelButtonColor: '#8f9194',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(async (result) => {
        if (result.value) {
          const response = await crmService.postSendMessageLead({
            contmessage: this.smsData.contmessage,
            user: this.userId,
            sms: this.typesms == 0 ? this.smss : this.sms,
            savenote: this.savenote == true ? 1 : 0,
            modul: this.modul,
          })
          console.log('response', response)
          if (response.status == 200) {
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          } else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', response.message)
        }
      })
      .catch(error => {
        console.log('Something went wrong onSubmit:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', 'Something went wrong')
      })
    }
  },
  created() {
    this.userId = this.currentUser.id
    this.roleId = this.currentUser.id
  },
}
</script>
