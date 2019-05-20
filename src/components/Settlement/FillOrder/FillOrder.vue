<template>
  <div>
    <div class="fo-content-box">
      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          收件人信息
        </p>
        <div class="fo-right-box">
          <button class="a-hover-pink">新增收货人地址</button>
        </div>
      </div>

      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          购物清单
        </p>
        <div class="fo-right-box">
          <a href="/settlement/shopcart" class="a-hover-pink fr"> <
            <返回购物车修改商品
          </a>
          <div class="fo-Commodity-information">
            <div class="fo-cominfo-title-box">
              <ul>
                <li class="font-weight-bold text-align-center">商品</li>
                <li class="font-weight-bold text-align-center">单价</li>
                <li class="font-weight-bold text-align-center">数量</li>
                <li class="font-weight-bold text-align-center">总计</li>
              </ul>
            </div>

            <div class="fo-coin-cont">
              <div>
                <ul>
                  <li>
                    <router-link to="#" class="a-hover-pink font-weight-bold">朝羽鲜奶蛋糕</router-link>
                    <p>规格：<em>6号</em> 夹馅：<em>香芋+香芋（网红款）</em></p>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥198.00</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="">1</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥198.00</em>
                  </li>
                </ul>
              </div>
            </div>

            <div class="fo-coin-cont">
              <div>
                <ul>
                  <li>
                    <router-link to="#" class="a-hover-pink font-weight-bold">朝羽鲜奶蛋糕</router-link>
                    <p>规格：<em>6号</em> 夹馅：<em>香芋+香芋（网红款）</em></p>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥198.00</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="">1</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥198.00</em>
                  </li>
                </ul>
              </div>
            </div>


            <div class="fo-in-distribution">
              <span class="fontSize-14">配送方式 ：</span>
              <div>
                <label><input type="radio" name="in-distribution" checked="checked">门店自提</label>
                <p></p>
                <label style="display: inline-block;padding-top: 15px"><input type="radio"
                                                                              name="in-distribution">门店配送</label>
              </div>

            </div>

            <div class="fo-AOG-time">
              预计到货时间：
              <el-date-picker v-model="value1" type="datetime"></el-date-picker>
              <span> ( 提示：<em class="font-pink">* 必填</em>  北京地区最早送达时间为上午12点，实际到货时间可能有0.5~1小时的偏差哦~  )</span>
            </div>
          </div>

          <div class="fo-Candle-box">
            <em class="font-pink">*</em>
            <span>生日蜡烛：</span>
            <label><input type="radio" name="needCandle">不需要</label>
            <label><input type="radio" name="needCandle" checked="checked">需要</label>
            <p><span>备注：</span><input type="text" placeholder="如果您订购蛋糕用于庆生，需要数字形状生日蜡烛，请注明年龄（是年龄不是出生年月）"></p>
          </div>

        </div>

      </div>

      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          支付方式
        </p>
        <div class="fo-right-box">

          <p>温馨提示：使用支付宝或银联支付更快捷</p>
        </div>
      </div>
      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          订单结算
        </p>
        <div class="fo-right-box">
          <div>
            <label><input type="radio" checked="checked" name="invoice">不需要发票</label>
            <label><input type="radio" name="invoice">电子发票</label>
            <label><input type="radio" name="invoice">普通发票</label>
            <label><input type="radio" name="invoice">增值税发票</label>
          </div>
          <div>
            <p class="fontSize-14">最终订单金额：</p>
            <p><span>商品金额:</span>
              <em>¥396.00</em>
            </p>
            <p><span>运费:</span>
              <em>免费</em>
            </p>
            <p><span>折扣:</span>
              <em>¥0.00</em>
            </p>
            <p><span>应付金额:</span>
              <em>¥396.00</em>
            </p>
            <a v-on:click.stop="tosub" href="/settlement/submitsuccess" class="hover-bg-pink">下订单</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FillOrder',
    data() {
      return {
        value1: '',
        tosub:false
      }
    },
    methods:{
      isToSub:function (event) {
        console.log(event);
        if(this.tosub){

        }else {
          event.preventDefault()
        }
      }
    }
  }
</script>

<style lang="less">

  // .slt-Payment-process-box ul {
  //background-position: 0px -33px;
  // li:nth-child(1){
  //   color:#333;
  // }
  // li:nth-child(2){
  //   color:#fff;
  // }
  //}
  .fo-content-box {
    padding: 0px 0px 80px 0px;
    border: 1px solid #c7c7c7;
  }

  .fo-center-box {
    position: relative;
    border-bottom: 1px solid #c7c7c7;
    height: auto;
    display: inline-block;
    width: 100%;
    .fo-title-box {
      position: absolute;
      width: 171px;
      padding-top: 30px;
      background: url("../../../static/img/line_x.jpg") no-repeat left top;
      height: 100%;
    }
    .fo-right-box {
      padding: 12px 12px 12px 185px;
      float: left;
      width: 100%;
      button {
        margin: 10px 0 0 30px;
        width: 109px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #e7e5e6;
        display: block;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }

  .fo-center-box:nth-child(1) {
    height: 110px;
  }

  .fo-center-box:nth-child(2) {
    a {

    }
    .fo-Commodity-information {
      border: 1px solid #c7c7c7;
      clear: both;
      .fo-cominfo-title-box {
        height: 37px;
        background: #e6e4e5;
        ul li {
          float: left;
          line-height: 37px;
        }

      }
      ul li:nth-child(1) {
        width: 370px;
      }
      ul li:nth-child(2) {
        width: 158px;
      }
      ul li:nth-child(3) {
        width: 210px;
      }
      ul li:nth-child(4) {
        width: 220px;
      }
      .fo-coin-cont {
        border-bottom: 1px solid #c7c7c7;
      }
      .fo-coin-cont div {
        padding: 10px 20px;
        padding-left: 0px;
        display: inline-block;
        p {
          margin-top: 15px;
        }
        ul li {
          float: left;
        }
        ul li:nth-child(1) {
          padding-left: 20px;
        }
      }

      .fo-in-distribution {
        padding: 10px 20px;
        border-bottom: 1px solid #c7c7c7;
        span {
          display: inline-block;
          float: left;
        }
        input[type='radio'] {
          margin-left: 28px;
          margin-right: 10px;
        }

      }
      .fo-AOG-time {
        padding: 15px 20px;
        span {
          line-height: 20px;
        }
      }

    }
    .fo-Candle-box {
      margin: 15px 0px;
      input[type='radio'] {
        margin-right: 5px;
      }
      label {
        margin-right: 25px;
      }
      p {
        margin-top: 20px;
        input[type='text'] {
          width: 96%;
          outline: none;
          background: none;
          box-shadow: none;
          border: 1px solid #c7c7c7;
          height: 21px;
          line-height: 21px;
        }
      }
    }
  }

  .fo-center-box:nth-child(3) {
    .fo-right-box {
      p {
        padding: 15px 13px 58px 0px;
      }
    }

  }

  .fo-center-box:nth-child(4) {
    .fo-right-box {
      height: 302px;
      div:first-child {
        font-size: 14px;
        height: 100%;
        float: left;
        width: 559px;
        label {
          padding-left: 13px;
        }
        input[type='radio']{
          margin-right: 5px;
        }
      }
      div:last-child{
        border-left: 1px solid #cdcdcd;
        float: left;
        padding: 0px 34px 0px 65px;
        width: 435px;
        p{
          line-height: 33px;
          display: inline-block;
          width: 100%;
          span{
            float: left;
          }
          em{
            float: right;
          }
        }
        a{
          width: 78px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          color: #fff;
          padding: 1px;
          background-color: #de5251;
          display: inline-block;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 165px;
  }

  .el-input__inner {
    height: 20px;
    border-radius: 0px;
    width: 165px;
    border-color: #c7c7c7;
    font-size: 12px;
  }

  .el-input__suffix {
    right: 2px;
  }

  .el-input--prefix .el-input__inner {
    padding-left: 20px;
  }

  .el-input--suffix .el-input__inner {
    padding-right: 10px;
  }

  .el-input__icon {
    line-height: 20px;
  }
</style>
