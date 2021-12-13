import Vue from 'vue'
import Vuex from 'vuex'

import CreditReport from './creditReport'
import Event from './event.store'
import Lead from './lead.store'
import SaleMade from './saleMade.store'

Vue.use(Vuex)

export default {
  CrmCreditReportStore: CreditReport,
  CrmEventStore: Event,
  CrmLeadStore: Lead,
  CrmSaleMadeStore: SaleMade
}
