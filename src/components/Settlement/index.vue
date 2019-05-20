<template>
  <div>
    <div class="slt-navtitle-div">
      <a href="/" class="a-hover-pink">主页</a>
      <span> > </span>
      <a href="#" class="a-hover-pink">购物车</a>
    </div>
    <div class="slt-Payment-process-box margin-bottom-15">
      <ul class="purcharse-lists">
        <li class="purchase-list" :class="{active: route === 'shopcart'}">1.购物车</li>
        <li class="purchase-list" :class="{active: route === 'fillorder'}">2.填写订单信息</li>
        <li class="purchase-list" :class="{active: route === 'submitsuccess'}">3.提交成功</li>
        <li class="purchase-list">4.在线支付</li>
      </ul>
      <!--<ul class="">-->
        <!--<li class="fontSize-14 active-li">1.购物车</li>-->
        <!--<li class="fontSize-14">2.填写订单信息</li>-->
        <!--<li class="fontSize-14">3.提交成功</li>-->
        <!--<li class="fontSize-14">4.在线支付</li>-->
      <!--</ul>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Settlement',
  data () {
    return {
      route: this.$route.name // 1,2,3,4
    }
  },
  mounted: function () {

  },
  methods: {

  },
  watch: {
    $route: function (value) {
      console.log(value.name)
      this.route = value.name
    }
  }
}
</script>

<style lang="less">
  @import '~static/css/common.less';
  .purcharse-lists {
    border: 1px solid #ccc;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    .purchase-list {
      position: relative;
      background: #E6E4E5;
      &:after {
        z-index: 10;
        content: ' ';
        position: absolute;
        border: 16px solid transparent;
        border-left-color: #E6E4E5;
        right: -32px;
      }
      &:before {
        z-index: 10;
        content: ' ';
        position: absolute;
        border: 17px solid transparent;
        border-left-color: #ccc;
        right: -34px;
        top: -1px;
      }
      &.active {
        color: #fff;
        background: #C7023A;
      }
      &.active:after {
        border-left-color: #C7023A;
      }

    }
    .purchase-list:nth-child(4){
      &:before {
        z-index: 10;
        content: ' ';
        position: absolute;
        border: none;
        border-left-color: #fff;
        right: 0;
      }
      &:after {
        z-index: 10;
        content: ' ';
        position: absolute;
        border: none;
        border-left-color: #fff;
        right: 0;
      }
    }
  }

  /*.slt-Payment-process-box ul {*/
    /*li:nth-child(1) {*/
      /*color: #fff;*/
    /*}*/
    /*li:nth-child(2) {*/
      /*color: #333;*/
    /*}*/
    /*.active-li{*/
      /*background-position: left top;*/
    /*}*/
  /*}*/
</style>
