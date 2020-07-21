import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThLarge, faCamera, faUserSecret, faCoffee, faBell, faPercentage, faSearch, faUser, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faThLarge, faCamera, faUserSecret, faCoffee, faBell, faPercentage, faSearch, faUser, faLock,faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
