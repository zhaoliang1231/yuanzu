<template>
  <div class="user-content">
      <h3>订单详情</h3>
      <!--订单流程-->
      <div class="order-process">
          <ul>
              <li>
                  <span>订单号:21456465426</span>
                  <span>订单状态：订单提交</span>
              </li>
          </ul>
          <ul class="order-process-icon">
              <li>
                  订单提交
                <span></span>
              </li>
              <li>
                  付款成功
                <span></span>
              </li>
              <li>
                  订单审核
                  <span></span>
              </li>
              <li>自提/配送
                  <span></span>
              </li>
              <li>订单完成
                  <span></span>
              </li>
              <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              </el-row>
          </ul>
      </div>
      <!--收货人信息-->
      <div class="order-massage">
          <h4>收货人信息</h4>
          <ul>
            <li>
              <span>大哥大</span>，
              <span>中国</span>，
              <span>上海</span>，
              <span>浦东</span>，
              <span>大渡口</span>，
              <span>西永天坑德克特</span>，
              <span>456502</span>，
              <span>15216674993</span>
            </li>
          </ul>
      </div>
      <!--备注-->
      <div class="remarks">
          <h4>备注信息</h4>
          <p>暂时无备注信息</p>
      </div>
    <!--预计到货时间-->
      <div class="arrival-time">
          <h4>预计到货时间</h4>
          <ul>
              <li>
                  <span>2019-05-15 17:00</span>
                  <span>(<i>*</i>温馨提示：快递类商品以实际到货时间为准，实际到货时间可能有0.5~1小时的偏差哦~)</span>
              </li>
          </ul>
        <p></p>
      </div>
      <!--支付方式-->
      <div class="pay-method">
          <h4>支付方式</h4>
          <p>微信</p>
      </div>
      <!--电子券使用情况-->
      <div class="use-ticket">
          <h4>电子券使用情况</h4>
          <p>该订单未使用电子券</p>
      </div>
      <!--发票信息-->
      <div class="invoice">
          <h4>发票信息</h4>
          <p>电子发票</p>
      </div>
      <!--商品信息-->
      <div class="goods-info">
        <h4>商品信息</h4>
        <table>
          <thead>
            <tr>
              <th>
                &nbsp;
              </th>
              <th>数量</th>
              <th>商品价格</th>
              <th>总计</th>
              <th>配送方式</th>
              <th>门店</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="order-list">
                    <img title="8号溪云初起巧克力蛋糕" alt="8号溪云初起巧克力蛋糕" src="./img/S.jpg">
                  <strong>8号溪云初起巧克力蛋糕</strong>
                  <p>规格：8号&nbsp;&nbsp;夹馅：香芋+香芋（网红款）</p>
                </div>
              </td>
              <td>1</td>
              <td>￥288.8</td>
              <td>￥288.8</td>
              <td>门店自取</td>
              <td>潜水店</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="total">
        <h5>订单合计</h5>
        <ul>
          <li>
            <span>商品数量总计:</span>
            <span>1</span>
          </li>
          <li>
            <span>商品金额总计：</span>
            <span>￥120</span>
          </li>
          <li>
            <span>送货：</span>
            <span>免费</span>
          </li>
          <li>
            <span>总计</span>
            <span>￥120</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
    .order-process{
      border-bottom: 1px solid black;
      .order-process-icon{
        margin-top: 20px;
        margin-bottom: 40px;
        li{
          display: inline-block;
          width: 19%;
          text-align: center;
          position: relative;
          z-index: 1111;
          span{
            display: block;
            width: 20px;
            height: 20px;
            background: url("./img/icon_0.png");
            margin-left: 73px;
          }
        }
        li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5){
          span{
            background: url("./img/icon_0.png");
            background-position: 20px;
          }
        }
      }
    }
    .order-massage,.remarks,.arrival-time,.pay-method,.use-ticket,.invoice{
      padding: 10px 0;
      border-bottom:1px solid black ;
      h4{
        line-height: 30px;
        font-weight: 600;
        font-size: 14px;
      }
    }
    .goods-info{
      /deep/h4{
        font-weight: 600;
        font-size: 14px;
        height: 45px;
        line-height: 45px;
        margin-bottom: 6px;
      }
      table{
        width: 100%;
        border: 1px solid #c7c7c7;
        tr{
          th{
            line-height: 45px;
            text-align: center;
          }
          td{
            padding: 12px 16px;
            text-align: center;
          }
          td:nth-child(3),td:nth-child(4){
            color: @pink;
            font-weight:bold ;
          }
        }
      }
      .order-list{
        width: 388px;
        height: 118px;
        text-align: left;
        img{
          float: left;
          width: 118px;
          height: 118px;
          margin-right: 41px;
          border: 1px solid #ccc;
          display: inline;
        }
        strong{
          line-height: 19px;
          font-size: 14px;
          font-weight: normal;
          padding-top: 25px;
          display: block;
        }
        p{
          height: 26px;
          line-height: 18px;
          overflow: inherit;
          color: #999;
        }
      }
    }
    .total{
      float: right;
      width: 349px;
      h5{
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        border-bottom: 1px solid #c7c7c7;
        font-weight: 600
      }
      ul li{
        line-height: 40px;
      }
      ul li:nth-child(3){
        border-bottom: 1px solid #c7c7c7;;
      }
      ul li{
        span:nth-child(2){
          float: right;
        }
      }
      ul li:nth-child(2),ul li:nth-child(4){
        span:nth-child(2){
          color: @pink;
          font-weight: bold;
        }
      }
    }
    .arrival-time{
        i{
          color: @pink;
          padding-right: 5px;
        }
      }
  }
  .row-bg{
    margin-top: -14px;
    margin-left: -28px;
    position: relative;
    z-index: 1;
    .bg-purple {
      background: #d3dce6;
    }
    .grid-content {
      min-height: 5px;
    }
    .el-col{
      width: 164px;
    }
  }
</style>
