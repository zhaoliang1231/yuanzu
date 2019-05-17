<template>
    <div class="home-index">
      <HomeHeader/>
      <Recommend/>
      <HomeConten/>
      <HomeConten/> 
      <HomeConten/>
      <HomeActivity/>
    </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import Recommend from './Recommend.vue'
import HomeConten from './HomeConten.vue'
import HomeActivity from './HomeActivity.vue'
export default {
  name: 'Index',
  components: {HomeHeader, Recommend, HomeConten, HomeActivity}
}
</script>

<style scoped>

</style>
