<template>
<div class="order">
      <div class="orderTop">
        <div class="show">
            <p class="show_one">订单已取消 ></p>
            <p class="show_two">您的订单已取消</p>
        </div>
        <div class="button">
            <input type="button" value="逛逛别家"/>
            <input type="button" value="再来一单"/>
        </div>
      </div>
      <!-- 人工客服 -->
      <div class="problem">
          <div class="problem_top">
              <strong class="problem_top_left">常见问题</strong>
              <span class="problem_top_right">在线客服></span>
          </div>
          <div class="problem_bottom">
          <ul class="problem_button">
              <li><a href="javascript:;">无法支付</a></li>
              <li><a href="javascript:;">红包无法使用</a></li>
              <li><a href="javascript:;">新用户首单减免</a></li>
              <li><a href="javascript:;">订单那些支付方式</a></li>
              <li><a href="javascript:;">退款后红包处置</a></li>
              <li><a href="javascript:;">外卖新用户是什么</a></li>
          </ul>
          </div>
      </div>
</div>
</template>
<script>
export default {
    name :"nextorder"
}
</script>
<style lang="scss" scoped>
     .order{
         width:100%;
         height:100vh;
         background: #f0f0f0;
      .orderTop{
          width:100%;
          height:1.38rem;
          padding:0.2rem 0.15rem 0;
          background:#ffffff;
      .show{
          width:3.46rem;
          height:0.48rem;
          margin: 0 0 0.14rem;
         .show_one {
              margin-bottom: 0.05rem;
              font-size:19px;
          }
          .show_two{
              font-size:14px;
          }

      }  
      .button{
          width:100%;
          height:0.38rem;
          margin: 0 0 0.14rem;
          display: flex;
          justify-content:space-around;
          input{
              width:0.92rem;
              height:0.37rem;
              border: 1px solid #eeeeee;
              background:#ffffff;
              font-size:16px;
              border-radius: 5px;
          } 
      }     
    }
    .problem{
        width:100%;
        height:1.37rem;
        background:#ffffff;
        margin:0.1rem 0 0;
        border-top:1px solid #d7d7d7;
        border-bottom:1px solid #d7d7d7;
        .problem_top{
            width:92%;
            margin:0 0.15rem;
            padding:0.1rem 0;
            font-size:15px;
            display: flex;
            justify-content:space-between;
            border-bottom: 1px solid #e0e0e0;
        }
        .problem_bottom{
            width:3.72rem;
            height:0.82rem;
            padding:0.16rem 0.1rem;
             .problem_button{
                 width:100%;
                 height:100%;
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-between;
                 a{
                     display: block;
                     line-height: 0.25rem;
                     color:#333;
                     margin-bottom: 0.1rem;
                     border: 1px solid #e3e3e3;
                     width:1.1rem;
                     height:0.25rem;
                     background: #fafafa;
                     font-size:13px;
                 }
             }
        }
       
    }
 }
</style>

