import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Vuetify from '@/plugins/vuetify'

new Vue({
  Vuetify,
  render: h => h(App)
}).$mount('#app')
