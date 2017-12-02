// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import messages from './lang/lang' //多语言文字

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)

//设置当前语言默认值--localStorage
localStorage.setItem('lang', 'zh');
let langNow;
if (localStorage.lang) {
  langNow = localStorage.lang;
} else {
  localStorage.lang = 'en';
  langNow = 'en';
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: langNow, // set locale
  messages, // set locale messages
});
ElementLocale.i18n((key, value) => i18n.t(key, value))//为了实现element插件的多语言切换


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
