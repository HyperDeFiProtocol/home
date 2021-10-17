import BN from 'bn.js'

const sleepAWhile = async function() {
  window.setTimeout('', 1000)
  return null
}

export const state = () => ({
  synchronizing: {
    fromBlock: 0,
    toBlock: 0,

    fromHolderId: null,

    genesisDepositFrom: 0,
    genesisDepositTo: 0,

    genesisRedeemFrom: 0,
    genesisRedeemTo: 0,
  },

  blockNumber: 0,
  gasPrice: '0',

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
    circulating: '0',

    liquidity: '0',
    buffer: '0',
    tax: '0',
    airdrop: '0',
    fomo: '0',
    burned: '0',

    burnedRatio: '0'
  },

  total: {
    tax: '0',
    burned: '0'
  },

  global: {
    launchTimestamp: '0',
    // launchCountdown: {
    //   interval: null,
    //   finished: false,
    //
    //   hh: '00',
    //   mm: '00',
    //   ss: '00'
    // },

    initLiquidity: '0',

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

    airdropThreshold: '0',
    whaleThreshold: '0',
    robberThreshold: '0'
  },

  globalAccounts: {
    zero: '0x0000000000000000000000000000000000000000',

    pancake: null,
    WBNB: null,
    USDT: null,
    pair: null,
    buffer: null,

    tax: null,
    airdrop: null,
    fomo: null,
    fund: null,
    burn: null
  },

  fomo: {
    next: null,
    amount: '0',
    timestamp: '0',
    timestampStep: '0'

    // countdown: {
    //   interval: null,
    //   finished: true,
    //
    //   hh: '00',
    //   mm: '00',
    //   ss: '00'
    // }
  },


  takerFee: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  makerFee: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  whaleFee: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  robberFee: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  specials: {
    flats: [],
    slots: []
  },

  marketValue: {
    cap: '0',
    totalSupply: '0',
    liquidity: '0',
    buffer: '0',
    tax: '0',
    airdrop: '0',
    fomo: '0',
    burned: '0',

    totalTax: '0'
  },

  genesis: {
    depositMax: '0',
    depositCap: '0',
    startTimestamp: '0',
    endTimestamp: '0',
    liquidityCreatedTimestamp: '0',
    genesisAmount: '0',
    genesisPercent: '0',
    balance: '0',
    fund: '0'
  }
})


export const mutations = {
  async SET_SYNCHRONIZING_TX(state, synchronizing) {
    state.synchronizing.fromBlock = synchronizing.fromBlock
    state.synchronizing.toBlock = synchronizing.toBlock
  },
  async SET_SYNCHRONIZING_FROM_HOLDER_ID(state, fromHolderId) {
    state.synchronizing.fromHolderId = fromHolderId
  },
  async SET_SYNCHRONIZING_PD(state, syncOption) {
    state.synchronizing.genesisDepositFrom = syncOption.fromBlock
    state.synchronizing.genesisDepositTo = syncOption.toBlock
  },
  async SET_SYNCHRONIZING_PR(state, syncOption) {
    state.synchronizing.genesisRedeemFrom = syncOption.fromBlock
    state.synchronizing.genesisRedeemTo = syncOption.toBlock
  },
  async SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
  },
  async SET_GAS_PRICE(state, gasPrice) {
    state.gasPrice = gasPrice
  },
  async SET_METADATA(state, data) {
    state.metadata.tokenName = data.tokenNames[0]
    state.metadata.tokenSymbol = data.tokenSymbols[0]
    state.metadata.tokenDecimals = data.tokenDecimals[0]

    state.metadata.priceName = data.tokenNames[1]
    state.metadata.priceSymbol = data.tokenSymbols[1]
    state.metadata.priceDecimals = data.tokenDecimals[1]

    state.metadata.price = data.tokenPrices[2]
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
    state.supply.fomo = data.supplies[7]
    state.supply.burned = data.supplies[8]
    state.supply.burnedRatio = new BN(state.supply.burned).mul(new BN('100000')).div(new BN(state.supply.cap)).toString()
    state.supply.circulating = new BN(state.supply.totalSupply).sub(new BN(state.supply.burned)).toString()

    state.marketValue.cap = new BN(state.supply.cap).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.totalSupply = new BN(state.supply.totalSupply).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.totalTax = new BN(state.supply.totalTax).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.liquidity = new BN(state.supply.liquidity).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.buffer = new BN(state.supply.buffer).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.tax = new BN(state.supply.tax).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.fomo = new BN(state.supply.fomo).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()
    state.marketValue.burned = new BN(state.supply.burned).mul(state.metadata.bnPrice).div(state.metadata.bnDiv).toString()

    // accounts
    state.globalAccounts.pancake = data.accounts[0]
    state.globalAccounts.WBNB = data.accounts[1]
    state.globalAccounts.BUSD = data.accounts[2]
    state.globalAccounts.pair = data.accounts[3]
    state.globalAccounts.buffer = data.accounts[4]

    state.globalAccounts.tax = data.accounts[5]
    state.globalAccounts.fomo = data.accounts[6]
    state.globalAccounts.fund = data.accounts[7]
    state.globalAccounts.burn = data.accounts[8]
  },

  async SET_GLOBAL(state, data) {
    state.global.autoSwapReady = data.autoSwapReady

    // whale
    state.global.whaleFractionA = data.uint16s[0]
    state.global.whaleFractionB = data.uint16s[1]

    // robber
    state.global.robberPercentage = data.uint16s[2]

    // auto swap
    state.global.autoSwapNumeratorMin = data.uint16s[3]
    state.global.autoSwapNumeratorMax = data.uint16s[4]
    state.global.autoSwapDenominator = data.uint16s[5]
    state.global.autoSwapAmountMin = data.uint256s[5]
    state.global.autoSwapAmountMax = data.uint256s[6]

    // launch timestamp
    state.global.launchTimestamp = data.uint256s[0]

    // liquidity amount
    state.global.initLiquidity = data.uint256s[1]

    // thresholds
    state.global.airdropThreshold = data.uint256s[2]
    state.global.whaleThreshold = data.uint256s[3]
    state.global.robberThreshold = data.uint256s[4]

    // fomo
    state.fomo.next = data.fomoNext
    state.fomo.amount = data.uint256s[7]
    state.fomo.timestamp = data.uint256s[8]
    state.fomo.timestampStep = data.uint256s[9]
    // state.fomo.countdown.finished = state.fomo.timestamp < Math.floor(new Date().getTime() / 1000)

    // takerFee
    state.takerFee.tax = data.takerFees[0]
    state.takerFee.airdrop = data.takerFees[1]
    state.takerFee.fomo = data.takerFees[2]
    state.takerFee.liquidity = data.takerFees[3]
    state.takerFee.fund = data.takerFees[4]
    state.takerFee.destroy = data.takerFees[5]
    state.takerFee.txn = data.takerFees[6]
    state.takerFee.total = data.takerFees[7]

    // makerFee
    state.makerFee.tax = data.makerFees[0]
    state.makerFee.airdrop = data.makerFees[1]
    state.makerFee.fomo = data.makerFees[2]
    state.makerFee.liquidity = data.makerFees[3]
    state.makerFee.fund = data.makerFees[4]
    state.makerFee.destroy = data.makerFees[5]
    state.makerFee.txn = data.makerFees[6]
    state.makerFee.total = data.makerFees[7]

    // whaleFee
    state.whaleFee.tax = data.whaleFees[0]
    state.whaleFee.airdrop = data.whaleFees[1]
    state.whaleFee.fomo = data.whaleFees[2]
    state.whaleFee.liquidity = data.whaleFees[3]
    state.whaleFee.fund = data.whaleFees[4]
    state.whaleFee.destroy = data.whaleFees[5]
    state.whaleFee.txn = data.whaleFees[6]
    state.whaleFee.total = data.whaleFees[7]

    // robberFee
    state.robberFee.tax = data.robberFees[0]
    state.robberFee.airdrop = data.robberFees[1]
    state.robberFee.fomo = data.robberFees[2]
    state.robberFee.liquidity = data.robberFees[3]
    state.robberFee.fund = data.robberFees[4]
    state.robberFee.destroy = data.robberFees[5]
    state.robberFee.txn = data.robberFees[6]
    state.robberFee.total = data.robberFees[7]

    // specials
    state.specials.flats = data.flats
    state.specials.slots = data.slots

    // genesis
    state.genesis.depositMax = data.uint256s[10]
    state.genesis.depositCap = data.uint256s[11]
    state.genesis.startTimestamp = data.uint256s[12]
    state.genesis.endTimestamp = data.uint256s[13]
    state.genesis.liquidityCreatedTimestamp = data.uint256s[14]
    state.genesis.genesisAmount = data.uint256s[15]
    state.genesis.balance = data.uint256s[16]
    state.genesis.fund = data.uint256s[17]

    state.genesis.genesisPercent = new BN(state.genesis.genesisAmount).muln(100).div(new BN(state.supply.cap))

    state.genesis.initLiquidityPercent = new BN(state.global.initLiquidity).muln(100).div(new BN(state.supply.cap))
  }
}


export const actions = {
  async SET_SYNCHRONIZING_TX({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_TX', syncTxsOption)
  },
  async SET_SYNCHRONIZING_FROM_HOLDER_ID({ commit }, fromHolderId= null) {
    await commit('SET_SYNCHRONIZING_FROM_HOLDER_ID', fromHolderId)
  },
  async SET_SYNCHRONIZING_PD({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_PD', syncTxsOption)
  },
  async SET_SYNCHRONIZING_PR({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_PR', syncTxsOption)
  },
  async SET_BLOCK_NUMBER({ commit }, blockNumber) {
    await commit('SET_BLOCK_NUMBER', blockNumber)
  },

  // async SYNC_GAS_PRICE({ state, commit }) {
  //   let gasPrice = await state.web3().eth.getGasPrice().catch(error => {
  //     console.error('>>> Store[bsc] getGasPrice:', error.message)
  //   })
  //   if (gasPrice > '0') {
  //     await commit('SET_GAS_PRICE', gasPrice)
  //   }
  // },

  async SET_METADATA({ commit }, data) {
    await commit('SET_METADATA', data)
  },
  async SET_GLOBAL({ commit }, data) {
    await commit('SET_GLOBAL', data)
  }
}
