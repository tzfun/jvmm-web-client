import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            dark: {

            }
        }
    },
    icons: {
        iconfont: 'mdiSvg',
    }
}

export default new Vuetify(opts)