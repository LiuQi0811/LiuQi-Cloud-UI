import {createRouter,createWebHistory} from 'vue-router'


// 路由信息
const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login.vue')
    }
]

// 路由器
const router = createRouter({
    history: createWebHistory(), // HTML5模式
    routes: constantRoutes
  })

export default router