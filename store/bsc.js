import BN from 'bn.js'
import JSBI from 'jsbi'

export const state = () => ({
  synchronizing: {
    fromBlock: 0,
    toBlock: 0,
    step: 0,

    fromHolderId: null,

    genesisDepositFrom: 0,
    genesisDepositTo: 0,

    genesisRedeemFrom: 0,
    genesisRedeemTo: 0,
    wait: 0,
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

    wbnbName: null,
    wbnbSymbol: null,
    wbnbDecimals: null,

    price: '0',
    tokenBNBPrice: '0',
    bnbUSDTPrice: '0',

    holders: '0',
    usernames: '0',

    bnPrice: new BN(),
    bnDiv: new BN()
  },

  supply: {
    cap: '0',
    gate: '0',

    totalSupply: '0',
    totalSupplyRatio: '0',

    totalTax: '0',

    liquidity: '0',
    buffer: '0',
    tax: '0',
    airdrop: '0',
    fomo: '0',

    burned: '0',
    burnedRatio: '0',
    circulating: '0',
    circulatingRatio: '0',
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
    distAmount: '0',

    // TODO
    // distOfInit: '0',
    // distThreshold: '0',
    // distReady: false,

    whaleFractionA: '0',
    whaleFractionB: '0',
    robberPercentage: '0',

    autoSwapReady: false,
    autoSwapNumeratorMin: '0',
    autoSwapNumeratorMax: '0',
    autoSwapDenominator: '0',
    autoSwapAmountMin: '0',
    autoSwapAmountMax: '0',
    bonus: {
      level0: '0',
      level1: '0',
      level2: '0',
      total: '0',
    },


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
    ido: null,

    tax: null,
    fomo: null,
    fund: null,
    burn: null,

    airdrop: null,
  },

  fomo: {
    next: null,
    amount: '0',
    timestamp: '0',
    timestampStep: '0',
  },

  takerTax: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  makerTax: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  whaleTax: {
    tax: '0',
    airdrop: '0',
    fomo: '0',
    liquidity: '0',
    fund: '0',
    destroy: '0',
    txn: '0',
    total: '0'
  },

  robberTax: {
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
  async SET_SYNCHRONIZING_EV(state, synchronizing) {
    state.synchronizing.fromBlock = synchronizing.fromBlock
    state.synchronizing.toBlock = synchronizing.toBlock

    console.log(`#${state.synchronizing.fromBlock} >>> #${state.synchronizing.toBlock}/#${state.blockNumber}`)
  },
  async SET_SYNCHRONIZING_EV_FROM(state, fromBlock) {
    state.synchronizing.fromBlock = fromBlock
  },
  async SET_SYNCHRONIZING_EV_TO(state, toBlock) {
    state.synchronizing.toBlock = toBlock
  },

  async SET_SYNCHRONIZING_FROM_HOLDER_ID(state, value) {
    state.synchronizing.fromHolderId = value
  },
  async SET_SYNCHRONIZING_PD(state, syncOption) {
    state.synchronizing.genesisDepositFrom = syncOption.fromBlock
    state.synchronizing.genesisDepositTo = syncOption.toBlock
  },
  async SET_SYNCHRONIZING_PR(state, syncOption) {
    state.synchronizing.genesisRedeemFrom = syncOption.fromBlock
    state.synchronizing.genesisRedeemTo = syncOption.toBlock
  },
  async CUT_STEP(state) {
    const a = 8
    const b = 10

    state.synchronizing.step = JSBI.divide(JSBI.multiply(JSBI.BigInt(state.synchronizing.step), JSBI.BigInt(a)), JSBI.BigInt(b)).toString()
  },
  async RESET_STEP(state) {
    state.synchronizing.step = 5000
  },
  async SET_WAIT(state, value) {
    state.synchronizing.wait = value
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

    state.metadata.wbnbName = data.tokenNames[2]
    state.metadata.wbnbSymbol = data.tokenSymbols[2]
    state.metadata.wbnbDecimals = data.tokenDecimals[2]

    state.metadata.bnbUSDTPrice = data.tokenPrices[0]
    state.metadata.tokenBNBPrice = data.tokenPrices[1]
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
    state.supply.gateRatio = new BN(state.supply.gate).muln(100000).div(new BN(state.supply.cap)).toString()

    state.supply.totalSupply = data.supplies[2]
    state.supply.totalSupplyRatio = new BN(state.supply.totalSupply).muln(100000).div(new BN(state.supply.cap)).toString()

    state.supply.totalTax = data.supplies[3]
    state.supply.liquidity = data.supplies[4]

    state.supply.buffer = data.supplies[5]
    state.supply.tax = data.supplies[6]
    state.supply.fomo = data.supplies[7]
    state.supply.burned = data.supplies[8]
    state.supply.burnedRatio = new BN(state.supply.burned).muln(100000).div(new BN(state.supply.cap)).toString()

    state.supply.circulating = new BN(state.supply.totalSupply).sub(new BN(state.supply.burned)).toString()
    state.supply.circulatingRatio = new BN(state.supply.circulating).muln(100000).div(new BN(state.supply.cap)).toString()


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
    state.globalAccounts.USDT = data.accounts[2]
    state.globalAccounts.pair = data.accounts[3]
    state.globalAccounts.buffer = data.accounts[4]
    state.globalAccounts.ido = data.accounts[5]

    state.globalAccounts.tax = data.accounts[6]
    state.globalAccounts.fomo = data.accounts[7]
    state.globalAccounts.fund = data.accounts[8]
    state.globalAccounts.burn = data.accounts[9]

    // // auto swap
    // if (state.genesis.liquidityCreatedTimestamp !== '0') {
    //   state.global.autoSwapReady = new BN(state.supply.buffer).gt(state.global.autoSwapAmountMin)
    // }
  },

  async SET_GLOBAL(state, data) {
    // whale
    state.global.whaleFractionA = data.uint16s[0]
    state.global.whaleFractionB = data.uint16s[1]

    // robber
    state.global.robberPercentage = data.uint16s[2]

    // auto swap
    state.global.autoSwapNumeratorMin = data.uint16s[3]
    state.global.autoSwapNumeratorMax = data.uint16s[4]
    state.global.autoSwapDenominator = data.uint16s[5]

    // coupon bonus
    state.global.bonus.level0 = data.uint16s[7]
    state.global.bonus.level1 = data.uint16s[8]
    state.global.bonus.level2 = data.uint16s[9]
    state.global.bonus.total = new BN(state.global.bonus.level0)
      .add(new BN(state.global.bonus.level1))
      .add(new BN(state.global.bonus.level2))

    // launch timestamp
    state.global.launchTimestamp = data.uint256s[0]

    // liquidity amount
    state.global.initLiquidity = data.uint256s[1]
    state.global.distAmount = data.uint256s[2]

    // thresholds
    state.global.airdropThreshold = data.uint256s[3]
    state.global.whaleThreshold = data.uint256s[4]
    state.global.robberThreshold = data.uint256s[5]

    // auto swap amount min & max
    state.global.autoSwapAmountMin = data.uint256s[6]
    state.global.autoSwapAmountMax = data.uint256s[7]


    // TODO
    // state.global.distOfInit = data.uint16s[7]
    // state.global.distThreshold = data.uint256s[2]
    // state.global.distReady = state.genesis.liquidityCreatedTimestamp !== '0' &&
    //   new BN(state.global.distThreshold).lt(state.supply.liquidity)



    // fomo
    state.fomo.next = data.fomoNext
    state.fomo.amount = data.uint256s[8]
    state.fomo.timestamp = data.uint256s[9]
    state.fomo.timestampStep = data.uint256s[10]
    // state.fomo.countdown.finished = state.fomo.timestamp < Math.floor(new Date().getTime() / 1000)

    // takerTax
    state.takerTax.tax = data.takerTax[0]
    state.takerTax.airdrop = data.takerTax[1]
    state.takerTax.fomo = data.takerTax[2]
    state.takerTax.liquidity = data.takerTax[3]
    state.takerTax.fund = data.takerTax[4]
    state.takerTax.destroy = data.takerTax[5]
    state.takerTax.total = new BN(state.takerTax.tax)
      .add(new BN(state.takerTax.airdrop))
      .add(new BN(state.takerTax.fomo))
      .add(new BN(state.takerTax.liquidity))
      .add(new BN(state.takerTax.fund))
      .add(new BN(state.takerTax.destroy))
    state.takerTax.txn = new BN('100').sub(new BN(state.takerTax.total))

    // makerTax
    state.makerTax.tax = data.makerTax[0]
    state.makerTax.airdrop = data.makerTax[1]
    state.makerTax.fomo = data.makerTax[2]
    state.makerTax.liquidity = data.makerTax[3]
    state.makerTax.fund = data.makerTax[4]
    state.makerTax.destroy = data.makerTax[5]
    state.makerTax.total = new BN(state.makerTax.tax)
      .add(new BN(state.makerTax.airdrop))
      .add(new BN(state.makerTax.fomo))
      .add(new BN(state.makerTax.liquidity))
      .add(new BN(state.makerTax.fund))
      .add(new BN(state.makerTax.destroy))
    state.makerTax.txn = new BN('100').sub(new BN(state.makerTax.total))

    // whaleTax
    state.whaleTax.tax = data.whaleTax[0]
    state.whaleTax.airdrop = data.whaleTax[1]
    state.whaleTax.fomo = data.whaleTax[2]
    state.whaleTax.liquidity = data.whaleTax[3]
    state.whaleTax.fund = data.whaleTax[4]
    state.whaleTax.destroy = data.whaleTax[5]
    state.whaleTax.total = new BN(state.whaleTax.tax)
      .add(new BN(state.whaleTax.airdrop))
      .add(new BN(state.whaleTax.fomo))
      .add(new BN(state.whaleTax.liquidity))
      .add(new BN(state.whaleTax.fund))
      .add(new BN(state.whaleTax.destroy))
    state.whaleTax.txn = new BN('100').sub(new BN(state.whaleTax.total))


    // robberTax
    state.robberTax.tax = data.robberTax[0]
    state.robberTax.airdrop = data.robberTax[1]
    state.robberTax.fomo = data.robberTax[2]
    state.robberTax.liquidity = data.robberTax[3]
    state.robberTax.fund = data.robberTax[4]
    state.robberTax.destroy = data.robberTax[5]
    state.robberTax.total = new BN(state.robberTax.tax)
      .add(new BN(state.robberTax.airdrop))
      .add(new BN(state.robberTax.fomo))
      .add(new BN(state.robberTax.liquidity))
      .add(new BN(state.robberTax.fund))
      .add(new BN(state.robberTax.destroy))
    state.robberTax.txn = new BN('100').sub(new BN(state.robberTax.total))

    // specials
    state.specials.flats = data.flats
    state.specials.slots = data.slots

    // genesis
    state.genesis.depositMax = data.uint256s[11]
    state.genesis.depositCap = data.uint256s[12]
    state.genesis.startTimestamp = data.uint256s[13]
    state.genesis.endTimestamp = data.uint256s[14]
    state.genesis.genesisAmount = data.uint256s[15]  // todo
    state.genesis.liquidityCreatedTimestamp = data.uint256s[16]  // todo
    state.genesis.balance = data.uint256s[17]
    state.genesis.fund = data.uint256s[18]

    state.genesis.genesisPercent = new BN(state.genesis.genesisAmount).muln(100000).div(new BN(state.supply.cap))

    state.genesis.initLiquidityPercent = new BN(state.global.initLiquidity).muln(100000).div(new BN(state.supply.cap))

    // auto swap
    if (state.genesis.liquidityCreatedTimestamp !== '0') {
      state.global.autoSwapReady = new BN(state.supply.buffer).gt(new BN(state.global.autoSwapAmountMin))
    }
  }
}


export const actions = {
  async SET_SYNCHRONIZING_EV({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_EV', syncTxsOption)
  },
  async SET_SYNCHRONIZING_EV_FROM({ commit }, fromBlock = 0) {
    await commit('SET_SYNCHRONIZING_EV_FROM', fromBlock)
  },
  async SET_SYNCHRONIZING_EV_TO({ commit }, toBlock = 0) {
    await commit('SET_SYNCHRONIZING_EV_TO', toBlock)
  },

  async SET_SYNCHRONIZING_FROM_HOLDER_ID({ commit }, value = null) {
    await commit('SET_SYNCHRONIZING_FROM_HOLDER_ID', value)
  },
  async SET_SYNCHRONIZING_PD({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_PD', syncTxsOption)
  },
  async SET_SYNCHRONIZING_PR({ commit }, syncTxsOption = { fromBlock: 0, toBlock: 0 }) {
    await commit('SET_SYNCHRONIZING_PR', syncTxsOption)
  },
  async CUT_STEP({ commit }) {
    await commit('CUT_STEP')
  },
  async RESET_STEP({ commit }) {
    await commit('RESET_STEP')
  },
  async SET_WAIT({ commit }, value) {
    await commit('SET_WAIT', value)
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
