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
      calendario
    </b-row>
    <b-row v-if="selectedOption === 'List'">
      lista
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CalendarTest',
  data() {
    return {
      month: '',
      year: '',
      currentMonth: '',
      lastDayOfCurrentMonth: '',
      firstDayOfCurrentMonth: '',
      calendarOptions: ['Month', 'List'],
      selectedOption: 'Month',
      monthsList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      calendarDates: [],
    }
  },
  created() {
    const currentDay = this.$moment()
    this.month = currentDay.month()
    this.year = currentDay.year()
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
      this.firstDayOfCurrentMonth = currentMonthInfo.startOf('month')
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
</style>
