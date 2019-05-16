<template>
  <div id="app">
    <FloatBar/>
    <div class="content-fuild">
      <Header/>
      <Banner/>
      <LogoAndSearch/>
      <MainNav/>
      <router-view></router-view>
      <Bottom/>
    </div>
  </div>
</template>

<script>
import Header from './Pabulic/Header/Header.vue'
import Banner from './Pabulic/Header/Banner.vue'
import LogoAndSearch from './Pabulic/Header/LogoAndSearch.vue'
import MainNav from './Pabulic/Header/MainNav.vue'
import Bottom from './Pabulic/Header/Bottom.vue'
import FloatBar from './Pabulic/Header/FloatBar.vue'
export default {
  name: 'App',
  components: {Header, Banner, LogoAndSearch, MainNav, Bottom, FloatBar}
}
</script>

<style lang="less">

</style>
