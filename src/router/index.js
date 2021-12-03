import Vue from 'vue'
import VueRouter from 'vue-router'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/pages/index'], resolve),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/mock',
    name: 'mock',
    component: resolve => require(['@/pages/mock/index'], resolve),
    meta: {
      title: 'mock'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
