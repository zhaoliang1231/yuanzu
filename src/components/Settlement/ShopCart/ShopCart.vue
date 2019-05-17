<template>
  <div style="height: auto;display: inline-block">
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
            <a href="#" class="spct-ci-img-a">
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
          <div class="spct-number-box">
            <div>
              <a href="javascript:void(0);" @click="NumberSubtract" >-</a>
              <input type="text" @blur="isnumber" v-model="number">
              <a href="javascript:void(0);" @click="NumberAdd" >+</a>
            </div>
          </div>
          <div class="spct-remove-box">
            <a href="javascript:void(0);" class="a-hover-pink">移除</a>
          </div>
        </li>
      </ul>
    </div>
    <settlements></settlements>
  </div>
</template>
<script>
var reg = /^\d{1,}$/
import settlements from '../settlement/settlements.vue'
export default {
  name: 'shopcart',
  components: {
    settlements
  },
  data () {
    return {
      number: 1
    }
  },
  methods: {
    isnumber: function () {
      if (reg.test(this.number) && this.number != 0) {
        console.log('数字')
      } else {
        alert('您输入的数量不正确！')
        this.number = 1
      }
    },
    NumberSubtract: function () {
      if (this.number > 1) {
        this.number--
      }
    },
    NumberAdd: function () {
      if (this.number > 0) {
        this.number++
      }
    },
    ShopTotal: function () {

    }
  }
}
</script>
<style lang="less">

  /*.slt-Payment-process-box ul {*/
    /*background-position: left top;*/
    /*li:nth-child(1) {*/
      /*color: #fff;*/
    /*}*/
    /*li:nth-child(2) {*/
      /*color: #333;*/
    /*}*/
  /*}*/

  .spct-number-box {
    width: 357px;
    float: left;
    div{
      display: block;
      margin: 37px auto;
      width: 78px;
    }
    a {
      display: inline-block;
      width: 23px;
      height: 23px;
      border: 1px solid #ccc;
      color: #000000;
      border-radius: inherit;
      background: #f0f0f0;
      text-align: center;
    }
    input[type=text]{
      width: 33px;
      height: 23px;
      border: 1px solid #ccc;
      line-height: 21px;
      text-align: center;
      margin: 0px -5px -1px -5px;
      position: relative;
      vertical-align: middle;
      outline: none;
    }
  }
  .spct-remove-box{
    width: 182px;
    float: left;
    text-align: center;
    line-height: 95px;
     a{
       padding-left: 20px;
       background: url("../../../static/img/icon_del.gif") no-repeat left center;
     }
   }
</style>
