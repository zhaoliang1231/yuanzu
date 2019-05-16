<template>
  <div class="main-nav">
    <div class="clearfix">
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="main-nav-classify mouseenter fl" :class="{active:!isHide}">
        <div class="classify-name">
          <a class="font-color-white fontSize-16">全部商品菜单</a>
        </div>
        <ul v-if="toggle" class="classify-lists">
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>母婴用品</span> 
            <span class="icon icon-triangle fr"></span>
          </li>
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>美容美肤</span>
            <span class="icon icon-triangle fr"></span>
          </li>
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>生活家具</span>
            <span class="icon icon-triangle fr"></span>
          </li>
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>休闲食品</span>
            <span class="icon icon-triangle fr"></span>
          </li>
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>进口食品</span>
            <span class="icon icon-triangle fr"></span>
          </li>
          <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
            <span>轻奢名品</span>
            <span class="icon icon-triangle fr"></span>
          </li>
        </ul>
        <div @mouseenter="submenusb(true)" @mouseleave="submenusb(false)" v-if="submenu"  class="classify-list-submenu clearfix">
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
          <div class="submenu-content  fl">
            <span class="submenu-title">营养铺食</span>
            <span class="hr"></span>
            <div class="commoditylink">
              <a href="#">开衫</a>| <a href="#">皮草</a>|
              <a href="#">T恤</a>| <a href="#">婚纱</a>|
              <a href="#">风衣</a>| <a href="#">毛衣</a>|
              <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
              <a href="#">连体裤</a>| <a href="#">半身裙</a>|
              <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-nav-list mouseenter fl">
        <a href="#">首页</a>
      </div>
      <div class="main-nav-list mouseenter fl">
        <a href="#">积分商城</a>
      </div>
      <div class="main-nav-list mouseenter fl">
        <a href="#">团购</a>
      </div>
      <div class="main-nav-list mouseenter fl">
        <a href="#">秒杀</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isHide: false,
        toggle: false,
        submenu: false
      }
    },
    mounted () {
      if (!this.isHide) {
        this.toggle = true
      }
    },
    methods: {
      classifyToggle (bool) {
        if (this.isHide) {
          this.toggle = bool
        }
      },
      submenuToggle (id = -1, bool) {
        this.submenu = bool
      },
      submenusb (bool) {
        this.submenu = bool
      }
    }
  }
</script>
<style>
</style>
