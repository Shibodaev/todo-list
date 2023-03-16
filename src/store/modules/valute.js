import axios from 'axios';
export default {
  state: {
    valute: [],
  },
  actions: {
    getValute({ commit }) {
      axios
        .get('http://www.cbr-xml-daily.ru/daily_json.js', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.data.Valute)
        .then((valute) => {
          commit('SetItem', valute);
        });
    },
  },
  mutations: {
    SetItem(state, valute) {
      console.log(valute);
      return (state.valute = valute);
    },
  },
  getters: {
    val(state) {
      state.valute;
    },
  },
};
