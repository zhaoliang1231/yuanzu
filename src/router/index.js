import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index/Index'

import Login from '../components/LoginRegister/index'
import Settlement from '../components/Settlement/index'
import MemberCenter from '../components/MemberCenter/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement
    },
    {
      name: 'MemberCenter',
      path: '/MemberCenter',
      component: MemberCenter
    }
  ]
})
