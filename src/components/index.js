import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue";import shopPop from './common/shop/shopPop.vue';import backTop from "./common/backTop.vue";
import homeNav from './common/homeNav.vue';
const components = {
	homeNav,    footNav,
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}