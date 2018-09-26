import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import home from './modules/home';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  modules: {
    i18n: vuexI18n.store,
    home
  },
  ...root
});
