<template>
  <!--登录注册页面-->
  <div>
    <div class="login_bar">
        <span>
            <a class="a-hover-pink" href="">主页</a>
        </span>
        <span>></span>
        <span>
            <a class="a-hover-pink" href="">登录/注册</a>
        </span>
    </div>
      <div class="Z_login_title">
          <el-tabs v-model="activeName" @click="handleClick">
              <el-tab-pane label="登录" name="first">登录</el-tab-pane>
              <el-tab-pane label="注册" name="second">注册</el-tab-pane>
          </el-tabs>
      </div>
  </div>
</template>

<script>
export default {
name: 'index',
 data () {
    return {
     activeName: 'first'
    }
 },
 methods:{
  handleClick(tab, event) {
   
  }
 }
}
</script>

<style scoped lang="less">

</style>
