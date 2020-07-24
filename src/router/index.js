import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head'
import VModal from 'vue-js-modal'
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import Notification from "../views/Notification";
import AssignLD from "../views/AssignLD";
import ContainerActivity from "../views/ContainerActivity";
import ContainerActivityDetail from "../views/ContainerActivityDetail";
import Statistics from "../views/Statistics";
import PutawayInbound from "../views/PutawayInbound";
import PutawayOutbound from "../views/PutawayOutbound";
import AddItemContainerActivity from "../views/AddItemContainerActivity";
import MapInboundPutaway from "../views/MapInboundPutaway";
import SalesOrder from "../views/SalesOrder";
import PickSalesOrder from "../views/PickSalesOrder";
import AddItemPickSalesOrder from "../views/AddItemPickSalesOrder";
import AdvanceShippingNotice from "../views/AdvanceShippingNotice";

Vue.use(VueRouter);
Vue.use(VueHead);
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } });

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login', name: 'login', component: SignIn },
  { path: '/notifications', name: 'notifications', component: Notification },
  { path: '/advance-shipping-notice/', name: 'advance shipping notice', component: AdvanceShippingNotice },
  { path: '/assignld', name: 'assign loading dock', component: AssignLD },
  { path: '/container-activity', name: 'container activity', component: ContainerActivity },
  { path: '/container-activity/:id', name: 'container activity detail', component: ContainerActivityDetail },
  { path: '/statistics', name: 'statistics', component: Statistics },
  { path: '/putaway-inbound', name: 'putaway inbound', component: PutawayInbound },
  { path: '/container-activity/:id/add-item', name: 'container activity add item', component: AddItemContainerActivity },
  { path: '/putaway-inbound/:id/map-inbound', name: 'map inbound putaway', component: MapInboundPutaway },
  { path: '/sales-order', name: 'sales order', component: SalesOrder },
  { path: '/pick-sales-order', name: 'pick sales order', component: PickSalesOrder },
  { path: '/putaway-outbound', name: 'putaway outbound', component: PutawayOutbound },
  { path: '/pick-sales-order/add-item', name: 'pick sales order add item', component: AddItemPickSalesOrder }
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

