import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import Vue2MapboxGL from 'vue2mapbox-gl'

Vue.use(Vue2MapboxGL)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
