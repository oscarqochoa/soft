<template>
  <div>
    <b-card
      no-body
    >
      <div class="card-header">
        <div class="d-inline justify-content-end">
          <b-button
            variant="primary"
            @click="OpenInsertTaskModal(false)"
          >
            CREATE TASK
          </b-button>
        </div>
      </div>
      <b-container fluid>

        <div class="row">
          <b-table-simple
            small
            caption-top
            responsive
          >

            <b-thead>
              <b-tr>
                <b-th />
                <b-th class="bg-light text-center">
                  MON
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  TUE
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  WED
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  THUE
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  FRI
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  SAT
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="bg-light text-center">
                  SUN
                </b-th>
                <b-th class="text-center">
                  BREAK
                </b-th>
                <b-th class="text-center">
                  ACTION
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr
                v-for="(item,index) in schedules"
                :key="index"
              >
                <b-th>{{ item.name_user }}</b-th>

                <td
                  v-for="(schedule,i) in item.json_data"
                  :key="i"
                >
                  <div v-if="schedule.isBreak == 0">
                    <div
                      v-if="schedule.id_tasks != null"
                      v-b-tooltip.hover
                      :title="schedule.title_task"

                      class="text-white cursor-pointer schedule"
                      :style="'background:'+schedule.color+'!important' "
                      @click="OpenSchedulesModal(schedule,item,true)"
                    >{{ schedule.clock_in }} to {{ schedule.clock_out }} </div>
                    <div
                      v-else
                      class="cursor-pointer off"
                      @click="OpenSchedulesModal(schedule,item,false)"
                    >OFF</div>
                  </div>
                  <div v-else>
                    {{ schedule.start_break }}
                  </div>
                </td>
                <td>
                  <b-icon
                    icon="list-check"
                    class="rounded cursor-pointer"
                    size="50px"
                    style="font-size: 10px;"
                    title="SEE TRACKING"
                    @click="OpenTrackingModal(schedule,item)"
                  >
                    TRACKING
                  </b-icon>
                </td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr />
            </b-tfoot>
          </b-table-simple>
        </div>

      </b-container>
      <modal-create-task
        v-if="modalInsertTaskModal"
        :edit-task="editTask"
        :task-out="taskOut"
        @close="closeInsertTaskModal"
      />

      <modal-tracking
        v-if="modalTrackingModal"
        :item="item"
        :from="date.from"
        :to="date.to"
        :user="user"
        @close="closeTrackingModal"
      />
      <modal-schedule
        v-if="modalSchedulesModal"
        :user="user"
        :schedule="schedule"
        :schedules="schedules"
        :edit="edit"
        @getSchedules="getSchedulesIn"
        @close="closeSchedulesModal"
      />

      <div
        class="row"
        style="margin: 1px!important;"
      >
        <div
          v-for="(i,index) in tasks"
          :key="index"
          class="col-sm-2"
          style="margin:0!important;padding:0!important"
        >
          <div
            :style="'background:'+i.color+'!important'"
            class="border-task"
            @click="OpenInsertTaskModal(true,i)"
          >
            <p
              v-if="i.title.length < 24"
              class="card-text text-white text-center cursor-pointer"
            >{{ i.title }}</p>
            <p
              v-else

              class="card-text text-white text-center cursor-pointer"
            >{{ i.title.substr(0,24) }}...</p>
          </div>
        </div>
      </div>
    </b-card>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ActivitiesService from '@/views/social-network/views/activities/activities.service'

import ModalCreateTask
from '@/views/social-network/views/activities/activities-module/modals/create-task-modal/CreateTaskModal.vue'

import ModalSchedule
from '@/views/social-network/views/activities/activities-module/modals/schedules-modal/SchedulesModal.vue'

import ModalTracking
from '@/views/social-network/views/activities/activities-module/modals/tracking-modal/TrackingModal.vue'

export default {
  components: {

    ModalCreateTask,
    ModalTracking,
    ModalSchedule,
  },
  data() {
    return {

      schedules: [],
      date: {
        // from: moment().startOf("week").add(1, "days").format("YYYY-MM-DD"),
        // to: moment().endOf("week").add(1, "days").format("YYYY-MM-DD"),
        from: '2021-10-18',
        to: '2021-10-24',
      },
      modalInsertTaskModal: false,
      modalTrackingModal: false,
      modalSchedulesModal: false,
      item: {},
      schedule: {},
      user: { },
      edit: false,
      editTask: false,
      taskOut: null,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      tasks: 'SocialNetworkActivities/G_TASKS',
    }),

  },

  created() {
    this.getSchedulesIn()
    this.A_GET_TASKS()
  },
  methods: {
    ...mapActions('SocialNetworkActivities', ['A_GET_TASKS']),
    async getSchedulesIn() {
      const params = { from: this.date.from, to: this.date.to }
      const data = await ActivitiesService.getSchedules(params)
      this.schedules = data.data

      return this.schedules
    },
    OpenInsertTaskModal(editTask, task) {
      this.editTask = editTask
      this.modalInsertTaskModal = true
      this.taskOut = task
    },

    closeInsertTaskModal() {
      this.A_GET_TASKS()
      this.modalInsertTaskModal = false
    },

    OpenSchedulesModal(schedule, item, edit) {
      console.log(item)
      this.modalSchedulesModal = true
      this.user = item

      this.schedule = schedule
      this.edit = edit
    },

    closeSchedulesModal() {
      this.modalSchedulesModal = false
    },

    OpenTrackingModal(schedule, item) {
      this.modalTrackingModal = true
      this.user.name_user = item.name_user
      this.user.id = item.id
      this.schedule = schedule
      this.item = item
    },

    closeTrackingModal() {
      this.modalTrackingModal = false
    },
  },
}
</script>

<style scoped>
tbody tr td {
  text-align: center !important;
}
.schedule {
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 7px;
}
.off {
  background: #f1f1f1;
  color: #b1b1b1;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 7px;
}

.border-task {
  border: 1px solid white !important;
}
</style>
