import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
window.axios = require('axios')

new Vue({
    router,
    // store,
    vuetify,
    render: h => h(App),
    mounted() {
        AOS.init()
      },
}).$mount('#app')