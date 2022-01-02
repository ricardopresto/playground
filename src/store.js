import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment (state, amount) {
      state.count += amount;
    },
    clear (state) {
      state.count = 0;
    }
  },
  getters: {
    timesTen: state => {
      return state.count * 10;
    },
    totalText: (state, getters) => {
      return `Total: ${getters.timesTen}`;
    }
  }
})