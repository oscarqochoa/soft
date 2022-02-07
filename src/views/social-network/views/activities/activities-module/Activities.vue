<template>
  <div>
    <b-card
      no-body
    >

      <div class="card-header">
        <div class="d-inline justify-content-end">
          <b-button
            variant="primary"
            @click="openInsertTaskModal(false)"
          >
            CREATE TASK
          </b-button>
        </div>
        <template>
          <div>

            <b-button
              v-b-toggle.sidebar-right
              v-b-tooltip.bottom="'Advanced Search'"
              variant="primary"
            >
              <div class="d-flex justify-content-between">
                <feather-icon
                  icon="FilterIcon"
                  size="15"
                />
              </div>
            </b-button>
            <b-sidebar
              id="sidebar-right"
              right
              backdrop
              bg-variant="white"
              sidebar-class="sidebar-lg"
              header-class="pt-1"
              lazy
            >
              <template #header>
                <div class="d-flex justify-content-between align-items-center w-100">
                  <span>
                    <h3>Advanced Search</h3>
                  </span>
                  <span
                    v-b-toggle.sidebar-right
                    class="cursor-pointer"
                  >
                    <amg-icon
                      icon="XIcon"
                      size="20"
                    />
                  </span>
                </div>
              </template>
              <b-container>
                <filters-component
                  :filters="filter"
                />
              </b-container>
              <template #footer>
                <b-container>
                  <b-row class="d-flex align-items-center justify-content-between p-1">
                    <b-button
                      v-b-toggle.sidebar-right
                      variant="info"
                      @click="$emit('reset-all-filters')"
                    >
                      Reset
                    </b-button>
                    <b-button
                      v-b-toggle.sidebar-right
                      variant="primary"
                      @click="sideBarSearch"
                    >
                      Search
                    </b-button>
                  </b-row>
                </b-container>
              </template>
            </b-sidebar>
          </div>
        </template>
      </div>
      <b-container fluid>

        <div class="row">
          <b-table-simple
            ref="activities"
            :busy.sync="isBusy"
            small
            caption-top
            responsive
          >

            <b-thead>
              <b-tr>
                <b-th
                  v-for="(item, index) in fields"
                  :key="index"
                  class="text-center"
                >{{ item.label }}</b-th>
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
                      @click="openSchedulesModal(schedule,item,true)"
                    >{{ schedule.clock_in }} to {{ schedule.clock_out }} </div>
                    <div
                      v-else
                      class="cursor-pointer off"
                      @click="openSchedulesModal(schedule,item,false)"
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
                    @click="openTrackingModal(schedule,item)"
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
            @click="openInsertTaskModal(true,i)"
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

import FilterData from '@/views/social-network/views/activities/activities-module/filters.data'

export default {
  components: {

    ModalCreateTask,
    ModalTracking,
    ModalSchedule,
  },
  data() {
    return {
      lenght: null,
      fields: [],
      filter: FilterData,
      isBusy: false,
      schedules: [],
      date: {
        // from: moment().startOf("week").add(1, "days").format("YYYY-MM-DD"),
        // to: moment().endOf("week").add(1, "days").format("YYYY-MM-DD"),
        from: '2020-10-18',
        to: '2020-10-24',
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
    this.$store.commit('app/SET_LOADING', true)
    this.filter[0].model = '2020-10-18'
    this.filter[1].model = '2020-10-24'
    this.getSchedulesIn()
    this.A_GET_TASKS()
  },
  methods: {
    dataByDay(data) {
      this.fields = []
      let json = []
      this.fields.push({
        key: 'field',
        label: 'USER',
        sortable: false,
      })

      data.map(json_data => {
        // eslint-disable-next-line no-param-reassign
        json = json_data.json_data
      })

      for (let i = 0; i < (json.length - 1); i += 2) {
        const date = new Date(json[i].date)
        const options = {
          weekday: 'long', month: 'numeric', day: 'numeric',
        }

        this.fields.push({
          key: 'field',
          label: date.toLocaleDateString('en-US', options),
        })
        this.fields.push({
          key: 'field',
          label: 'Break',
        })
      }

      this.fields.push({
        key: 'field',
        label: 'Action',
        sortable: false,
      })
    },
    ...mapActions('SocialNetworkActivities', ['A_GET_TASKS']),
    async getSchedulesIn() {
      const params = {
        from: this.filter[0].model,
        to: this.filter[1].model,
      }
      const data = await ActivitiesService.getSchedules(params)
      if (data.status === 200) {
        this.$store.commit('app/SET_LOADING', false)
      }

      this.schedules = data.data

      this.dataByDay(this.schedules)
      return this.schedules
    },
    openInsertTaskModal(editTask, task) {
      this.editTask = editTask
      this.modalInsertTaskModal = true
      this.taskOut = task
    },

    closeInsertTaskModal() {
      this.A_GET_TASKS()
      this.modalInsertTaskModal = false
    },

    openSchedulesModal(schedule, item, edit) {
      this.modalSchedulesModal = true
      this.user = item

      this.schedule = schedule
      this.edit = edit
    },

    closeSchedulesModal() {
      this.modalSchedulesModal = false
    },

    openTrackingModal(schedule, item) {
      this.modalTrackingModal = true
      this.user.name_user = item.name_user
      this.user.id = item.id
      this.schedule = schedule
      this.item = item
    },

    closeTrackingModal() {
      this.modalTrackingModal = false
    },

    resetFilter() {
      this.filter.map(fil => {
        fil.model = null
      })

      this.$emit('reload')
    },
    sideBarSearch() {
      this.getSchedulesIn()
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
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 7px;
}
</style>
