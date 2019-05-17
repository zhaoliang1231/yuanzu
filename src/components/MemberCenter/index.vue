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
            <div class="personal-center">
                <el-row class="tac">
                    <el-col :span="12">
                        <el-menu default-active="2" class="el-menu-vertical-demo">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>个人中心</span>
                                </template>
                                <el-menu-item-group>
                                    <router-link to="MemberCenter/PersonalCenter/PersonalData">
                                        <el-menu-item index="1-1">我的资料</el-menu-item>
                                    </router-link>
                                    <router-link to="MemberCenter/PersonalCenter/ChangePassword">
                                        <el-menu-item index="1-2">修改密码</el-menu-item>
                                    </router-link>
                                    <router-link to="MemberCenter/PersonalCenter/ReceivingAddress">
                                        <el-menu-item index="1-3">收货地址</el-menu-item>
                                    </router-link>
                                    <router-link to="MemberCenter/PersonalCenter/Integral">
                                       <el-menu-item index="1-4">增值税发票</el-menu-item>
                                    </router-link>
                                    <router-link to="MemberCenter/PersonalCenter/ElectronicTicket">
                                        <el-menu-item index="1-5">我的电子券</el-menu-item>
                                    </router-link>
                                    <router-link to="MemberCenter/PersonalCenter/Invoice">
                                        <el-menu-item index="1-6">我的积分</el-menu-item>
                                    </router-link>
                                </el-menu-item-group>
                              </el-submenu>
                        </el-menu>
                        <el-menu default-active="2" class="el-menu-vertical-demo">
                            <el-submenu index="2">
                                <template slot="title">
                                    <span>购物中心</span>
                                </template>
                                <el-menu-item-group>
                                  <router-link to="MemberCenter/PersonalCenter/PersonalData"><el-menu-item index="2-1">购物车</el-menu-item></router-link>
                                  <router-link to="MemberCenter/PersonalCenter/OrderList"><el-menu-item index="2-2">订单列表</el-menu-item></router-link>
                                  <router-link to="MemberCenter/PersonalCenter/CollectionList"><el-menu-item index="2-3">收藏列表</el-menu-item></router-link>
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
      }
      //  右边内容
      .user-content{
        float: left;
        width: 945px;
        height: 495px;
        border: 1px solid #c7c7c7;
        padding: 28px 46px 0;
      }
    }
  }

  .personal-center {
    width: 100%;
    /deep/.el-row{
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
