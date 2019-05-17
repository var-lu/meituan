<template>
    <div class="question">
        <backTop topBg="#fff" topColor="#333" routeName="/my" topName="常见问题"></backTop>
        <ul class="question_info">
            <li class="pay">
                <h2 class="title">支付问题</h2>
            </li>
            <li class="order">
                <h2 class="title">订单问题</h2>
            </li>
            <li class="discount">
                <h2 class="title">优惠问题</h2>
            </li>
            <li class="other">
                <h2 class="title">其他问题</h2>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .question{
        position: relative;
        min-height: 100vh;
        background-color: #efefef !important;
        color: #2f2f2f;
    }
    .header{
        font-size: 17px !important;
        font-weight: bold;
    }
    ul.question_info{
        border-top: 0.01rem solid #dddddd;
        >li{
            .title{
                background-color: #ffffff;
                font-size: 14px;
                font-weight: normal;
                padding: 0 0.1rem;
                height: 0.44rem;
                line-height: 0.44rem;
                text-align: left;
                border-bottom: 0.01rem solid #dddddd;
            }
        }
    }
</style>

