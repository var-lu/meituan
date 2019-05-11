import Vuex from "vuex"
import Vue from "vue"
import shop from './shop';
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        shop
    }
})