import { GetterTree } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'

export const getters: GetterTree<IFileModuleState, IRootState> = {
    files: (state: IFileModuleState) => !!state.files,
}