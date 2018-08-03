// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Tabbar, TabbarItem, Toast, Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Toast).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
