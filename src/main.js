import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')