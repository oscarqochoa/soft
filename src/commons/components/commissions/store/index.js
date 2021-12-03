import moment from "moment";

export default {
  namespaced: true,
  state: {
    year: moment().format("YYYY"),
    halfYear: true,
    percentApartment: "100.00",
  },
  getters: {
    year: (state) => state.year,
    halfYear: (state) => state.halfYear,
    percentApartment: (state) => state.percentApartment,
  },
  mutations: {
    SET_YEAR_COMMISSIONS(state, payload) {
      return (state.year = payload);
    },
    SET_HALF_YEAR_COMMISSIONS(state, payload) {
      return (state.halfYear = payload);
    },
    SET_PERCENT_APARTMENT_COMMISSIONS(state, payload) {
      return (state.percentApartment = payload);
    },
  },
  actions: {},
};
