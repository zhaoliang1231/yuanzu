<template>
    <div>
        <el-form class="login" :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <el-form-item label="邮箱或手机号：" prop="user_phone">
                <el-input placeholder="邮箱/手机号"  v-model="loginForm.user_phone"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="user_password">
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
                <el-button style="width:100%;color:#ffffff;" type="primary" @click="login('loginForm')">登录</el-button>
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
         //电话验证
         { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        user_password: [
         { required: true, message: '请输入密码', trigger: 'blur' }
        ]
       }
      }
     },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../static/css/common";
    .login{
    width: 370px;
    margin: 0 auto;
}
    .el-form-item{
        margin-bottom: 18px;
    }
.el-button{
    margin: 0 0 20px 0;
    background: #8975B4;
    border: 1px #fff solid;
    /deep/span{
        display: inline-block;
        font-size: 14px;
        color:@white;
    }
}
    /deep/.el-input__inner{
        height: 38px;
        border-radius: 2px;
    }
    /deep/.el-form-item__label{
        line-height: 25px;
        color: @fontColor;
    }
</style>
