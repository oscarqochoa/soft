import Vue from "vue"

const state = {
  REFRESH_CREATED: false,
};
const getters = {
  G_REFRESH_CREATED() {
    return state.REFRESH_CREATED
  },
}
const mutations = {
  M_REFRESH_CREATED() {
    state.REFRESH_CREATED = true
  },
}
const actions = {
  A_REFRESH_CREATED({ commit }, body) {
    commit('REFRESH_CREATED', body)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
