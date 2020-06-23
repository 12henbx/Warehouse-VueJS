import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThLarge, faCamera, faUserSecret, faCoffee, faBell, faPercentage, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faThLarge, faCamera, faUserSecret, faCoffee, faBell, faPercentage, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
