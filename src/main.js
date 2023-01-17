import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

// 创建并挂载根实例
const app =  createApp(App)
//确保 _use_ 路由实例使整个应用支持路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')
