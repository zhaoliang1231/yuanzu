<template>
  <!--t添加地址-->
  <div class="user-content">
      <el-form ref="form" :model="sizeForm" :rules="rules" label-width="80px" size="mini">
          <el-form-item label="姓名" prop="name">
              <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="所在区域" required>
              <el-select v-model="sizeForm.country" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
              </el-select>
              <el-select v-model="sizeForm.province" placeholder="请选择">
                  <el-option label="大渡口" value="大渡口"></el-option>
                  <el-option label="" value="北京"></el-option>
              </el-select>
              <el-select v-model="sizeForm.city" placeholder="请选择">
                  <el-option label="雨中" value="雨中"></el-option>
                  <el-option label="西永" value="西永"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="邮编" prop="zipcode">
              <el-input v-model.number="sizeForm.zipcode"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="telphone">
              <el-input v-model="sizeForm.telphone"></el-input>
          </el-form-item>
          <el-form-item label="性别">
              <el-select v-model="sizeForm.sex" placeholder="请选择">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="生日">
              <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
              <el-input v-model="sizeForm.email"></el-input>
          </el-form-item>
          <el-form-item size="large">
              <router-link :to="{name:'ReceivingAddress'}">
                  <el-button type="danger" @click="onSubmit">保存地址</el-button>
              </router-link>
              <router-link :to="{name:'ReceivingAddress'}">
                  <el-button type="info">取消</el-button>
              </router-link>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
import {isvalidPhone} from '../../validate.js'
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入电话号码'))
  } else if (!isvalidPhone(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
export default {
  data () {
    return {
      sizeForm: {
        name: '',
        country: '',
        province: '',
        city: '',
        zipcode: '',
        telphone: '',
        sex: '',
        email: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        country: [{required: true, message: '请选择地区', trigger: 'change'}],
        province: [{required: true, message: '请选择地区', trigger: 'change'}],
        city: [{required: true, message: '请选择地区', trigger: 'change'}],
        zipcode: [{type: 'number', message: '邮编必须为数字'}],
        telphone: [{ required: true, trigger: 'blur', validator: validPhone }]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style></style>
