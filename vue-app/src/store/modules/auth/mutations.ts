import { IAuthState } from '@/store/types'
import router from '@/router'
import { MutationTree } from 'vuex'

const setUser = (state: IAuthState, payload: any) => {
    state.user = payload
    if (!!payload && router.currentRoute.name == 'Login')
        router.push('/')
}

export const mutations: MutationTree<IAuthState> = {
    setUser
}  