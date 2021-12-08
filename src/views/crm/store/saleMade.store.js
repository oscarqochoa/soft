import CrmServices from '../services/crm.service'

export default {
  namespaced: true,
  state: {
    sellersCrm: {},
    capturedCrm: [],
    //TODO Hacerlo global
    programs: {},
    sources: {},
    states: {},
    statusip: [
      { id: 0, label: 'ALL' },
      { id: 1, label: 'NO' },
      { id: 2, label: 'YES' },
    ],
    status: [
      { id: 0, label: 'ALL', variant: '' },
      { id: 1, label: 'PENDING', variant: 'warning' },
      { id: 2, label: 'REVISION', variant: 'primary' },
      { id: 3, label: 'DESAPROVE', variant: 'danger' },
      { id: 4, label: 'APPROVED', variant: 'success' },
      { id: 5, label: 'SUPERVISOR', variant: 'warning' },
    ],
  },
  getters: {
    getSellerEmpty(state) {
      return state.sellersCrm.empty()
    },
    getCapturedEmpty(state) {
      return state.capturedCrm === {}
    },
  },
  mutations: {
    SET_SELLERS_CRM(state, sellersCrm) {
      state.sellersCrm = sellersCrm
    },
    SET_CAPTURED_CRM(state, capturedCrm) {
      state.capturedCrm = capturedCrm
    },
    //TODO Hacerlo global
    SET_PROGRAMS(state, programs) {
      state.programs = programs
    },
    SET_SOURCES(state, sources) {
      state.sources = sources
    },
    SET_STATES(state, states) {
      state.states = states
    },
  },
  actions: {
    async getSellers({ commit }) {
      const sellers = await CrmServices.getSellersCrm()
      const formatedSellers = sellers.map(seller => ({
        id: seller.id,
        label: seller.user_name,
      }))
      commit('SET_SELLERS_CRM', formatedSellers)
    },
    async getCaptured({ commit }) {
      const captured = await CrmServices.getCapturedCrm()
      const formatedCaptured = captured.map(cap => ({
        id: cap.id,
        label: cap.user_name,
      }))
      commit('SET_CAPTURED_CRM', formatedCaptured)
    },
    //TODO Hacerlo global
    async getPrograms({ commit }) {
      const programs = await CrmServices.getPrograms()
      const formatedPrograms = programs.map(pro => ({
        id: pro.id,
        label: pro.name,
      }))
      commit('SET_PROGRAMS', formatedPrograms)
    },
    async getSources({ commit }) {
      const sources = await CrmServices.getSources()
      const formatedSources = sources.map(source => ({
        id: source.id,
        label: source.name,
      }))
      commit('SET_SOURCES', formatedSources)
    },
    async getStates({ commit }) {
      const states = await CrmServices.getStates()
      const formatedStates = states.map(state => ({
        id: state.slug,
        label: state.slug,
      }))
      commit('SET_STATES', formatedStates)
    },
  },
}
