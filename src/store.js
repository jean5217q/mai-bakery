import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showData: false
  },
  mutations: {
    showForm(state){
      state.showData = true
      console.log(state.showData)
    },
    hideForm(state){
      state.showData = false
      console.log(state.showData)
    }
  },
  actions: {

  }
})
