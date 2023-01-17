import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
//确保 _use_ 路由实例使整个应用支持路由
.use(router)
.mount('#app')
