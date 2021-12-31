import UserService from '@/service/user/user.service'
export default {
    namespaced: true,
    state: {
        S_USER_SESSIONS: [],
    },
    getters: {
    },
    mutations: {
        SET_USER_SESSIONS(state, payload) {
            state.S_USER_SESSIONS = payload
        },
    },
    actions: {
        async A_GET_USER_SESSIONS({ commit }, body) {
            try {
                const response = await UserService.getUserSessions(body)
                commit('SET_USER_SESSIONS', response.data.data)
                return response
            } catch (error) {
                throw error
            }
        },
    }
};
