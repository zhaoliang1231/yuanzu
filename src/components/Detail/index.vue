<template>
    <div>
        <DetailBanner></DetailBanner>
        <ShopIntroduction></ShopIntroduction>
    </div>
</template>

<script>
    import DetailBanner from './DetailBanner/DetaiBanner'
    import ShopIntroduction from './ShopIntroduction/ShopIntroduction'

    export default {
   name: 'Detail',
    components: {
      DetailBanner,
      ShopIntroduction
    }
  }
</script>

<style scoped>

</style>
