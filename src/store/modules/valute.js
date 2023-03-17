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
        .then((response) => response.data)
        .then((items) => {
          commit('Set_state', items);
        })
        .catch((error) => {
          error.response.data;
        });
    },
  },
  mutations: {
    Set_state(state, items) {
      state.valute = items;
    },
  },
  getters: {
    getVal(state) {
      return state.valute;
    },
  },
};
