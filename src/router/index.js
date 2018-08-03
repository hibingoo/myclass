import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import myhome from '@/pages/myhome'
import myclass from '@/pages/myclass'
import myissue from '@/pages/myissue'
import mycenter from '@/pages/mycenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myhome',
      component: myhome
    },
    {
      path: '/myclass',
      name: 'myclass',
      component: myclass
    },
    {
      path: '/myissue',
      name: 'myissue',
      component: myissue
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: mycenter
    }

  ]
})
