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
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.indigo, // #E53935
                secondary: colors.lightBlue, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
               // 'primary--text': colors.lightBlue,
                'primary--text-color':colors.red
            },
        },
    },
}

export default new Vuetify(opts)
