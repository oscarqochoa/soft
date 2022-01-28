export default {
  state: {
    S_COUNTER_OVERTIME: 0,
    S_COUNTER_JUSTIFICATIONS: 0,
  },
  getters: {

  },
  mutations: {
    M_SET_COUNTER_OVERTIME(state, payload = { totalOver: 0 }) {
      state.S_COUNTER_REPORT_BY_MODULE = payload.totalOver
    },
    M_SET_COUNTER_JUSTIFICATIONS(state, payload = { totalJus: 0 }) {
      state.S_COUNTER_REPORT_BY_MODULE = payload.totalJus
    },
  },
  actions: {

  },
}
