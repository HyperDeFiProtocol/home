import presaleAbi from '~/utils/presale.json'
import moment from 'moment'


export const state = () => ({
  contract: null,

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

  // countdown: {
  //   interval: null,
  //   finished: false,
  // },
})


export const mutations = {
  async SET_CONTRACT(state, contract) {
    state.contract = function() {
      return contract
    }
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

  // TOUCH_COUNTDOWN(state) {
  //   const duration = moment.duration(moment(state.endTimestamp * 1000).diff(moment()))
  //
  //   if (duration.asSeconds() === 0) {
  //     state.countdown.finished = true
  //     clearInterval(state.countdown.interval)
  //   }
  // },
  // async SET_COUNTDOWN_INTERVAL(state, payload) {
  //   state.countdown.interval = payload
  // },
}


export const actions = {
  async SET_CONTRACT({ rootState, state, commit }) {
    const Contract = rootState.bsc.web3().eth.Contract
    await commit('SET_CONTRACT', new Contract(
      presaleAbi, rootState.bsc.globalAccounts.presale
    ))
  },
  async SYNC_DATA({ rootState, state, commit, dispatch }) {
    await state.contract().methods.getStatus(rootState.wallet.account).call()
      .then(async function(data) {
        // console.log('>>> presale.data:', data)
        await commit('SET_DATA', data)
      })
      .catch(error => {
        console.error('>>> Store[presale] SYNC_DATA - getStatus:', error.message)
      })

    // if (!state.countdown.finished && !state.countdown.interval) {
    //   await commit('SET_COUNTDOWN_INTERVAL',
    //     window.setInterval(
    //       () => {
    //         commit('TOUCH_COUNTDOWN')
    //       },
    //       1000)
    //   )
    // }
  }
}
