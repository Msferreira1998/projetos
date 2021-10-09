import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home.vue';
import User from './pages/user.vue';
import UserDetails from './components/UserDetails.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        props: true,
        children: [{ path: ':id', component: UserDetails, props: true }],
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
