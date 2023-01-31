import axios from "axios"
// import {tansParams} from'@/utils/owner/LQ.js'

// 设置 Content-Type
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分 192.168.5.7
    baseURL: '/api',
    // 超时
    timeout:10000

})

console.log("Process 信息：",process)

// // request请求拦截器
// console.log("request请求拦截器  ",service.interceptors)
// service.interceptors.request.use(data=>{
//     console.log("请求拦截器 数据:  ",data)
//   // 是否需要设置 token
//   const isToken = (data.headers || {}).isToken === false
//   console.log("是否需要设置 token: ",isToken)

//   // 是否需要防止数据重复提交
//   const isRepeatSubmit = (data.headers || {}).repeatSubmit === false
//   console.log("是否需要防止数据重复提交: ",isRepeatSubmit)
//   // get请求映射params参数
//   const requestMethod = data.method//获取请求方式
//   if(requestMethod==='get' && data.params){ 
//     let url = data.url+'?'+ tansParams(data.params)
//         console.log('AAAAA ',url)
//   }
//   return data
// },error=>{
//     console.log(error)
// })







export default service