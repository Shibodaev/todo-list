import axios from 'axios';

export default {
  state: {
    valute: [],
  },
  actions: {
    getAllValute({ commit }) {
      axios
        .get('http://www.cbr-xml-daily.ru/daily_json.js', {
          headers: {
            'Content-Type': 'application/data',
          },
        })
        .then((response) => response.data.Valute)
        .then((items) => {
          commit('Set_state', items);
        });
    },
  },
  mutations: {
    Set_state(state, items) {
      console.log(items);
      console.log(state.valute);
      state.valute = items;
    },
  },
  getters: {
    getVal(state) {
      return state.valute;
    },
  },
};
