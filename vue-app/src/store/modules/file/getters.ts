import { GetterTree } from 'vuex'
import { IFileModuleState, IRootState } from '@/store/types'

export const getters: GetterTree<IFileModuleState, IRootState> = {
    hasFiles: (state: IFileModuleState) => !!state.files,
    myFiles: (state: IFileModuleState) => state.files || [],
    loading: (state: IFileModuleState) => state.loading,
}