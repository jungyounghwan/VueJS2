// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*import Mixins from './util/mixins'*/
import 'animate.css'
import Directives from '@/util/directives'

Directives(Vue)
/*Mixins(Vue)*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
