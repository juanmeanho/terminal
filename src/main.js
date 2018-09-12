import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AppToolbar from './components/uiElements/Toolbar.vue'
import AppFooter from './components/uiElements/Footer.vue'
import CardServicio from './components/servicio/CardServicio.vue'


Vue.config.productionTip = false

Vue.component('app-toolbar', AppToolbar)
Vue.component('app-footer', AppFooter)
Vue.component('card-servicio', CardServicio)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
