import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'
import axios from '@/plugins/axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')
