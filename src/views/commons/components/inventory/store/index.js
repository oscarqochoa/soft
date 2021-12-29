
export default {
  namespaced: true,
  state: {
   listCategory:null,
  },
  getters: {
    listCategoryAll: (state) => state.listCategory,
  },
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.listCategory = payload;
    },
  },
  actions: {
    LIST_CATEGORIES({commit},datos){
        commit('SET_CATEGORIES',datos)
    }
  },
};
