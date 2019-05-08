<template>
  <div class="home">
    <h1>首页</h1>
    <footNav v-if="footNavisShow" :footNavisShow.sync="footNavisShow"></footNav>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
      return{
        footNavisShow:true
      }
    }
}
</script>
<style scoped>

</style>
