import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const initialState = () => ({ user: null, error: null })

export default new Vuex.Store({
  state: initialState(),
  getters: {
    isAuthenticated: (state) => !!state.user,
    error: (state) => state.error
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    clearError({commit}, payload) {
      commit("setError", "");
    },
    signUpAction({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user);
        })
        .catch(error => {
          commit("setError", error.message);
        });
    }
  },
  modules: {
  }
})
