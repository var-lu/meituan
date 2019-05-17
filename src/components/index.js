import footNav from './common/footNav.vue';
import shopPop from './common/shop/shopPop.vue';
const components = {
    footNav,
    shopPop
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}