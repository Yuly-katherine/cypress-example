import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DetailView from '@/views/DetailView.vue'
import LoginView from '@/views/LoginView.vue'
import {useAuth} from "@/store/useAuth"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      requireAuth: false,
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requireAuth: true,
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
    meta:{
      requireAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuth()
  if(!store.is_auth && to.meta.requireAuth){
    next('login')
  } else{
    next()
  }
})

export default router
