//封装ajax请求

import {api} from './api'

import axios from 'axios'

/*
*axios 再次封装ajax请求 使用promise再次封装
*params
*methods 请求类型
*url 请求地址
*data 发送的数据
 */
function sendAxios(methods = 'get',url,data = {}) {
  return new Promise((resolve,reject)=>{
    axios({
      methods: methods,
      url: api + url,
      data: data
    }).then((res)=>{
      if (res.data.status == 200){
        resolve(res.data.data)
      }else{
        console.log('请求失败')
      }
    }).catch((err)=>{
      console.log('网络错误')
    })
  })
}

export default sendAxios()
