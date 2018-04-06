import Vue from 'vue'
import Vuex from 'vuex'
import boards from './modules/boards'
import lists from './modules/lists'
import cards from './modules/cards'
import comments from './modules/comments'
// import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions,
  modules: { boards, lists, cards, comments }
})

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })