<template>
    <div>
        <div class="order-wrap">
            <div class="order">
                <nav>
                    <a href="javascript:;" class="active">热销</a>
                    <a href="javascript:;">折扣</a>
                    <a href="javascript:;">烧烤</a>
                    <a href="javascript:;">主食</a>
                    <a href="javascript:;">盖饭</a>
                    <a href="javascript:;">汤类</a>
                    <a href="javascript:;">特色</a>
                    <a href="javascript:;">其他</a>
                    <a href="javascript:;">汤类</a>
                    <a href="javascript:;">特色</a>
                    <a href="javascript:;">其他</a>
                </nav>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "order"
}
</script>

<style lang="scss" scoped>
    .order-wrap{
        flex: 1 1 auto;
        display: flex;
        position: relative;
        width: 100%;
        overflow-x: hidden;
        .order{
            flex: 0 0 auto;
            width: 100%;
            nav{
                    min-height: 100%;
                    width: 80px;
                    -webkit-flex: 0 1 auto;
                    -ms-flex: 0 1 auto;
                    flex: 0 1 auto;
                    display: flex;
                    flex-direction: column;
                    z-index: 1;
                    position: relative;
                    overflow: scroll;
                    background-color: #fff;
                    margin-left: -0.15ren;
                    background: #f5f5f5;
                    a{
                        display: block;
                        overflow: hidden;
                        padding: 0.1rem;
                        width:100%;
                        box-sizing: border-box;
                        min-height: 0.49rem;
                        color: #666666;
                        font-size: 0.14rem;
                        text-align: ce;
                        padding-top: 0.09rem;
                        padding-bottom: 0.22rem;
                    }
                    a.active{
                        background: #fff;
                        font-weight: bold;
                        color: #666;
                    }
            }
        }
    }
</style>
