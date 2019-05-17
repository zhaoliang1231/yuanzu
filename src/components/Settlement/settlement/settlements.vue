<template>
      <div class="settlement_box">
        <p class="fontSize-14">订单合计</p>
        <p class="" style="border: none" ><em class="fl">商品数量总计：</em><em class="fr">2</em></p>
        <p><em class="fl">商品金额总计（不含运费）：</em><em class="fr font-pink">¥456.00</em></p>
        <span>总计：¥<em>456.00</em></span>
        <div>
          <router-link to="/settlement/fillorder" class="hover-bg-pink">结算</router-link>
          <router-link to="/" class="hover-bg-pink">继续购物</router-link>
        </div>
      </div>
</template>

<script>
export default {
  name: 'settlements'
}
</script>

<style lang="less">
  .settlement_box{
    width: 340px;
    float: right;
    margin-right: 20px;
    p{
      border-bottom: 1px solid #c7c7c7;
      line-height: 30px;
      width: 100%;
      display: inline-block;
    }
    span{
      line-height: 25px;
    }
    a{
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      margin-left: 23px;
      background-color: #de5356;
      display: inline-block;
      float: right;
      margin-top: 14px;
    }
  }
</style>
