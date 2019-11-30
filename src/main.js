import Vue from 'vue'
import App from './App.vue'
require('@/test/hoge.js')
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
