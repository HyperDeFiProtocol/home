export const state = () => ({
  title: null,
  message: null
})


export const mutations = {
  async SET_WARNING(state, warning) {
    state.title = warning.title
    state.message = warning.message
  },
  async SET_CLOSE(state) {
    state.title = null
    state.message = null
  }
}


export const actions = {
  async SET_WARNING({ commit }, warning) {
    await commit('SET_WARNING', warning)
  },
  async SET_CLOSE({ commit }) {
    await commit('SET_CLOSE')
  }
}
