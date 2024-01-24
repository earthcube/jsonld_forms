import  {createApp} from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'; // path to vuetify export
//import vuetify from  'vuetify/dist/vuetify.js'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files


import { createRouter } from './routes';

const router = createRouter()




// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')

const app = createApp(App)
const vuetify = createVuetify({
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi,
                fa,
            },
        },
        components,
    directives,
},)
app.use(vuetify)
app.use(router)
app.mount('#app')
