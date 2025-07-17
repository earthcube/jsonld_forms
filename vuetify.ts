import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'
import * as components from 'vuetify/components'

const opts = {
    components: {
        ...components,
        ...labs
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#18598B",
                    secondary: "#70A5C9",
                }
            },
        },
    },
}

export default createVuetify(opts)
