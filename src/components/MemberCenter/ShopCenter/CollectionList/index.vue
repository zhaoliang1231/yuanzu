<template>
    <!--收藏列表-->
    <div class="user-content">
        <h3>我的收藏列表</h3>
        <table>
            <tbody>
                <tr>
                    <td>
                        <div class="order-list">
                            <img title="8号溪云初起巧克力蛋糕" alt="8号溪云初起巧克力蛋糕" src="../Order/img/S.jpg">
                            <strong>朝羽鲜奶蛋糕</strong>
                            <p>寓意良辰美景， 幸福的时刻</p>
                        </div>
                    </td>
                    <td>
                      <div><el-button type="danger">添加到购物车</el-button></div>
                      <div class="delete">删除</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  .user-content{
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
    table{
      width: 100%;
      tbody{
        tr td{
          padding: 27px 0;
          border-bottom: 1px solid #959595;
        }
      }
      .delete{
        width: 114px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
</style>
