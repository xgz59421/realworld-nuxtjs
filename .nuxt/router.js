import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f09874b = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2a261540 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _1ad4db28 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _db9cfcb0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _453ec404 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _333aad8e = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _78fbc4f5 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3f09874b,
    children: [{
      path: "",
      component: _2a261540,
      name: "home"
    }, {
      path: "/login",
      component: _1ad4db28,
      name: "login"
    }, {
      path: "/register",
      component: _1ad4db28,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _db9cfcb0,
      name: "profile"
    }, {
      path: "/settings",
      component: _453ec404,
      name: "settings"
    }, {
      path: "/editor",
      component: _333aad8e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _78fbc4f5,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
