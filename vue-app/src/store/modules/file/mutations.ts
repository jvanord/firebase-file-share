import { IFileModuleState } from '@/store/types'
import router from '@/router'
import { MutationTree } from 'vuex'

const setFiles = (state: IFileModuleState, payload: any) => {
    state.files = payload
    if (!!payload && router.currentRoute.name == 'Login')
        router.push('/')
}

export const mutations: MutationTree<IFileModuleState> = {
    setFiles
}  