import Vue from 'vue'
import Vuex from 'vuex'
import Test from '../views/test/test.store'
import BankOfFlyers from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.store.js'
import Global from '@/views/social-network/store/global/index.js'


Vue.use(Vuex)

export default {
  SocialNetworkTest: Test,
  SocialNetworkBankOfFlyersStore:  BankOfFlyers,
  SocialNetworkGlobalStore: Global,

}
