import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // path to vuetify export
import Router from 'vue-router'
import VueCompositionAPI from '@vue/composition-api';


//import VueLogger from 'vuejs-logger';

// const isProduction = process.env.NODE_ENV === 'production';
// const options = {
//   isEnabled: true,
//   logLevel : isProduction ? 'error' : 'debug',
//   stringifyArguments : false,
//   showLogLevel : true,
//   showMethodName : true,
//   separator: '|',
//   showConsoleColors: true
// };

//Vue.use(VueLogger, options);

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false
Vue.use(Router)
import router from './routes'

import { Auth0Plugin } from './auth';

const domain = "earthcube.us.auth0.com"
const  clientId = "fAYNXoXqaY6aRGp7KAvJ9qgZaFhXDmCr"
const redirect_uri= window.location.origin

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    client_id: clientId  ,
    redirectUri: redirect_uri
    // onRedirectCallback: (appState ) => {
    //     router.push(
    //         appState && appState.targetUrl
    //             ? appState.targetUrl
    //             : window.location.pathname
    //     );
    // }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
