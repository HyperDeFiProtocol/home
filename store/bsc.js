import Web3 from 'web3'
import moment from 'moment'

import tokenAbi from '~/utils/token.json'

const BN = Web3.utils.BN

const sleepAWhile = async function() {
  await window.setTimeout(
    async function() {
    },
    1000)
}

export const state = () => ({
  web3: null,
  chainId: null,
  blockNumber: 0,
  gasPrice: '0',

  token: null,

  metadata: {
    tokenName: null,
    tokenSymbol: null,
    tokenDecimals: null,

    priceName: null,
    priceSymbol: null,
    priceDecimals: null,

    price: '0',
    holders: '0',
    usernames: '0',

    bnPrice: new BN(),
    bnDiv: new BN()
  },

  supply: {
    cap: '0',
    gate: '0',
    totalSupply: '0',
    totalTax: '0',

    liquidity: '0',
    buffer: '0',
    tax: '0',
    airdrop: '0',
    fomo: '0'
  },

  total: {
    tax: '0',
    burned: '0'
  },

  global: {
    launchTimestamp: '0',
    launchCountdown: {
      interval: null,
      finished: false,

      hh: '00',
      mm: '00',
      ss: '00'
    },

    airdropMode: null,
    airdropMax: '0',

    whaleFractionA: '0',
    whaleFractionB: '0',
    robberPercentage: '0',

    autoSwapReady: null,
    autoSwapNumeratorMin: '0',
    autoSwapNumeratorMax: '0',
    autoSwapDenominator: '0',
    autoSwapAmountMin: '0',
    autoSwapAmountMax: '0',

    tradeAmountMax: '0',

    lottoThreshold: '0',
    whaleThreshold: '0',
    robberThreshold: '0'
  },

  globalAccounts: {
    pancake: null,
    pair: null,
    BUSD: null,
    buffer: null,
    airdrop: null,
    fomo: null,
    dev: null,
    zero: null,
    burn: null
  },

  fomo: {
    next: null,
    amount: '0',
    threshold: '0',
    timestamp: '0',
    timestampStep: '0',

    countdown: {
      interval: null,
      finished: false,

      hh: '00',
      mm: '00',
      ss: '00'
    }
  },


  takerFee: {
    tax: '0',
    lotto: '0',
    fomo: '0',
    liquidity: '0',
    dev: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  makerFee: {
    tax: '0',
    lotto: '0',
    fomo: '0',
    liquidity: '0',
    dev: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  whaleFee: {
    tax: '0',
    lotto: '0',
    fomo: '0',
    liquidity: '0',
    dev: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  robberFee: {
    tax: '0',
    lotto: '0',
    fomo: '0',
    liquidity: '0',
    dev: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  specials: {
    flats: [],
    slots: []
  },

  marketValue: {
    totalSupply: '0',
    liquidity: '0',
    buffer: '0',
    tax: '0',
    airdrop: '0',
    fomo: '0',

    totalTax: '0'
  }
})


export const mutations = {
  async SET_WEB3(state, web3) {
    state.web3 = function() {
      return web3
    }
  },
  async SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
  },
  async SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  async SET_GAS_PRICE(state, gasPrice) {
    state.gasPrice = gasPrice
  },
  async SET_TOKEN(state, token) {
    state.token = function() {
      return token
    }
  },
  async SET_METADATA(state, data) {
    state.metadata.tokenName = data.tokenName
    state.metadata.tokenSymbol = data.tokenSymbol
    state.metadata.tokenDecimals = data.tokenDecimals

    state.metadata.priceName = data.priceName
    state.metadata.priceSymbol = data.priceSymbol
    state.metadata.priceDecimals = data.priceDecimals

    state.metadata.price = data.price
    state.metadata.bnPrice = new BN(state.metadata.price)
    let strDiv = '1'
    for (let i = 0; i < parseInt(state.metadata.tokenDecimals); i++) {
      strDiv += '0'
    }
    state.metadata.bnDiv = new BN(strDiv)

    state.metadata.holders = data.holders
    state.metadata.usernames = data.usernames

    // supplies
    state.supply.cap = data.supplies[0]
    state.supply.gate = data.supplies[1]
    state.supply.totalSupply = data.supplies[2]
    state.supply.totalTax = data.supplies[3]
    state.supply.liquidity = data.supplies[4]
    state.supply.buffer = data.supplies[5]
    state.supply.tax = data.supplies[6]
    state.supply.airdrop = data.supplies[7]
    state.supply.fomo = data.supplies[8]

    state.marketValue.totalSupply = new BN(state.supply.totalSupply).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.totalTax = new BN(state.supply.totalTax).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.liquidity = new BN(state.supply.liquidity).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.buffer = new BN(state.supply.buffer).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.tax = new BN(state.supply.tax).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.airdrop = new BN(state.supply.airdrop).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.fomo = new BN(state.supply.fomo).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()

    // accounts
    state.globalAccounts.pancake = data.accounts[0]
    state.globalAccounts.pair = data.accounts[1]
    state.globalAccounts.BUSD = data.accounts[2]
    state.globalAccounts.tax = data.accounts[3]
    state.globalAccounts.buffer = data.accounts[4]
    state.globalAccounts.airdrop = data.accounts[5]
    state.globalAccounts.fomo = data.accounts[6]
    state.globalAccounts.dev = data.accounts[7]
    state.globalAccounts.zero = data.accounts[8]
    state.globalAccounts.burn = data.accounts[9]

  },

  async SET_GLOBAL(state, data) {
    state.global.airdropMode = data.airdropMode
    state.global.autoSwapReady = data.autoSwapReady

    // whale
    state.global.whaleFractionA = data.i16[0]
    state.global.whaleFractionB = data.i16[1]

    // robber
    state.global.robberPercentage = data.i16[2]

    // auto swap
    state.global.autoSwapNumeratorMin = data.i16[3]
    state.global.autoSwapNumeratorMax = data.i16[4]
    state.global.autoSwapDenominator = data.i16[5]
    state.global.autoSwapAmountMin = data.i256[6]
    state.global.autoSwapAmountMax = data.i256[7]

    // launch timestamp
    state.global.launchTimestamp = data.i256[0]

    // airdrop
    state.global.airdropMax = data.i256[1]

    // thresholds
    state.global.lottoThreshold = data.i256[2]
    state.global.whaleThreshold = data.i256[4]
    state.global.robberThreshold = data.i256[5]

    // fomo
    state.fomo.next = data.fomoNext
    state.fomo.amount = data.i256[8]
    state.fomo.threshold = data.i256[3]
    state.fomo.timestamp = data.i256[9]
    state.fomo.timestampStep = data.i256[10]
    state.fomo.countdown.finished = state.fomo.timestamp < Math.floor(new Date().getTime() / 1000)

    // takerFee
    state.takerFee.tax = data.takerFees[0]
    state.takerFee.lotto = data.takerFees[1]
    state.takerFee.fomo = data.takerFees[2]
    state.takerFee.liquidity = data.takerFees[3]
    state.takerFee.dev = data.takerFees[4]
    state.takerFee.destroy = data.takerFees[5]
    state.takerFee.txn = data.takerFees[6]
    state.takerFee.total = data.takerFees[7]

    // makerFee
    state.makerFee.tax = data.makerFees[0]
    state.makerFee.lotto = data.makerFees[1]
    state.makerFee.fomo = data.makerFees[2]
    state.makerFee.liquidity = data.makerFees[3]
    state.makerFee.dev = data.makerFees[4]
    state.makerFee.destroy = data.makerFees[5]
    state.makerFee.txn = data.makerFees[6]
    state.makerFee.total = data.makerFees[7]

    // whaleFee
    state.whaleFee.tax = data.whaleFees[0]
    state.whaleFee.lotto = data.whaleFees[1]
    state.whaleFee.fomo = data.whaleFees[2]
    state.whaleFee.liquidity = data.whaleFees[3]
    state.whaleFee.dev = data.whaleFees[4]
    state.whaleFee.destroy = data.whaleFees[5]
    state.whaleFee.txn = data.whaleFees[6]
    state.whaleFee.total = data.whaleFees[7]

    // robberFee
    state.robberFee.tax = data.robberFees[0]
    state.robberFee.lotto = data.robberFees[1]
    state.robberFee.fomo = data.robberFees[2]
    state.robberFee.liquidity = data.robberFees[3]
    state.robberFee.dev = data.robberFees[4]
    state.robberFee.destroy = data.robberFees[5]
    state.robberFee.txn = data.robberFees[6]
    state.robberFee.total = data.robberFees[7]

    // specials
    state.specials.flats = data.flats
    state.specials.slots = data.slots
  },

  TOUCH_LAUNCH_COUNTDOWN(state) {
    const duration = moment.duration(moment(state.global.launchTimestamp * 1000).diff(moment()))

    if (duration.asSeconds() > 0) {
      const s = duration.seconds()
      const m = duration.minutes()
      const h = duration.hours()
      state.global.launchCountdown.ss = s < 10 ? '0' + s : s
      state.global.launchCountdown.mm = m < 10 ? '0' + m : m
      state.global.launchCountdown.hh = h < 10 ? '0' + h : h
    } else {
      state.global.launchCountdown.finished = true

      state.global.launchCountdown.ss = '00'
      state.global.launchCountdown.mm = '00'
      state.global.launchCountdown.hh = '00'
    }
  },
  async SET_LAUNCH_COUNTDOWN_INTERVAL(state, payload) {
    state.global.launchCountdown.interval = payload
  },

  TOUCH_FOMO_COUNTDOWN(state) {
    const duration = moment.duration(moment(state.fomo.timestamp * 1000).diff(moment()))

    if (duration.asSeconds() > 0) {
      const s = duration.seconds()
      const m = duration.minutes()
      const h = duration.hours()
      state.fomo.countdown.ss = s < 10 ? '0' + s : s
      state.fomo.countdown.mm = m < 10 ? '0' + m : m
      state.fomo.countdown.hh = h < 10 ? '0' + h : h
    } else {
      state.fomo.countdown.finished = true

      state.fomo.countdown.ss = '00'
      state.fomo.countdown.mm = '00'
      state.fomo.countdown.hh = '00'
    }
  },
  async SET_FOMO_COUNTDOWN_INTERVAL(state, payload) {
    state.fomo.countdown.interval = payload
  }
}


export const actions = {
  async SET_WEB3({ commit, dispatch }, web3) {
    await commit('SET_WEB3', web3)
    await dispatch('SET_TOKEN')
  },
  async SET_TOKEN({ state, commit }) {
    const Contract = state.web3().eth.Contract
    await commit('SET_TOKEN', new Contract(
      tokenAbi, process.env.tokenAddress
    ))
  },

  async SET_CHAIN_ID({ state, commit }) {
    await commit('SET_CHAIN_ID', await state.web3().eth.getChainId().catch(error => {
      console.error('>>> Store[bsc] getChainId:', error.message)
    }))
  },

  async SYNC_BLOCK_NUMBER({ state, commit }) {
    await commit('SET_BLOCK_NUMBER', await state.web3().eth.getBlockNumber().catch(error => {
      console.error('>>> Store[bsc] getBlockNumber:', error.message)
    }))
  },

  async SYNC_GAS_PRICE({ state, commit }) {
    let gasPrice = await state.web3().eth.getGasPrice().catch(error => {
      console.error('>>> Store[bsc] getGasPrice:', error.message)
    })
    if (gasPrice > '0') {
      await commit('SET_GAS_PRICE', gasPrice)
    }
  },

  async SYNC_DATA({ state, commit }) {
    await state.token().methods.getMetadata().call()
      .then(async function(data) {
        await commit('SET_METADATA', data)
      })
      .catch(error => {
        console.error('>>> Store[bsc] SYNC_DATA - getMetadata:', error.message)
      })

    await state.token().methods.getGlobal().call()
      .then(async function(data) {
        await commit('SET_GLOBAL', data)
      })
      .catch(error => {
        console.error('>>> Store[bsc] SYNC_DATA - getGlobal:', error.message)
      })

    if (!state.fomo.countdown.finished && !state.fomo.countdown.interval) {
      await commit('SET_FOMO_COUNTDOWN_INTERVAL',
        window.setInterval(
          () => {
            commit('TOUCH_FOMO_COUNTDOWN')
          },
          1000)
      )
    }

    if (!state.global.launchCountdown.finished && !state.global.launchCountdown.interval) {
      await commit('SET_LAUNCH_COUNTDOWN_INTERVAL',
        window.setInterval(
          () => {
            commit('TOUCH_LAUNCH_COUNTDOWN')
          },
          1000)
      )
    }
  },

  async TOUCH_REFRESH({ rootState, state, commit, dispatch }, blockNumber) {
    if (blockNumber > state.blockNumber + 5) {
      await commit('SET_BLOCK_NUMBER', blockNumber)
      // console.log(moment().format(), '>>> Store[bsc] TOUCH_REFRESH, newBlockNumber:', blockNumber)
      await dispatch('SYNC_DATA')
      if (rootState.wallet.account) {
        await dispatch('wallet/SYNC_DATA', null, { root: true })
      }
      await sleepAWhile()
      return null
    }

    await sleepAWhile()
  },

  async KEEP_SYNC({ state, dispatch }) {
    await state.web3().eth
      .subscribe('newBlockHeaders')
      .on('data', async blockHeader => {
        await dispatch('TOUCH_REFRESH', blockHeader.number)
      })
  }
}
