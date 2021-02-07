import { Module } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const namespaced = true
const state: IFileModuleState = { files: [], loading: false }

export const file: Module<IFileModuleState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}