import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index'
import Login from '../components/LoginRegister/index'
// 公告页面
import Notice from '../components/Notice/index'
// 详情页
import Detail from '../components/Detail/index'
// 详情页里 商品介绍
import introduction from '../components/Detail/Introduction/introduction'
// 详情页里 商品评论
import evaluate from '../components/Detail/Evaluate/evaluate'
// 陈-----会员中心--start
import MemberCenter from '../components/MemberCenter/index.vue'
import PersonalData from '../components/MemberCenter/PersonalCenter/PersonalData/index.vue'
import Invoice from '../components/MemberCenter/PersonalCenter/Invoice/index.vue'
import ReceivingAddress from '../components/MemberCenter/PersonalCenter/ReceivingAddress/index.vue'
import ChangePassword from '../components/MemberCenter/PersonalCenter/ChangePassword/index.vue'
import ElectronicTicket from '../components/MemberCenter/PersonalCenter/ElectronicTicket/index.vue'
import Integral from '../components/MemberCenter/PersonalCenter/Integral/index.vue'
import CollectionList from '../components/MemberCenter/ShopCenter/CollectionList/index.vue'
import OrderList from '../components/MemberCenter/ShopCenter/OrderList/index.vue'
// 陈----会员中心--end

import Settlement from '../components/Settlement/index'
import ShopCart from '../components/Settlement/ShopCart/ShopCart'
import FillOrder from '../components/Settlement/FillOrder/FillOrder'
import SubmitSuccess from '../components/Settlement/SubmitSuccess/SubmitSuccess'

//分类And搜索页
import Classfiy from '../components/Classfiy/index.vue'

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
	  // 购物车流程
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement,
      redirect: '/settlement/shopcart',
      children: [
        {
          path: 'shopcart',
          name: 'shopcart',
          component: ShopCart
        },
        {
          path: 'fillorder',
          name: 'fillorder',
          component: FillOrder
        },
		{
          path: 'submitsuccess',
          name: 'submitsuccess',
          component: SubmitSuccess
        }
      ]
    },
    // 陈-----会员中心--start
    {
      name: 'MemberCenter',
      path: '/MemberCenter',
      component: MemberCenter
    },
    // 个人资料
    {
      name: 'PersonalData',
      path: '/MemberCenter/PersonalCenter/PersonalData',
      component: PersonalData
    },
    // 更改密码
    {
      name: 'ChangePassword',
      path: '/MemberCenter/PersonalCenter/ChangePassword',
      component: ChangePassword
    },
    // 电子券
    {
      name: 'ElectronicTicket',
      path: '/MemberCenter/PersonalCenter/ElectronicTicket',
      component: ElectronicTicket
    },
    // 发票
    {
      name: 'Integral',
      path: '/MemberCenter/PersonalCenter/Integral',
      component: Integral
    },
    // 积分
    {
      name: 'Invoice',
      path: '/MemberCenter/PersonalCenter/Invoice',
      component: Invoice
    },
    // 收货地址
    {
      name: 'ReceivingAddress',
      path: '/MemberCenter/PersonalCenter/ReceivingAddress',
      component: ReceivingAddress
    },
    // 订单列表
    {
      name: 'OrderList',
      path: '/MemberCenter/ShopCenter/OrderList',
      component: OrderList
    },
    // 收藏列表
    {
      name: 'CollectionList',
      path: '/MemberCenter/ShopCenter/CollectionList',
      component: CollectionList
    },
    // 陈----会员中心--end
    // 公告页面
    {
      name: 'Notice',
      path: '/Notice',
      component: Notice
    },
    // 详情页
    {
      name: 'detail',
      path: '/detail',
      component: Detail,
      children: [
        // 商品介绍
        {
          path: '',
          name: 'introduction',
          component: introduction
        },
        // 商品评价
        {
          path: 'evaluate',
          name: 'evaluate',
          component: evaluate
        }
      ]
    },
    //分类And搜索页
    {
      path: '/classfiy',
      name: 'classfiy',
      component: Classfiy
    }
  ]
})
