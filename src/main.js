// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import objectAssign from 'object-assign'
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import store from './store/index'
import App from './App'
// import {AjaxPlugin, ConfirmPlugin, LocalePlugin, XHeader} from 'vux'
import {AjaxPlugin, XHeader} from 'vux'
/*
import vuexI18n from 'vuex-i18n'
import vuxLocales from './locales/all.yml'
import componentsLocales from './locales/components.yml'

Vue.use(vuexI18n.plugin, store)

// 本地语言环境
// https://www.cnblogs.com/jkingdom/p/9293255.html
const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}
console.log(finalLocales);
for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}
Vue.use(ConfirmPlugin)
Vue.use(LocalePlugin)
const nowLocale = Vue.locale.get()
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh-CN')
} else {
  Vue.i18n.set('en')
}
*/

// 全局组件引入
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
  store,
  render: h => h(App)
}).$mount('#app-box')
