// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue.js核心库
import Vue from 'vue'
//导入app.vue组件
import App from './App'
//导入路由模块
import router from './router'

//引入vuex封装模块
import store from './store'
  
 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ElementUI);

//如何给所有组件实例配置共享方法？ 给vue原型添加
//Vue.use发生了什么？  回调插件中install方法，并且传递Vue实例等参数


// Vue.run();

//Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注入到所有子组件
  store,
  router,
  components: { App },
  template: '<App/>'
})