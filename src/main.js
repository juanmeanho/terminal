import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AppToolbar from './components/uiElements/Toolbar.vue'
import AppFooter from './components/uiElements/Footer.vue'
import CardDriver from './components/drivers/CardDriver.vue'


Vue.config.productionTip = false

Vue.component('app-toolbar', AppToolbar)
Vue.component('app-footer', AppFooter)
Vue.component('card-driver', CardDriver)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
