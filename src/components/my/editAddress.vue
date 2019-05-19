<template>
    <div class="edit_address">
       <form>
         <div class="address_username">
           <label>联系人：
             <input type="text" name="userName" value="鹿东明">
           </label>
         </div>
         <div class="address_sex">
            <input type="radio" id="man" ref="man" name="sex" hidden>
            <div class="left">
              <label for="man"><i :class="{checked:radioChecked}"></i>先生</label>
            </div>
            <div class="right">
              <label for="man"><i :class="{checked:!radioChecked}"></i>女士</label>
            </div>
            <input type="radio" id="woman" name="sex" hidden>
         </div>
       </form>
    </div>
</template>
<script>
export default {
     data() {
      return {
        radioChecked:false,
        searchResult: []
      }
    },
    mounted(){
      console.log(this.$refs.man.checked)
    }
}
</script>
<style lang="scss" scoped>
  .edit_address{
    form{
      padding-left: .15rem;
      >div{
        height: .52rem;
        line-height: .52rem;
        border-bottom: .5px solid #e4e4e4;
        font-size: 16px;
        text-align: left;
        input{
          border: none;
          outline: none;
          text-indent: .2rem;
          font-size: 16px;
        }
        i{
          display: inline-block;
          width: .17rem;
          height: .17rem;
          background: url("../../assets/img/radio-no-checked.png") no-repeat center;
          background-size: cover;
          vertical-align: middle;
          margin-right: .08rem;
        }
        .checked{
          background-image: url("../../assets/img/radio-checked.png");
        }
        
      }
      .address_sex{
        div{
          width: 49%;
          height: 100%;
          text-align: right;
          padding: 0 .3rem;
        }
        .right{
          text-align: left;
        }
      }
    }
  }
</style>

