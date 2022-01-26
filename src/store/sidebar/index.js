import navMenuItems from '@/navigation/vertical'

export default {
  namespaced: true,
  state: {
    S_SIDEBAR_ITEMS: navMenuItems,
  },
  getters: {

  },
  mutations: {
    UPDATE_SIDEBAR_ITEM_PROPERTY({ state }, payload) {
      // eslint-disable-next-line array-callback-return
      state.S_SIDEBAR_ITEMS.map(item => {
        if (item?.route === payload.routeName) {
          // eslint-disable-next-line no-param-reassign
          item.tag = payload.tag
        }
      })
    },
  },
  actions: {

  },
}
