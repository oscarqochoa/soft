<template>
  <div>
    <b-card
      no-body
    >

      <b-row class="p-1">
        <b-col
          md="auto"
          sm="auto"
        >
          <div class="d-inline-flex all-text">
            <span class="pr-1 ml-2 day">Day </span>
            <span>
              {{ today | myGlobal }}
            </span>
          </div>
        </b-col>
        <b-col
          md="auto"
          sm="auto"
        >
          <div class="d-inline-flex">
            <b-button
              :disabled="today < '2021-04-15'"
              variant="info"
              class="btn-icon rounded-circle mr-1 "
              @click="changeDateCard(-1)"
            >
              <feather-icon
                icon="ChevronLeftIcon"
              />
            </b-button>
            <b-button
              :disabled="currentDay === today"
              variant="info"
              class="btn-icon rounded-circle"
              @click="changeDateCard(1)"
            >
              <feather-icon
                icon="ChevronRightIcon"
              />
            </b-button>

          </div>
        </b-col>
        <b-col
          md="auto"
          sm="auto"
        >
          <b-button

            v-b-tooltip.hover
            class="btn btn-filters "
            variant="primary"
            title="FILTERS"
            @click="advanceFilter = !advanceFilter"
          >

            <span v-text="advanceFilter ? 'BASIC' : 'ADVANCE'" />
          </b-button>
        </b-col>
        <b-col
          md="3"
          sm="auto"
        >
          <div
            v-if="advanceFilter"

            class=" ml-2 "
          >

            <v-select
              v-model="programFilter"
              class="w-100"
              :options="OptionProgram"
              label="option"
              @input="getFilterCard(),getGraphics(),firstGraphics()"
            />

          </div>
        </b-col>
        <b-col
          md="3"
          sm="auto"
        >
          <div
            v-if="advanceFilter"

            class=" ml-2 "
          >

            <v-select
              v-model="userFilter"
              :options="users"
              label="user_name"
              @input="getFilterCard(),getGraphics(),firstGraphics()"
            />

          </div>
        </b-col>
      </b-row>
      <!--      <Card-->
      <!--        :key="cardUpdate"-->
      <!--        :data="card"-->
      <!--        :type="typeCard"-->
      <!--        :date_init="dateRange.startDate"-->
      <!--        :date_end="dateRange.endDate"-->
      <!--        :program="programFilter"-->
      <!--        :user="userFilter"-->
      <!--      />-->

    </b-card>
    <caro-card
      v-if="subscribersGained.analyticsData"

      :key="cardUpdate"

      :chart-data="subscribersGained.series"
      :data="card"
      :type="typeCard"
      :date_init="dateRange.startDate"
      :date_end="dateRange.endDate"
      :program="programFilter"
      :user="userFilter"
    />

    <div class="m-0">
      <b-card
        :title="`${chardOption.option} Balance`"
      >

        <b-row>
          <b-col md="2">
            <v-select
              v-model="chardOption"
              class="per-page-selector"
              style="font-size: 15px"
              :clearable="false"
              label="option"
              :options="arrayOptions"
              @input="getGraphics"
            />
          </b-col>
          <b-col md="auto">
            <span

              style="padding-top: 7px; "
              class="all-text day d-inline-flex pl-2 "
            >Current {{ showGraphForWeek ? "Week" : "Month" }}</span>
          </b-col>
          <b-col md="auto">
            <span
              style="padding-top: 7px"
              class="all-text d-inline-flex "
            >
              {{
                (showGraphForWeek ? firstDay : firstDayOfMonth)
                  | myGlobal
              }}
              -
              {{
                (showGraphForWeek ? endDay : endDayOfMonth) | myGlobal
              }}
            </span>
          </b-col>
          <b-col md="auto">
            <b-button

              variant="info"
              class="btn-icon rounded-circle mr-1 "
              @click="showGraphForWeek ? changeWeek(-1) : changeMonth(-1)"
            >
              <feather-icon
                icon="ChevronLeftIcon"
              />
            </b-button>
            <b-button

              variant="info"
              class="btn-icon rounded-circle"
              :disabled="validateDate > currentDay"
              @click="showGraphForWeek ? changeWeek(1) : changeMonth(1)"
            >
              <feather-icon
                icon="ChevronRightIcon"
              />
            </b-button>
          </b-col>

          <div class="d-flex align-content-center mb-1 mb-sm-0 col-lg-3">
            <b-button
              v-b-tooltip.hover
              style="padding-top: 7px"
              size="30"
              class="btn-show "
              variant="primary"
              title="CHANGE"
              @click="(showGraphForWeek = !showGraphForWeek),getGraphics(),firstGraphics()"
            >
              <feather-icon
                icon="CalendarIcon"
              />
              {{ showGraphForWeek ? "SHOW MONTH" : "SHOW WEEK" }}
            </b-button>

          </div>
        </b-row>
        <app-echart-line-social-network
          :key="idEchart"
          :option-data="option"
        />
      </b-card>
    </div>
  </div></template>

<script>

import moment from 'moment'
import vSelect from 'vue-select'
import { kFormatter } from '@core/utils/filter'
import DashboardService from '@/views/social-network/views/dashboard2/dashboard.service'
import Card from '@/views/social-network/views/dashboard2/components/Card.vue'
import AppEchartLineSocialNetwork
from '@/views/social-network/views/dashboard2/components/chard/AppEchartLineSocialNetwork.vue'
import CaroCard from '@/views/social-network/views/dashboard2/components/CaroCard.vue'

export default {
  components: {
    vSelect,
    Card,
    AppEchartLineSocialNetwork,
    CaroCard,

  },
  data() {
    return {

      subscribersGained: { series: [{ data: [28, 40, 36, 52, 38, 60, 55] }], analyticsData: { subscribers: 92600 } },
      idEchart: 0,
      option: {
        xAxisData: [

        ],

        series: [

        ],
      },
      validateDate: null,
      firstDay: moment()
        .startOf('week')
        .add(1, 'days')
        .format('YYYY-MM-DD 00:00:00'),
      endDay: moment()
        .endOf('week')
        .add(1, 'days')
        .format('YYYY-MM-DD 00:00:00'),
      firstDayOfMonth: moment().startOf('month').format('YYYY-MM-DD 00:00:00'),
      endDayOfMonth: moment().endOf('month').format('YYYY-MM-DD 00:00:00'),
      showGraphForWeek: false,
      dateRange: {
        startDate: moment(new Date()).format('YYYY-MM-DD 00:00:00'),
        endDate: moment(new Date()).format('YYYY-MM-DD 00:00:00'),
      },
      currentDay: moment().format('YYYY-MM-DD 00:00:00'),
      typeCard: null,
      cardUpdate: 0,
      chardOption: {},
      graph: [],
      card: [
        {

          title: 'replies',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #6943E6 24.3%, #8A67FF 99.88%, #7A6AAD 99.88%)!important;border: 1px solid #4015D0;',
          styleModal:
              'background: linear-gradient(75.42deg, #6943E6 24.3%, #8A67FF 99.88%, #7A6AAD 99.88%)!important;',
          icon: 'MessageCircleIcon',
          cursor: true,
          color: '#744FEF',
          back: 'background-color: rgba(143, 95, 232, 0.12)!important',
          series: [],
          key: 0,
        },
        {
          title: 'leads',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #E84E4D 24.3%, #FF7170 99.88%)!important;border: 1px solid #D73A39;',
          styleModal:
              'background: linear-gradient(75.42deg, #E84E4D 24.3%, #FF7170 99.88%)!important;',
          icon: 'UsersIcon',
          cursor: true,
          color: '#E84E4D',
          back: 'background-color: rgba(252, 66, 74, 0.12)!important',
          series: [],
          key: 0,

        },
        {
          title: 'answers',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #E2764A 24.3%, #FF996F 99.88%)!important;border: 1px solid #CA4F1D;',
          styleModal:
              'background: linear-gradient(75.42deg, #E2764A 24.3%, #FF996F 99.88%)!important;',
          icon: 'MessageSquareIcon',
          cursor: true,
          color: '#E67B4F',
          back: 'background-color: rgba(255, 159, 67, 0.12)!important',
          series: [],
          key: 0,
        },
        {
          title: 'mobiles',
          color: '#4EC4F0',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #4BBFEA 24.3%, #54D1FF 99.88%)!important;border: 1px solid #279FCB;',
          styleModal: 'background: linear-gradient(75.42deg, #4BBFEA 24.3%, #54D1FF 99.88%)!important;',
          icon: 'SmartphoneIcon',
          cursor: true,
          back: 'background-color: rgba(0, 144, 231, 0.12)!important',
          series: [],
          key: 0,
        },
        {
          title: 'appointments',
          color: '#515CEE',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #4B56E9 24.3%, #4B56E9 24.3%, #6671FF 99.88%)!important;border: 1px solid #3B45D0;',
          styleModal:
              'background: linear-gradient(75.42deg, #4B56E9 24.3%, #4B56E9 24.3%, #6671FF 99.88%)!important;',
          icon: 'CalendarIcon',
          cursor: true,
          back: 'background-color: rgba(143, 95, 232, 0.12)!important',
          series: [],
          key: 0,
        },
        {
          title: 'productivity',
          color: '#40A094',
          data: 0,
          style: 'background: linear-gradient(75.42deg, #3ACDBB 24.3%, #42EDD8 99.88%)!important;border: 1px solid #14AC9A;',
          styleModal: 'background: linear-gradient(75.42deg, #3ACDBB 24.3%, #42EDD8 99.88%)!important;',

          icon: 'PercentIcon',
          cursor: false,
          back: 'background-color: rgba(0, 210, 91, 0.12)!important',
          series: [],
          key: 0,
        },
      ],
      arrayOptions: [
        {
          id: 2,
          option: 'Replies',
        },
        {
          id: 1,
          option: 'Leads',
        },
        {
          id: 3,
          option: 'Answers',
        },
        {
          id: 4,
          option: 'Mobiles',
        },
        {
          id: 5,
          option: 'Appointment',
        },
        {
          id: 6,
          option: 'Productivity',
        },
        {
          id: 7,
          option: 'Seller appointment',
        },
        {
          id: 8,
          option: 'Weekly Average',
        },
      ],
      today: moment().format('YYYY-MM-DD 00:00:00'),
      advanceFilter: false,
      programFilter: [{
        id: 0,
        option: 'All programs',
      }],
      userFilter: [{
        id: '0',
      }],
      OptionProgram: [
        {
          id: 0,
          option: 'All programs',
        },
        {
          id: 1,
          option: 'Business',
        },
        {
          id: 2,
          option: 'Boost Credit',
        },
        {
          id: 3,
          option: 'Credit Experts',
        },
        {
          id: 5,
          option: 'Tax Research',
        },

      ],

      users: [],
      juniorUser: false,
      labelGraph: null,
      type: null,
      labelsDays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      keychart: 0,
    }
  },
  watch: {
    showGraphForWeek(newVal, oldVal) {
      this.firstDay = moment()
        .startOf('week')
        .add(1, 'days')
        .format('YYYY-MM-DD 00:00:00')
      this.endDay = moment(this.firstDay)
        .add(6, 'days')
        .format('YYYY-MM-DD 00:00:00')
      this.firstDayOfMonth = moment()
        .startOf('month')
        .format('YYYY-MM-DD 00:00:00')
      this.endDayOfMonth = moment()
        .endOf('month')
        .format('YYYY-MM-DD 00:00:00')
      this.validateDate = this.showGraphForWeek
        ? this.endDay
        : this.endDayOfMonth
    },
    selectedOption() {
      this.getGraphics()
    },
  },
  created() {
    this.$store.commit('app/SET_LOADING', true)
    this.programFilter.id = 0
    this.chardOption.option = 'Replies'
    this.chardOption.id = 2
    this.getUsers()
    this.getGraphics()
    this.firstGraphics()
    this.validateDate = this.showGraphForWeek ? this.endDay : this.endDayOfMonth
  },
  mounted() {
    this.getFilterCard()
  },
  methods: {
    kFormatter,
    statusColor(name) {
      let color = ''
      switch (name) {
        case 'Leads':
          color = '#E84E4D'
          break
        case 'Replies':

          color = '#744FEF'
          break
        case 'Answers':
          color = '#E67B4F'
          break
        case 'Mobiles':
          color = '#4EC4F0'
          break
        case 'Appointments':
          color = '#515CEE'
          break
        case 'Productivity':
          color = '#40A094'
          break
        case 'Seller Appointments':
          color = '#e83e8c'
          break
        default:
          color = '#e83e8c'
          break
      }
      return color
    },
    prueba(type) {
      const x = []

      if (type === 'sellers') {
        this.graph.map(data => {
          x.push(data.string)
        })
        this.option.xAxisData = x
      } else if (type === 'multi') {
        this.option.xAxisData = this.labelsDays
      } else {
        this.graph.map(data => {
          x.push(data.due_date)
        })
        this.option.xAxisData = x
      }

      const info = []
      if (type === 'multi') {
        this.option.series = []
        for (let i = 0; i < this.graph.length; i++) {
          this.option.series.push(
            {
              type: 'line', name: this.graph[i].name, data: this.graph[i].count, color: this.graph[i].color,
            },
          )
        }
      } else {
        this.graph.map(data => {
          info.push((data.count).toString())
        })

        const normal = {
          type: 'line', name: this.labelGraph, data: info, color: this.statusColor(this.labelGraph),
        }
        console.log(info, 'indo')
        this.option.series = []
        this.option.series.push(
          normal,
        )
      }
      // eslint-disable-next-line no-plusplus
      this.idEchart++
    },
    async getUsers() {
      try {
        const params = {
          roles: '[]',
          type: '1',
          junior: this.juniorUser,

        }
        const data = await DashboardService.getUsers(params)
        const firstOption = {
          user_name: 'All users',
          id: 0,
        }

        data.data.unshift(firstOption)

        this.users = data.data
        this.userFilter = this.users[0].user_name

        return this.users
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
    async getFilterCard() {
      try {
        const params = {
          from: moment(this.dateRange.startDate).format('Y-MM-D 00:00:00'),
          to: moment(this.dateRange.endDate).format('Y-MM-D 00:00:00'),
          program: this.programFilter.id,
          user: this.userFilter.id,

        }
        const data = await DashboardService.getFilterCardSocial(params)

        this.card[1].data = data.data.leads
        this.card[0].data = data.data.replies
        this.card[2].data = data.data.answer
        this.card[3].data = data.data.mobiles_act
        this.card[3].data_rec = data.data.mobiles_rec
        this.card[4].data = data.data.appointments
        this.card[5].data = `${data.data.productivity}%`

        return data
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

    changeDateCard(addDay) {
      this.today = moment(this.today).add(addDay, 'days').format('YYYY-MM-DD')
      this.currentDay = moment().format('YYYY-MM-DD')
      this.dateRange.startDate = this.today
      this.dateRange.endDate = this.today
      this.changeOverlay = true
      this.getFilterCard()
      this.keychart++
    },
    changeMonth(month) {
      this.firstDayOfMonth = moment(this.firstDayOfMonth)
        .add(month, 'month')
        .startOf('month')
        .format('YYYY-MM-DD 00:00:00')
      this.endDayOfMonth = moment(this.endDayOfMonth)
        .add(month, 'month')
        .endOf('month')
        .format('YYYY-MM-DD 00:00:00')
      this.getGraphics()
      this.firstGraphics()
      this.validateDate = this.showGraphForWeek
        ? this.endDay
        : this.endDayOfMonth
    },

    changeWeek(week) {
      this.firstDay = moment(this.firstDay)
        .add(week, 'week')
        .format('YYYY-MM-DD 00:00:00')
      this.endDay = moment(this.firstDay)
        .add(6, 'days')
        .format('YYYY-MM-DD 00:00:00')
      this.getGraphics()
      this.firstGraphics()
      this.validateDate = this.showGraphForWeek
        ? this.endDay
        : this.endDayOfMonth
    },
    async getGraphics() {
      try {
        const params = {
          from: this.showGraphForWeek ? this.firstDay : this.firstDayOfMonth,
          to: this.showGraphForWeek ? this.endDay : this.endDayOfMonth,
          program: this.programFilter.id,
          user: this.userFilter.id,

        }
        this.juniorUser = false
        if (this.chardOption.id === 1) {
          const data = await DashboardService.getLeadsGraphic(params)

          this.graph = data.data
          this.labelGraph = 'Leads'
          this.type = ''
        } else if (this.chardOption.id === 2) {
          const data = await DashboardService.getRepliesGraphic(params)
          console.log(data.data)
          this.graph = data.data

          this.labelGraph = 'Replies'
          this.type = ''
        } else if (this.chardOption.id === 3) {
          const data = await DashboardService.getAnswersGraphic(params)
          this.graph = data.data
          this.labelGraph = 'Answers'
          this.type = ''
        } else if (this.chardOption.id === 4) {
          const data = await DashboardService.getMobilesGraphic(params)
          this.graph = data.data
          this.labelGraph = 'Mobiles'
          this.type = ''
        } else if (this.chardOption.id === 5) {
          const data = await DashboardService.getTasksGraphic(params)
          this.graph = data.data
          this.labelGraph = 'Appointments'
          this.type = ''
        } else if (this.chardOption.id === 6) {
          const data = await DashboardService.getProductivityGraphic(params)
          this.graph = data.data
          this.labelGraph = 'Productivity'
          this.juniorUser = true
          this.type = ''
        } else if (this.chardOption.id === 7) {
          const data = await DashboardService.getTaskCatcherGraphic(params)
          this.graph = data.data
          this.labelGraph = 'Seller Appointments'
          this.isDate = false
          this.type = 'sellers'
        } else if (this.chardOption.id === 8) {
          const data = await DashboardService.getMultiChartGraphic(params)
          this.graph = data.data
          this.type = 'multi'
        }
        this.prueba(this.type)

        return this.graph
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

    // eslint-disable-next-line consistent-return
    async firstGraphics() {
      try {
        const params = {
          from: this.showGraphForWeek ? this.firstDay : this.firstDayOfMonth,
          to: this.showGraphForWeek ? this.endDay : this.endDayOfMonth,
          program: this.programFilter.id,
          user: this.userFilter.id,

        }
        this.juniorUser = false

        const [replies, lead, answers, mobiles, appointments, productivity] = await Promise.all([DashboardService.getRepliesGraphic(params), DashboardService.getLeadsGraphic(params),
          DashboardService.getAnswersGraphic(params), DashboardService.getAnswersGraphic(params), DashboardService.getMobilesGraphic(params),
          DashboardService.getTasksGraphic(params), DashboardService.getProductivityGraphic(params)])

        const infoReplies = []
        this.card[0].series = []
        replies.data.map(data => {
          infoReplies.push((data.count).toString())
        })

        this.card[0].series.push({
          data: infoReplies,
        })
        this.card[0].key++

        const infoLead = []
        this.card[1].series = []
        lead.data.map(data => {
          infoLead.push((data.count).toString())
        })

        this.card[1].series.push({
          data: infoLead,
        })
        this.card[1].key++
        console.log(this.card[1].series)

        const infoAnswers = []
        this.card[2].series = []
        answers.data.map(data => {
          infoAnswers.push((data.count).toString())
        })

        this.card[2].series.push({
          data: infoAnswers,
        })
        this.card[2].key++

        const infoMobiles = []
        this.card[3].series = []
        mobiles.data.map(data => {
          infoMobiles.push((data.count).toString())
        })

        this.card[3].series.push({
          data: infoMobiles,
        })
        this.card[3].key++
        console.log(this.card[3].series)

        const infoAppointments = []
        this.card[4].series = []
        appointments.data.map(data => {
          infoAppointments.push((data.count).toString())
        })

        this.card[4].series.push({
          data: infoAppointments,
        })
        this.card[4].key++

        const infoProductivity = []
        this.card[5].series = []
        productivity.data.map(data => {
          infoProductivity.push((data.count).toString())
        })

        this.card[5].series.push({
          data: infoProductivity,
        })
        this.card[5].key++

        if (productivity.status === 200) {
          this.$store.commit('app/SET_LOADING', false)
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
}
</script>

<style scoped>

.day{
  font-weight: bold;
}

.all-text {

  color: #818181;
  font-size: large;
  padding-top: 5px;
}

.btn-filters {

  color: white !important;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25) !important;
  width: 127px;
  height: 38px;
  left: 454px;
  top: 215px;
  border-radius: 40px !important;
}

.btn-show {

  color: white !important;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25) !important;
  width: 150px;
  height: 38px;
  left: 454px;
  top: 215px;
  border-radius: 40px !important;

}
</style>
