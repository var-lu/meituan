<template>
    <div class="my">
        <section class="my_header">
            <div><img src="../../assets/img/head-defult.png" alt=""></div>
            <p>测试名</p>
        </section>
        <section class="my_nav">
            <ul>
                <li class="red_package">美团红包</li>
                <li class="red_package">收货地址</li>
                <li class="red_package">常见问题</li>
                <li class="red_package">美团协议与说明</li>
                <li class="red_package">退出登录</li>
            </ul>
        </section>
        <section class="my_phone">

        </section>
    </div>
</template>
<script>
export default {
    name:"my"
}
</script>
<style scoped lang="scss">
    .my{
        width: 100%;
        height: 100vh;
        background: rgb(240, 240, 240);
        .my_header{
            width: 100%;
            padding: 0.37rem 0 0.18rem;
            background: url(../../assets/img/my-header-bg.png);
            background-size: 100% 100%;
            div{
                img{
                    width: 100%;
                    height: 100%;
                }
                width: 0.74rem;
                height: 0.74rem;
                border-radius: 100%;
                border: 0.04rem solid #ffe699;
                background: url(../../assets/img/head-defult.png) no-repeat ;
                background-size: 100% 100%;
                margin: auto;
                
            }
            p{
                text-align: center;
                font-size: 16px;
                margin-top: 0.08rem;
                cursor: pointer;
                color: #333333;
                max-width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
