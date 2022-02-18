import Vue from 'vue'
import crmService from '@/views/crm/services/crm.service'
import AnswersGuideService from '@/views/social-network/views/answers-guide/answers-guide.service'

const state = {
  S_ANSWERS: [],
}
const getters = {
}
const mutations = {
  SET_DATA(state, params) {
    Vue.set(state, params.destination, params.data)
  },
}
const actions = {
  async A_GET_ANSWERS({ commit }, body) {
    try {
      const response = await AnswersGuideService.getAnswersGuide(body)
      commit('SET_DATA', {
        destination: 'S_ANSWERS',
        data: response,
      })
      console.log('ACtgionn')
      return response
    } catch (error) {
      console.log('ERROR_GET_ANSWERS [ACTION]', error)
      throw error
    }
  },
  A_SET_ANSWERS({ commit }, answers) {
    commit('SET_DATA', {
      destination: 'S_ANSWERS',
      data: answers,
    })
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
