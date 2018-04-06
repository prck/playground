import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

import { routes } from './routes'
import { store } from './store/store'
import 'vuetify/dist/vuetify.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
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