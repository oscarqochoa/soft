<template>
  <div>
    <b-card
      no-body
    >
      <b-row>
        <b-col
          md="11"
          class="d-inline-flex justify-content-start "
        >
          <b-col
            md="1"
            class="p-1"
          >
            <div class="d-inline-flex all-text">
              <span class="pr-1 day">Day </span>
              <span>
                {{ today | myGlobal }}
              </span>
            </div>

          </b-col>

          <b-col
            md="1"
            class="pl-3  "
            style="padding-top: 10px"
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
                :disabled="currentDay == today"
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
            md="1"
            style="padding-top: 10px"
          >
            <div>
              <b-button

                v-b-tooltip.hover
                class="btn btn-filters "
                variant="primary"
                title="FILTERS"
                @click="advanceFilter = !advanceFilter"
              >

                <span v-text="advanceFilter ? 'BASIC' : 'ADVANCE'" />
              </b-button>

            </div>

          </b-col>
          <b-col md="2">
            <div
              v-if="advanceFilter"
              style="padding-top: 10px"
              class=" ml-2 "
            >

              <v-select
                v-model="programFilter"
                :options="OptionProgram"
                label="option"
                @input="getFilterCard"
              />

            </div>
          </b-col>
          <b-col
            md="2"
            style="padding-top: 10px"
          >

            <div
              v-if="advanceFilter"
            >

              <v-select
                v-model="userFilter"
                :options="users"
                label="user_name"
                @input="getFilterCard"
              />

            </div>
          </b-col>

        </b-col>
      </b-row>
      <Card
        :key="cardUpdate"
        :data="card"
        :type="typeCard"
        :date_init="this.dateRange.startDate"
        :date_end="this.dateRange.endDate"
        :program="programFilter"
        :user="userFilter"
      />
    </b-card>
  </div>
</template>

<script>

import moment from 'moment'
import vSelect from 'vue-select'
import DashboardService from '@/views/social-network/views/dashboard/dashboard.service'
import Card from '@/views/social-network/views/dashboard/components/Card.vue'

export default {
  components: {
    vSelect,
    Card,

  },
  data() {
    return {
      dateRange: {
        startDate: moment(new Date()).format('YYYY-MM-DD 00:00:00'),
        endDate: moment(new Date()).format('YYYY-MM-DD 00:00:00'),
      },
      currentDay: moment().format('YYYY-MM-DD 00:00:00'),
      typeCard: null,
      cardUpdate: 0,
      card: [
        {
          title: 'replies',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #6943E6 24.3%, #8A67FF 99.88%, #7A6AAD 99.88%)!important;border: 1px solid #4015D0;',
          styleModal:
              'background: linear-gradient(75.42deg, #6943E6 24.3%, #8A67FF 99.88%, #7A6AAD 99.88%)!important;',
          icon: '/images/social-network/dashboard/replies.png',
          cursor: true,
        },
        {
          title: 'leads',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #E84E4D 24.3%, #FF7170 99.88%)!important;border: 1px solid #D73A39;',
          styleModal:
              'background: linear-gradient(75.42deg, #E84E4D 24.3%, #FF7170 99.88%)!important;',
          icon: '/images/social-network/dashboard/leads.png',
          cursor: true,
        },
        {
          title: 'answers',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #E2764A 24.3%, #FF996F 99.88%)!important;border: 1px solid #CA4F1D;',
          styleModal:
              'background: linear-gradient(75.42deg, #E2764A 24.3%, #FF996F 99.88%)!important;',
          icon: '/images/social-network/dashboard/answers.png',
          cursor: true,
        },
        {
          title: 'mobiles',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #4BBFEA 24.3%, #54D1FF 99.88%)!important;border: 1px solid #279FCB;',
          styleModal: 'background: linear-gradient(75.42deg, #4BBFEA 24.3%, #54D1FF 99.88%)!important;',
          icon: '/images/social-network/dashboard/mobiles.png',
          cursor: true,
        },
        {
          title: 'appointments',
          data: 0,
          style:
              'background: linear-gradient(75.42deg, #4B56E9 24.3%, #4B56E9 24.3%, #6671FF 99.88%)!important;border: 1px solid #3B45D0;',
          styleModal:
              'background: linear-gradient(75.42deg, #4B56E9 24.3%, #4B56E9 24.3%, #6671FF 99.88%)!important;',
          icon: '/images/social-network/dashboard/appointments.png',
          cursor: true,
        },
        {
          title: 'productivity',
          data: 0,
          style: 'background: linear-gradient(75.42deg, #3ACDBB 24.3%, #42EDD8 99.88%)!important;border: 1px solid #14AC9A;',
          styleModal: 'background: linear-gradient(75.42deg, #3ACDBB 24.3%, #42EDD8 99.88%)!important;',

          icon: '/images/social-network/dashboard/productivity.png',
          cursor: false,
        },
      ],
      today: moment()
        .format('YYYY-MM-DD'),
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
    }
  },

  created() {
    this.programFilter.id = 0

    this.getUsers()
  },
  mounted() {
    this.getFilterCard()
  },
  methods: {

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
        console.log(this.programFilter, 'program')
        console.log(this.userFilter, 'user')
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
        this.card[3].data = data.data.mobiles
        this.card[4].data = data.data.appoinments
        this.card[5].data = `${data.data.productivity}%`
        console.log(data)
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
</style>
