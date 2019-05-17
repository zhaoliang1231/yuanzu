<template>
  <div>
    <div class="slt-navtitle-div">
      <a href="/" class="a-hover-pink">主页</a>
      <span> > </span>
      <a href="#" class="a-hover-pink">购物车</a>
    </div>
    <div class="slt-Payment-process-box margin-bottom-15">
      <ul class="">
        <li class="fontSize-14">1.购物车</li>
        <li class="fontSize-14">2.填写订单信息</li>
        <li class="fontSize-14">3.提交成功</li>
        <li class="fontSize-14">4.在线支付</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Settlement',
    data() {
      return {

      }
    },
    // watch: {
    //   '$route.path': function (newVal, oldVal) {
    //     if (newVal === '/settlement') {
    //       console.log(newVal);
    //     }
    //   }
    // },
    mounted: function () {

    },
    methods: {

    }
  }
</script>

<style lang="less">


</style>
