import Vue from 'vue'
import Vuex from 'vuex'
import boards from './modules/boards'
// import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions,
  modules: { boards }
})

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })