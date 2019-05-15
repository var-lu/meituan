import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue"
const components = {
    footNav,
    componentLazyloading
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}