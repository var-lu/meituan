import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store/index"
import axios from "axios"
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
