<template>
  <!--个人资料-->
  <div class="user-content">
    <h3>我的资料</h3>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="formLabelAlign.birth" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="formLabelAlign.email" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="formLabelAlign.telphone" readonly="readonly"></el-input>
      </el-form-item>
      <el-form-item label="推荐电话">
        <el-input v-model="formLabelAlign.RecommenderTelephone" readonly="readonly"></el-input>
      </el-form-item>
    </el-form>
    <el-button-group>
      <router-link :to="{name:'ChangePassword'}"><el-button>更改密码</el-button></router-link>
      <router-link :to="{name:'EditProfile'}"><el-button>更改个人详细信息</el-button></router-link>
      <router-link :to="{name:'AlterEmail'}"><el-button>更改电子邮箱</el-button></router-link>
      <router-link :to="{name:'AlterPhone'}"><el-button>更改电话号码</el-button></router-link>
    </el-button-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        name: '吹风机',
        birth: '2000-00-00',
        email: '564156456@@qq.com',
        telphone: '1215456465456465',
        RecommenderTelephone: '1645645646556'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .user-content{
    .el-form{
      .el-form-item{
        .el-form-item__content{
          .el-input{
            /deep/.el-input__inner{
              &:hover{
                cursor:not-allowed;
              }
              &:focus{
                border-color: #DCDFE6;
              }
            }
          }
        }
      }
    }
  }
</style>
