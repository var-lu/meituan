import footNav from './common/footNav.vue';
import shopPop from './common/shop/shopPop.vue';
import componentLazyloading from "./common/loading.vue"
const components = {
    footNav,
    componentLazyloading,
    shopPop
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}