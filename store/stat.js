import BN from 'bn.js'

export const state = () => ({
  airdrop: {
    count: 0,
    amount: '0'
  },
  fomo: {
    count: 0,
    in: {
      count: 0,
      amount: '0'
    },
    out: {
      count: 0,
      amount: '0'
    },
  },
  buffer: {
    count: 0,

    out: {
      count: 0,
      amount: '0'
    },
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
    state.fomo.count = state.fomo.in.count + state.fomo.out.count

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.fomo.in.amount = amount.toString()
  },
  SET_FOMO_OUT(state, transactions) {
    state.fomo.out.count = transactions.length
    state.fomo.count = state.fomo.in.count + state.fomo.out.count

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.fomo.out.amount = amount.toString()
  },
  SET_BUFFER(state, transactions) {
    state.buffer.count = transactions.length
  },
  SET_BUFFER_OUT(state, transactions) {
    state.buffer.out.count = transactions.length

    let amount = new BN('0')
    for (let i = 0; i < transactions.length; i++) {
      amount = amount.add(new BN(transactions[i].amount))
    }
    state.buffer.out.amount = amount.toString()
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
  SET_BUFFER({ commit }, transactions) {
    commit('SET_BUFFER', transactions)
  },
  SET_BUFFER_OUT({ commit }, transactions) {
    commit('SET_BUFFER_OUT', transactions)
  },
  SET_BURN({ commit }, transactions) {
    commit('SET_BURN', transactions)
  },
}
