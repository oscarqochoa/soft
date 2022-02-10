import Vue from 'vue'
import Vuex from 'vuex'
import Test from '../views/test/test.store'
import Leads from '../views/leads/leads.store'

Vue.use(Vuex)

export default {
  SocialNetworkTest: Test,
  SocialNetworkLeadsStore: Leads,
}
