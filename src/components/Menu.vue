<template>
    <div class="row">
        <!--菜单-->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th>尺寸</th>
                    <th>价格</th>
                    <th>加入</th>
                </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                <tr>
                    <td><strong>{{item.name}}</strong></td>
                </tr>
                <tr v-for="option in item.options" :key="option.size">
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td>
                        <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--购物车-->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length>0">
                <table class="table">
                    <thead class="thead-default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.name">
                    <tr>
                        <td>
                            <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                            <span>{{item.quantity}}</span>
                            <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                        </td>
                        <td>{{item.name}}-{{item.size}}寸</td>
                        <td>{{item.price*item.quantity}}</td>
                    </tr>
                    </tbody>
                </table>
                <p>总价:{{total+'RMB'}}</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baskets: [],//购物车
                basketText: '购物车没有任何商品'
            }
        },
        computed: {
            getMenuItems() {
                return this.$store.state.getMenuItems
            },
            total() {
                let totalCost = 0;
                for (let index in this.baskets) {   //遍历当前购物车列表
                    let individualItem = this.baskets[index];//购物车每一项索引
                    totalCost += individualItem.quantity * individualItem.price
                }
                return totalCost
            }
        },
        methods: {
            addToBasket(item, option) {
                let basket = {
                    name: item.name,
                    size: option.size,
                    price: option.price,
                    quantity: 1
                };
                if (this.baskets.length > 0) {//当购物车列表有添加的商品时
                    let result = this.baskets.filter(basket => {//偏历当前购物车列表
                        return basket.name === item.name && basket.price === option.price//返回过滤购物车中已经重复的当前商品
                    });
                    if (result != null && result.length > 0) {//如果当前添加的商品已经存在购物车中
                        result[0].quantity++                  //让当前添加的商品购买数量++
                    } else {
                        this.baskets.push(basket)              //如果添加的商品不在购物车中,把它添加到购物车里
                    }
                } else {
                    this.baskets.push(basket);          //当购物车没有商品时,直接添加到购物车

                }
            },
            decreaseQuantity(item) {
                item.quantity--;        //点击减少购买商品数量
                if (item.quantity <= 0) {           //当购买商品为0时
                    this.removeFromBasket(item)     //删除当前商品
                }
            }
            , increaseQuantity(item) {
                item.quantity++         //购买商品++

            },
            removeFromBasket(item) {
                this.baskets.splice(this.baskets.indexOf(item), 1)  //在购物车中减去当前位置的商品
            }
        }
    }
</script>

<style scoped>

</style>