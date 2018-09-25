// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import store from './store/index'
import App from './App'
import { AjaxPlugin } from 'vux'

FastClick.attach(document.body)

// Promise polyfill
require('es6-promise').polyfill()

// ajax插件,基于axios
Vue.use(AjaxPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
