import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import home from './modules/home';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let store = new Vuex.Store({
  strict: debug,
  modules: {
    home
  },
  ...root
});

export default store;
