<template>
<div>
  <div class="shopcart-content-box">
      <div class="shopcart-cft-tit-box">
        <tr>
          <td width="460px" class="font-weight-bold text-align-center">商品</td>
          <td width="197px" class="font-weight-bold text-align-center">单价</td>
          <td width="357px" class="font-weight-bold text-align-center">数量</td>
          <td width="182px" class="font-weight-bold text-align-center">操作</td>
        </tr>

      </div>
    <ul>
    <li>
        <div class="spct-commodity-information-box">
          <a href="#" class="spct-ci-img-a" >
            <img src="../../../static/img/100001433_M.jpg" alt="">
          </a>
          <div class="spct-ci-title-box padding-y-30">
            <a href="#" class="font-weight-bold a-hover-pink">吟紫鸢鲜奶蛋糕</a>
            <p>规格：<span>8号</span> 夹馅：<span>香芋+香芋（网红款）</span></p>
          </div>
        </div>
      <div class="spct-pirce-box">
          <span class="font-weight-bold">¥258.00</span>
      </div>
      <div class="">
          s
      </div>
    </li>
  </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'shopcart'
}
</script>
<style lang="less">

  .slt-Payment-process-box ul {
    background-position: left top;
    li:nth-child(1){
      color:#fff;
    }
  }
</style>
