<template>
  <div>
    <validation-observer
      #default="{ handleSubmit }"
      ref="refFormObserver"
    >
      <!-- Form -->
      <b-form
        class="pt-2"
        @submit.prevent="handleSubmit(onSubmit)"
        @reset.prevent="resetForm"
      >
        <b-row>
          <b-col cols="12" :class="modul !== 15 ? null : 'order-12'">
            <h4 v-if="modul === 15" class="card-title">STEP 2</h4>
            <b-row>
              <b-col md="4">
                <validation-provider
                  #default="validationContext"
                  name="Title"
                  rules="required"
                >
                  <b-form-group
                    label="Title"
                    label-for="title"
                    :state="getValidationState(validationContext)"
                  >
                    <v-select
                      input-id="title"
                      v-model="event.title"
                      label="label"
                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                      :clearable="false"
                      :options="G_EVENT_TITLES_OPTIONS"
                      :reduce="val => val.value"
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback :state="getValidationState(validationContext)">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="4">
                <validation-provider
                  #default="validationContext"
                  name="Seller"
                  rules="required"
                >
                  <b-form-group
                    label="Seller"
                    label-for="seller"
                    :state="getValidationState(validationContext)"
                  >
                    <v-select
                      input-id="seller"
                      v-model="event.user_id"
                      label="label"
                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                      :options="sellers"
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback :state="getValidationState(validationContext)">
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="4">
                <validation-provider
                  #default="validationContext"
                  name="Location"
                  rules="required"
                >
                  <b-form-group
                    label="Location"
                    label-for="location"
                  >
                    <b-form-input
                      id="location"
                      v-model="event.location"
                      :state="getValidationState(validationContext)"
                      :disabled="isDisabled"
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
                  name="Description"
                  rules="required"
                >
                  <b-form-group
                    label="Description"
                    label-for="description"
                  >
                    <b-form-textarea
                      id="description"
                      v-model="event.description"
                      :state="getValidationState(validationContext)"
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" :class="modul !== 15 ? null : 'order-1'">
            <h4 v-if="modul === 15" class="card-title">STEP 1</h4>
            <b-row>
              <b-col md="4">
                <validation-provider
                  #default="validationContext"
                  name="Date"
                  rules="required"
                  label-cols-md="2"
                >
                  <b-form-group
                    label="Date"
                    label-for="date"
                  >
                    <b-form-datepicker
                      id="date"
                      locale="en"
                      :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      :state="getValidationState(validationContext)"
                      v-model="event.date"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="3">
                <validation-provider
                  #default="validationContext"
                  name="From"
                  rules="required"
                  label-cols-md="2"
                >
                  <b-form-group
                    label="From"
                    label-for="from"
                  >
                    <b-form-input
                      id="from"
                      type="time"
                      v-model="event.from"
                      :value="valueTime"
                      :state="getValidationState(validationContext)"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="3">
                <validation-provider
                  #default="validationContext"
                  name="To"
                  rules="required"
                  label-cols-md="2"
                >
                  <b-form-group
                    label="To"
                    label-for="to"
                  >
                    <b-form-input
                      id="to"
                      type="time"
                      v-model="event.to"
                      :value="valueTime"
                      :state="getValidationState(validationContext)"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="2" class="pt-2">
                <validation-provider v-if="modul !== 15">
                  <b-form-group>
                    <b-form-input
                      :value="lead.state ? lead.state : 'UNK'"
                      readonly
                    />
                  </b-form-group>
                </validation-provider>
                <b-button
                  v-else
                  variant="outline-success"
                  @click="onGetSeller"
                >
                  <template v-if="isLoading">
                    <b-spinner small />
                    <span>Loading...</span>
                  </template>
                  <template v-else>
                    Next
                    <feather-icon
                      icon="ArrowRightIcon"
                      class="ml-50"
                    />
                  </template>
                </b-button>
              </b-col>
            </b-row>
          </b-col>

        </b-row>

        <!-- Form Actions -->
          <div class="d-flex justify-content-center mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
              :disabled="isDisabled || isLoading"
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
              @click="$bvModal.hide('modal-event-create')"
            >
              Cancel
            </b-button>
          </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },
  props: {
    modul: {
      type: Number,
      required: true
    },
    onlyRead: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
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
  data () {
    return {
      isLoading: false,
      minDate: new Date(),
      maxDate: new Date(2050, 9, 1),
      currentDate: new Date(2017, 9, 15, 10, 30),
      minTime: new Date(1950, 0, 1, 0, 0, 0),
      maxTime: new Date(2049, 11, 31, 24, 0, 0),
      valueTime: '00:00:00',
      isDisabled: this.modul !== 15 ? false : true,
      sellers: [],
    }
  },
  mounted () {},
  created () {
    this.getOwners()
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      G_EVENT_TITLES_OPTIONS: 'CrmEventStore/G_EVENT_TITLES',
      G_OWNERS: 'CrmGlobalStore/G_OWNERS',
    }),
    dateSp () {
      return new Date(this.event.date.replace(/-/g, '/'))
        .toLocaleDateString('es-ES', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })
    },
    dateEn () {
      return new Date(this.event.date.replace(/-/g, '/'))
        .toLocaleDateString('en-EN', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })
    },
    hourMsn () {
      return this.$moment(`${ this.event.date } ${ this.event.from }`).format('h:mm A')
    }
  },
  methods: {
    ...mapActions({
      A_GET_OWNERS: 'CrmGlobalStore/A_GET_OWNERS',
      A_SET_EVENT: 'CrmEventStore/A_SET_EVENT',
      A_GET_USER_APPOINTMENT_SN: 'CrmLeadStore/A_GET_USER_APPOINTMENT_SN',
    }),
    async getOwners () {
      try {
        const roles = [2, 4].includes(this.modul) ? '[1,2,5]' : '[1,2,3,5]'
        await this.A_GET_OWNERS({ modul: this.modul, body: { roles, type: '1' } })
        this.sellers = this.G_OWNERS
      } catch (error) {
        console.log('Something went wrong getOwners:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async onSubmit () {
      try {
        this.isLoading = true
        const event = {
          ...this.event,
          user_id: this.event.user_id.value,
          seller: this.event.user_id.label,
          lead_id: this.$route.params.id,
          all_day: '',
          state: this.lead.state,
          created_users: this.currentUser.user_id,
          type: 'event',
          modul: this.modul,
        }
        if (this.modul !== 15) {
          event.lead_name = this.lead.lead_name
          event.language = this.lead.language
          event.date = (this.event.date) ? this.$moment(this.event.date, 'YYYY-MM-DD').format('MM/DD/YYYY') : ''
          event.dateSp = this.dateSp
          event.dateEn = this.dateEn
          event.hourMsn = this.hourMsn
        } else {
          event.leadname = this.lead.lead_name
        }
        const response = await this.A_SET_EVENT(event)
        if (this.isResponseSuccess(response)) {
          this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          this.$emit('resetData', 'event')
          this.isLoading = true
          this.$bvModal.hide('modal-event-create')
        } else {
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        }
      } catch (error) {
        console.log('Something went wrong onSubmit', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    async onGetSeller () {
      try {
        this.isLoading = true
        if(this.event.date !== null && this.event.from !== null && this.event.to !== null) {
          const response = await this.A_GET_USER_APPOINTMENT_SN({
              date: this.event.date,
              from: this.event.from ,
              to: this.event.to
            })
          if (this.isResponseSuccess(response)) {
            this.sellers = response.data.map(el => ({ label: `${ el.user_name } (${ el.c_appointments })`, value: el.id }))
            this.isDisabled = false
          }
        }
        this.isLoading = false
      } catch (error) {
        console.log('Something went wrong onGetSeller', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    }
  },
  directives: {
    Ripple,
  },
}
</script>
