import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _076679b1 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _84d7582c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _250cbd50 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _4e6244b2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _d9c89dde = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _db852080 = () => interopDefault(import('..\\pages\\blog\\add.vue' /* webpackChunkName: "pages/blog/add" */))
const _30f93459 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _79516695 = () => interopDefault(import('..\\pages\\edit-profile\\_id.vue' /* webpackChunkName: "pages/edit-profile/_id" */))
const _493019c0 = () => interopDefault(import('..\\pages\\profile\\_id.vue' /* webpackChunkName: "pages/profile/_id" */))
const _18269e5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _076679b1,
    name: "blog"
  }, {
    path: "/login",
    component: _84d7582c,
    name: "login"
  }, {
    path: "/profile",
    component: _250cbd50,
    name: "profile"
  }, {
    path: "/register",
    component: _4e6244b2,
    name: "register"
  }, {
    path: "/setting",
    component: _d9c89dde,
    name: "setting"
  }, {
    path: "/blog/add",
    component: _db852080,
    name: "blog-add"
  }, {
    path: "/blog/:id",
    component: _30f93459,
    name: "blog-id"
  }, {
    path: "/edit-profile/:id?",
    component: _79516695,
    name: "edit-profile-id"
  }, {
    path: "/profile/:id",
    component: _493019c0,
    name: "profile-id"
  }, {
    path: "/",
    component: _18269e5a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
