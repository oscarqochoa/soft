import Vue from 'vue'
import Vuex from 'vuex'

import Lead from './lead.store'
import SaleMade from './saleMade.store'

Vue.use(Vuex)

export default {
  CrmLeadStore: Lead,
  CrmSaleMadeStore: SaleMade
}