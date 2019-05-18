<template>
    <div>
        <div class=" productTabs">
            <ul class="clearfix tabs_list">
                <li>
                    <router-link to="/detail" class="active">商品介绍</router-link>
                </li>
                <li>
                    <router-link to="/detail/evaluate">商品评价</router-link>
                </li>
            </ul>
            <router-view></router-view>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'ShopIntroduction'
  }
</script>

<style scoped lang="less">
    .productTabs{
        width: 991px;
        .tabs_list{
            width: 100%;
            height: 30px;
            background-color: #999999;
            li{
                float: left;
                a{
                    float: left;
                    width: 120px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    &:hover{
                        background: #b6ab8f;
                    }
                }
            }
            .active{
                background: #b6ab8f;
            }
        }
    }
</style>