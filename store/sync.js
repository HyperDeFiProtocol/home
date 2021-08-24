export const state = () => ({
  tx: false,
  airdrop: false,
  lotto: false,
  liquidity: false,
  transfer: false,
})


export const mutations = {
  SET_TX(state, value) {
    state.tx = value
  },
  SET_AIRDROP(state, value) {
    state.airdrop = value
  },
  SET_LOTTO(state, value) {
    state.lotto = value
  },
  SET_LIQUIDITY(state, value) {
    state.liquidity = value
  },
  SET_TRANSFER(state, value) {
    state.transfer = value
  },
}


export const actions = {
  SET_TX({ commit }, value) {
    commit('SET_TX', value)
  },
  SET_AIRDROP({ commit }, value) {
    commit('SET_AIRDROP', value)
  },
  SET_LOTTO({ commit }, value) {
    commit('SET_LOTTO', value)
  },
  SET_LIQUIDITY({ commit }, value) {
    commit('SET_LIQUIDITY', value)
  },
  SET_TRANSFER({ commit }, value) {
    commit('SET_TRANSFER', value)
  },
}
