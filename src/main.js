// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import store from './store/index'
import App from './App'
import {AjaxPlugin, XHeader} from 'vux'
import VueI18n from 'vue-i18n'
import zhCN from './locales/zh-CN.js'
import en from './locales/en.js'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages: {
    'zh-CN': zhCN,
    'en': en
  }
})

// 全局组件引入
// Vue.use(ConfirmPlugin)
Vue.component('x-header', XHeader)

FastClick.attach(document.body)

// Promise polyfill
require('es6-promise').polyfill()

// ajax插件,基于axios
Vue.use(AjaxPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app-box')
