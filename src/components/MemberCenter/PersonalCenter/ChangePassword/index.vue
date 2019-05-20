<template>
  <!--改变密码-->
  <div class="user-content">
      <h3>更改密码</h3>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="原始密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="修改密码" prop="alterpass">
              <el-input type="password" v-model="ruleForm2.alterpass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
    </el-form>
    <el-button type="danger">确认 </el-button>
    <router-link :to="{name:'PersonalData'}"><el-button type="info">返回</el-button></router-link>
</div>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原始密码'))
      } else {
        if (this.ruleForm2.alterpass !== '') {
          this.$refs.ruleForm2.validateField('alterpass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value === this.ruleForm2.pass) {
        callback(new Error('两次输入密码一致!'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.alterpass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        alterpass: '',
        checkPass: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        alterpass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass3, trigger: 'blur' }
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
