<template>
    <div class="home-activity">
        <span class="home-activity-title fontSize-18">精彩活动</span>
      <ul class="clearfix">
        <li class="home-activity-theme fl">
          <router-link to="">
            <img src="~static/img/huodong1.jpg"/>
          </router-link>
        </li>
        <li class="home-activity-theme fl">
          <router-link to="">
            <img src="~static/img/huodong2.jpg"/> 
          </router-link>
        </li>
        <li class="home-activity-theme fl">
          <router-link to="">
            <img src="~static/img/huodong3.jpg"/>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
  .home-activity{
    margin-top: 20px;
    .home-activity-title{
      margin-left: 18px;
    }
    .home-activity-theme{
      width: 375px;
      height: 200px;
      margin-left: 18px;
      margin-top: 10px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
