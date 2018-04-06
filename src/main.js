import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')