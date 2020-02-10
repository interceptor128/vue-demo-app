import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VCalendar from './plugins/vcalendar';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VCalendar,
  render: h => h(App)
}).$mount('#app')
