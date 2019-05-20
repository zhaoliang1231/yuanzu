<template>
    <div class="clearfix">
        <div class="content_box" style="float:left">
          <DetailBanner ></DetailBanner>
          <ShopIntroduction></ShopIntroduction>
        </div>
        <GuessLike style="float:right;margin-top:45px"></GuessLike>
    </div>
</template>

<script>
    import DetailBanner from './DetailBanner/DetaiBanner'
    import ShopIntroduction from './ShopIntroduction/ShopIntroduction'
    import GuessLike from './GuessLike/guessLike'


    export default {
   name: 'Detail',
    components: {
      DetailBanner,
      ShopIntroduction,
      GuessLike
    }
  }
</script>

<style scoped>
  .content_box{
    width: 991px;
  }
</style>
