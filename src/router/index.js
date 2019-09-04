import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

const ordinaryRoutes = [
  {
    path: '/',
    component:Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/layout/index'),
      }
    ]
  }
]

const aloneRoutes = []

const routes = [...ordinaryRoutes]

export default new Router({
  routes
})
