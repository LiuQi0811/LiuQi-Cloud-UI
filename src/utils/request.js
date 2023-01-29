import axios from "axios"

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分 192.168.5.7
    baseURL: 'http://192.168.0.110:8080',
    // 超时
    timeout:10000

})

// request请求拦截器
console.log("request请求拦截器  ",service.interceptors)
service.interceptors.request.use(config=>{
    console.log("请求拦截器 数据:  ",config)
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  console.log("是否需要设置 token: ",isToken)

  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  console.log("是否需要防止数据重复提交: ",isRepeatSubmit)
  
},error=>{
    console.log(error)
})







export default service