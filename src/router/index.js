import Vue from 'vue';
import Router from 'vue-router';
import common from "./common/index";
import shop from './shop/index';
<<<<<<< HEAD
import home from "./home/index";
import order from "./order/index";
import seach from "./seach/index";
import Error from "./error/index";
import my from "./my/index";
=======
import home from "./home/index"import order from "./order/index"
import seach from "./seach/index"import Error from "./error/index";
import my from "./my/index"
>>>>>>> 94af705729ca5f6f79d44067d291ce023f62dc32

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...common,
    ...shop,
<<<<<<< HEAD
    ...seach,  
    ...order,
    ...home,  
    Error,
=======
	...seach,    ...order,
	...home,    Error,
>>>>>>> 94af705729ca5f6f79d44067d291ce023f62dc32
    ...my
  ]
})
