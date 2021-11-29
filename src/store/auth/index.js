import { getUserData, getUserToken } from '../../auth/utils'

const user = getUserData();
const token = getUserToken();

export default {
  namespaced: true,
  state: {
    currentUser: user,
    token: token
  },
  getters: {
    currentUser: state => state.currentUser,
    token: state => state.token
  },
  mutations: {
    SET_CURRENT_USER(state, val) {
      state.currentUser = val;
    },
    SET_TOKEN(state, val) {
      state.token = val;
    },
  },
  actions: {
    updateCurrentUser({ commit }, user) {
      commit("SET_CURRENT_USER", user);
    },
    updateToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
  },
}
