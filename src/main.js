import Vue from 'vue'

import 'lib-flexible/flexible'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'
import './styles/reset.css'

import './icons'

import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
