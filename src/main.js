import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import 'nprogress/nprogress.css'


import Signin from './components/Signin'
import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Signin },
  {
    path: '/home',
    component: Home,
    name: 'home',
    props: true
  }
]


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
