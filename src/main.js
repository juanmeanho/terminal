import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import Vuelidate from 'vuelidate'
import {store} from './store'


import AppToolbar from './components/uiElements/Toolbar.vue'
import AppFooter from './components/uiElements/Footer.vue'
import CardServicio from './components/servicio/CardServicio.vue'

import MenuIcon from "vue-material-design-icons/Facebook.vue"
import Gmail from "vue-material-design-icons/Gmail.vue"

Vue.use(Vuelidate)
Vue.component("facebook-box", MenuIcon)
Vue.component("gmail-box", Gmail)


Vue.config.productionTip = false

Vue.component('app-toolbar', AppToolbar)
Vue.component('app-footer', AppFooter)
Vue.component('card-servicio', CardServicio)


new Vue({
  render: h => h(App),
  router,
  validations: {},
  store,
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCVFC8kpOp9ttXEnNqRVhSGO9VgQwRKmqs",
      authDomain: "terminal-80132.firebaseapp.com",
      databaseURL: "https://terminal-80132.firebaseio.com",
      projectId: "terminal-80132",
      storageBucket: "terminal-80132.appspot.com",
      messagingSenderId: "784426739789"
    })
  }
}).$mount('#app')
