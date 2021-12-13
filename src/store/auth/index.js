import { getUserData, getUserToken } from "../../auth/utils";

const user = getUserData();
const token = getUserToken();

export default {
  namespaced: true,
  state: {
    currentUser: user,
    token: token,
  },
  getters: {
    currentUser: (state) => state.currentUser,
    token: (state) => state.token,
    userSession: (state) => state.currentUser.user_id,
    isSupervisor: (state) => state.currentUser.role_id == 2,
    isCeo: (state) =>
      state.currentUser.role_id === 1 || state.currentUser.role_id === null,
    isSeller: (state) => state.currentUser.role_id == 5,
    isAdvisor: (state) => state.currentUser.role_id == 3,
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
};
