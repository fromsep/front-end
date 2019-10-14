import Vue from 'vue';
import Router from 'vue-router';

import Index from './components/Index.vue';
import HelloWorld from './components/HelloWorld';

Vue.use(Router);

export default new Router({
    routes: [
        { path:'/index', component: Index},
        { path: '/hello-world', component: HelloWorld},
    ],
});