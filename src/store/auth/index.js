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
    moduleId: (state) => state.currentUser.modul_id,
    currentUser: (state) => state.currentUser,
    token: (state) => state.token,
    roleId: (state) => state.currentUser.role_id,
    userRole: (state) => {
      const userModuls = state.currentUser.arrRoles.map(
        (role) => role.module_id
      );
      if (!userModuls.includes(state.module)) return -1;
      return state.currentUser.arrRoles.filter(
        (role) => role.module_id === state.module
      )[0].role_id;
    },
  },
  mutations: {
    SET_CURRENT_USER(state, val) {
      state.currentUser = val;
      state.currentUser.modul_id = null;
    },
    SET_TOKEN(state, val) {
      state.token = val;
    },
    SET_CURRENT_USER_MODULE(state, module) {
      state.currentUser.modul_id = module;
    },
    SET_CURRENT_USER_ROLE_ID(state) {
      state.currentUser.role_id = state.currentUser.arrRoles.find(
        (rol) => rol.module_id === state.currentUser.modul_id
      ).role_id;
    },
  },
  actions: {
    updateCurrentUser({ commit }, user) {
      commit("SET_CURRENT_USER", user);
    },
    updateToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    updateCurrentUserModuleRole({ commit, state }, module) {
      commit("SET_CURRENT_USER_MODULE", module);
      commit("SET_CURRENT_USER_ROLE_ID");
      localStorage.setItem("userData", JSON.stringify(state.currentUser));
    },
  },
};
