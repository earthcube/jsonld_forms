import  {createApp} from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'; // path to vuetify export
//import vuetify from  'vuetify/dist/vuetify.js'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//mport Router from 'vue-router'
import { createRouter } from './routes';
//import VueCompositionAPI from 'vue';



//Vue.use(VueCompositionAPI);
//Vue.config.productionTip = false
//Vue.use(Router)
const router = createRouter()
//import router from './routes'



// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')

const app = createApp(App)
const vuetify = createVuetify({ components,
    directives,})
app.use(vuetify)
app.use(router)
app.mount('#app')
