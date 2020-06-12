import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import VuexPersistence from 'vuex-persist';

const vuexPersist = new VuexPersistence({
  key: 'Club Manager 2019 Clone',
  storage: localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [vuexPersist.plugin]
})
