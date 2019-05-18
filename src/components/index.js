import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue";
import shopPop from './common/shop/shopPop.vue';
import backTop from "./common/backTop.vue";
import homeNav from './common/homeNav.vue';
const components = {
	backTop,
<<<<<<< HEAD
    shopPop,
    componentLazyloading,
    homeNav,
    footNav
}
export default{
    install(Vue){
=======
	shopPop,
    homeNav,
    footNav,
    componentLazyloading
};    install(Vue){
>>>>>>> 285a961aa0f19a776f3f9acac056855c760003f4
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
} 