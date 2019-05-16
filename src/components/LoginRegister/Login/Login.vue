<template>
    <div>
        <el-form class="login" :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="邮箱或手机号：" prop="user_phone">
                <el-input v-model="loginForm.user_phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="user_password">
                <el-input type="password" v-model="loginForm.user_password" autocomplete="off"></el-input>
            </el-form-item>
            <div class="password_box">
                <div class="member_pwd">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>
                <div class="forget_pwd">
                    <span>
                        <a class="a-hover-pink" href="">忘记密码?</a>
                    </span>
                </div>
            </div>
            <el-form-item>
                <el-button style="width:100%" type="primary" @click="login('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'login',
     data () {
      var validatePhone = (rule, value, callback) => {
       if (value === '') {
        callback(new Error('请输入联系电话'))
       } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
         callback(new Error('请输入正确的电话号码'))
        } else {
         callback()
        }
       }
      }
      return {
       checked:true,
       loginForm: {
        user_phone: '',
        user_password: ''
       },
       rules: {
        user_phone: [
         { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        user_password: [
         { required: true, message: '请输入密码', trigger: 'blur' }
        ]
       }
      }
     }
    }
</script>

<style scoped lang="less">
.login{
    width: 370px;
    margin: 0 auto;
}
    /deep/.el-form-item__label{
        /*line-height: 0;*/
    }
/deep/.el-form-item{
    margin-bottom: 0;
}
.el-button{
  /*margin-top: 20px;*/
}
</style>
