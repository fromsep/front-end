import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MdUI from 'mdui'

import 'mdui/dist/css/mdui.css'
import 'mdui/dist/js/mdui.js'

Vue.config.productionTip = false

Vue.use(MdUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
