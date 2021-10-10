import BN from 'bn.js'

export const state = () => ({
  airdrop: {
    count: 0,
    amount: '0'
  },
  fomo: {
    in: {
      count: 0,
      amount: '0'
    },
    out: {
      count: 0,
      amount: '0'
    },
  },
  liquidity: {
    count: 0,
    amount: '0'
  },
  burn: {
    count: 0,
    amount: '0'
  },
})


export const mutations = {
  SET_AIRDROPS(state, transactions) {
    state.airdrop.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.airdrop.amount = amount.toString()
  },
  SET_FOMO_IN(state, transactions) {
    state.fomo.in.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.fomo.in.amount = amount.toString()
  },
  SET_FOMO_OUT(state, transactions) {
    state.fomo.out.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.fomo.out.amount = amount.toString()
  },
  SET_LIQUIDITY(state, transactions) {
    state.liquidity.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].tokenAdded))
    }
    state.liquidity.amount = amount.toString()
  },
  SET_BURN(state, transactions) {
    state.burn.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.burn.amount = amount.toString()
  },
}


export const actions = {
  SET_AIRDROPS({ commit }, transactions) {
    commit('SET_AIRDROPS', transactions)
  },
  SET_FOMO_IN({ commit }, transactions) {
    commit('SET_FOMO_IN', transactions)
  },
  SET_FOMO_OUT({ commit }, transactions) {
    commit('SET_FOMO_OUT', transactions)
  },
  SET_LIQUIDITY({ commit }, transactions) {
    commit('SET_LIQUIDITY', transactions)
  },
  SET_BURN({ commit }, transactions) {
    commit('SET_BURN', transactions)
  },
}
