import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router'
import firebase from 'firebase'

Vue.use(Vuex)

const initialState = () => ({ user: null, error: null })

export default new Vuex.Store({
    state: initialState(),
    getters: {
        isAuthenticated: (state) => !!state.user,
        getError: (state) => state.error
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            if (!!payload && router.currentRoute.name == 'Login')
                router.push('/')
        },
        setError(state, payload) {
            state.error = payload;
        }
    },
    actions: {
        clearError({ commit }, payload) {
            commit("setError", "")
        },
        signUpAction({ commit }, payload) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                    console.log('sign up response', response)
                    commit("setUser", response.user)
                })
                .catch(error => {
                    commit("setError", error.message)
                });
        },
        signInAction({ commit }, payload) {
            firebase.auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                    console.log('sign in response', response)
                    commit("setUser", response.user)
                })
                .catch(error => {
                    commit("setError", error.message)
                });
        },
        signOutAction({ commit }, payload) {
            firebase.auth().signOut()
                .then(response => {
                    commit("setUser", null)
                    router.push('/login')
                })
                .catch(error => { commit("setError", error.message) })
        },
    },
    modules: {
    }
})
