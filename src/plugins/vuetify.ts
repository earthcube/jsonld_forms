// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
//
// Vue.use(Vuetify);
//
// export default new Vuetify({
// });
// src/plugins/vuetify.js

//import Vue from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
//import colors from 'vuetify/lib/util/colors'



const opts = {
    theme: {
        themes: {
            light: {
                primary: "#18598B", //colors.indigo, // #E53935
                secondary: "#70A5C9", //colors.lightBlue, // #FFCDD2
                //accent: colors.indigo.base, // #3F51B5
               // 'primary--text': colors.lightBlue,
             //   'primary--text-color':colors.red
            },
        },
    },
}
// @ts-ignore
export default createVuetify(opts)
//export default new Vuetify(opts)
