import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert';
import { account } from './account';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
  },
});
