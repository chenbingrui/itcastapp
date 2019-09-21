<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/xiaomi.png" alt="">    
            <h1 class="title">小米(MI)小米 Note 16G算网通版</h1>

            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>

        </div>       

        <div class="goods-item">
            <img src="../../images/xiaomi.png" alt="">    
            <h1 class="title">小米(MI)小米 Note 16G算网通版</h1>

            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>

        </div>     

        <div class="goods-item">
            <img src="../../images/xiaomi.png" alt="">    
            <h1 class="title">小米(MI)小米 Note 16G算网通版</h1>

            <div class="info">
                <p class="price">
                    <span class="now">¥899</span>
                    <span class="old">¥1299</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>

        </div>    

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item {
            min-height: 293px;
            padding: 2px;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 5px #ccc;
            margin: 3px 0;
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left:10px;
                    }
                   
                }
                .sell {
                        display: flex;
                        justify-content: space-between;
                    }
            }
        }
    }
</style>