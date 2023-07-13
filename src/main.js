import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import axios from 'axios'
// import store from './store'
// import VueElementLoading from 'vue-element-loading'
// import SnackBar from './components/Common/snackBar'
// import ServerError from './components/Common/500'
// import ImageLoader from './components/Common/imageLoader'
// import PageLoader from './components/Common/pageLoader'



// import ImageMagnifier from 'vue-image-magnifier'
// Vue.use(ImageMagnifier)


// import OwlCarousel from 'vue-owl-carousel'

// import VueSocialSharing from 'vue-social-sharing'
// import VueApexCharts from 'vue-apexcharts'
// Vue.use(VueApexCharts)

// Vue.component('apexchart', VueApexCharts)
// Vue.component('OwlCarousel', OwlCarousel)
// Vue.component('ServerError', ServerError)
// Vue.component('SnackBar', SnackBar)
// Vue.component('ImageLoader', ImageLoader)
// Vue.component('PageLoader', PageLoader)
// Vue.component('VueElementLoading', VueElementLoading)


Vue.config.productionTip = false
window.axios = require('axios')

new Vue({
    router,
    // store,
    vuetify,
    render: h => h(App)
}).$mount('#app')