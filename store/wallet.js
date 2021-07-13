import Web3 from 'web3'

const BN = Web3.utils.BN

export const state = () => ({
  chainId: null,
  account: null,

  isHolder: false,
  isWhale: false,
  isFlat: false,
  isSlot: false,

  username: '',
  balance: '0',
  harvest: '0',

  totalHarvest: '0',
  totalTaxSnap: '0',
})


export const mutations = {
  async SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  async SET_ACCOUNT(state, account) {
    state.account = account ? Web3.utils.toChecksumAddress(account) : null
  },
  async SET_ACCOUNT_DATA(state, data) {
    state.isHolder = data.isHolder
    state.isWhale = data.isWhale
    state.isFlat = data.isFlat
    state.isSlot = data.isSlot

    state.username = data.username
    state.balance = data.balance
    state.harvest = data.harvest

    state.totalHarvest = data.totalHarvest
    state.totalTaxSnap = data.totalTaxSnap
  },
}


export const actions = {
  async SET_CHAIN_ID({ commit }, chainId) {
    await commit('SET_CHAIN_ID', chainId)
  },
  async SET_ACCOUNT({ commit }, account) {
    await commit('SET_ACCOUNT', account)
  },
  async SET_ACCOUNT_DATA({ commit }, data) {
    await commit('SET_ACCOUNT_DATA', data)
  },
}
