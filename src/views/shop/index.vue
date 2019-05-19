<template>
    <div>
      <div class="top"><span><i class="el-icon-arrow-left"></i></span></div>
      <div class="header">
        <div class="shop-header">
          <div class="shop-img">
          </div>
          <div class="shop-tall">
            <div class="shop-tall-detail">
              <div class="shop-tall-detail-top">
                <span>68分钟</span>  |
                <span>2.3km</span>
              </div>
              <div class="shop-tall-detail-middle">
                公告：北科的莘莘学子和教职工敬请留意，北科院不让骑手入内，订餐烦劳出来取一下，经常运动有益于身体健康😁。感谢理解与支持，本店有雅间可供北科学生聚餐，生日聚会，敬请光临。金手勺承接团购套餐，欢迎订购，如有疑问欢迎致电沟通
              </div>
              <div class="shop-tall-detail-bottom">
                <swiper :options="swiperOption" ref="mySwiperA">
                  <swiper-slide><li><i class="el-icon-star-on" style="color:blue"></i><span>满 30 减 5，满 60 减 15</span><i class="el-icon-arrow-right"></i></li></swiper-slide>
                 <swiper-slide><li><i class="el-icon-star-on" style="color:red"></i><span>折扣商品 0.2 折起</span><i class="el-icon-arrow-right"></i></li></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <nav>
            <router-link to="/shop/shopOrder" class="nav">点菜</router-link>
           <router-link to="/shop/shopMerchant" class="nav">评价</router-link>
           <router-link to="/shop/shopEvaluate" class="nav">商家</router-link>
        </nav>
        <router-view/>
      </section>
    </div>
</template>

<script>
export default {
    name : "shopDetail",
    data(){
      return{
        //footNavisShow:false,
        timer : null,
        swiperOption:{
           direction : 'vertical',
           autoplay: true,
           loop : true,
        },
        popupVisible : false
      }
    },
    methods:{

    },
    computed: {
    swiper() {
     return this.$refs.mySwiperA.swiper
    }
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 100%;
    height: 0.5rem;
    background: #2E2F3B;
    position: relative;
    span{
      display: inline-block;
      width: 0.4rem;
      height: 100%;
      position: absolute;
      left: 0;top: 0;
      line-height: 0.5rem;
      i{
        font-size: 20px;
        color:#fff;
      }
    }
  }
  .header{
    padding-bottom: 0.2rem;
    min-height: 0.8rem;
    background-color: white;
    .shop-header{ 
      position: relative;
      padding-left: 0.95rem;
      padding-top: 0.05rem;
      width: 100%;
      height: 0.8rem;
      box-sizing: border-box;
      background-color: #2E2F3B;
      .shop-img{
        position: absolute;
        left: 0.1rem;
        top: 0.05rem;
        width: 0.85rem;
        height: 0.85rem;
        box-shadow: 0 0.02rem 0.15rem 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.02rem;
        background-size: 0.85rem 0.85rem;
        background-repeat: no-repeat;
        background-image: url(../../assets/img/shopImg.jpg);
      }
      .shop-tall{
          color: #fff;
          height: 0.75rem;
          .shop-tall-detail{
            height: 0.75rem;
            padding-left: 0.1rem;
            text-align: left;
            .shop-tall-detail-top{
                line-height: 0.16rem;
                height: 0.16rem;
                font-size: 12px;
                padding-bottom: 0.05rem;
                position: relative;
                box-sizing: content-box;
                span{
                  position: relative;
                }
            }
            .shop-tall-detail-middle{
              line-height: 0.16rem;
              height: 0.16rem;
              font-size: 12px;
              white-space: nowrap;
              padding-bottom: 0.24rem;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .shop-tall-detail-bottom{
              height: 0.3rem;
              background: rgba(225, 225, 225, 0.1);
              border-radius: 0 0.01rem 0.01rem 0;
              position: relative;
              overflow: hidden;
              li{
                height: 0.3rem;
                line-height: 0.3rem;
                font-size: 12px;
                i:nth-of-type(1){
                  display: inline-block;
                  width: 0.15rem;
                  height: 0.15rem;
                  font-size: 22px;
                  margin-right: 0.1rem;
                  transform: translateY(0.03rem);
                }
                i:nth-of-type(2){
                  position: absolute;
                  right: 0.1rem;
                  top:0.1rem;
                }
              }
            }
          }
      }
    }
  }
  section{
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    flex-direction: column;
    nav{
      display: flex;
      height: 0.4rem;
      min-height: 0.4rem;
      z-index: 1;
      background-color: #ffffff;
      position: relative;
      .nav{
        flex: 1 1 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666666;
        font-size: 16px;
      }
    }
  }
</style>
