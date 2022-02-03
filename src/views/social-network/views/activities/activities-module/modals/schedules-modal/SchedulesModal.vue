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
      >{{ userText }}</span>

    </template>

    <validation-observer ref="form">

      <validation-provider
        v-slot="{ errors }"
        name="task"
        rules="required"
      >
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
                      v-model="taskSche"
                      :value="taskSche.title"
                      :options="tasks"
                      label="title"
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

            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group class>
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
                v-model="taskSche.description"
                placeholder="Enter description"
                class="input-form "
              />
            </div>
          </b-input-group>
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
                      v-model="taskSche.color"

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
            <b-card-body>   <b-row>
              <b-col>

                <b-form-group>
                  <label
                    style="font-size: small; font-weight: bold"
                    class="d-flex justify-content-center align-items-center"
                  >CLOCK IN </label>
                  <kendo-timepicker
                    id="from"
                    v-model="schedule.clock_in"
                    class="input-form"
                    :min="min"
                    :max="max"
                    style="background: #f1f1f1 !important;"
                    name="from"
                    :format="'HH:mm'"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <label
                    style="font-size: small; font-weight: bold"
                    class="d-flex justify-content-center align-items-center"
                  >BREAK</label>
                  <kendo-timepicker

                    v-model="schedule.start_break"
                    class="input-form"
                    :min="min"
                    :max="max"
                    style="background: #f1f1f1 !important;"
                    name="from"
                    :format="'HH:mm'"
                  />
                </b-form-group>
              </b-col>
              <b-col class="d-flex justify-content-center align-items-center">
                <b-form-group>
                  <label
                    style="font-size: small; font-weight: bold"
                    class="d-flex justify-content-center align-items-center text"
                  >CLOCK OUT</label>
                  <kendo-timepicker

                    v-model="schedule.clock_out"
                    class="input-form"
                    :min="min"
                    :max="max"
                    style="background: #f1f1f1 !important;"
                    name="from"
                    :format="'HH:mm'"
                  />
                </b-form-group>
              </b-col>
            </b-row></b-card-body>

          </b-card>
        </div>
        <label
          v-if="errors[0]"
          class="text-danger"
        >
          Required
        </label>
      </validation-provider>
    </validation-observer>

    <modal-create-task
      v-if="modalInsertTaskModal"

      @close="closeInsertTaskModal"
    />
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
  props: ['userText', 'schedule', 'schedules', 'index'],
  data: () => ({

    tasks: [],
    idTask: ' ',
    ownControl: false,

    task: { title: '' },
    modalInsertTaskModal: false,
    taskSche: { },
    min: new Date(1950, 0, 1, 8, 0, 0),
    max: new Date(2049, 11, 31, 24, 0, 0),
    minDate: new Date(1000, 1, 1),
    maxDate: new Date(2050, 9, 1),

    dayText: null,

  }),
  watch: {

    taskSche: {
      deep: true,
      handler: nuevoValor => {

      },
    },
  },

  created() {
    this.ownControl = true

    this.convert()
  },
  mounted() {
    this.search()
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
    // eslint-disable-next-line consistent-return

    async search() {
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
      this.taskSche.title = this.schedule.title_task
      this.taskSche.description = this.schedule.description
      this.taskSche.color = this.schedule.color
    },
    OpenInsertTaskModal() {
      this.modalInsertTaskModal = true
    },

    closeInsertTaskModal() {
      this.modalInsertTaskModal = false
      this.search()
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
