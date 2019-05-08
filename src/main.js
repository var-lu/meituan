import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store/index"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components';
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.use(components);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
