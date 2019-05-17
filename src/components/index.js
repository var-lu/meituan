import footNav from './common/footNav.vue';
<<<<<<< HEAD
import shopPop from './common/shop/shopPop.vue';
const components = {
    footNav,
    shopPop
=======
import componentLazyloading from "./common/loading.vue"
const components = {
    footNav,
    componentLazyloading
>>>>>>> 22f31713004a4cee05bdaebd92b8340714a40605
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}