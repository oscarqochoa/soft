import CommissionsService from './commissions.service'
import moment from 'moment'

const state = {
  S_COMMISSIONS: [],
  S_COMMISSION_SELECT: null,
  S_DEPARTMENT_PERCENTAGES: [],
  S_LOADING: true,
  S_YEAR: moment().format("YYYY"),
  S_MODULE: 0,
  S_PERCENT_DEPARTMENT: "100.00",
  S_MODULE_TOTAL: false
}
const getters = {

}

const mutations = {

  GET_COMMISSIONS(state) {
    state.S_LOADING = true
  },
  GET_COMMISSIONS_SUCCESS(state, states) {
    state.S_COMMISSIONS = states
    state.S_LOADING = false
  },
  GET_DEPARTMENT_PERCENTAGE(state, states) {
    state.S_DEPARTMENT_PERCENTAGE = states
  },
  SET_YEAR_COMISSION(state, states) {
    state.S_YEAR = states;
  },
  SET_PERCENT_APARTMENT_COMMISSIONS(state, states) {
    state.S_DEPARTMENT_PERCENTAGE = states
  },
  SET_MODULE_COMMISSION(state, states) {
    state.S_MODULE = states;
  },
  SET_MODULE_TOTAL(state, states) {
    state.S_MODULE_TOTAL = states
  }

}
const actions = {
  async A_GET_COMMISSIONS({ commit }, params) {
    commit('GET_COMMISSIONS')
    setTimeout(async () => {
      const resp = await CommissionsService.getCommissions();
      commit('GET_COMMISSIONS_SUCCESS', resp);
    }, 2000)
  },

  async A_GET_DEPARTMENT_PERCENTAGE({ commit }) {
   const resp = await CommissionsService.getDepartmentPercentage();
   commit('GET_DEPARTMENT_PERCENTAGE', resp)
  },

  A_SET_YEAR_COMMISSION({commit}, params) {
    commit('SET_YEAR_COMISSION', params)
  },
  A_SET_PERCENT_DEPARTMENT_COMMISSION({commit}, params) {
    commit('SET_PERCENT_APARTMENT_COMMISSIONS', params)
  },
  A_SET_MODULE_COMMISSION({commit}, params) {
    commit('SET_MODULE_COMMISSION', params)
  },
  A_SET_MODULE_TOTAL({commit}, params) {
    commit('SET_MODULE_TOTAL', params)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,

}
