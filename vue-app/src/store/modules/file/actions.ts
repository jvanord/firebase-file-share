import { ActionContext, ActionTree } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'
import firebase from 'firebase'
import axios from 'axios'

const add = async ({ commit }: ActionContext<IFileModuleState, IRootState>, payload: File) => {
    console.log('Uploading File', payload)
    commit('setLoading', true)
    const path = firebase.auth().currentUser?.uid + '/' + payload.name
    return firebase.storage().ref(path).put(await payload.arrayBuffer(), { cacheControl: 'no-cache', contentType: payload.type })
        .then(response => {
            console.log('add file response', response)
        })
        .catch(error => {
            console.error(error)
            commit("setError", error.message, { root: true })
        })
        .finally(() => commit('setLoading', false))
}

const load = async ({ commit }: ActionContext<IFileModuleState, IRootState>, payload: any) => {
    commit('setLoading', true)
    return firebase.storage().ref(firebase.auth().currentUser?.uid).listAll()
        .then(response => {
            console.log('load files response', response.items)
            commit('setFiles', response.items)
        })
        .catch(error => {
            console.error(error)
            commit("setError", error.message, { root: true })
        })
        .finally(() => commit('setLoading', false))
}

const _delete = async ({ dispatch, commit }: ActionContext<IFileModuleState, IRootState>, payload: string) => {
    commit('setLoading', true)
    return firebase.storage().ref(payload).delete()
        .then(response => {
            console.log('delete file response', response)
            dispatch('load')
        })
        .catch(error => {
            console.error(error)
            commit("setError", error.message, { root: true })
            commit('setLoading', false)
        })
}

const download = async ({ commit }: ActionContext<IFileModuleState, IRootState>, payload: string) => {
    let response = await axios({
        url: payload,
        method: 'GET',
        responseType: 'blob',
    });
    return new Blob([response.data]);
}

export const actions: ActionTree<IFileModuleState, IRootState> = {
    add,
    load,
    delete: _delete,
    download,
}