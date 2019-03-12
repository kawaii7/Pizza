<template>
    <form>
        <h3 class="text-muted my-5">
            添加新的Pizza
        </h3>
        <div class="form-group row">
            <label for="newPizza.name" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input id="newPizza.name" type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="newPizza.description" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" id="newPizza.description" class="form-control"
                          v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label for="newPizza.size1" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input id="newPizza.size1" type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for="newPizza.price1" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input id="newPizza.price1" type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label for="newPizza.size2" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input id="newPizza.size2" type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for="newPizza.price2" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input id="newPizza.price2" type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "NewPizza",
        data() {
            return {
                newPizza: {}
            }
        },
        methods: {
            addMenuItem() {
                let data = {
                    name: this.newPizza.name,
                    description: this.newPizza.description,
                    options: [
                        {
                            size: this.newPizza.size1,
                            price: this.newPizza.price1,
                        },
                        {
                            size: this.newPizza.size2,
                            price: this.newPizza.price2,
                        },
                    ]
                };
                const users = [];
                for (let index in data) {
                    const user = data[index];
                    users.push(user)
                }
                if (users[0] && users[1]
                    && users[2][0].price
                    && users[2][0].size
                    && users[2][1].price
                    && users[2][1].price !== null) {
                    this.$store.commit('addition', data)
                } else {
                    alert('请完整填写添加的商品');
                }
            }
        }
    }
</script>

<style scoped>

</style>