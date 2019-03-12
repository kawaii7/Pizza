<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/icon.png" alt="icon" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email" id="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password" id="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" class="form-control" v-model="confirmPassword" id="confirm-password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Register",
        created() {
            // console.log('username:' + this.$route.params.username + ' ' + 'password:' + this.$route.params.password)
        },
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                router: this.$router
            }
        },
        methods: {
            onSubmit() {
                if (this.email == '') {
                    alert('请填写注册邮箱');
                } else if (this.password == '') {
                    alert('请填写密码')
                } else if (this.confirmPassword == '') {
                    alert('请填写确认密码')
                } else {
                    if (this.password != this.confirmPassword) {
                        alert('两次密码不一致')
                    } else {
                        const formData = {
                            email: this.email,
                            password: this.password,
                            confirmPassword: this.confirmPassword

                        };
                        this.$store.commit('register', formData);
                        alert('注册成功,请登录');
                        this.$router.push({name: 'loginLink'})
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>