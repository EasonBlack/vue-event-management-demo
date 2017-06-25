import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Calendar = resolve => require(['./modules/calendar/index.vue'], resolve)

const router = new VueRouter({
    routes: [
        { path: '/calendar', name: 'calendar',component: Calendar },
        { path: '/', redirect: '/calendar' },
        { path: '*', redirect: '/calendar' }
    ]
})

export default router