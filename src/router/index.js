import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head'
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);
Vue.use(VueHead);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: SignIn,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line consistent-return
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//
//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }
//   next();
// });

export default router;

