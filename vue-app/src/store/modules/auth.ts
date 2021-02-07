import { Module } from 'Vuex'
import { IAuthState, IRootState } from '@/store/types'
import { getters } from './auth/getters'
import { actions } from './auth/actions'
import { mutations } from './auth/mutations'

const namespaced = true
const state: IAuthState = { user: null }

export const auth: Module<IAuthState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}