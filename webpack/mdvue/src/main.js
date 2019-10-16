import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mdui from 'mdui'

import 'mdui/dist/css/mdui.css'
import 'mdui/dist/js/mdui.js'

Vue.config.productionTip = false

Vue.prototype.$mdui = mdui

new Vue({
  render: h => h(App),
  router
}).$mount('#app')