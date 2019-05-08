import Vuex from "vuex"
import Vue from "vue"
import shop from './shop';
Vue.use(Vuex)
const state = {
    footNavisShow : true
}
export default new Vuex.Store({
    state,
    modules:{
        shop
    }
})