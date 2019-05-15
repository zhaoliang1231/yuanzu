// 所有请求放到这个文件中导出
//存放请求方法
import  axios from 'axios'
import {api} from './api'
let  getList = function () {
  axios({
    methods:'get',
    url:api+'list'
  }).then((data)=>{

  })
}

export {
  getList
}


