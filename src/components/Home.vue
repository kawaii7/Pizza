<template>
    <div>
        <div class="row">
            <div id="home" class="col-sm-12 text-center">
                <div class="background">
                    <h1>欢迎大家品尝pizza!</h1>
                    <h2>这里有你非常喜欢的pizza!</h2>
                    <button @click="goToMenu" class="btn btn-success">Let's order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            goToMenu() {
                // this.$router.go(-1);//返回上一页
                // this.$router.replace('/menu');//指定地址
                // this.$router.replace({name:'menuLink'});//指定路由名字
                this.$router.push('/menu')//使用push,同样可以指定路由名字下
            }
        }
    }
</script>

<style scoped>
    #home {
        background: url("../assets/pizza.jpg");
        height: 85vh;
        padding: 10%;
    }

    h1, h2 {
        margin: 6%;
    }

    .background {
        background: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>