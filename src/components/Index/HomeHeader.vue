<template>
    <div class="home-header clearfix">
      <div class="home-banner fl">
        <el-carousel height="438px" indicator-position="outside">
          <el-carousel-item v-for="item in banner" :key="item"> 
            <img :src="item"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home-Notice-box fl">
        <div class="home-Notice">
          <div class="home-Notice-title">
            <span class="fontSize-15">元祖公告</span>
          </div>
          <ul class="home-Notice-content-box">
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
          </ul>
        </div>
        <img class="home-Notice-img" src="~static/img/home-Notice-img1.jpg"/>
      </div>
    </div>
</template>
<script>
import banner1 from 'static/img/home-banner1.jpg'
import banner2 from 'static/img/home-banner2.jpg'
import banner3 from 'static/img/home-banner3.png'
export default {
  data () {
    return {
      banner: [banner1, banner2, banner3]
    }
  }
}
</script>
<style lang="less">

</style>
