import Vue from 'vue'
import VueRouter from 'vue-router'
import indexrouter from './modules/index'
import serviceRouter from './modules/cat'
import newMessageRouter from './modules/newMessage'
import aboutRouter from './modules/about'
import helpListRouter from './modules/helpList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
    redirect: '/index',
    children: [indexrouter, ...serviceRouter, ...newMessageRouter, aboutRouter, ...helpListRouter,
      {
        path: '/search',
        name: 'search',
        meta: { title: '搜索' },
        component: () => import('@/views/search/search.vue')

      }
    ]
  }

]

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(error => error)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // meta: { keepAlive: false },
})
router.afterEach((to, from) => {
  const bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  const docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})
export default router
