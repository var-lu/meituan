import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue";
import shopPop from './common/shop/shopPop.vue';
import backTop from "./common/backTop.vue";
import homeNav from './common/homeNav.vue';
import outLogin from "./common/outLogin.vue";
const components = {
	backTop,
    shopPop,
    componentLazyloading,
    homeNav,
    footNav,
    outLogin
};
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
} 