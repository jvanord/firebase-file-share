import { Module } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'
import { getters } from './file/getters'
import { actions } from './file/actions'
import { mutations } from './file/mutations'

const namespaced = true
const state: IFileModuleState = { files: [] }

export const file: Module<IFileModuleState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}