import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入子映射表
import home from './home'
import notyfy from './notify'
import vip from './vip'
import user from './user'

// 登录页面和主页
import Index from '../views/index.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect:'/home',
    children:home.concat(notyfy,vip,user)
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'*',
    redirect:'/' // 手动配置，找不到路径的时候直接去首页
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
