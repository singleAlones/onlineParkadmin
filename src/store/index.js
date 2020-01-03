import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:"",
  },
  mutations: {
   setAuser:(state,auser)=>{
       state.currentUser=auser
   }
 
  },
  actions: {
    
 
  },
  modules: {
  }
})
