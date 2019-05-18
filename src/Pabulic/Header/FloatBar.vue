<template>
    <div class="FloatBar-box">
      <div class="FloatBar-nav">
        <div class="FloatBar-nav-list">
          <div class="ico ico-top" @click ="toTop" >
          </div>
          <div class="FloatBar-stretch" @click ="toTop">
          回到顶部
          </div>
        </div>
        <div class="FloatBar-top FloatBar-nav-list">
          <div class="ico ico-horn"></div>
          <div class="FloatBar-stretch" >
            <a href="#">最新活动</a>
          </div>
        </div>
        <div class="FloatBar-nav-list">
          <div class="ico ico-cart"></div>
          <div class="FloatBar-cart font-color-white fontSize-14">购物车</div>
          <div class="yuan">0</div>
        </div>
        <div class="FloatBar-nav-list">
          <div class="ico ico-star"></div>
          <div class="FloatBar-stretch" >
            <a href="#">我的收藏</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toTop: function () {
      window.scrollTo(0,0)
    }
  }
}
</script>
<style lang="less">
  @import "../../static/css/common";

</style>
