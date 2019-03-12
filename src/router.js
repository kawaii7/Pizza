import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [
        {
            path: '/', name: 'homeLink', components: {
                default: Home,
                'orderingGuide': OrderingGuide,
                'delivery': Delivery,
                'history': History
            }
        },
        {
            path: '/menu', name: 'menuLink', component: Menu,

        },
        {
            path: '/admin', name: 'adminLink', component: Admin,

        },
        {
            path: '/about', name: 'aboutLink', component: About, redirect: '/about/contact', children: [
                {
                    path: 'contact',
                    name: 'contactLink',
                    component: Contact,
                    redirect: '/about/contact/personname',
                    children: [
                        {path: 'phone', name: "phoneNumber", component: Phone},
                        {path: 'personname', name: "phoneName", component: PersonName}
                    ]
                },
                {path: 'history', name: 'historyLink', component: History},
                {path: 'delivery', name: 'deliveryLink', component: Delivery},
                {path: 'orderingGuide', name: 'orderingGuideLink', component: OrderingGuide},
            ]
        },
        {path: '/login', name: 'loginLink', component: Login},
        {path: '/register', name: 'registerLink', component: Register},
        {path: '*', redirect: '/'},
    ]
})
