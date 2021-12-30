<template>
  <div class="app-calendar overflow-hidden border">
    <div class="row no-gutters">
      <!-- Calendar -->
      <div class="col position-relative">
        <div class="card shadow-none border-0 mb-0 rounded-0">
          <div class="card-body pb-0">
            <full-calendar
              ref="refCalendar"
              :options="calendarOptions"
              class="full-calendar"
            >
              <template #eventContent="slotProps">
                <div class="fc-event-main mb-50">
                  <div class="fc-event-main-frame">
                    <div class="fc-event-time">{{ slotProps.event.start | myHourTime }}</div>
                    <div class="fc-event-title-container">
                      <div class="fc-event-title fc-sticky">{{ slotProps.event.title }}</div>
                    </div>
                  </div>
                </div>
                <div class="fc-event-content w-100 d-flex">
                  <div
                    v-if="slotProps.event.extendedProps.seller_image"
                    style="width: 30px;height: 30px;background-position: center;background-repeat: no-repeat;background-size: contain;"
                    :style="{ backgroundImage: `url(${baseUrl + slotProps.event.extendedProps.seller_image})` }"
                  />
                  <table class="mt-2 mt-xl-0 w-100">
                    <tr>
                      <th class="py-50">
                        <amg-icon icon="PhoneCallIcon" class="mr-50" />
                        <span class="font-weight-bold">{{ slotProps.event.extendedProps.lead_mobile }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th class="py-50">
                        <amg-icon icon="UserIcon" class="mr-50" />
                        <span class="font-weight-bold">{{ slotProps.event.extendedProps.lead_name }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th class="py-50">
                        <amg-icon icon="WatchIcon" class="mr-50" />
                        <span class="font-weight-bold">{{ slotProps.event.start | myHourTime }} - {{ slotProps.event.end | myHourTime }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th class="py-50 text-danger">
                        <amg-icon icon="WatchIcon" class="mr-50" />
                        <span class="font-weight-bold">{{ slotProps.event.extendedProps.real_time | myHourTime}}({{ slotProps.event.extendedProps.state }})</span>
                      </th>
                    </tr>
                  </table>
                </div>
              </template>
            </full-calendar>
          </div>
        </div>
      </div>
    </div>
    <!-- modal EVENT EDIT -->
    <b-modal
      id="modal-event-edit"
      ok-only
      modal-class="modal-warning"
      centered
      size="lg"
      title="EDIT"
      hide-footer
      no-close-on-backdrop
    >
      <modal-event-edit
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :event="event"
        @updated="updatedEvent"
      />
    </b-modal>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import FullCalendar from '@fullcalendar/vue'
import Ripple from 'vue-ripple-directive'
// Full Calendar Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

import ModalEventEdit from '@/views/crm/views/Lead/lead-event/ModalEventEdit.vue'


export default {
  components: {
    FullCalendar,
    ModalEventEdit
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      /* S_TEMPLATES: event => event.CrmTemplateStore.S_TEMPLATES */
    }),
  },
  created () {
    this.authUser = this.currentUser
    this.setDataBlank('event')
    this.calendarConfig()
  },
  data () {
    return {
      authUser: new Object,
      calendarApi: null,
      calendarsColor: {
        TEL: 'primary',
        CN: 'success',
        Personal: 'danger',
        Family: 'warning',
        ETC: 'info',
      },
      event: {
        attend: null,
        date: '',
        from: '',
        id: null,
        location: '',
        real_time: '',
        title: '',
        to: '',
      },
      modul: 2,
      onlyRead: false,
      lead: new Object,
      yearact: this.$moment().format('YYYY'),
      monthact: this.$moment().format('MMM'),
      host: 0,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          start: 'sidebarToggle, prev,next, title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
        events: this.fetchEvents,
        editable: false,
        eventResizableFromStart: true,
        dragScroll: false,
        dayMaxEvents: 2,
        navLinks: true,
        rerenderDelay: 350,
      }
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      A_GET_EVENT: 'CrmEventStore/A_GET_EVENT',
      A_GET_CALENDARS: 'CrmCalendarStore/A_GET_CALENDARS',
    }),
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      this[key] = Object.assign({}, this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`])
    },
    calendarConfig () {
      this.calendarOptions.eventClassNames = ({ event: calendarEvent }) => {
        const colorName = this.calendarsColor[calendarEvent._def.extendedProps.title] || 'info'
        return [ `bg-light-${colorName}`, 'fc-daygrid-block-event', 'fc-h-event' ]
      }
      this.calendarOptions.eventClick = ({ event: clickedEvent }) => {
        this.openModalEditEventShow(clickedEvent._def.extendedProps.id)
      }
    },
    async fetchEvents (info, successCallback) {
      try {
        if (!info) return

        const currentYear = this.$moment(info.start).add(15, 'd').format('YYYY')
        const currentMonth = this.$moment(info.start).add(15, 'd').format('MM')

        const response = await this.A_GET_CALENDARS({
          year: currentYear,
          month: currentMonth,
          host: this.host
        })

        if (this.isResponseSuccess(response)) {
          const events = JSON.parse(response.data[0].events_month)
          this.yearact =  response.data[0].current_year
          this.monthact = this.$moment(response.data[0].current_month,'MM').format('MMM')
          const data = events.map(el => ({
            id: el.id,
            url: '',
            title: el.title,
            start: `${ el.date } ${ el.from }`,
            end: `${ el.date } ${ el.to }`,
            allDay: false,
            extendedProps: {
              ...el,
              description: el.description
            }
          }))
          successCallback(data)
        } else {
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
        }
      } catch (error) {
        console.log('Something went wrong fetchEvents', error)
        this.showErrorSwal()
      }
    },
    async updatedEvent (body) {
      console.log('body', body)
      const existingEvent = this.calendarApi.getEventById(body.id)
      existingEvent.setProp('title', body.title)
      
      existingEvent.setDates(`${ body.date } ${ body.from }`, `${ body.date } ${ body.to }`, { allDay: false })

      const extendedPropsToUpdate = Object.keys(body)
      for (let index = 0; index < extendedPropsToUpdate.length; index++) {
        const propName = extendedPropsToUpdate[index]
        existingEvent.setExtendedProp(propName, body[propName])
      }
      this.$bvModal.hide('modal-event-edit')
    },
    async openModalEditEventShow (id) {
      try {
        const response = await this.A_GET_EVENT({ id })
        this.resetData('event')
        if (this.isResponseSuccess(response)) {
          this.event = response.data[0]
          this.event.user_id = { label: this.event.seller_name, value: this.event.seller_id }
          this.$bvModal.show('modal-event-edit')
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
      } catch (error) {
        console.log('Something went wrong getEvents', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
  },
  mounted () {
    this.calendarApi = this.$refs.refCalendar.getApi()
  },
  props: {},
}
</script>

<style lang="scss">
@import "@core/scss/vue/apps/calendar.scss";
</style>
