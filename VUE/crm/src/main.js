import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
console.log(process);
Vue.use(ElementUI)

Vue.config.productionTip = false;

Vue.filter('trans', function (val) {
  let arr = val.split('|'); //arr就是数组了['userhandle',...]
  let obj = {
    userhandle: "员工操作权",
    departhandle: "部门操作权",
    jobhandle: "职务操作权",
    departcustomer: "部门全部客户",
    allcustomer: "公司全部客户",
    resetpassword: "重置密码"
  };
  return arr.map(item => obj[item]).join(' | ')
})
router.beforeEach((to, from, next) => {
  // 这里的to就是你要去哪 如果to的时候，该用户没有权限，那就不执行next即可
  let power = localStorage.getItem('power') || ''; //用户权限
  if (/^\/\w+[/]?$/.test(to.path)) {
    next();
  }
  else if (power.indexOf(to.meta.power) != -1) {
    next()
  }
  else{
    next(from)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
