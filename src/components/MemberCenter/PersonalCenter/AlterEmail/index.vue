<template>
  <!--修改电话-->
  <div class="user-content">
    <h3>更改电话号码</h3>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="输入邮箱" prop="email">
        <el-input v-model="ruleForm2.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认邮箱" prop="alteremail">
        <el-input v-model="ruleForm2.alteremail" auto-complete="off"></el-input>
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
        callback(new Error('请输入邮箱'))
      } else {
        if (this.ruleForm2.alteremail !== '') {
          this.$refs.ruleForm2.validateField('alteremail')
        }
        callback()
      }
    }
    var validatePhone2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入邮箱'))
      } else if (value !== this.ruleForm2.email) {
        callback(new Error('两次输入邮箱不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        email: '',
        alteremail: ''
      },
      rules2: {
        email: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        alteremail: [
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
