import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyCalculator.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
