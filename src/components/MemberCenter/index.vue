<template>
<div class="memberCenter">
  <!--头部-->
    <div class="member-header">
        <a>主页</a>
        >
        <a>我的账户</a>
        >
        <a>个人资料</a>
    </div>
  <!--中心内容-->
    <div class="user-center clearfix">
        <div class="user-nav">
            <p>欢迎光临元祖食品</p>
            <p>会员中心</p>
            <p>ID:2123132135153</p>
            <p>会员等级</p>
            <UserNav/>
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import UserNav from './UserNav'
export default {
  components: {
    UserNav
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  /*个人中心*/
  .memberCenter{
      //头部
      .member-header{
        height: 45px;
        line-height: 45px;
      }
      //  内容
      .user-center{
          padding: 0 20px;
          //  左边导航
          .user-nav{
              float: left;
              width: 181px;
              padding-top: 8px;
              p{
                height: 30px;
                line-height: 30px;
              }
          }
          //  右边内容
          .user-content{
              float: left;
              width: 945px;
              min-height: 490px;
              border: 1px solid @lightgrey;
              padding: 28px 46px 0;
                /deep/h3{
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                  border-bottom: 1px solid @gray;
                  margin-bottom: 20px;
                }
          }
      }
  }
</style>
