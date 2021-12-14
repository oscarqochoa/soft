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
          <b-col cols="12">
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
              <b-col v-if="event.attend === 2 && event.comment" cols="12">
                <validation-provider>
                  <b-form-group label="Comment">
                    <b-form-textarea
                      :value="event.comment"
                      :disabled="true"
                    />
                  </b-form-group>
                </validation-provider>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12">
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
                      v-model="event.date"
                      :min="minDate"
                      :max="maxDate"
                      :value="currentDate"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      :state="getValidationState(validationContext)"
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="4">
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
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="4">
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
                      :disabled="isDisabled"
                    />
                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <validation-provider label-cols="2" >
                  <b-form-group label="Created by">
                    <b-form-input
                      :value="event.creator_name"
                      :disabled="true"
                    />
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col v-if="event.userupdate" md="6">
                <validation-provider label-cols="2" >
                  <b-form-group label="Modified by">
                    <b-form-input
                      :value="event.updater_name"
                      :disabled="true"
                    />
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col v-if="event.type !== 'task'" md="6">
                <validation-provider label-cols="2">
                  <b-form-group label="Attended">
                    <b-form-input
                      :class="event.attend ? 'text-success' : 'text-danger'"
                      :value="event.attend ? 'YES' : 'NO'"
                      :disabled="true"
                    />
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col v-if="event.type !== 'task' && event.attend === 2" md="6">
                <validation-provider label-cols="2">
                  <b-form-group label="Sale Made">
                    <b-form-input
                      :class="event.sale_made === 'YES' ? 'text-success' : 'text-danger'"
                      :value="event.sale_made"
                      :disabled="true"
                    />
                  </b-form-group>
                </validation-provider>
              </b-col>
            </b-row>
          </b-col>

        </b-row>

        <!-- Form Actions -->
        <div class="d-flex justify-content-center mt-2">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-danger"
            class="mr-2"
            type="button"
            :disabled="isLoading"
            @click="onDeleteEvent"
          >
            <template v-if="isLoading">
              <b-spinner small />
              <span>Loading...</span>
            </template>
            <template v-else>
              <feather-icon icon="Trash2Icon" class="mr-50" />
              <span>Delete</span>
            </template>
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="button"
            variant="outline-warning"
            @click="onToggleEdit"
            :disabled="isLoading"
          >
            <template v-if="isDisabled">
              <feather-icon icon="Edit2Icon" class="mr-50" />
              <span>Edit</span>
            </template>
            <template v-else>
              <feather-icon icon="XIcon" class="mr-50" />
              <span>Cancel</span>
            </template>
          </b-button>
          <b-button
            v-if="!isDisabled"
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="submit"
            variant="success"
            class="ml-2"
            :disabled="isLoading"
          >
            <template>
              <feather-icon icon="SaveIcon" class="mr-50" />
              <span>Save</span>
            </template>
          </b-button>
          <b-button
            v-if="!onlyRead && event.seller_id === currentUser.id && event.type !== 'task'"
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="button"
            variant="outline-dark"
            class="ml-2"
            :disabled="isLoading || event.attend"
            @click="onAttend"
          >
            <template>
              <feather-icon v-if="event.attend" icon="SaveIcon" class="mr-50" />
              <feather-icon v-else icon="CalendarIcon" class="mr-50" />
              <span v-if="event.attend">Attended</span>
              <span v-else>Attend</span>
            </template>
          </b-button>
        </div>
      </b-form>
    </validation-observer>

    <!-- modal SALE MADE -->
    <b-modal
      id="modal-sale-made"
      ok-only
      modal-class="modal-primary"
      centered
      size="sm"
      title="Sale Made"
      hide-footer
      no-close-on-backdrop
    >
      <modal-sale-made
        :modul="modul"
        :only-read="onlyRead"
        :event="event"
      />
    </b-modal>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

import ModalSaleMade from './ModalSaleMade.vue'

export default {
  components: {
    vSelect,
    ModalSaleMade
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
      blankEvent: {},
      currentDate: new Date(2017, 9, 15, 10, 30),
      isDisabled: true,
      isLoading: false,
      maxDate: new Date(2050, 9, 1),
      maxTime: new Date(2049, 11, 31, 24, 0, 0),
      minDate: new Date(),
      minTime: new Date(1950, 0, 1, 0, 0, 0),
      valueTime: '00:00:00',
      sellers: [],
    }
  },
  mounted () {},
  created () {
    this.sellers = this.G_OWNERS
    this.setDataBlank('event')
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
      A_SET_EVENT: 'CrmEventStore/A_SET_EVENT',
      A_DELETE_EVENT: 'CrmEventStore/A_DELETE_EVENT',
      A_GET_DATE_EVENTS_TASKS: 'CrmEventStore/A_GET_DATE_EVENTS_TASKS',
      A_UPDATE_EVENT: 'CrmEventStore/A_UPDATE_EVENT',
    }),
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      const object = this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`]
      for (let subkey in object) {
        this[key][subkey] = object[subkey]
      }
    },
    onToggleEdit () {
      this.isDisabled = !this.isDisabled
      if (this.isDisabled) {
        this.resetData('event')
        this.$refs.refFormObserver.reset()
      }
    },
    async onSubmit () {
      try {
        this.isLoading = true
        const responseFirst = await this.A_GET_DATE_EVENTS_TASKS({ idLead: this.event.lead_id, id: this.event.id })
        if (this.isResponseSuccess(responseFirst)) {
          const dateFormat = this.$moment(`${this.event.date} ${this.event.from}`).format('YYYY-MM-DD HH:mm:ss')
          let repeat = 0
          responseFirst.data.forEach(el => {
            if (el.dates == dateFormat)
              repeat++
          })
          if (repeat === 0) {
            const body = {
              ...this.event,
              user_id: this.event.user_id.value,
              id: this.event.id,
              title: this.event.title,
              date: this.event.date,
              from: this.event.from,
              to: this.event.to,
              host: this.event.user_id.value,
              location: this.event.location,
              description: this.event.description,
              seller: this.event.user_id.label,
              userupdate: this.currentUser.user_id,
              month: this.getCurrentMonth()
            }
            const response = await this.A_UPDATE_EVENT(body)
            if (this.isResponseSuccess(response)) {
              this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
              this.setDataBlank('event')
              this.onToggleEdit()
              this.isLoading = false
            } else {
              this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong.' + response.message)
            }
          } else {
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'At this time and date, you already have an appointment or a task')
          }
        } else {
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong.' + responseFirst.message)
        }
        this.isLoading = false
      } catch (error) {
        console.log('Something went wrong onSubmit', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    onDeleteEvent () {
      this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
      .then(async (result) => {
        if (result.value) {
          this.isLoading = true
          const month = this.getCurrentMonth()
          const response = await this.A_DELETE_EVENT({ id: this.event.id, month })
          if (this.isResponseSuccess(response)) {
            this.showToast('success', 'top-right', 'Deleted!', 'CheckIcon', 'Your file has been deleted.')
            this.$bvModal.hide('modal-event-edit')
          } else {
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong.' + response.message)
          }
          this.isLoading = false
        }
      }).catch(error => {
        console.log('Something went wrong deleteEvent', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
    onAttend () {
      if (this.modul === 2) {
        this.attend_id = this.event.id
        this.$bvModal.show('modal-sale-made')
      } else {
        /* *INTEGRATE* resources\js\components\modal\ModaEventEdit.vue - method: attendOtheModule */
        /* *INTEGRATE* resources\js\components\lead\showlead\ShowLead.vue - method: attendOtherModule */
      }
    }
  },
  directives: {
    Ripple,
  },
}
</script>
