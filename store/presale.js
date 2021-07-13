export const state = () => ({
  syncStatus: false,

  depositAllowed: null,

  endTimestamp: '0',
  liquidityCreatedTimestamp: '0',
  presaleAmount: '0',
  balance: '0',
  fund: '0',
  portion: '0',

  redeemed: null,

  busdBalance: '0',
  busdAllowance: '0',
})


export const mutations = {
  async SET_SYNC_STATUS(state, value) {
    state.syncStatus = value
  },
  async SET_DATA(state, data) {
    state.depositAllowed = data.depositAllowed

    state.endTimestamp = data.endTimestamp
    state.liquidityCreatedTimestamp = data.liquidityCreatedTimestamp
    state.presaleAmount = data.presaleAmount
    state.balance = data.balance
    state.fund = data.fund
    state.portion = data.portion

    state.redeemed = data.redeemed

    state.busdBalance = data.busdBalance
    state.busdAllowance = data.busdAllowance
  },
}


export const actions = {
  async SET_SYNC_STATUS({ commit }, value) {
    commit('SET_SYNC_STATUS', value)
  },
  async SET_DATA({ commit }, data) {
    commit('SET_DATA', data)
  },
}
