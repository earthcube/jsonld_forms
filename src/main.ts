import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // path to vuetify export

import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
