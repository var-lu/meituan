import Vue from 'vue'
import Router from 'vue-router'
import common from "./common/index"
import shop from './shop/index';
import order from "./order/index"
import Error from "./error/index";
import my from "./my/index"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...common,
    ...shop,
    ...order,
    Error,
    ...my
  ]
})
