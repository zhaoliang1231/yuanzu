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
import AddAddress from '../components/MemberCenter/PersonalCenter/AddAddress/index.vue'
import ChangePassword from '../components/MemberCenter/PersonalCenter/ChangePassword/index.vue'
import EditProfile from '../components/MemberCenter/PersonalCenter/EditProfile/index.vue'
import AlterEmail from '../components/MemberCenter/PersonalCenter/AlterEmail/index.vue'
import AlterPhone from '../components/MemberCenter/PersonalCenter/AlterPhone/index.vue'
import ElectronicTicket from '../components/MemberCenter/PersonalCenter/ElectronicTicket/index.vue'
import Integral from '../components/MemberCenter/PersonalCenter/Integral/index.vue'
import CollectionList from '../components/MemberCenter/ShopCenter/CollectionList/index.vue'
import OrderList from '../components/MemberCenter/ShopCenter/OrderList/index.vue'
import Order from '../components/MemberCenter/ShopCenter/Order/index.vue'
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
      component: MemberCenter,
      children: [
        {
          path: 'PersonalCenter/PersonalData',
          name: 'PersonalData',
          component: PersonalData
        },
        {
          path: 'PersonalCenter/EditProfile',
          name: 'EditProfile',
          component: EditProfile
        },
        {
          path: 'PersonalCenter/AlterEmail',
          name: 'AlterEmail',
          component: AlterEmail
        },
        {
          path: 'PersonalCenter/AlterPhone',
          name: 'AlterPhone',
          component: AlterPhone
        },
        {
          path: 'PersonalCenter/ChangePassword',
          name: 'ChangePassword',
          component: ChangePassword
        },
        {
          path: 'PersonalCenter/ElectronicTicket',
          name: 'ElectronicTicket',
          component: ElectronicTicket
        },
        {
          path: 'PersonalCenter/Integral',
          name: 'Integral',
          component: Integral
        },
        {
          path: 'PersonalCenter/Invoice',
          name: 'Invoice',
          component: Invoice
        },
        {
          path: 'PersonalCenter/ReceivingAddress',
          name: 'ReceivingAddress',
          component: ReceivingAddress
        },
        {
          path: 'PersonalCenter/AddAddress',
          name: 'AddAddress',
          component: AddAddress
        },
        {
          path: 'PersonalCenter/OrderList',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: 'ShopCenter/CollectionList',
          name: 'CollectionList',
          component: CollectionList
        },
        {
          path: 'ShopCenter/Order',
          name: 'Order',
          component: Order
        }
      ]
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
