<template>
  <b-container fluid>
    <luke-calendar>
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
          v-b-tooltip:bottom="'Click to edit'"
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
  </b-container>
</template>

<script>
import TaskCalendar from '@/views/crm/views/calendar/components/TaskCalendar'
import LukeCalendar from './LukeCalendar.vue'

export default {
  name: 'CalendarTest',
  components: {
    TaskCalendar,
    LukeCalendar,
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
    }
  },
}
</script>

<style>
.bg-light-success {
  background-color: rgb(0 210 91 / 0.07) !important;
}
</style>
