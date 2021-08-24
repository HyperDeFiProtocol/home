export const state = () => ({
  txFromBlockNumber: 0,
})


export const mutations = {
  SET_TX_FROM_BLOCK_NUMBER(state, blockNumber) {
    state.txFromBlockNumber = blockNumber
  },
}


export const actions = {
  SET_TX_FROM_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SET_TX_FROM_BLOCK_NUMBER', blockNumber)
  },
}
