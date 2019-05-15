<template>
  <div id="app" >
    <router-view/>
     <!-- <router-link to="/shop">
            <div>店铺</div>
      </router-link>  -->
    <!-- <footNav v-if="footNavisShow"></footNav> -->
    <footNav v-if="(path=='/'||path=='/my'||path=='/order')"></footNav>
  </div>
</template>
<script>
import "@/assets/sass/style.scss"
  export default {
      name : "App",
    data(){
      return{
        // footNavisShow:true
        path:""
      }
    },
    mounted(){
      this.path=this.$route.path;
    },
    watch:{
      $route(to,from){
        // if(to.path === "/shop"){
        //   this.footNavisShow = false;
        // }else{
        //   this.footNavisShow = true;
        // }
        this.path=to.path
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
