import { Module } from 'Vuex'
import { IAuthState, IRootState } from '@/store/types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const namespaced = true
const state: IAuthState = { user: null }

export const auth: Module<IAuthState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}