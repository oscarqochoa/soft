<template>
  <div>
    <b-card title="CREDIT REPORT" :sub-title="(score.equifax === '' && score.experian === '' && score.transunion === '') ? 'This Lead do not have credit report' : null">
      <b-card-body v-if="score.equifax === '' && score.experian === '' && score.transunion === ''">
        <b-row class="justify-content-center">
          <b-col cols="4" class="text-center">
            <p style="color: #0aafdb;">TransUnion</p>
            <span class="show-lead-score-cr" style="border: 2px solid #0aafdb;" :style="`color: ${ colorScoreTransunion(score.transunion) };`">
              {{ score.transunion }}
            </span>
          </b-col>
          <b-col cols="4" class="text-center">
            <p style="color: #0566b7;">Experian</p>
            <span class="show-lead-score-cr" style="border: 2px solid #0566b7;" :style="`color: ${ colorScoreTransunion(score.experian) };`">
              {{ score.experian }}
            </span>
          </b-col>
          <b-col cols="4" class="text-center">
            <p style="color: #f31414;">EQUIFAX</p>
            <span class="show-lead-score-cr" style="border: 2px solid #f31414;" :style="`color: ${ colorScoreTransunion(score.equifax) };`">
              {{ score.equifax }}
            </span>
          </b-col>
        </b-row>
      </b-card-body>
      <b-tabs>
        <b-tab active>
          <template #title>
            <span>Obtained</span>
          </template>

          <card-lead-credit-report-obtained :modul="modul" :is-busy="isBusyCreditReportObtained" />

        </b-tab>
        <b-tab>
          <template #title>
            <span>Services</span>
            <feather-icon icon="ToolIcon" class="ml-50" />
          </template>

          <card-lead-credit-report-service :modul="modul" :is-busy="isBusyCreditReportService" />

        </b-tab>
      </b-tabs>
      <div class="pt-2 text-right">
        <b-button
          v-if="modul === 4"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="/* *INTEGRATE* resources\js\components\lead\showlead\ContentCreditReport.vue - line: 241 */"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span>Add</span>
        </b-button>
        <b-button
          v-if="modul === 2"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="/* *INTEGRATE* resources\js\components\lead\showlead\ContentCreditReport.vue - line: 246 */"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span>Request CR</span>
        </b-button>
        <b-button
          v-if="lead.typecredits"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="/* *INTEGRATE* resources\js\components\lead\showlead\ContentCreditReport.vue - line: 254 */"
        >
          Old Credentials
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

import CardLeadCreditReportObtained from './CardLeadCreditReportObtained.vue'
import CardLeadCreditReportService from './CardLeadCreditReportService.vue'

export default {
  components: {
    CardLeadCreditReportObtained,
    CardLeadCreditReportService
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  created () {
    this.countCreditReportPendings()
  },
  data () {
    return {
      countData: null,
      score: {
        equifax: JSON.parse(this.currentUser.score) ? JSON.parse(this.currentUser.score)[0].equifax : '',
        experian: JSON.parse(this.currentUser.score) ? JSON.parse(this.currentUser.score)[0].experian : '',
        transunion: JSON.parse(this.currentUser.score) ? JSON.parse(this.currentUser.score)[0].transunion : '',
      }
    }
  },
  directives: { Ripple },
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
    },
    isBusyCreditReportObtained: {
      type: Boolean,
      required: true
    },
    isBusyCreditReportService: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    ...mapActions({
      A_COUNT_CREDIT_REPORT_PENDINGS: 'CrmCreditReportStore/A_COUNT_CREDIT_REPORT_PENDINGS',
    }),
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      this[key] = Object.assign({}, this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`])
    },
    colorScoreTransunion (score) {
      if (score <= 659)
        return '#ff0707'
      else if (score >= 660 && score <= 699)
        return '#ffc107'
      else if (score >= 700 && score <= 759)
        return '#bfff00'
      else if (score >= 760 && score <= 850)
        return '#0dff34'
      return '#000'
    },
    async countCreditReportPendings () {
      try {
        const response = await this.A_COUNT_CREDIT_REPORT_PENDINGS({ id: this.$route.params.id, modul: this.modul })
        if (this.isResponseSuccess(response)) {
          this.countData = response.data[0].countPending > 99 ? '+99' : response.data[0].countPending
        }
      } catch (error) {
        console.log('Something went wrong countCreditReportPendings', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
  .show-lead-score-cr {
    font-size: 25px;
    font-weight: bold;
    border-radius: 30px;
    padding: 10px 7px;
  }
</style>
