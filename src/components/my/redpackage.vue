<template>
    <div class="redpackage">
        <div class="header">
            <div class="back" @click="()=>{$router.push('/my')}"></div>
            <p>美团红包</p>
        </div>
        <p>
            使用兑换码 <span class="add_redpackage">添加红包</span>
        </p>
        <div class="no_redpackage">
            <div class="img_box"></div>
            <p>暂无红包</p>
            <div class="invalid_redpackage">
                <p class="left"><span class="right">没有更多有效的红包哦</span></p>|
                <p class="right"><span class="left">查看失效红包</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .redpackage{
        width: 100%;
        height: 100vh;
        background: #f0f0f0;
        font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
        .header{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 14px;
            color: rgb(255, 255, 255);
            background: rgb(51, 51, 51);
            position: relative;
            .back{
                width: 0.4rem;
                height: 0.5rem;
                position: absolute;
            }
            .back::after{
                content: "<";
                display: inline-block;
                font-size: 18px;
                transform: scaleY(1.7);
                color: #AAAAAA;
            }
        }
        >p{
            background: #fff8e9;
            color: #666;
            width: 100%;
            text-align: left;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 13px;
            text-indent: 0.2rem;
            span{
                color: #466899;
            }
        }
        >p::after{
            content: ">";
            font-size: 18px;
            display: inline-block;
            color: #466899;
            transform: translate(-50%) scaleY(1.2);
            vertical-align: middle;
        }
        .no_redpackage{
            width: 100%;
            margin-top: 0.75rem;
            color: #9a9a9a;
            font-size: 14px;
            .img_box{
                width: 1rem;
                height: 1rem;
                display: inline-block;
                background: url("../../assets/img/my-noredpackage.png");
                background-size: cover;
            }
            >p{margin-top: 0.06rem;}
            .invalid_redpackage{
                padding-top: 0.1rem;
                >.right{color:#466899;width: 48%;}
                >.left{letter-spacing: -0.01rem;width: 48%;}
            }
        }
    }
</style>

