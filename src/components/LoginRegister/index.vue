<template>
  <!--登录注册页面-->
  <div>
    <div class="login_bar">
        <span>
            <router-link to="/" class="a-hover-pink">
                主页
            </router-link>
        </span>
        <span>></span>
        <span>
            <a class="a-hover-pink" href="">登录/注册</a>
        </span>
    </div>
      <div class="login_title">
          <el-tabs v-model="activeName" @click="handleClick">
              <el-tab-pane label="登录" name="first" class="login_tab">
                  <Login></Login>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">
                  <Register></Register>
              </el-tab-pane>

          </el-tabs>
      </div>
  </div>
</template>

<script>
    import Login from './Login/Login'
    import Register from './Register/Register'

    export default {
name: 'index',
 data () {
    return {
     activeName: 'first'
    }
 },
     components:{
      Login,
      Register
     },
 methods:{
  handleClick(tab, event) {

  }
 }
}
</script>

<style scoped lang="less">
@import "../../static/css/common";

/deep/.el-tabs__nav{
   margin-left: 500px;
}
/deep/.el-tabs__item.is-active{
    color:#333;
}
/deep/.el-tabs__item:hover{
    color: #333;
}
//选项卡移动线
/deep/.el-tabs__active-bar{
    border-bottom: 2px solid #848484;

}
/deep/.el-tabs__item{
    font-size: 16px;
    color: @fontColor;
}


</style>
