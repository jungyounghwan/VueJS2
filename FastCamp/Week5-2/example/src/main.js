import Vue from 'vue'
import App from './App'
import Vuex from './Vuex'

Vue.use(Vuex)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1
    }
    ,
    DECREMENT(state) {
      state.count -= 1
    },
    RESET(state) {
      state.count = 0
    }
  },
  actions: {
    asyncIncrement ({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    }
  }
})

new Vue({
  el: '#app',
  store,
  template: '<App>',
  components: { App }
})
