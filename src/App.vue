<template>
  <div id="app" >
    <router-view/>
     <!-- <router-link to="/shop">
            <div>店铺</div>
      </router-link>  -->
     <!--<footNav v-if="footNavisShow"></footNav>-->
     <!--直接切入路径  屏蔽底部公共部分-->
     <footNav v-if= "(path==='/my' || path==='/order' || path==='/')"></footNav>
  </div>
</template>
<script>
import "@/assets/sass/style.scss"
  export default {
    name : "App",
    data(){
      return{
        //footNavisShow:true,
        path:""
      }
    },
    mounted(){
    	this.path = this.$route.path;
    },
    watch:{
      $route(to,from){
//      if(to.path === "/shop" || to.path === "/orderpreview"){
//        this.footNavisShow = false;
//      }else{
//        this.footNavisShow = true;
//      }
				this.path = to.path;
      }
    }
  }
</script>

<style lang="scss" scoped>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
