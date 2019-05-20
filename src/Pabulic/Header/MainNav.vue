<template>
  <div class="mn-main-nav">
    <div class="clearfix">
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="mn-main-nav-classify fl" :class="{active:!isHide}">
        <div class="mn-classify-name">
          <a class="font-color-white fontSize-16">全部商品菜单</a>
        </div>
        <ul v-if="toggle" class="mn-classify-lists">
          <li :style="ico[0]"  class="mn-classify-list">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">元祖端午季</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
          <li :style="ico[1]"  class="mn-classify-list mn-bg">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">元祖梦蛋糕</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">母亲节转款</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">鲜奶蛋糕</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">巧克力蛋糕</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">慕思蛋糕</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">多层蛋糕</span>
            </router-link>
          </li>
          <li :style="ico[2]" class="mn-classify-list">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">冰品季</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
          <li :style="ico[3]" class="mn-classify-list mn-bg">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">元祖礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
          <li :style="ico[4]"  class="mn-classify-list">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">精致西点</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
          <li :style="ico[5]" class="mn-classify-list mn-bg">
            <router-link to="/classfiy">
              <span class="mn-classify-list-title fontSize-14 mn-a">元祖端午季</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">元祖商城</span>
        </router-link>
      </div> <span class="fl">|</span>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">品牌故事</span>
        </router-link>
      </div> <span class="fl">|</span>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">元祖推荐</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ico1 from 'static/img/zongzi.png'
import ico2 from 'static/img/Much.png'
import ico3 from 'static/img/jingzhi.png'
import ico4 from 'static/img/kajuan.png'
import ico5 from 'static/img/lihe.png'
import ico6 from 'static/img/tiantong.jpg'
export default {
  data () {
    return {
      ico: [`background:url(${ico1}) no-repeat 0px 15px`,
        `background:url(${ico2}) no-repeat 0px 15px`,
        `background:url(${ico6}) no-repeat 0px 15px`,
        `background:url(${ico5}) no-repeat 0px 15px`,
        `background:url(${ico3}) no-repeat 0px 15px`,
        `background:url(${ico4}) no-repeat 0px 15px`],
      isHide: true,
      toggle: false
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
    }
  }
}
</script>
<style>
</style>
