import { getUserData, getUserToken } from '@/auth/utils'
import store from '@/views/crm/store'

const user = getUserData()
const token = getUserToken()

export default {
  namespaced: true,
  state: {
    currentUser: user,
    token,
  },
  getters: {
    currentUser: state => state.currentUser,
    token: state => state.token,
    userSession: state => state.currentUser.user_id,
    isSupervisor: state => state.currentUser.role_id == 2,
    isCeo: state => state.currentUser.role_id === 1 || state.currentUser.role_id === null,
    isSeller: state => state.currentUser.role_id == 5,
    isAdvisor: state => state.currentUser.role_id == 3,
    isCoordinator: state => state.currentUser.is_coordinator == 1,
    moduleId: state => state.currentUser.modul_id,
    roleId: state => state.currentUser.role_id,
    userRole: state => {
      const userModuls = state.currentUser.arrRoles.map(
        role => role.module_id,
      )
      if (!userModuls.includes(state.module)) return -1
      return state.currentUser.arrRoles.filter(
        role => role.module_id === state.module,
      )[0].role_id
    },
  },
  mutations: {
    SET_CURRENT_USER(state, val) {
      state.currentUser = val
      state.currentUser.modul_id = null
    },
    SET_CURRENT_USER_INFORMATION(state, { data, avatar }) {
      state.currentUser.first_name = data.first_name
      state.currentUser.last_name = data.last_name
      state.currentUser.phone = data.phone
      state.currentUser.extension = data.extension
      state.currentUser.date_of_birth = data.date_of_birth
      state.currentUser.country = data.country
      state.currentUser.fullName = data.first_name + " " + data.last_name
      state.currentUser.avatar = avatar

      // Update stored data
      localStorage.setItem("userData", JSON.stringify(state.currentUser))
    },
    SET_TOKEN(state, val) {
      console.log(val)
      state.token = val
    },
    SET_CURRENT_USER_MODULE(state, module) {
      state.currentUser.modul_id = module
    },
    SET_CURRENT_USER_ROLE_ID(state) {
      const roleId = state.currentUser.arrRoles.find(
        rol => rol.module_id === state.currentUser.modul_id,
      )
      if (roleId) {
        state.currentUser.role_id = roleId.role_id
        state.currentUser.module_name = roleId.module_name
      }
    },
  },
  actions: {
    updateCurrentUser({ commit }, user) {
      commit('SET_CURRENT_USER', user)
    },
    updateToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    updateCurrentUserModuleRole({ commit, state }, module) {
      commit('SET_CURRENT_USER_MODULE', module)
      commit('SET_CURRENT_USER_ROLE_ID')
      localStorage.setItem('userData', JSON.stringify(state.currentUser))
    },
    updateCurrentUserInformation({ commit }, { data, avatar }) {
      commit('SET_CURRENT_USER_INFORMATION', {
        data: data,
        avatar: avatar
      })
    }
  },
}
