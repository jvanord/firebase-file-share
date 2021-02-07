import store from '@/store'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Upload from '../views/Upload.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { authRequired: false }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload,
        meta: { authRequired: true }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { authRequired: true }
    },
    { path: '/404', name: 'NotFound', component: NotFound },
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async (to, from, next) => {
    console.log('authentication gaurd', store.getters['auth/isAuthenticated'])
    const authRequired = to.matched.some(record => record.meta.authRequired);
    if (authRequired && !store.getters['auth/isAuthenticated']) {
        next({ name: 'Login', query: { r: to.path } });
    } else {
        next();
    }
});

export default router
