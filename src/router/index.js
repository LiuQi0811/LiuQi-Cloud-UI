import {createRouter,createWebHistory} from 'vue-router'


// 路由信息
const constantRoutes = [
    {
        path: '/',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login.vue'),
        hidden: true
      }
]

// 路由器
const router = createRouter({
    history: createWebHistory(), // HTML5模式
    routes: constantRoutes
  });

export default router;