<template>
  <b-container class="app-calendar overflow-hidden border" fluid>
    <b-row v-if="!isModal" class="mt-1">
      <b-col class="d-flex align-items-center justify-content-start">
        <div class="mr-1">
          <b-button variant="outline-info" @click="showFilter = !showFilter">
            Filter by Seller
            <amg-icon icon="FilterIcon" style="margin-left: 5px" />
          </b-button>
        </div>
        <div v-if="showFilter" style="width: 20%">
          <v-select
            v-model="host"
            :options="sellers"
            :reduce="val => val.id"
            @input="refetchEvents"
          />
        </div>
      </b-col>
    </b-row>
    <b-row class="no-gutters">
      <!-- Calendar -->
      <b-col cols="12" class="position-relative zindex-0">
        <div class="card shadow-none border-0 mb-0 rounded-0">
          <div class="card-body pb-0">
            <full-calendar ref="refCalendar" :options="calendarOptions" class="full-calendar">
              <template #eventContent="slotProps">
                <div class="fc-event-main mb-50">
                  <div class="fc-event-main-frame">
                    <div class="fc-event-time">{{ slotProps.event.start | myHourTime }}</div>
                    <div class="fc-event-title-container">
                      <div class="fc-event-title fc-sticky">{{ slotProps.event.title }}</div>
                    </div>
                  </div>
                </div>
                <b-container
                  class="fc-event-content w-100 d-flex flex-column align-items-start justify-content-center"
                >
                  <b-row class="text-center">{{ slotProps.event.extendedProps.seller_name }}</b-row>
                  <b-row class="mt-2 mt-xl-0 w-100">
                    <b-col class="py-50 px-50">
                      <div class="text-left">
                        <amg-icon icon="PhoneCallIcon" class="mr-50" />
                        <span
                          class="font-weight-bold"
                        >{{ slotProps.event.extendedProps.lead_mobile }}</span>
                      </div>
                    </b-col>
                    <b-col class="py-50 px-50">
                      <div class="text-left">
                        <amg-icon icon="UserIcon" class="mr-50" />
                        <span
                          class="font-weight-bold"
                          style="white-space: pre-wrap;"
                        >{{ slotProps.event.extendedProps.lead_name }}</span>
                      </div>
                    </b-col>
                    <b-col class="py-50 px-50">
                      <div class="text-left">
                        <amg-icon icon="WatchIcon" class="mr-50" />
                        <span
                          class="font-weight-bold"
                        >{{ slotProps.event.start | myHourTime }} - {{ slotProps.event.end | myHourTime }}</span>
                      </div>
                    </b-col>
                    <b-col class="py-50 px-50">
                      <div class="text-danger text-left">
                        <amg-icon icon="WatchIcon" class="mr-50" />
                        <span
                          class="font-weight-bold"
                        >{{ slotProps.event.extendedProps.real_time | myHourTime }}({{ slotProps.event.extendedProps.state }})</span>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </template>
            </full-calendar>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- modal EVENT EDIT -->
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
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :event="event"
        @updated="updatedEvent"
      />
    </b-modal>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import vSelect from "vue-select";
import FullCalendar from "@fullcalendar/vue";
import Ripple from "vue-ripple-directive";
// Full Calendar Plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import ModalEventEdit from "@/views/crm/views/Lead/lead-event/ModalEventEdit.vue";

export default {
  components: {
    FullCalendar,
    ModalEventEdit,
    vSelect
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token"
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      sellers: state => state["crm-store"].sellersCrm
      /* S_TEMPLATES: event => event.CrmTemplateStore.S_TEMPLATES */
    })
  },
  created() {
    this.$store.dispatch("crm-store/getSellers", {
      module: 2,
      body: {
        roles: "[1,5,2]",
        type: "1"
      }
    });
    this.authUser = this.currentUser;
    this.setDataBlank("event");
    this.calendarConfig();
  },
  directives: { Ripple },
  data() {
    return {
      authUser: {},
      calendarApi: null,
      calendarsColor: {
        TEL: "primary",
        CN: "success",
        Personal: "danger",
        Family: "warning",
        ETC: "info"
      },
      showFilter: false,
      event: {
        attend: null,
        date: "",
        from: "",
        id: null,
        location: "",
        real_time: "",
        title: "",
        to: ""
      },
      modul: 2,
      onlyRead: false,
      lead: new Object(),
      yearact: this.$moment().format("YYYY"),
      monthact: this.$moment().format("MMM"),
      host: 0,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          start: "sidebarToggle, prev,next, title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
        },
        events: this.fetchEvents,
        editable: false,
        eventResizableFromStart: true,
        dragScroll: false,
        dayMaxEvents: 2,
        navLinks: true,
        rerenderDelay: 350
      }
    };
  },
  methods: {
    ...mapActions({
      A_GET_EVENT: "CrmEventStore/A_GET_EVENT",
      A_GET_CALENDARS: "CrmCalendarStore/A_GET_CALENDARS"
    }),
    refetchEvents() {
      this.calendarApi.refetchEvents();
    },
    setDataBlank(key) {
      this[`blank${key.charAt(0).toUpperCase()}${key.slice(1)}`] = {
        ...this[key]
      };
    },
    resetData(key) {
      this[key] = {
        ...this[`blank${key.charAt(0).toUpperCase()}${key.slice(1)}`]
      };
    },
    calendarConfig() {
      this.calendarOptions.eventClassNames = ({ event: calendarEvent }) => {
        const colorName =
          this.calendarsColor[calendarEvent._def.extendedProps.title] || "info";
        return [
          `bg-light-${colorName}`,
          "fc-daygrid-block-event",
          "fc-h-event"
        ];
      };
      this.calendarOptions.eventClick = ({ event: clickedEvent }) => {
        this.openModalEditEventShow(clickedEvent._def.extendedProps.id);
      };
    },
    async fetchEvents(info, successCallback) {
      try {
        if (!info) return;
        this.addPreloader();
        const currentYear = this.$moment(info.start)
          .add(15, "d")
          .format("YYYY");
        const currentMonth = this.$moment(info.start)
          .add(15, "d")
          .format("MM");
        if (this.isModal) this.host = this.authUser.user_id;
        const response = await this.A_GET_CALENDARS({
          year: currentYear,
          month: currentMonth,
          host: this.host ? this.host : 0
        });

        if (this.isResponseSuccess(response)) {
          const events = JSON.parse(response.data[0].events_month);
          this.yearact = response.data[0].current_year;
          this.monthact = this.$moment(
            response.data[0].current_month,
            "MM"
          ).format("MMM");
          const data = events.map(el => ({
            id: el.id,
            url: "",
            title: el.title,
            start: `${el.date} ${el.from}`,
            end: `${el.date} ${el.to}`,
            allDay: false,
            extendedProps: {
              ...el,
              description: el.description
            }
          }));
          successCallback(data);
          this.removePreloader();
        } else {
          this.showToast(
            "warning",
            "top-right",
            "Warning!",
            "AlertTriangleIcon",
            `Something went wrong. ${response.message}`
          );
        }
      } catch (error) {
        console.log("Something went wrong fetchEvents", error);
        this.showErrorSwal(error);
        this.removePreloader();
      }
    },
    updatedEvent(body) {
      this.refetchEvents();
      this.$bvModal.hide(
        this.isModal ? "modal-event-edit-modal" : "modal-event-edit"
      );
    },
    async openModalEditEventShow(id) {
      try {
        const response = await this.A_GET_EVENT({ id });
        this.resetData("event");
        if (this.isResponseSuccess(response)) {
          this.event = response.data[0];
          this.event.user_id = {
            label: this.event.seller_name,
            value: this.event.seller_id
          };
          this.$bvModal.show(
            this.isModal ? "modal-event-edit-modal" : "modal-event-edit"
          );
        } else
          this.showToast(
            "warning",
            "top-right",
            "Warning!",
            "AlertTriangleIcon",
            `Something went wrong. ${response.message}`
          );
      } catch (error) {
        console.log("Something went wrong getEvents", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    }
  },
  mounted() {
    this.calendarApi = this.$refs.refCalendar.getApi();
    console.log(this.calendarApi);
  },
  props: {
    isModal: {
      required: false,
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
@import "@core/scss/vue/apps/calendar.scss";
.fc-popover-body {
  overflow: scroll;
  height: 300px;
  overflow-x: hidden;
}
.fc-scroller::-webkit-scrollbar {
  width: 0;
}
.fc-popover-body::-webkit-scrollbar {
  width: 5px;
}
/* Track */
.fc-scroller::-webkit-scrollbar,
.fc-popover-body::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.fc-scroller::-webkit-scrollbar,
.fc-popover-body::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.fc-scroller::-webkit-scrollbar,
.fc-popover-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.fc-timeGridWeek-button {
  display: none !important;
}
.fc-timeGridDay-button {
  display: none !important;
}
</style>
