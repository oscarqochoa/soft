import Vue from 'vue'
import Vuex from 'vuex'

import Call from './call'
import CreditCard from './creditCard'
import CreditReport from './creditReport'
import Event from './event'
import Global from './global'
import Lead from './lead'
import SaleMade from './saleMade.store'
import Sms from './sms'

Vue.use(Vuex)

export default {
  CrmCallStore: Call,
  CrmCreditCardStore: CreditCard,
  CrmCreditReportStore: CreditReport,
  CrmEventStore: Event,
  CrmGlobalStore: Global,
  CrmLeadStore: Lead,
  CrmSaleMadeStore: SaleMade,
  CrmSmsStore: Sms,
}
