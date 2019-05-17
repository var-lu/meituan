import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store/index"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import BScroll from 'better-scroll';
Vue.use(MintUI);
import VueLazyload from "vue-lazyload";
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.use(components);
// 自定义懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/img/error.jpeg',
  loading: './assets/img/shop-lazyload.png',
  attempt: 1
  })
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

