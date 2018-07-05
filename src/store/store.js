import Vue from 'vue';
import Vuex from 'vuex';
// constant value
Vue.use(Vuex);
export default  new Vuex.Store({
  state : {
    baseURL : 'http://merida-web.herokuapp.com/',
    engineURL : 'https://merida-engine.herokuapp.com/',
    jobEngineURL : 'https://merida-engine.herokuapp.com/job/',
    userEngineURL : 'https://merida-engine.herokuapp.com/users/',
  },
});