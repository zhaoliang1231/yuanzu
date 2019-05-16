<template>
  <!--个人资料-->
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
    <div class="user-center">
      <div class="user-nav">
        <p>欢迎光临元祖食品</p>
        <p>会员中心</p>
        <p>ID:2123132135153</p>
        <p>会员等级</p>
        <div class="personal-center">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="1">
                  <template slot="title">
                    <span>个人中心</span>
                  </template>
                  <el-menu-item-group>
                    <router-link to="MemberCenter/PersonalCenter/PersonalData"><el-menu-item index="1-1">我的资料</el-menu-item></router-link>
                    <el-menu-item index="1-2">修改密码</el-menu-item>
                    <el-menu-item index="1-3">收货地址</el-menu-item>
                    <el-menu-item index="1-4">增值税发票</el-menu-item>
                    <el-menu-item index="1-5">我的电子券</el-menu-item>
                    <el-menu-item index="1-6">我的积分</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
              <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="2">
                  <template slot="title">
                    <span>购物中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">购物车</el-menu-item>
                    <el-menu-item index="2-2">订单列表</el-menu-item>
                    <el-menu-item index="2-3">收藏列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="user-content">
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  @import "~static/css/index.less";
  /*个人中心*/
  .personal-center {
    width: 100%;
    /deep/
    .el-row{
      .el-col{
        width: 100%;
        .el-submenu__title{
          padding: 0 0;
          height: 32px;
          line-height: 32px;
        }
        .el-menu--inline{
          .el-menu-item-group{
            .el-menu-item{
              padding: 0 0;
              min-width: 181px;
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  /*内容*/
  .user-content{
  }
</style>
