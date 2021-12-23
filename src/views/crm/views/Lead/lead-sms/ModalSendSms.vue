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
                  v-if="nameLeads.length > 1"
                  class="text-danger cursor-pointer"
                  icon="MinusCircleIcon"
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
          :state="getValidationState(validationContext)"
        >
          <b-input-group>
            <v-select
              v-model="smsData.optionsms"
              style="flex: 1 1 auto;"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="S_SMS_QUICKS"
              @input="onSelectSms()"
            />
            <b-input-group-append
              v-if="[ 1, 2 ].includes(userId) || modul == 15"
            >
              <b-button
                variant="outline-info"
                @click="$bvModal.show('modal-quick-sms')"
              >
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
            v-model="smsData.contmessage"
            placeholder="Write new message"
            rows="3"
            maxlength="1000"
            :state="getValidationState(validationContext)"
          />
          <template #description>
            <small
              tabindex="-1"
              class="form-text text-danger"
            >Max: 1000 characters</small>
          </template>

          <b-form-invalid-feedback>
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

    <!-- modal QUICK SMS -->
    <b-modal
      id="modal-quick-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="QUICK SMS"
      hide-footer
    >
      <modal-quick-sms
        :modul="modul"
        :quicks="S_SMS_QUICKS"
      />
    </b-modal>
  </validation-observer>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import {
  BSidebar, BForm, BFormGroup, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { required } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

import ModalQuickSms from './ModalQuickSms.vue'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    ModalQuickSms,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  props: {
    smss: {
      type: Array,
      required: true,
    },
    modul: {
      type: Number,
      required: true,
    },
    typesms: {
      type: Number,
      required: true,
    },
    sms: {
      type: Array,
      required: true,
    },
    nameLeads: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
    }),
    ...mapState({
      S_SMS_QUICKS: state => state.CrmSmsStore.S_SMS_QUICKS,
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
    ...mapActions({
      A_GET_SMS_QUICKS: 'CrmSmsStore/A_GET_SMS_QUICKS',
      A_SEND_MESSAGE_LEAD: 'CrmSmsStore/A_SEND_MESSAGE_LEAD',
    }),
    async getAllQuicksSms() {
      try {
        await this.A_GET_SMS_QUICKS({
          modul: this.modul,
        })
      } catch (error) {
        console.log('Something wnet wrong getAllQuicksSms:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    deleteAccount(id) {
      for (let i = 0; i < this.nameLeads.length; i++) {
        if (this.nameLeads[i].id == id) {
          this.nameLeads.splice(i, 1)
        }
      }
      if (this.typesms == 0) {
        const index = this.smss.indexOf(id)
        if (index !== -1) this.smss.splice(index, 1)
      } else {
        const index = this.sms.indexOf(id)
        if (index !== -1) this.sms.splice(index, 1)
      }
    },
    onSelectSms() {
      const index = this.S_SMS_QUICKS.map(el => el.id).indexOf((this.smsData.optionsms) ? this.smsData.optionsms.id : null)
      if (index !== -1) {
        const format = this.S_SMS_QUICKS[index].sms ? this.S_SMS_QUICKS[index].sms.replace(/<br \/>/g, '\n') : ''
        this.smsData.contmessage = format
      } else {
        this.smsData.contmessage = ''
      }
    },
    async onSubmit() {
      this.showSwalGeneric('Are you Sure Send SMS', 'You won\'t be able to revert this!', 'warning')
        .then(async result => {
          if (result.value) {
            const response = await this.A_SEND_MESSAGE_LEAD({
              contmessage: this.smsData.contmessage,
              user: this.userId,
              sms: this.typesms == 0 ? this.smss : this.sms,
              savenote: this.savenote == true ? 1 : 0,
              modul: this.modul,
            })
            console.log('response', response)
            if (response.status == 200) {
              this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
            } else this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', response.message)
          }
        })
        .catch(error => {
          console.log('Something went wrong onSubmit:', error)
          this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        })
    },
  },
  created() {
    this.userId = this.currentUser.user_id
    this.roleId = this.currentUser.role_id
    this.getAllQuicksSms()
  },
}
</script>
