export const state = () => ({
  title: null,
  message: null,

  noWeb3Provider: null,
})


export const mutations = {
  async SET_WARNING(state, warning) {
    state.title = warning.title
    state.message = warning.message
  },
  async SET_CLOSE(state) {
    state.title = null
    state.message = null
  },

  async SET_NO_WEB3_PROVIDER(state, value) {
    state.noWeb3Provider = value
  },
}


export const actions = {
  async SET_WARNING({ commit }, warning) {
    await commit('SET_WARNING', warning)
  },
  async SET_CLOSE({ commit }) {
    await commit('SET_CLOSE')
  },

  async SET_NO_WEB3_PROVIDER({ commit }, value) {
    await commit('SET_NO_WEB3_PROVIDER', value)
  },
}
