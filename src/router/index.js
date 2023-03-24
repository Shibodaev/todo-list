import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '../store/modules/valute';
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/todolist',
    name: 'todolist',
    meta: { title: 'Todo-List' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoList.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    meta: { title: 'Calculator' },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyCalculator.vue'),
  },
  {
    path: '/converter',
    name: 'converter',
    meta: { title: 'Converter' },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyConverter.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (typeof store.state['valute'] === 'object') {
    axios
      .get('http://www.cbr-xml-daily.ru/daily_json.js', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        {
          store.state.valute = response.data.Valute;
          // console.log(store);
        }
      })
      .catch((error) => {
        new Error(error);
      });

    // axios.get(store.state.url .then((response) => {
    //   store.dispatch('getAllValute', response.data);
    next();
    // });
  }
});
export default router;
