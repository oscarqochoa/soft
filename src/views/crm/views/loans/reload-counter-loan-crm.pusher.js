import store from '@/store'
// eslint-disable-next-line import/prefer-default-export
export const reloadCounterLoanCrm = () => {
  window.pusher.bind('reload-counter-loan', async data => {
    const { currentUser } = store.state.auth
    await store.commit('SidebarStore/M_UPDATE_COUNTER_LOANS', { module: currentUser.modul_id, role: currentUser.role_id })
    await store.dispatch('loans-store/loadCounterTab')
  })
}
