import { createStore } from 'vuex';
import valute from './modules/valute.js';
export default createStore({
  modules: {
    valute,
  },
});
