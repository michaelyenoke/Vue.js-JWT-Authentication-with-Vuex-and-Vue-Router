import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    test: 'Love',
    colorCode:'',
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {  //都是login的動作
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setColorCode(state, newValue){
      state.colorCode = newValue
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue)
  }  
  },
  modules: {
  }
})