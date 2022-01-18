import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'

// pc 版心设置 1200vw
import 'root-font-size'
import 'amfe-flexible'
import 'animate.css'
import '@vant/touch-emulator'
import 'normalize.css'

// mock
import './mock'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new VConsole({ maxLogNumber: 1000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
