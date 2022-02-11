// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
//
// Vue.use(Vuetify);
//
// export default new Vuetify({
// });
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
