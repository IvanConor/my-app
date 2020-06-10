import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cash: 0,
    coins: 0,
    clubName: 'My Club',
    emblem: 'emblem-1'
  },
  actions,
  mutations,
  getters,
  plugins: [new VuexPersistence().plugin]
})
