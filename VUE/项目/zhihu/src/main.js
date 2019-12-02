import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/less/common.less"

/* // 这种属于全部引用
import Vant from 'vant'
Vue.use(Vant) */
import 'vant/lib/index.css'

import {Search,Icon, Tab, Tabs} from 'vant'
Vue.use(Search)
Vue.use(Icon)
Vue.use(Tab).use(Tabs)


Vue.config.productionTip = false

// 登录判断
let token=localStorage.getItem('token');
if (token) {
  store.commit('stateChange',{loginState:true})
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
