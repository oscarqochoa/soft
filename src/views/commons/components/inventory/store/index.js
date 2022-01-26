
export default {
  namespaced: true,
  state: {
   listCategory:null,
   updateRequestEquipment:false,
  },
  getters: {
    listCategoryAll: (state) => state.listCategory,
    updateRequestEquip:(state)=> state.updateRequestEquipment
  },
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.listCategory = payload;
    },
    SET_UPDATE_REQUEST(state, payload){
      state.updateRequestEquipment = payload;
    },
  },
  actions: {
    LIST_CATEGORIES({commit},datos){
        commit('SET_CATEGORIES',datos)
    },
    UPDATE_REQUEST_EQUIPMENT({commit},update){
      commit('SET_UPDATE_REQUEST',update)
    }
  },
};
