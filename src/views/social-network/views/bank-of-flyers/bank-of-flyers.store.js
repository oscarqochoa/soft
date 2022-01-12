import SocialNetworkService from '@/views/social-network/services/social-network.service'

export default {
  state: {
    bankOfFlyersSocialNetwork: {},
  },

  getters:{
    getBankOfFlyersEmpty(state){
      return state.bankOfFlyersSocialNetwork.empty()
    },


  },


  mutations: {
    SET_BANKOFFLYER_SOCIALNETWORK(state, bankOfFlyersSocialNetwork ){
      state.bankOfFlyersSocialNetwork = bankOfFlyersSocialNetwork
    }

  },

  actions: {
    async getBankOfFlyers({commit}){
      const BankOfFlyers = await  SocialNetworkService.getBankOfFlyers()
    }

  }



}
