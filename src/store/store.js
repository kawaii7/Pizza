import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        getMenuItems: [
            {
                'name': '榴莲pizza',
                'description': '这是喜欢吃榴莲朋友的最佳选择',
                'options': [{
                    'size': 9,
                    'price': 38
                }, {
                    'size': 12,
                    'price': 48
                }]
            },
            {
                'name': '芝士pizza',
                'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
                'options': [{
                    'size': 9,
                    'price': 38
                }, {
                    'size': 12,
                    'price': 48
                }]
            },
            {
                'name': '夏威夷pizza',
                'description': '众多人的默认选择',
                'options': [{
                    'size': 9,
                    'price': 36
                }, {
                    'size': 12,
                    'price': 46
                }]
            }
        ],
        account: [
            {
                email: null,
                password: null
            }
        ],
        currentUser: null,
        isLogin: false

    },
    getters,
    mutations,
    actions: {}
})
