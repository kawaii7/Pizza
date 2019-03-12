<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/icon.png" alt="icon" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="user.email" id="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="user.password" id="password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Register",
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    router: this.$router//通过路由跳转
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.user.email == '') {
                    alert('请填写登入邮箱')
                } else if (this.user.password == '') {
                    alert('请填写密码')
                } else {
                    this.$store.commit('accountState', this.user)
                }
            }
        }

    }
</script>

<style scoped>

</style>