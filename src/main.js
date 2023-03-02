import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Style
import '@/scss/style.scss';
import './assets/tailwind.css';

// Module
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faPen, faPenToSquare);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
