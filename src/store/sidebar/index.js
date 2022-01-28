import navMenuItems from '@/navigation/vertical'
import LoansService from '@/views/commons/components/loans/services/loans.service'

export default {
  namespaced: true,
  state: {
    S_SIDEBAR_ITEMS: navMenuItems,
  },
  getters: {

  },
  mutations: {
    UPDATE_SIDEBAR_ITEM_PROPERTY(state, payload) {
      // eslint-disable-next-line array-callback-return
      state.S_SIDEBAR_ITEMS.map(item => {
        if (item?.route === payload.routeName) {
          // eslint-disable-next-line no-param-reassign
          item.tag = payload.tag
        }
      })
    },
    async M_UPDATE_COUNTER_LOANS(state, payload = { module: 2, role: 1 }) {
      const [loanNav] = state.S_SIDEBAR_ITEMS.filter(nav => nav.title === 'Loans')
      // eslint-disable-next-line no-nested-ternary
      const statusShow = payload.module === 16 ? 4 : payload.module === 17 ? 3 : payload.role === 2 || payload.role === 1 ? 2 : 0
      const [response] = await LoansService.getCounterLoan({
        page: 1,
        type: statusShow,
        id_module: payload.module,
        status: 1,
      })
      loanNav.tag = response.counter
    },
  },
  actions: {
    A_UPDATE_COUNTERS({ commit }, payload = { module: 2, role: 1 }) {
      if (payload.module === 2) {
        console.log('bbbbbbbbbbbbbbbbb')
        commit('M_UPDATE_COUNTER_LOANS', payload)
      }
    },
  },
}
