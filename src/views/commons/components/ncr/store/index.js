
export default {
    namespaced: true,
    state: {
     sellers:null,
     modul:null,
     global:null,
    },
    getters: {
      ListSellers: (state) => state.sellers,
      ModulDetail:(state)=>state.modul,
      GlobalDetail: (state) => state.global,
    },
    mutations: {
      SET_SELLERS(state, payload) {
        state.sellers = payload;
      },
      SET_MODUL(state,payload){
        state.modul = payload
      },
      SET_GLOBAL(state,payload){
        state.global = payload
      }
    },
    actions: {
      LIST_SELLERS({commit},datos){
          commit('SET_SELLERS',datos)
      },
      SET_MODUL({commit},dato){
        commit('SET_MODUL',dato)
      },
      SET_GLOBAL({commit},datos){
        commit('SET_GLOBAL',datos)
      }
    },
  };
  