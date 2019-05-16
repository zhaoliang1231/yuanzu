<template>
  <div id="app">
    <div class="content-fuild">
      <Header/>
      <Banner/>
      <LogoAndSearch/>
      <MainNav/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Pabulic/Header/Header.vue'
import Banner from './Pabulic/Header/Banner.vue'
import LogoAndSearch from './Pabulic/Header/LogoAndSearch.vue'
import MainNav from './Pabulic/Header/MainNav.vue'
export default {
  name:  'App',
  components: {Header, Banner, LogoAndSearch, MainNav}
}
</script>

<style lang="less">

</style>
