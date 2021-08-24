export const state = () => ({
  txFromBlockNumber: 0,
  airdropFromBlockNumber: 0,
  lottoFromBlockNumber: 0,
})


export const mutations = {
  SET_TX_FROM_BLOCK_NUMBER(state, blockNumber) {
    state.txFromBlockNumber = blockNumber
  },
  SET_AIRDROP_FROM_BLOCK_NUMBER(state, blockNumber) {
    state.airdropFromBlockNumber = blockNumber
  },
  SET_LOTTO_FROM_BLOCK_NUMBER(state, blockNumber) {
    state.lottoFromBlockNumber = blockNumber
  },
}


export const actions = {
  SET_TX_FROM_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SET_TX_FROM_BLOCK_NUMBER', blockNumber)
  },
  SET_AIRDROP_FROM_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SET_AIRDROP_FROM_BLOCK_NUMBER', blockNumber)
  },
  SET_LOTTO_FROM_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SET_LOTTO_FROM_BLOCK_NUMBER', blockNumber)
  },
}
