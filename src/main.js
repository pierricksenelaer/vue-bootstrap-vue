import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  el: '#app',
  render: h => h(App)
})
