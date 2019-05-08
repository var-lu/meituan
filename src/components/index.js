import footNav from './common/footNav.vue';
const components = {
    footNav
}
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
}