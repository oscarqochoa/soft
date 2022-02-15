<template>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col class="d-flex align-items-center justify-content-start">
        <div
          class="mr-1 d-flex align-items-center"
        >
          <b-button
            class="mr-05 btn-icon rounded-circle"
            size="sm"
            variant="transparent"
            @click="beforeMonth"
          >
            <tabler-icon
              size="20"
              icon="ChevronLeftIcon"
            />
          </b-button>
          <b-button
            class="mr-05 btn-icon rounded-circle"
            size="sm"
            variant="transparent"
            @click="afterMonth"
          >
            <tabler-icon
              size="20"
              icon="ChevronRightIcon"
            />
          </b-button>
          <h2
            class="d-flex align-items-center justify-content-center m-0"
          >
            {{ currentMonth }} {{ year }}
          </h2>
        </div>
      </b-col>
      <b-col class="d-flex align-items-center justify-content-end">
        <b-form-radio-group
          v-model="selectedOption"
          :options="calendarOptions"
          buttons
          button-variant="outline-primary"
        />
      </b-col>
    </b-row>
    <b-row v-if="selectedOption === 'Month'">
      <div class="w-100 seven-columns">
        <b-container
          v-for="(date, index) in calendarDates"
          :key="index"
          class="min-date-height border-top border-left"
          :class="{
            'border-right' : index%7 === 6,
            'border-bottom': Math.trunc(index / 7) + 1 === (calendarDates.length / 7),
          }"
        >
          <b-row
            :class="{'disabled-date': date.type === 'before' || date.type === 'after'}"
          >
            <b-col>
              <b-row>
                <slot
                  name="date-header"
                  :have-events="date.haveEvents"
                  :number-of-events="date.numberOfEvents"
                  :events="date.events ? date.events : []"
                  :short-day="daysList[index % 7]"
                  :full-day="completeDaysList[index % 7]"
                  :date="date.date"
                >
                  <p
                    class="text-center w-100 m-0 font-weight-bolder border-bottom py-50"
                    :class="{'current-date-class': currentDay.date() === date.date && month === currentDay.month()}"
                  >
                    {{ daysList[index % 7] }} {{ date.date }}
                  </p>
                </slot>
              </b-row>
              <b-row>
                <slot
                  name="date"
                  :events="date.events ? date.events : []"
                  :have-events="date.haveEvents"
                  :number-of-events="date.numberOfEvents"
                />
              </b-row>
              <b-row>
                <slot
                  name="date-footer"
                  :have-events="date.haveEvents"
                  :number-of-events="date.numberOfEvents"
                  :events="date.events ? date.events : []"
                />
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-row>
    <b-row v-if="selectedOption === 'List'">
      <div
        v-for="(day, key) in listEvents"
        :key="key"
        class="w-100"
      >
        <b-row>
          <b-col class="d-flex align-items-center justify-content-between px-50">
            <span>
              {{ currentMonth }} {{ day.date }}, {{ year }}
            </span>
            <span>
              {{ completeDaysList[$moment((monthsList.indexOf(currentMonth) + 1) +'/' + day.date +'/' + year).day()] }}
            </span>
          </b-col>
        </b-row>
        <b-row class="seven-columns">
          <div
            v-for="(event, index) in day.events"
            :key="index"
            class="min-date-height"
          >
            <slot
              name="date-list"
              :event="event"
            />
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import example from './example'

export default {
  name: 'LukeCalendar',
  props: {
    events: {
      type: Array,
      default: example,
    },
    dateLocation: {
      type: String,
      default: 'date',
    },
    dateLocationFormat: {
      type: String,
      default: 'YYYY-MM-DD',
    },
  },
  data() {
    return {
      month: '',
      year: '',
      currentMonth: '',
      currentDay: '',
      lastDayOfCurrentMonth: '',
      firstDayOfCurrentMonth: '',
      calendarOptions: ['Month', 'List'],
      selectedOption: 'Month',
      monthsList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      completeDaysList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      calendarDates: [],
    }
  },
  computed: {
    listEvents() {
      return this.calendarDates.filter(val => val.haveEvents === true)
    },
  },
  created() {
    this.currentDay = this.$moment()
    this.month = this.currentDay.month()
    this.year = this.currentDay.year()
    this.assignMonth()
  },
  methods: {
    assignMonth() {
      this.currentMonth = this.monthsList[this.month]
      const currentMonthInfo = this.$moment(`${this.month + 1}/01/${this.year}`)
      const beforeMonth = (this.month - 1 === -1) ? 11 : (this.month - 1)
      const beforeMonthInfo = this.$moment(`${beforeMonth + 1}/01/${this.year}`)
      const lastDayOfBeforeMonth = beforeMonthInfo.endOf('month')
      this.lastDayOfCurrentMonth = currentMonthInfo.endOf('month')
      this.calendarDates = []
      if (lastDayOfBeforeMonth.day() < 6) {
        for (let i = 0; i <= lastDayOfBeforeMonth.day(); i += 1) {
          this.calendarDates.push({
            date: lastDayOfBeforeMonth.date() - (lastDayOfBeforeMonth.day() - i),
            type: 'before',
            haveEvents: false,
            numberOfEvents: 0,
          })
        }
      }
      for (let i = 1; i <= this.lastDayOfCurrentMonth.date(); i += 1) {
        const eventsOfCurrentDay = this.events.filter(event => {
          const eventDay = this.$moment(event[this.dateLocation], this.dateLocationFormat)
          return eventDay.date() === i
        })
        this.calendarDates.push({
          date: i,
          type: 'current',
          events: eventsOfCurrentDay,
          haveEvents: eventsOfCurrentDay.length > 0,
          numberOfEvents: eventsOfCurrentDay.length,
        })
      }
      if (this.lastDayOfCurrentMonth.day() < 6) {
        for (let i = 1; i <= 6 - this.lastDayOfCurrentMonth.day(); i += 1) {
          this.calendarDates.push({
            date: i,
            type: 'after',
            haveEvents: false,
            numberOfEvents: 0,
          })
        }
      }
      console.log(this.$moment('03/16/1999', 'DD-MM-YYYY'))
    },
    beforeMonth() {
      this.month -= 1
      if (this.month === -1) {
        this.month = 11
        this.year -= 1
      }
      this.assignMonth()
    },

    afterMonth() {
      this.month += 1
      if (this.month === 12) {
        this.month = 0
        this.year += 1
      }
      this.assignMonth()
    },
  },
}
</script>

<style scoped>
.mr-05 {
  margin-right: 5px;
}
.seven-columns{
  display: grid !important;
  grid-template-columns: repeat(7, 1fr) !important;
}

.sticky-top-left {
  top: 5px !important;
  left: 5px !important;
}

.min-date-height {
  min-height: 150px;
  overflow-x: hidden;
}

.disabled-date {
  opacity: 0.5;
}
.current-date-class {
  background-color: #00D25B;
  color: white;
}
.scroll-date-info{
}
.scroll-date-info::-webkit-scrollbar {
  width: 0;
}
.min-date-height {
  border-color: #C4C4C4 !important;
}
</style>
