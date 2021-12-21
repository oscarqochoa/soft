<template>
  <b-card>
    <template #header>
      <b-card-title>
        CLIENT&nbsp;&nbsp;&nbsp;
        <span>
          <a :href="leadName.url ? `*INTEGRATE*/${getModuleName(modul)}/leads/edit/${lead.id}` : '#'">
            {{ leadName.name }}
          </a>
        </span>
      </b-card-title>
      <b-button-group>
        <b-button
          v-if="lead.mobile != null"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Aadd To My List'"
          variant="outline-primary"
          class="btn-icon"
          @click="addMyList()"
        >
          <feather-icon
            icon="UserPlusIcon"
            size="18"
          />
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && !potential"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Without Potential'"
          variant="outline-primary"
          class="btn-icon"
          @click="setPotential(lead.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" role="img" viewBox="0 0 384 512" class="feather feather-question">
            <path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
          </svg>
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Not Call'"
          variant="outline-primary"
          class="btn-icon"
          @click="notCall(lead.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-slash" role="img" viewBox="0 0 640 512" class="feather feather-phone-slash">
            <path fill="currentColor" d="M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z"></path>
          </svg>
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && notCallTracking.length"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Tracking Not Call'"
          variant="outline-primary"
          class="btn-icon"
          @click="/* *INTEGRATE* */"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list" role="img" viewBox="0 0 512 512" class="feather feather-th-list">
            <path fill="currentColor" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
          </svg>
        </b-button>
      </b-button-group>
    </template>
    <b-row>
      <b-col cols="12">
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50" colspan="2">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span v-if="lead.nickname && modul === 2">{{ lead.nickname }} (nickname)</span>
            </th>
          </tr>
          <tr class="row">
            <th class="col-12 col-md-6 pb-50">
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span>{{ lead.mobile }}</span>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <feather-icon
                icon="MailIcon"
                class="mr-75"
              />
              <span>{{ lead.email }}</span>
            </th>
          </tr>
          <tr class="row">
            <th class="col-12 col-md-6 pb-50">
              <feather-icon
                icon="CalendarIcon"
                class="mr-75"
              />
              <span v-if="modul !== 15">{{ lead.dob }}</span>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75 font-weight-bold">SNN</span>
              <span v-if="lead.snn">{{ `XXX-XX-${lead.snn}` }}</span>
              <br>
              <span class="mr-75 font-weight-bold" v-if="lead.itin">ITIN</span>
              <span v-if="lead.itin">{{ `XXX-XX-${lead.itin}` }}</span>
            </th>
          </tr>
          <tr class="row">
            <th class="col-12 col-md-6 pb-50">
              <feather-icon
                icon="MapPinIcon"
                class="mr-75"
              />
              <template v-if="modul !== 15">
                <span v-if="lead.street">{{ lead.street }}, </span>
                <span v-if="lead.city">{{ lead.city }}, </span>
                <span>{{ lead.states_eeuu_slug }} {{ lead.zipcode }}</span>
              </template>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span>{{ lead.language == 'en' ? 'English' : 'Spanish' }}</span>
              <br>
              <span class="mr-75 font-weight-bold" v-if="lead.origin_country">ORIGIN COUNTRY</span>
              <span v-if="lead.origin_country">{{ lead.origin_country }}</span>
            </th>
          </tr>
          <tr class="row">
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">STATUS</span>
              <span v-if="modul !== 15">{{ lead.lead_status }}</span>
              <span v-else>{{ lead.valuestatuslead }}</span>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">PROGRAMS</span>
              <span>{{ lead.name_programs }}</span>
            </th>
          </tr>
          <tr class="row">
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">LEAD OWNER</span>
              <span>{{ lead.user_owner }}</span>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">CATCHER</span>
              <span v-if="modul === 15">{{ lead.user_catcher }}</span>
            </th>
          </tr>
          <tr v-if="modul === 15" class="row">
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">FAN PAGE</span>
              <span>{{ lead.fanpage }}</span>
            </th>
            <th class="col-12 col-md-6 pb-50">
              <span class="mr-75">CREATED DATE</span>
              <span>{{ lead.created_at }}</span>
            </th>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

import { mapGetters } from 'vuex'

import Ripple from 'vue-ripple-directive'

export default {
  components: {},
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
  data () {
    return {
      potential: null,
      notCallTracking: [],
      isLoading: false,
      blankLead: {},
    }
  },
  mounted () {
    this.potential = this.lead.potential
    // *PRODUCTION* this.notCallTracking = this.lead.not_call ? JSON.parse(this.lead.not_call) : []
    this.notCallTracking = [
      { user: 'user 1', created: new Date().toJSON() },
      { user: 'user 2', created: new Date('1997-08-28').toJSON() }
    ]
    // *END PRODUCTION*
  },
  created () {
    this.blankLead = Object.assign({}, this.lead)
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
    leadName () {
      if (this.modul === 15) {
        return { name: `${this.lead.nickname} (${this.lead.lead_name})`, url: true }
      } else if (this.onlyRead) {
        return { name: this.lead.lead_name }
      } else {
        return { name: this.lead.lead_name, url: true }
      }
    }
  },
  methods: {
    addMyList () {
      this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
      .then((result) => {
        if (result.value) {
          const params = {
            module_id: this.currentUser.modul_id,
            user_id: this.currentUser.user_id,
            lead_id: this.$route.params.id,
          }
          /* *INTEGRATE* */
        }
      }).catch(error => {
        console.log('spmething went wrong addMyList: ', error)
        this.isLoading = false
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
    setPotential (lead_id) {
      this.showSwalGeneric('Without Potential?', 'You won\'t be able to revert this!', 'warning')
      .then((result) => {
        if (result.value) {
          /* *INTEGRATE* */
        }
      }).catch(error => {
        console.log('spmething went wrong addMyList: ', error)
        this.isLoading = false
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
    notCall (lead_id) {
      this.showSwalGeneric('Your lead not responding to you?', 'You won\'t be able to revert this!', 'warning')
      .then((result) => {
        if (result.value) {
          const specialist = `${this.currentUser.first_name} ${this.currentUser.last_name}`

          //Have just the first program of a string
          let program = ''
          if (this.lead.lead_programs) {
            const programs = this.lead.name_programs
            program = programs.split(',')[0]
          }
          /* *INTEGRATE* */
        }
      });
    },
  },
  model: {
    prop: 'lead',
    event: 'update:lead',
  },
  directives: {
    Ripple,
  },
}
</script>

