import store from '@/store'
import { NavigationGuard } from 'vue-router'

export const beforeEachNavigationGuard: NavigationGuard<Vue> = async (to, from, next) => {
    console.log('authentication gaurd', store.getters['auth/isAuthenticated'])
    const authRequired = to.matched.some(record => record.meta.authRequired);
    if (authRequired && !store.getters['auth/isAuthenticated']) {
        next({ name: 'Login', query: { r: to.path } });
    } else {
        next();
    }
}
