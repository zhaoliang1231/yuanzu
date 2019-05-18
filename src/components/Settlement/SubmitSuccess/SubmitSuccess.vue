<template>
    <div>
     <div class="sub-content-box">
       <div class="sub-state-box">
         <img src="../../../static/img/icon_ok.gif" alt="">
         <span>恭喜您订单提交成功</span>
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

  .sub-content-box{
    padding: 45px 20px;
    border: 1px solid #e6e4e5;
    .sub-state-box{
      text-align: center;
    }
  }
</style>
