import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/iot',
        name: 'iot',
        component: () => import('@/views/iot/index.vue'),
        children: [
          {
            path: 'template',
            name: 'template',
            component: () => import('@/views/iot/templaet/index.vue')
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/iot/category/index.vue')
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('@/views/iot/product/index.vue')
          },
          {
            path: 'group',
            name: 'group',
            component: () => import('@/views/iot/group/index.vue')
          },
          {
            path: 'device',
            name: 'device',
            component: () => import('@/views/iot/device/index.vue')
          },
          {
            path: 'alertLog',
            name: 'alertLog',
            component: () => import('@/views/iot/alertLog/index.vue')
          },
          {
            path: 'scene',
            name: 'scene',
            component: () => import('@/views/iot/scene/index.vue')
          },
          {
            path: 'sip',
            name: 'sip',
            component: () => import('@/views/iot/sip/index.vue')
          }
        ]
      },
      {
        path: '/template',
        name: 'template',
        component: () => import('@/views/template/index.vue'),
        children: [
          {
            path: 'protocol',
            name: 'protocol',
            component: () => import('@/views/template/protocol/index.vue')
          },
          {
            path: 'template',
            name: 'template',
            component: () => import('@/views/template/template/index.vue')
          },
          {
            path: 'simulate',
            name: 'simulate',
            component: () => import('@/views/template/simulate/index.vue')
          },
          {
            path: 'firmware',
            name: 'firmware',
            component: () => import('@/views/template/firmware/index.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
