<template>
  <div id="app">
    <div class="content-fuild">
      <Header/>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Pabulic/Header/Header.vue'
export default {
  name: 'App',
  components: {Header}
}
</script>

<style lang="less">
</style>
