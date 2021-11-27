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

  couponUsed: '0',
  coupon: '0',
  visitors: '0',

  bnbBalance: '0',
  genesisDeposit: '0',
  genesisPortion: '0',
  genesisRedeemed: false,
})


export const mutations = {
  async SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  async SET_ACCOUNT(state, account) {
    state.account = account ? Web3.utils.toChecksumAddress(account) : null
  },
  async SET_ACCOUNT_DATA(state, data) {
    state.username = data.username

    state.isHolder = data.bools[0]
    state.isWhale = data.bools[1]
    state.isFlat = data.bools[2]
    state.isSlot = data.bools[3]

    state.balance = data.uint256s[0]
    state.harvest = data.uint256s[1]

    state.totalHarvest = data.uint256s[2]
    state.totalTaxSnap = data.uint256s[3]

    state.couponUsed = data.uint256s[4]
    state.coupon = data.uint256s[5]
    state.visitors = data.uint256s[6]

    state.bnbBalance = data.uint256s[7]

    state.genesisDeposit = data.uint256s[8]
    state.genesisPortion = data.uint256s[9]
    state.genesisRedeemed = data.bools[4]
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
