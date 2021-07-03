export const state = () => ({
  show: false,
})


export const mutations = {
  async TOGGLE_SHOW(state) {
    state.show = !state.show
  },
  async HIDE(state) {
    state.show = false
  }
}


export const actions = {
  async TOGGLE_SHOW({ commit }) {
    await commit('TOGGLE_SHOW')
  },
  async HIDE({ commit }) {
    await commit('HIDE')
  },
}
