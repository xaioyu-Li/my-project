import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.min.css'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import Cookie from 'js-cookie'
Vue.component('Breadcrumb', Breadcrumb)

Vue.use(ElementUI)
Vue.config.productionTip = false
//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: '首页' })
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
