import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login.vue";
import Index from "@/components/Index.vue";
import Monitor from "@/components/Monitor.vue";

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', name: 'login', component: Login, meta: {title: 'Login Jvmm Web Manager'}},
        {
            path: '/index', name: 'index', component: Index, meta: {title: 'Jvmm Nodes Detail'},
            children: [
                {path:'/node/monitor', name: 'nodeMonitor', component: Monitor, meta: {title: 'Node monitor'}}
            ]
        }
    ]
})