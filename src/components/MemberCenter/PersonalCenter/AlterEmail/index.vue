<template>
  <!--修改电子邮箱-->
  <div class="user-content">
    <h3>更改电子邮箱</h3>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="输入邮箱">
        <el-input v-model="formLabelAlign.changepwd" type="email"></el-input>
      </el-form-item>
      <el-form-item label="确认邮箱">
        <el-input v-model="formLabelAlign.confirmpwd" type="alterEmali"></el-input>
      </el-form-item>
    </el-form>
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
        email: '',
        alterEmali: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
    text-align: center;
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
  }
</style>
