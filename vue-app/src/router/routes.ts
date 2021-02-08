import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Upload from '../views/Upload.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload,
        meta: {
            title: 'Upload',
            authRequired: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'About',
            authRequired: false,
        },
    },
    { path: '/404', name: 'NotFound', component: NotFound },
    { path: '*', component: NotFound }
]
export default routes