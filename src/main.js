import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIcons from '@element-plus/icons-vue'
import router from './router'

// 创建并挂载根实例
const app =  createApp(App)
//确保 _use_ 路由实例使整个应用支持路由
app.use(router)
app.use(ElementPlus)
// 图标注册
for (const name in ElementPlusIcons){
	app.component(name,ElementPlusIcons[name])
}
app.mount('#app')
