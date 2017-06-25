import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import resource from 'vue-resource';
Vue.use(resource);

import store from './store/index.js'

new Vue({
    components: {App},
    router,
    store,
    el: '#app',
    template: '<App></App>'
})
