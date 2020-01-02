import Vue from 'vue'
import Vuex from 'vuex'   
import basiccrud from './basiccrud' 

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  }  
})
{{range .Entities}}
store.registerModule('{{CamelCase .Name}}', basiccrud()) {{end}}

export default store