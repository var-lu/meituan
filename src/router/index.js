import Vue from 'vue'
import Router from 'vue-router'
import common from "./common/index"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...common
  ]
})
