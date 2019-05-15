import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index' //引入首页
import Login from '../components/LoginRegister/index' //引入登录注册页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
