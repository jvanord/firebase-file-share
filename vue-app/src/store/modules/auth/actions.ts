import { ActionContext, ActionTree } from 'vuex'
import firebase from 'firebase';
import { IAuthState, IRootState } from '@/store/types'
import router from '@/router';

const signUp = ({ commit }: ActionContext<IAuthState, IRootState>, payload: any) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('sign up response', response)
            commit("setUser", response.user)
        })
        .catch(error => {
            commit("setError", error.message, { root: true })
        });
}

const signIn = ({ commit }: ActionContext<IAuthState, IRootState>, payload: any) => {
    firebase.auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('sign in response', response)
            commit("setUser", response.user)
        })
        .catch(error => {
            commit("setError", error.message, { root: true })
        });
}

const signOut = ({ commit }: ActionContext<IAuthState, IRootState>, payload: any) => {
    firebase.auth().signOut()
        .then(response => {
            commit("setUser", null)
            router.push('/login')
        })
        .catch(error => { commit("setError", error.message, { root: true }) })
}

export const actions: ActionTree<IAuthState, IRootState> = {
    signUp,
    signIn,
    signOut
}