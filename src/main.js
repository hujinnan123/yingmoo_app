import Vue from 'vue'

import 'lib-flexible/flexible'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'
import './styles/reset.css'

import './icons'

import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
