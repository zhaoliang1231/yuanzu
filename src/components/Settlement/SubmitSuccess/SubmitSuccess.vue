<template>
    <div>
     <div class="sub-content-box">
       <div class="sub-state-box">
         <img src="../../../static/img/icon_ok.gif" style="vertical-align:middle" alt="">
         <span class="fontSize-18">恭喜您订单提交成功</span>
       </div>
       <div style="border-top: 1px solid #c7c7c7;margin-top: 30px">

       </div>
       <div class="sub-Payment-box">
          <span>订单编号： <em>2019051702829651</em>  </span>
         <span>应付款项：<em>¥714.00</em></span>
         <p>您选择的支付方式为：<img src="../../../static/img/alipay.jpg" alt="">
           <a href="#" class="fontSize-14 hover-bg-pink text-align-center">立即支付</a>
         </p>
         <span>如果您在购物中遇到任何问题请及时咨询我们的客服人员，或拨打400-110-3737</span>
       </div>
     </div>
    </div>
</template>

<script>
export default {
  name: 'SubmitSuccess',
  data () {
    return {
      state: {
        imgUrl: '../../../static/img/icon_ok.gif',
        StateText: '恭喜您订单提交成功'
      }
    }
  }
}
</script>

<style lang="less">
@import "../../../static/css/common";

  .sub-content-box{
    padding: 45px 20px;
    border: 1px solid #e6e4e5;
    .sub-state-box{
      text-align: center;
    }
  }
  .sub-Payment-box{
    padding: 74px 55px 55px 55px;
    span:nth-child(2){
      padding-left: 50px;
      em{
        font-size: 18px;
        color: @pink;
      }
    }
    p{
      margin-top: 20px;
      img{
        width: 150px;
        height: 52px;
        vertical-align:middle
      }
      a{
        display: inline-block;
        background-color: #de5356;
        margin-left: 23px;
        width: 100px;
        color: @white;
        padding: 8px 12px;
      }
      margin-bottom: 10px;
    }
  }
</style>
