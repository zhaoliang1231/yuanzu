<template>
  <!--修改个人资料-->
  <div class="user-content">
      <h3>更改个人资料</h3>
      <ul class="clearfix">
        <li>
          <span>姓名：</span>
          <span>噶苏亚</span>
        </li>
        <li>
          <span>性别：</span>
          <span>
            <select>
              <option>男</option>
              <option>女</option>
            </select>
          </span>
        </li>
        <li>
          <span>出生年月：</span>
          <span>
            <input readonly="readonly">
              (
              <i>*</i>
              提示：生日如有错误，请联系客服进行修改。)
          </span>
        </li>
        <li>
          <span>地址：</span>
          <span>
            <select>
              <option disabled="disabled" selected="selected">请选择</option>
              <option>456456</option>
              <option>456456</option>
            </select>
            <select>
              <option disabled="disabled" selected="selected">请选择</option>
              <option>456465465</option>
              <option>456456</option>
            </select>
            <select>
              <option disabled="disabled" selected="selected">请选择</option>
              <option>15646465</option>
              <option>456456</option>
            </select>
            <input/>
          </span>
        </li>
      </ul>
      <el-button type="danger">确认 </el-button>
      <router-link :to="{name:'PersonalData'}"><el-button type="info">返回</el-button></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        password: '',
        changepwd: '',
        confirmpwd: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
    .el-form{
      margin: auto;
      width: 400px;
    }
    .el-button{
      width: 100px;
      /deep/span{
        color: @white;
      }
    }
    ul {
      li {
        line-height: 40px;
        margin-left: 100px;
        clear: both;
        span{
          display: block;
          float: left;
          i{
            padding-right: 5px;
            color: @pink;
          }
        }
        span:first-child{
          width: 60px;
          text-align: right;
        }
        span:nth-child(2){
          margin-left: 10px;
        }
      }
    }
    .el-button.el-button--danger{
      margin-left: 100px;
    }
  }
</style>
