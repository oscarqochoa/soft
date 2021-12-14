import Vue from 'vue'
import Vuex from 'vuex'

import CreditReport from './creditReport'
import Event from './event'
import Global from './global'
import Lead from './lead'
import SaleMade from './saleMade.store'
import Sms from './sms'

Vue.use(Vuex)

export default {
  CrmCreditReportStore: CreditReport,
  CrmEventStore: Event,
  CrmGlobalStore: Global,
  CrmLeadStore: Lead,
  CrmSaleMadeStore: SaleMade,
  CrmSmsStore: Sms,
}
