import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // path to vuetify export
import Router from 'vue-router'

import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false
Vue.use(Router)
import router from './routes'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
