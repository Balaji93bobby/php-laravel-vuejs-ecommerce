import Vue from 'vue';
import router from "./routes/routers";
import store from "./vuex/store";
import Snotify from "vue-snotify";

import TestComponent from "./components/TestComponent";
import AdminComponent from "./components/admin/AdminComponent";
import PreloaderComponent from "./components/layouts/PreloaderComponent";

require('./bootstrap');

Vue.use(Snotify, {
    toast: {
        showProgressBar: false
        }
})

Vue.component('test-component', TestComponent)
Vue.component('admin-component', AdminComponent)
Vue.component('preloader-component', PreloaderComponent)

const app = new Vue({
    router,
    store,
    el: '#app',
});
