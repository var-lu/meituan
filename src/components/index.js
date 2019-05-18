import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue";
import shopPop from './common/shop/shopPop.vue';
import backTop from "./common/backTop.vue";
const components = {
    footNav,
    componentLazyloading,
    backTop,	
    shopPop
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}