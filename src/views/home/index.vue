<template>
  <div class="home">
    <header>
      <h3>北京科技职业学院</h3>
      <input type="text" placeholder="请输入商家或商品名称" class="h_e_input" @click="search">
    </header>
    <section>
      <div class="image">
        <div class="imgs">
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt>
            <p ref="p">美食</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png" alt>
            <p ref="p">美团超市</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png" alt>
            <p>生鲜果蔬</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt>
            <p>美团专送</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b635825ef28dd85f3d3f070de4e64ed9366.png" alt>
            <p>晚餐优选</p>
          </div>
        </div>
        <div class="imgs">
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt>
            <p ref="p">美食</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png" alt>
            <p ref="p">美团超市</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png" alt>
            <p>生鲜果蔬</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt>
            <p>美团专送</p>
          </div>
          <div @click="aaa" ref="username">
            <img src="http://p1.meituan.net/jungle/8b635825ef28dd85f3d3f070de4e64ed9366.png" alt>
            <p>晚餐优选</p>
          </div>
        </div>
      </div>
      <p class="imgs_p">
        <span>——</span> 附近商家
        <span>——</span>
      </p>
     <homeNav></homeNav>
    </section>
    <footNav v-if="footNavisShow" :footNavisShow.sync="footNavisShow"></footNav>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      footNavisShow: true,
    };
  },
  methods: {
    search() {
      this.$router.push("/seach");
    },
   aaa() {
      this.$router.push("/home");
    },
    routers(e) {
      console.log(e);
      console.log(this.$refs.username.innerText);
      console.log(this.$refs.p.innerText);
    }

  }
};
</script>


<style scoped lang = "scss">
header { 
  width: 100%;
  height: 0.5rem;
  background: black;
  padding: 0.06rem;
  position: fixed;
  z-index: 9999;
  h3 {
    display: inline-block;
    padding-bottom: 0.3rem;
    font-size: 15px;
    width: 1.5rem;
    color: #fff;
    float: left;
  }
  .h_e_input {
    width: 60%;
    position: relative;
    border: none;
    height: 0.27rem;
    padding-left: 0.3rem;
    box-sizing: border-box;
    border-radius: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 0.3rem;
    font-size: 14px;
    opacity: 1;
  }
}
section {
  width: 100%;
  flex: 1;
  overflow: auto;
  .imgs {
    display: flex;
    margin-top: 0.2rem;
    /* 自由分布 */
    justify-content: space-around;
    div {
      float: left;
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
  }
  .imgs_p {
    font-size: 17px;
    font-weight: 500;
    margin: 0.1rem 0;
    span {
      font-weight: 200;
    }
  }
.image{
  padding-top: .5rem;
  }
}
</style>
