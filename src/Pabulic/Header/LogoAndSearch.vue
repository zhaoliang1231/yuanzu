<template>
  <div class="search-centainer">
    <router-link to="/">
      <img class="logo" :src="Logo">
    </router-link>
    <div class="search-box">
      <div class="search">
        <input class="search-input" type="text"/>
        <a class="search-btn">搜索</a>
      </div>
      <div class="search-text ">
        <span class="font-color-lightgrey">热门搜索：</span>
        <router-link to="/">
          <span class="font-color-lightgrey">元祖梦蛋糕</span>
        </router-link>
        <router-link to="/">
          <span class="font-color-lightgrey">精致西点</span>
        </router-link>
        <router-link to="/">
          <span class="font-color-lightgrey">端午季</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from 'static/img/logo.png'
export default {
  data () {
    return {
      Logo
    }
  }
}
</script>
<style>
</style>
