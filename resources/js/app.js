
require('./bootstrap');
window.Vue = require('vue');

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './index'
const store = new Vuex.Store(
    storeData
)

//import vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

//moment js
import moment from 'moment'
Vue.filter('shortLength', (text, lenght, suffix) => {
    return text.substring(0, lenght) + suffix;
})
Vue.filter('postTime', (value) => {
    return moment(value).fromNow();
})

//import vform
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

//sweetalart2
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast;

//v-chat-scroll...
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const master = () => import(/* webpackChunkName: "master" */ './components/layouts/master.vue')

const router = new VueRouter({
    routes,
    mode: 'hash'
});


new Vue({
    router,
    store,
    render: h => h(master)
}).$mount('#app');
