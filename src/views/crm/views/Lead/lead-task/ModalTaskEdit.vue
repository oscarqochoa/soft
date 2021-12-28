<template>
  <validation-observer
		#default="{ handleSubmit }"
		ref="refFormObserver"
	>
		<!-- Form -->
		<b-form
			@submit.prevent="handleSubmit(onSubmit)"
			@reset.prevent="resetForm"
		>
			<b-row>
				<b-col cols="12">
					<validation-provider>
						<b-form-group
							label="Lead"
							label-for="lead-name"
							label-cols-md="2"
						>
							<b-form-input
								id="lead-name"
								:value="lead.lead_name"
								readonly
							/>
						</b-form-group>
					</validation-provider>
        </b-col>
        <b-col
          v-if="!taskForSn && modul === 15"
        >
					<validation-provider>
						<b-form-group
							label="Type"
							label-for="type"
							label-cols-md="4"
						>
							<b-form-checkbox
                v-model="task.attend_type"
                checked="true"
                class="custom-control-primary pt-50"
                name="check-button"
                switch
                :disabled="isDisabled"
              >
                {{ task.attend_type ? 'LATER' : 'NOW' }}
              </b-form-checkbox>
						</b-form-group>
					</validation-provider>
        </b-col>
        <b-col
          cols="6"
        >
					<validation-provider>
						<b-form-group
							label="Send Sms"
							label-for="sms-status"
							label-cols-md="4"
						>
							<b-form-checkbox
                v-model="task.sms_status"
                id="sms-status"
                checked="true"
                class="custom-control-primary pt-50"
                name="check-button"
                switch
                :disabled="isDisabled"
              >
                {{ task.sms_status ? 'YES' : 'NO' }}
              </b-form-checkbox>
						</b-form-group>
					</validation-provider>
				</b-col>
				<b-col cols="12 form-group-md-2">
					<validation-provider
            #default="validationContext"
            name="Subject"
            rules="required"
          >
						<b-form-group
							label="Subject"
							label-for="subject"
							label-cols-md="2"
              :state="getValidationState(validationContext)"
						>
              <b-form-input
                v-if="modul !== 15 || taskForSn"
                v-model="task.subject"
                id="subject"
                trim
                :disabled="isDisabled"
                :state="getValidationState(validationContext)"
              />
              <v-select
                v-else
                v-model="task.subject"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="[ 'CALL' ]"
              />
						</b-form-group>
            
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
					</validation-provider>
        </b-col>
				<b-col
          v-if="authUser.role_id === 7"
          cols="12 form-group-md-2"
        >
					<validation-provider
            #default="validationContext"
            name="Type"
            rules="required"
          >
						<b-form-group
							label="Type"
							label-for="method"
							label-cols-md="2"
              :state="getValidationState(validationContext)"
						>
              <b-form-radio-group
                v-model="task.method"
                id="method"
                name="radio-method"
                class="mt-50"
                :disabled="isDisabled"
                :options="[ { text: 'INSTANTLY', value: 1 }, { text: 'PROGRAMED', value: 2 } ]"
              />
            </b-form-group>
            
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
					</validation-provider>
        </b-col>
        <!-- DUE DATE -->
        <b-col cols="12">
          <b-row>
            <label class="col-md-2 col-form-label">Due Date</label>
            <b-col>
              <validation-provider
                #default="validationContext"
                name="Date"
                rules="required"
              >
                <b-form-group
                  :state="getValidationState(validationContext)"
                >
                  <flat-pickr
                    v-model="task.date"
                    id="date"
                    placeholder="Date"
                    class="form-control"
                    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'm/d/Y', locale: 'en' }"
                    :disabled="isDisabled"
                    :min="minDate"
                    :max="maxDate"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col>
              <validation-provider
                #default="validationContext"
                name="Hour"
                rules="required"
              >
                <b-form-group>
                  <b-form-input
                    id="hour"
                    type="time"
                    v-model="task.hour"
                    :disabled="isDisabled"
                    :state="getValidationState(validationContext)"
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col md="2">
              <validation-provider>
                <b-form-group>
                  <b-form-input
                    :value="modul === 15 ? 'UNK' : lead.state"
                    readonly
                  />
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
        </b-col>
				<b-col cols="12 form-group-md-2">
					<validation-provider
            #default="validationContext"
            name="Assign to"
            rules="required"
          >
						<b-form-group
							label="Assign to"
							label-cols-md="2"
							label-for="asigned"
              :state="getValidationState(validationContext)"
						>
              <v-select
                v-model="task.asignedObj"
                id="asigned"
                placeholder="Select a Seller"
                label="label"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :disabled="isDisabled"
                :options="S_USER_APPOINTEMENTS"
                :selectable="(val) => !val.itemDisabled"
              />
            </b-form-group>
            
            <b-form-invalid-feedback :state="getValidationState(validationContext)">
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
					</validation-provider>
        </b-col>
				<b-col cols="12 form-group-md-2">
          <validation-provider
            #default="validationContext"
            name="Content"
          >
            <b-form-group
              label="Content"
              label-cols-md="2"
              label-for="content"
            >
              <b-form-textarea
                id="content"
                rows="3"
                v-model="task.content"
                :disabled="isDisabled"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
				<b-col
          v-if="authUser.role_id === 7"
          cols="12"
        >
          <validation-provider
            #default="validationContext"
            name="Sms"
          >
            <b-form-group>
              <b-form-textarea
                id="sms"
                placeholder="Write new message"
                rows="4"
                v-model="task.sms"
                :disabled="isDisabled"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <div v-if="!isDisabled" class="d-flex justify-content-right">
            <b-form-checkbox
              v-model="task.withsms"
              @input="onChangeSms"
            />
            <span>&nbsp;&nbsp;SMS</span>
          </div>
        </b-col>
			</b-row>

      <!-- Form Actions -->
      <div v-if="!isDisabled" class="d-flex justify-content-center mt-2">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="success"
          type="submit"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <b-spinner small />
            <span>Loading...</span>
          </template>
          <template v-else>
            <feather-icon
              icon="ArrowUpIcon"
              class="ml-1"
            />
            <span>UPDATE</span>
          </template>
        </b-button>
      </div>
		</b-form>
	</validation-observer>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    flatPickr,
    vSelect,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
    ...mapState({
      S_USER_APPOINTEMENTS: state => state.CrmLeadStore.S_USER_APPOINTEMENTS
    }),
  },
  created () {
    this.authUser = this.currentUser
    this.blankTask = Object.assign({}, this.task)
  },
  data () {
    return {
      authUser: {},
      blankTask: {},
      isLoading: false,
      maxDate: new Date(2050, 9, 1),
      minDate: new Date(1000, 1, 1),
    }
  },
  directives: { Ripple },
  props: {
    modul: {
      type: Number,
      required: true
    },
    lead: {
      type: Object,
      required: true
    },
    task: {
      type: Object,
      required: true
    },
    taskForSn: {
      type: Number,
      required: false,
      default: 0
    },
    isDisabled: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    const resetuserData = () => {
      const event = Object.assign({}, this.blankTask)
      this.$emit('update:task', event)
    }
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(resetuserData)

    return {
      refFormObserver,
      getValidationState,
      resetuserData
    }
  },
  methods: {
    ...mapActions({
      A_VALIDATE_TASK_FAVORITE: 'TaskStore/A_VALIDATE_TASK_FAVORITE',
      A_SET_LEAD_TASK: 'TaskStore/A_SET_LEAD_TASK'
    }),
    onChangeSms () {
      this.task.sms = ''
      if (this.task.withsms) {
        if (!this.task.asignedObj || !this.task.hour || !this.task.date) {
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'these fields are required: Due Date and Assign to')
          return
        }
        const time = this.$moment(this.task.hour, 'HH:mm:ss').format('h:mm A')
        if (this.lead.lead_programs.length) {
          if (this.lead.lead_programs[0].program_id === 1) {
            this.task.sms = `Estimado(a) ${ this.lead.lead_name } \n
            Se agendó la cita telefónica con el especialista de negocios ${ this.task.asignedObj.user_name }.\n
            Fecha: ${ this.task.date }
            Hora: ${ time }\n
            Atte. AMG Business`
          }
          if (this.lead.lead_programs[0].program_id === 3) {
            this.task.sms = `Estimado(a) ${ this.lead.lead_name } \n
            Se agendó la cita telefónica con el especialista de crédito ${ this.task.asignedObj.user_name }.\n
            Fecha: ${ this.task.date }
            Hora: ${ time }\n
            Atte. AMG Credit Experts`
          }
        }
      }
    },
    async onSubmit () {
      try {
        if (await this.validateTaskFavorites()) {
          this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
          .then(async result => {
            if (result.value) {
              this.isLoading = true
              const response = await this.A_SET_LEAD_TASK({
                task_id: this.task.id,
                user_id: this.authUser.user_id,
                lead_id: this.lead.id,
                state: this.lead.state,
                status_sn: (this.modul === 15) ? 2 : null,
                leadname: this.lead.lead_name,
                modul_id: this.modul,
                attend_id: this.task.attend_type ? 1 : 2,
                program_id: this.authUser.role_id === 7 && this.this.lead.lead_programs.length ? this.this.lead.lead_programs[0].program_id : null,
                ...this.task,
                sms: this.task.sms ? this.task.sms : '',
                sms_status: this.task.sms_status ? this.task.sms_status : 0,
                asigned: this.task.asignedObj.value,
                method: this.authUser.role_id === 7 ? this.task.method : null,
                withsms: this.task.withsms ? 1 : 0,
                taskForSn: this.taskForSn,
              })
              if (this.isResponseSuccess(response)) {
                this.$emit('onReloadTasks', response.data)
                this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
                this.$bvModal.hide('modal-task-create')
              } else
                this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
              this.isLoading = false
            }
          })
        }
      } catch (error) {
        console.log('Something went wrong onGetTask', error)
        this.showErrorSwal()
        this.isLoading = false
      }
    },
    async validateTaskFavorites () {
      try {
        if (!this.taskForSn)
          return true
        const response = await this.A_VALIDATE_TASK_FAVORITE({
          seller: this.task.asignedObj.value,
          hour_date: this.$moment(`${ this.task.date } ${ this.task.hour }`, 'm/d/Y HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        })
        if (this.isResponseSuccess(response)) {
          if (response.data.length)
            this.showToast('warning', 'top-right', 'Repeated Tasks', 'AlertTriangleIcon', 'This Seller has an important task close to this time, please select another time')
          else
            return true
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
      } catch (error) {
        console.log('Something went wrong onGetTask', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        this.isLoading = false
      }
    }
  },
  mounted () {
    this.task.date = this.$moment(this.task.real_time ? this.task.real_time : this.task.due_date, 'YYYY-MM-DD HH:mm:ss').format('m/d/Y')
    this.task.hour = this.$moment(this.task.real_time ? this.task.real_time : this.task.due_date, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')
    this.task.method = this.task.method === 'Instantly' ? 1 : 2
    const index = this.S_USER_APPOINTEMENTS.map(el => el.id).indexOf(this.task.user_id)
    if (index !== -1)
      this.task.asignedObj = this.S_USER_APPOINTEMENTS[index]
    if (this.taskForSn && !this.lead.mobile)
      this.task.sms_status = false
  },
}
</script>
