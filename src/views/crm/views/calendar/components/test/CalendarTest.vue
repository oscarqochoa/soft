<template>
  <b-container fluid>
    <luke-calendar
      ref="calendar"
      :events="events"
      @dateChange="fetchEvents"
    >
      <template #date-header="{date, fullDay, haveEvents, events}">
        <div
          class="py-50 text-center w-100 border-bottom font-weight-bolder"
          style="border-color: #C4C4C4 !important;"
          :class="haveEvents ? `bg-${taskColor[events[0].title]} text-white border-bottom-0` : ''"
        >
          {{ fullDay }}, {{ date }}
        </div>
      </template>
      <template #date="{events, haveEvents}">
        <div
          class="w-100"
          :class="haveEvents ? `text-white` : ''"
        >
          <task-calendar
            v-if="haveEvents"
            :task="events[0]"
          />
        </div>
      </template>
      <template #date-footer="{haveEvents, events}">
        <span
          v-if="haveEvents"
          class="px-50 pb-50 pt-0 text-right w-100"
          :class="haveEvents ? `bg-light-${taskColor[events[0].title]} ` : ''"
        >
          <b-button
            class="rounded mr-50"
            variant="warning"
            style="padding: 4px; background: #00AAAA !important; border-color: #00AAAA !important;"
            @click="openModalEditEventShow(events[0])"
          >
            <feather-icon
              icon="Edit2Icon"
              size="12"
            />
          </b-button>
          <b-button
            class="rounded"
            variant="warning"
            style="padding: 4px; background: #FF7A00 !important; border-color: #FF7A00 !important;"
          >
            <tabler-icon
              icon="ListIcon"
              size="12"
            />
          </b-button>
        </span>
      </template>
      <template #date-list="{event}">
        <div
          class="w-100 p-50"
        >
          <task-calendar
            class="w-100"
            :task="event"
          />
        </div>
      </template>
    </luke-calendar>
    <b-modal
      :id="isModal ? 'modal-event-edit-modal' : 'modal-event-edit'"
      ok-only
      modal-class="modal-warning"
      class="zindex-4"
      centered
      size="lg"
      title="EDIT"
      hide-footer
      no-close-on-backdrop
    >
      <modal-event-edit
        :modul="module"
        :only-read="onlyRead"
        :lead="lead"
        :event="selectedEvent"
        @updated="updatedEvent"
      />
    </b-modal>
  </b-container>
</template>

<script>
import TaskCalendar from '@/views/crm/views/calendar/components/TaskCalendar.vue'
import CalendarService from '@/views/crm/services/calendar'
import EventService from '@/views/crm/services/event'
import ModalEventEdit from '@/views/crm/views/Lead/lead-event/ModalEventEdit.vue'
import LukeCalendar from './LukeCalendar.vue'

export default {
  name: 'CalendarTest',
  components: {
    TaskCalendar,
    LukeCalendar,
    ModalEventEdit,
  },
  props: {
    isModal: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      taskColor: {
        TEL: 'primary',
        CN: 'success',
        Personal: 'danger',
        Family: 'warning',
        ETC: 'info',
      },
      events: [],
      host: 0,
      selectedEvent: {},
      module: 2,
      onlyRead: false,
      lead: {},
    }
  },
  methods: {
    updatedEvent() {
      this.$bvModal.hide(
        this.isModal ? 'modal-event-edit-modal' : 'modal-event-edit',
      )
      this.$refs.calendar.emitEventDateChange()
    },
    async fetchEvents({ month, year }) {
      try {
        this.addPreloader()
        const monthInfo = this.$moment(`${month}/1/${year}`)
        if (this.isModal) this.host = this.authUser.user_id
        const response = await CalendarService.filterMonthNext({
          year: monthInfo.format('YYYY'),
          month: monthInfo.format('MM'),
          host: this.host ? this.host : 0,
        })
        if (this.isResponseSuccess(response)) {
          this.events = JSON.parse(response.data[0].events_month)
          this.removePreloader()
        } else {
          this.showToast(
            'warning',
            'top-right',
            'Warning!',
            'AlertTriangleIcon',
            `Something went wrong. ${response.message}`,
          )
        }
      } catch (error) {
        console.log('Something went wrong fetchEvents', error)
        this.showErrorSwal(error)
        this.removePreloader()
      }
    },
    resetData(key) {
      this[key] = {
        ...this[`blank${key.charAt(0).toUpperCase()}${key.slice(1)}`],
      }
    },
    async openModalEditEventShow(event) {
      try {
        const { id } = event
        const response = await EventService.getEvent({ id })
        this.resetData('selectedEvent')
        if (this.isResponseSuccess(response)) {
          [this.selectedEvent] = response.data
          this.selectedEvent.user_id = {
            label: this.selectedEvent.seller_name,
            value: this.selectedEvent.seller_id,
          }
          this.$bvModal.show(
            this.isModal ? 'modal-event-edit-modal' : 'modal-event-edit',
          )
        } else {
          this.showToast(
            'warning',
            'top-right',
            'Warning!',
            'AlertTriangleIcon',
            `Something went wrong. ${response.message}`,
          )
        }
      } catch (error) {
        console.log('Something went wrong getEvents', error)
        this.showToast(
          'danger',
          'top-right',
          'Oop!',
          'AlertOctagonIcon',
          this.getInternalErrors(error),
        )
      }
    },
  },
}
</script>

<style scoped>
.bg-light-success {
  background-color: rgba(0, 210, 91, 0.07) !important;
}
.bg-light-primary {
  background-color: rgba(0, 144, 231, 0.07) !important
}
.current-date-class {
  background-color: #00D25B;
  color: white;
}
</style>
