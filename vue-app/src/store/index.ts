import Vue from 'vue'
import Vuex, { ActionContext, StoreOptions } from 'vuex'
import { IRootState } from './types'
import { auth } from './modules/auth'

Vue.use(Vuex)

const getError = (state: IRootState) => state.error
const setError = (state: IRootState, payload: any) => state.error = payload
const clearError = ({ commit }: ActionContext<IRootState, IRootState>, payload: any) => commit('setError', null)
const testError = ({ commit }: ActionContext<IRootState, IRootState>, payload: any) => commit('setError', payload || 'Test Error')

const store: StoreOptions<IRootState> = {
    state: { error: '' },
    getters: { getError },
    mutations: { setError },
    actions: { clearError, testError },
    modules: {
        auth
    }
}
export default new Vuex.Store<IRootState>(store);
