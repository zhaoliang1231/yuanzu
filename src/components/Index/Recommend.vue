<template>
    <div class="recommend-content clearfix">
      <div class="recommend fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="元祖新品" name="first">
            <div class="home-goods-lists clearfix">
              <div class="home-goods-list li-hover-shadow fl"> 
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg1.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg2.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg3.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热销商品" name="second">
            <div class="home-goods-lists clearfix">
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg4.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg5.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg6.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg7.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="节庆民俗" name="third">
            <div class="home-goods-lists clearfix">
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg8.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg9.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg10.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg11.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="元祖卡卷" name="fourth">
            <div class="home-goods-lists clearfix">
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg12.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg13.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg14.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
              <div class="home-goods-list li-hover-shadow fl">
                <router-link to="">
                  <img title="8号溪云初起巧克力蛋糕" src="~static/img/testimg15.jpg"/>
                  <span class="fontSize-14 mn-a">溪云初起巧克力蛋糕</span>
                  <p class="fontSize-20 font-color-red">¥258.00</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="ADplay fr">
        <img src="~static/img/home-img2.jpg"/>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>
<style lang="less">
</style>
