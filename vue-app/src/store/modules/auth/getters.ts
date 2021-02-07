import { GetterTree } from 'vuex'
import { IAuthState, IRootState } from '@/store/types'

export const getters: GetterTree<IAuthState, IRootState> = {
    isAuthenticated: (state: IAuthState) => !!state.user,
}