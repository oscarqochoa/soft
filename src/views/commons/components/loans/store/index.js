import router from "@/router";
export default {
  namespaced: true,
  state: {
    researchLoans: 0,
    modalRequest: {
      show: false,
      idLoan: null,
      tab: null,
    },
  },
  getters: {
    researchLoans: (state) => state.researchLoans,
    modalRequest: (state) => state.modalRequest,
  },
  mutations: {
    ADD_ONE_RESEARCH(state) {
      //plus one
      ++state.researchLoans;
    },
  },
  actions: {},
};
