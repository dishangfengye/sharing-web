// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// Vue.prototype.$http = axios
axios.defaults.baseURL = 'api'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.baseURL = 'http://127.0.0.1:8082/sharing'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/**
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
**/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
