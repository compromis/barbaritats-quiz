import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import Quiz from './Quiz'
import Catalan from './lang/ca.js'
import Spanish from './lang/es.js'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueScrollTo, {
  offset: -70
})

const messages = {
  ca: Catalan,
  es: Spanish
}

const i18n = new VueI18n({
  locale: 'ca',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  template: '<Quiz/>',
  components: { Quiz }
})
