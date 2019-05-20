<template>
  <div class="personal-center">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <span>个人中心</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{name:'PersonalData'}">
                <el-menu-item index="1-1">我的资料</el-menu-item>
              </router-link>
              <router-link :to="{name:'ChangePassword'}">
                <el-menu-item index="1-2">修改密码</el-menu-item>
              </router-link>
              <router-link :to="{name:'ReceivingAddress'}">
                <el-menu-item index="1-3">收货地址</el-menu-item>
              </router-link>
              <router-link :to="{name:'Integral'}">
                <el-menu-item index="1-4">增值税发票</el-menu-item>
              </router-link>
              <router-link :to="{name:'ElectronicTicket'}">
                <el-menu-item index="1-5">我的电子券</el-menu-item>
              </router-link>
              <router-link :to="{name:'Invoice'}">
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
              <router-link :to="{name:'PersonalData'}"><el-menu-item index="2-1">购物车</el-menu-item></router-link>
              <router-link :to="{name:'OrderList'}"><el-menu-item index="2-2">订单列表</el-menu-item></router-link>
              <router-link :to="{name:'CollectionList'}"><el-menu-item index="2-3">收藏列表</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
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
</style>
