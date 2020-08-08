import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '124613989619-of8821u4cq8f6bdqbp065nqm00e56utm.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false
}

Vue.use(GAuth, gauthOption)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
