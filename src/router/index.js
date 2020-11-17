import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import { shopRouter } from './path_list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    children: [
      ...shopRouter,
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {

  let userInfo = getStorage('userInfo')

  // 判断是否登录
  if (to.path === "/login") {
    next()
  } else {
    if (!userInfo) {
      next('/login')
    } else {
      next()
    }
  }
})

/**
* 获取 localstorage: 
* @param {String} key storageKey
*/
function getStorage(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

const RouterPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {

  return RouterPush.call(this, location).catch(err => err)

}

export default router



