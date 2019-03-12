import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//全局守卫
//全局前置守卫
router.beforeEach((to, from, next) => {
    if (store.getters.isLogin!==false){
        next()
    } else {
        if (to.path === '/login' || to.path === '/register') {
            next();
        } else {
            alert('还没有登入,请先登入!');
            next('/login')
        }
    }
});
