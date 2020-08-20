import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueCompositionAPI from '@vue/composition-api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  //router,
  render: h => h(App),
  router,
}).$mount('#app')
