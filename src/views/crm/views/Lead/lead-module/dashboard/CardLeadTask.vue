<template>
  <b-card title="TASKS">
    <b-table
      show-empty
      sticky-header
      striped
      responsive="sm"
      small
      :fields="fieldsTask"
      :items="lead.lead_tasks"
      class="mb-0"
    >

      <template #cell(title)="data">
        {{ data.item.title }}
      </template>

      <template #cell(date)="data">
        <span>{{ data.item.due_date | myGlobalDay }}</span>
        <template v-if="lead.state && lead.state !== 'UNK' && data.item.real_time">
          <br />
          <span class="font-weight-bold">
            {{ data.item.real_time | myGlobalDay }} ({{ lead.state }})
          </span>
        </template>
      </template>

      <template #cell(sms)="data">
        <b-badge :variant="data.item.sms_status == 1 ? 'success' : 'danger'">
          {{ data.item.sms_status == 1 ? 'YES' : 'NO' }}
        </b-badge>
      </template>

      <template #cell(actions)="data">
        <b-button-group
          v-if="!onlyRead"
          class="w-100 btn-group-sm"
        >
          <b-button
            variant="outline-success"
            class="btn-icon"
            :disabled="isLoading"
            @click="onDoneTask(data.item.id)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="CheckCircleIcon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            variant="outline-warning"
            class="btn-icon ml-1"
            :disabled="isLoading"
            @click="onModalEditTaskOpen(data.item.id, false)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="EditIcon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            variant="outline-info"
            class="btn-icon ml-1"
            :disabled="isLoading"
            @click="onModalEditTaskOpen(data.item.id, true)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="EyeIcon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            variant="outline-danger"
            class="btn-icon ml-1"
            :disabled="isLoading"
            @click="onDeleteTask(data.item.id)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="Trash2Icon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            :variant="data.item.favorite ? 'warning' : 'outline-warning'"
            class="btn-icon ml-1"
            :disabled="isLoading"
            @click="onMakeFavoriteTask(data.item.id, data.item.favorite)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="StarIcon"
            />
            <b-spinner v-else small />
          </b-button>
        </b-button-group>
      </template>

    </b-table>
    <div v-if="!onlyRead" class="pt-2 text-right">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="onModalCreateTaskOpen"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-50"
        />
        <span class="align-middle">Add</span>
      </b-button>
      <b-button
        v-if="lead.count_task !== 0"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-secondary"
        class="btn-icon ml-1"
        @click="$bvModal.show('modal-task-history')"
      >
        <feather-icon
          icon="ListIcon"
          size="18"
        />
      </b-button>
    </div>
    
    <!-- modal TASK CREATE -->
    <b-modal
      id="modal-task-create"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="TASKS"
      hide-footer
      no-close-on-backdrop
    >
      <modal-task-create
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :type="type"
        @onTaskCreated="onTaskCreated"
      />
    </b-modal>

    <!-- modal TASK EDIT -->
    <b-modal
      id="modal-task-edit"
      ok-only
      modal-class="modal-warning"
      centered
      size="lg"
      title="TASKS"
      hide-footer
      no-close-on-backdrop
    >
      <modal-task-edit
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :task="task"
        :is-disabled="isTaskDisabled"
      />
    </b-modal>
    
    <!-- modal TASK HISTORY -->
    <b-modal
      id="modal-task-history"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      :title="`ALL TASKS -- ${ nameModule }`"
      hide-footer
      no-close-on-backdrop
    >
      <modal-task-history
        :modul="modul"
        :lead="lead"
      />
    </b-modal>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

import ModalTaskCreate from '../../lead-task/ModalTaskCreate.vue'
import ModalTaskEdit from '../../lead-task/ModalTaskEdit.vue'
import ModalTaskHistory from '../../lead-task/ModalTaskHistory.vue'

export default {
  components: {
    ModalTaskCreate,
    ModalTaskEdit,
    ModalTaskHistory
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    nameModule() {
      if (this.taskForSn) {
        return 'SOCIAL NETWORK'
      } else {
        return 'CRM'
      }
    },
  },
  created () {
    this.getUserAppointments()
  },
  data () {
    return {
      fieldsTask: [
        { key: 'subject' },
        { key: 'date', label: 'Date/Hour' },
        { key: 'sms' },
        { key: 'Actions' },
      ],
      isLoading: false,
      isTaskDisabled: false,
      task: {},
      taskForSn: 0,
      type: 0,
    }
  },
  directives: {
    Ripple,
  },
  methods: {
    ...mapActions({
      A_GET_USER_APPOINTMENT_SN: 'CrmLeadStore/A_GET_USER_APPOINTMENT_SN',
      A_DONE_LEAD_TASK: 'TaskStore/A_DONE_LEAD_TASK',
      A_GET_TASKS: 'TaskStore/A_GET_TASKS',
      A_GET_TASK: 'TaskStore/A_GET_TASK',
      A_DELETE_LEAD_TASK: 'TaskStore/A_DELETE_LEAD_TASK',
      A_MAKE_FAVORITE_LEAD_TASK: 'TaskStore/A_MAKE_FAVORITE_LEAD_TASK',
    }),
    async getUserAppointments () {
      try {
        await this.A_GET_USER_APPOINTMENT_SN({
          date: 'date_task',
          from: 'from_task',
          to: 'to_task',
          taskForSn: this.taskForSn
        })
      } catch (error) {
        console.log('Something went wrong getUserAppointments', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    onModalCreateTaskOpen () {
      this.type = 1
      this.$bvModal.show('modal-task-create')
    },
    onTaskCreated (tasks) {
      this.lead.lead_tasks = tasks
    },
    onDoneTask (id) {
      this.isLoading = true
      this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
      .then(async result => {
        if (result.value) {
          const response = await this.A_DONE_LEAD_TASK({
            id,
            user_id: this.currentUser.user_id,
            lead_id: this.lead.id,
            taskForSn: 0,
          })
          if (this.isResponseSuccess(response)) {
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
            this.lead.lead_tasks = response.data
            this.lead.count_task = response.data.count_tasks
            await this.A_GET_TASKS({ id: this.currentUser.user_id })
          }
        }
        this.isLoading = false
      }).catch(error => {
        console.log('Something went wrong onDoneTask', error)
        this.showErroSwal(error)
        this.isLoading = false
      })
    },
    async onModalEditTaskOpen (id, isDisabled) {
      try {
        this.isLoading = true
        const response = await this.A_GET_TASK({ id })
        if (this.isResponseSuccess(response)) {
          this.task = response.data[0]
          this.isTaskDisabled = isDisabled
          this.$bvModal.show('modal-task-edit')
        } else {
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        }
        this.isLoading = false
      } catch (error) {
        console.log('Something went wrong onGetTask', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        this.isLoading = false
      }
    },
    onDeleteTask (id) {
      this.isLoading = true
      this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
      .then(async result => {
        if (result.value) {
          const response = await this.A_DELETE_LEAD_TASK({
            id,
            user_id: this.currentUser.user_id,
            lead_id: this.lead.id,
            taskForSn: 0,
          })
          if (this.isResponseSuccess(response)) {
            await this.A_GET_TASKS({ id: this.currentUser.user_id })
            const index = this.lead.lead_tasks.map(el => el.id).indexOf(id)
            if (index !== -1)
              this.lead.lead_tasks.splice(index, 1)
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Deleted successful')
          } else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        }
        this.isLoading = false
      }).catch (error => {
        console.log('Something went wrong onDeleteTask', error)
        this.showErroSwal()
        this.isLoading = false
      })
    },
    onMakeFavoriteTask (id, favorite) {
      this.isLoading = true
      this.showSwalGeneric('Are you sure?', 'Favorite Task', 'warning')
      .then(async result => {
        favorite = favorite ? 0 : 1
        if (result.value) {
          const response = await this.A_MAKE_FAVORITE_LEAD_TASK({
            id,
            favorite,
            user_id: this.currentUser.user_id,
            lead_id: this.lead.id,
            taskForSn: 0,
          })
          if (this.isResponseSuccess(response)) {
            this.lead.lead_tasks = response.data
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Deleted successful')
          } else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        }
        this.isLoading = false
      }).catch(error => {
        console.log('Something went wrong onMakeFavoriteTask', error)
        this.showErroSwal()
        this.isLoading = false
      })
    },
  },
  mounted () {},
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
    }
  },
  setup() {},
}
</script>
