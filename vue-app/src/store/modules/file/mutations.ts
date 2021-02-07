import { IFileModuleState } from '@/store/types'
import router from '@/router'
import { MutationTree } from 'vuex'

const setFiles = (state: IFileModuleState, payload: any) => {
    state.files = payload
}

const setLoading = (state: IFileModuleState, payload: boolean) => {
    state.loading = payload
}

export const mutations: MutationTree<IFileModuleState> = {
    setFiles,
    setLoading,
}  