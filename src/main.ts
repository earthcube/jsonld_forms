import  {createApp} from 'vue'
//import App from './App.vue'
//import vuetify from './plugins/vuetify'; // path to vuetify export
//import vuetify from  'vuetify/dist/vuetify.js'
import {createVuetify} from "vuetify";
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

const app = createApp({})
const vuetify = createVuetify({})
app.use(vuetify)
app.use(router)
