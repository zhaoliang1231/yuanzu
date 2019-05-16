<template>
  <div class="he-top-nav clearfix">
    <router-link to="/">
      <div class="he-top-nav-list fr">购物车</div>
    </router-link>
    <span class="fr">|</span>
    <router-link to="/">
      <div class="he-top-nav-list fr">会员中心</div>
    </router-link>
    <span class="fr">|</span>
    <router-link to="/">
      <div class="he-top-nav-list fr">登录/注册</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="less">
</style>
