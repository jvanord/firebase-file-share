import { ActionContext, ActionTree } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'
import router from '@/router'
import firebase from 'firebase'

const add = async ({ commit }: ActionContext<IFileModuleState, IRootState>, payload: File) => {
    console.log('Uploading File', payload)
    const path = firebase.auth().currentUser?.uid + '/' + payload.name
    return firebase.storage().ref(path).put(await payload.arrayBuffer(), { cacheControl: 'no-cache', contentType: payload.type })
        .then(response => {
            console.log('add file response', response)
        })
        .catch(error => {
            console.error(error)
            commit("setError", error.message, { root: true })
        });
}

const load = async ({ commit }: ActionContext<IFileModuleState, IRootState>, payload: any) => {
    return firebase.storage().ref(firebase.auth().currentUser?.uid).listAll()
        .then(response => {
            console.log('load files response', response)
        })
        .catch(error => {
            console.error(error)
            commit("setError", error.message, { root: true })
        });
}

export const actions: ActionTree<IFileModuleState, IRootState> = {
    add,
    load
}