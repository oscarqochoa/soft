<template>
  <b-modal
    v-model="ownControl"

    title-class="h3 text-white font-weight-bolder"

    size="lg"
    @hidden="closeModal"
  >
    <template #modal-title>
      <span

        class="text-white"
        style="font-size: 20px; font-weight: 900;"
      >{{ user.name_user }}</span>

    </template>

    <validation-observer ref="form">

      <b-row>
        <b-col md="12">
          <b-form-group class>
            <validation-provider
              v-slot="{ errors }"
              rules="title-required"
            >
              <b-input-group>

                <b-col

                  md="3"
                  class="p-0"
                >

                  <b-input-group-prepend>
                    <b-input-group-text
                      class="bg-primary text-white w-100"
                    >
                      <span>TITLE</span>
                    </b-input-group-text>
                  </b-input-group-prepend>

                </b-col>
                <b-col
                  md="8"
                  class="p-0 "
                >
                  <div

                    class="w-100"
                  >

                    <v-select
                      v-if="edit===true"
                      v-model="taskSche"
                      :options="tasks"
                      :reduce="option=>option"
                      label="title"
                    />

                    <v-select
                      v-if="edit===false"
                      v-model="taskSche"
                      :options="tasks"
                      :reduce="option=>option"
                      label="title"
                      placeholder="Please select an option"
                      @input="onChangeTaskSche()"
                    />

                  </div>
                </b-col>
                <b-col md="1">
                  <div style="padding-top: 7px">
                    <feather-icon
                      class="cursor-pointer"
                      size="20"
                      icon="PlusCircleIcon"
                      @click="OpenInsertTaskModal"
                    />
                  </div>
                </b-col>

              </b-input-group>
              <span
                v-if="errors[0]"
                class="text-danger"
              >
                {{ errors[0] }}
              </span>

            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group class>
        <validation-provider
          v-slot="{ errors,valid }"
          rules="required"
        >
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text
                class="bg-primary text-white w-100 description m-0"
              >
                <span>DESCRIPTION</span>
              </b-input-group-text>
            </b-input-group-prepend>
            <div class="w-100">
              <b-form-textarea
                v-if="edit===true"
                v-model="taskSche.description"
                placeholder="Enter description"
                class="input-form "
                :state="errors[0] ? false : valid ? true : null"
              />

              <b-form-textarea
                v-if="edit===false"
                v-model="taskSche.description"
                placeholder="Enter description"
                class="input-form "
                required
              />
            </div>
          </b-input-group>
          <span
            v-if="errors[0]"
            class="text-danger"
          >
            Description {{ errors[0] }}
          </span>
        </validation-provider>
      </b-form-group>

      <b-row>
        <b-col md="12">
          <b-form-group class>

            <b-input-group>

              <b-col

                md="3"
                class="p-0"
              >

                <b-input-group-prepend>
                  <b-input-group-text
                    class="bg-primary text-white w-100"
                  >
                    <span>COLOR</span>
                  </b-input-group-text>
                </b-input-group-prepend>

              </b-col>
              <b-col
                md="9"
                class="p-0 "
              >
                <div

                  class="w-100"
                >

                  <b-input
                    v-if="edit===true"
                    v-model="taskSche.color"
                    disabled
                    type="color"
                  />
                  <b-input
                    v-if="edit===false"
                    v-model="taskSche.color"
                    disabled
                    type="color"
                  />

                </div>
              </b-col>

            </b-input-group>

          </b-form-group>
        </b-col>
      </b-row>

      <div>
        <b-card>

          <b-card-header
            class="d-flex justify-content-center align-items-center align-content-center "
          >

            <span style="font-size: x-large; font-weight: bold">
              {{ dayText }}
            </span>

          </b-card-header>
          <b-card-body>

            <b-row>
              <b-col>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group>
                    <label
                      style="font-size: small; font-weight: bold"
                      class="d-flex justify-content-center align-items-center"
                    >CLOCK IN </label>

                    <kendo-timepicker
                      v-if="edit===true"

                      v-model="taskSche.clock_in"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <kendo-timepicker
                      v-if="edit===false"

                      v-model="taskSche.clock_in"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <span
                      v-if="errors[0]"
                      class="text-danger d-flex justify-content-center"
                    >
                      Clock in {{ errors[0] }}
                    </span>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group>
                    <label
                      style="font-size: small; font-weight: bold"
                      class="d-flex justify-content-center align-items-center"
                    >BREAK </label>

                    <kendo-timepicker
                      v-if="edit===true"
                      v-model="taskSche.start_break"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <kendo-timepicker
                      v-if="edit===false"
                      v-model="taskSche.start_break"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <span
                      v-if="errors[0]"
                      class="text-danger d-flex justify-content-center"
                    >
                      Start Break {{ errors[0] }}
                    </span>
                  </b-form-group></validation-provider>

              </b-col>
              <b-col class="d-flex justify-content-center align-items-center">
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group>
                    <label
                      style="font-size: small; font-weight: bold"
                      class="d-flex justify-content-center align-items-center text"
                    >CLOCK OUT</label>

                    <kendo-timepicker
                      v-if="edit===true"
                      v-model="taskSche.clock_out"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <kendo-timepicker
                      v-if="edit===false"
                      v-model="taskSche.clock_out"
                      class="input-form"
                      :min="min"
                      :max="max"
                      style="background: #f1f1f1 !important;"
                      name="from"
                      :format="'HH:mm'"
                    />

                    <span

                      v-if="errors[0]"
                      class="text-danger d-flex justify-content-center"
                    >
                      Clock Out {{ errors[0] }}
                    </span>
                  </b-form-group>
                </validation-provider>
                {{ taskSche }}
              </b-col>
            </b-row></b-card-body>

        </b-card>
      </div>

    </validation-observer>

    <modal-create-task
      v-if="modalInsertTaskModal"

      @close="closeInsertTaskModal"
    />

    <template #modal-footer>
      <b-button
        v-if="edit===true"
        variant="primary"
        @click="updateSchedule"
      >
        <b-spinner
          v-if="spinnerOn"
          small
        />
        UPDATE
      </b-button>

      <b-button
        v-if="edit===false"
        variant="primary"
        @click="createSchedule"
      >
        <b-spinner
          v-if="spinnerOn"
          small
        />
        CREATE
      </b-button>

    </template>
  </b-modal>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import vSelect from 'vue-select'
import ActivitiesService from '@/views/social-network/views/activities/activities.service'
import ModalCreateTask
from '@/views/social-network/views/activities/activities-module/modals/create-task-modal/CreateTaskModal.vue'

export default {
  components: {
    vSelect,
    ModalCreateTask,
  },
  props: ['user', 'schedule', 'schedules', 'edit'],
  data: () => ({

    tasks: [],
    idTask: ' ',
    ownControl: false,
    spinnerOn: false,
    task: { title: '' },
    modalInsertTaskModal: false,
    taskSche: { },
    newtaskSche: { },
    newschedule: { },
    min: new Date(1950, 0, 1, 8, 0, 0),
    max: new Date(2049, 11, 31, 24, 0, 0),
    minDate: new Date(1000, 1, 1),
    maxDate: new Date(2050, 9, 1),

    dayText: null,

  }),

  created() {
    this.ownControl = true
    this.getTasks()

    this.convert()
  },
  mounted() {
    this.taskConvert()
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
  },

  methods: {

    convert() {
      this.dayText = moment(this.schedule.date).format('ddd')

      return this.dayText
    },

    closeModal() {
      this.$emit('close')
    },
    onChangeTaskSche() {
      this.$refs.form.reset()
      if (!this.taskSche) {
        this.taskSche = {}
      }
      console.log(this.schedule, 'doble')
    },
    // eslint-disable-next-line consistent-return

    async getTasks() {
      try {
        const params = { item: this.item, from: this.from, to: this.to }
        const data = await ActivitiesService.getTask(params)
        console.log(data)
        this.tasks = data.data
        // Must return an array of items or an empty array if an error occurred

        return this.tasks
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
    taskConvert() {
      console.log(this.schedule)
      this.taskSche = this.schedule
      this.taskSche.title = this.schedule.title_task

      console.log('ga')
      console.log(this.taskSche, 'tasckhe')
    },
    async updateSchedule() {
      try {
        const result = await this.$refs.form.validate()
        if (result) {
          this.spinnerOn = true
          const params = {
            id_task: this.taskSche.id_tasks,
            schedule: this.taskSche,
            item: this.user,
            id_user: this.currentUser.user_id,

          }

          console.log(params, 'checkear')
          const data = await ActivitiesService.updateSchedules(params)
          if (data.status === 200) {
            this.$emit('getSchedules')
            this.showSuccessSwal()
            this.closeModal()
          }
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

    async createSchedule() {
      try {
        const result = await this.$refs.form.validate()
        if (result) {
          this.spinnerOn = true
          const params = {
            schedule: {
              clock_in: this.taskSche.clock_in, clock_out: this.taskSche.clock_out, date: this.schedule.date, start_break: this.taskSche.start_break,
            },
            id_module: 15,
            id_task: this.taskSche.id,
            id_user: this.user.id,
            created_by: this.currentUser.user_id,

          }
          console.log(params)
          const data = await ActivitiesService.createSchedules(params)
          if (data.status === 200) {
            this.$emit('getSchedules')
            this.showSuccessSwal()
            this.closeModal()
          }
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

    OpenInsertTaskModal() {
      this.modalInsertTaskModal = true
    },

    closeInsertTaskModal() {
      this.modalInsertTaskModal = false
      this.getTasks()
    },
  },

}
</script>

<style scoped>

.description{
  border-top-right-radius: 10px !important;
  border-top-left-radius: 10px;
}
</style>
