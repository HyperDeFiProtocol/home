export const state = () => ({
  show: false,
})


export const mutations = {
  async SHOW(state) {
    state.show = true
  },
  async HIDE(state) {
    state.show = false
  }
}


export const actions = {
  async SHOW({ commit }) {
    await commit('SHOW')
  },
  async HIDE({ commit }) {
    await commit('HIDE')
  },
}
