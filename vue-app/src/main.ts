import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import config from './../../config.json'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        firebase.initializeApp(config.firebase)
    },
    beforeMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log('Authentication Changed', user)
            store.commit('setUser', user)
        });
    }
}).$mount('#app')
