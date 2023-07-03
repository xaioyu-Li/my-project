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
    name:'首页',
    meta:{
      title:'首页'
    },
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
        meta:{
          title:'设备管理'
        },
        children: [
          {
            path: 'template',
            name: 'template',
            component: () => import('@/views/iot/templaet/index.vue'),
            meta:{
              title:'通用物模型'
            },
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/iot/category/index.vue'),
            meta:{
              title:'产品分类'
            },
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('@/views/iot/product/index.vue'),
            meta:{
              title:'产品管理'
            },
          },
          {
            path: 'group',
            name: 'group',
            component: () => import('@/views/iot/group/index.vue'),
            meta:{
              title:'设备分类'
            },
          },
          {
            path: 'device',
            name: 'device',
            component: () => import('@/views/iot/device/index.vue'),
            meta:{
              title:'设备管理'
            },
          },
          {
            path: 'alertLog',
            name: 'alertLog',
            component: () => import('@/views/iot/alertLog/index.vue'),
            meta:{
              title:'设备警告'
            },
          },
          {
            path: 'scene',
            name: 'scene',
            component: () => import('@/views/iot/scene/index.vue'),
            meta:{
              title:'场景联动'
            },
          },
          {
            path: 'sip',
            name: 'sip',
            component: () => import('@/views/iot/sip/index.vue'),
            meta:{
              title:'视频配置'
            },
          }
        ]
      },
      {
        path: '/template',
        name: 'template',
        component: () => import('@/views/template/index.vue'),
        meta:{
          title:'运维管理'
        },
        children: [
          {
            path: 'protocol',
            name: 'protocol',
            component: () => import('@/views/template/protocol/index.vue'),
            meta:{
              title:'协议管理'
            },
          },
          {
            path: 'template',
            name: 'template',
            component: () => import('@/views/template/template/index.vue'),
            meta:{
              title:'采集点模板'
            },
          },
          {
            path: 'simulate',
            name: 'simulate',
            component: () => import('@/views/template/simulate/index.vue'),
            meta:{
              title:'设备模拟'
            },
          },
          {
            path: 'firmware',
            name: 'firmware',
            component: () => import('@/views/template/firmware/index.vue'),
            meta:{
              title:'产品固件'
            },
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
