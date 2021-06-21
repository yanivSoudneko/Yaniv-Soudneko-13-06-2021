import Vue from 'vue'
import Vuex from 'vuex'

import {weatherStore} from './weather.store'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
      weatherStore
  }
})
