<template>
  <!--修改电话-->
    <div class="user-content">
        <h3>更改电话号码</h3>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="输入手机" prop="telPhone">
                <el-input v-model="ruleForm2.telPhone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认手机" prop="checkPhone">
                <el-input v-model="ruleForm2.checkPhone" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="danger">确认 </el-button>
        <router-link :to="{name:'PersonalData'}"><el-button type="info">返回</el-button></router-link>
    </div>
</template>
<script>
export default {
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入号码'))
      } else {
        if (this.ruleForm2.checkPhone !== '') {
          this.$refs.ruleForm2.validateField('checkPhone')
        }
        callback()
      }
    }
    var validatePhone2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入号码'))
      } else if (value !== this.ruleForm2.telPhone) {
        callback(new Error('两次输入号码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        telPhone: '',
        checkPhone: ''
      },
      rules2: {
        telPhone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        checkPhone: [
          { validator: validatePhone2, trigger: 'blur' }
        ]
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
    .el-button.el-button--danger{
      margin-left: 310px;
    }
    .el-button.el-button--info{
      margin-left: 100px;
    }
  }
</style>
