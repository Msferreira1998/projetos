import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home/home.vue';
import User from './pages/User/user.vue';
import UserDetails from './components/UserDetails/UserDetails.vue';

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
