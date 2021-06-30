import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import moment from 'moment'

const BN = Web3.utils.BN

export const state = () => ({
  web3: null,
  chainId: null,
  blockNumber: 0,
  blockNumberStr: '',
  gasPrice: null,
  gasPriceStr: '',

  token: null,
})


export const mutations = {
  SET_WEB3(state, web3) {
    state.web3 = function() {
      return web3
    }
  },
  SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
  },
  SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  SET_GAS_PRICE(state, gasPrice) {
    state.gasPrice = gasPrice
    state.gasPriceStr = Web3.utils.fromWei(gasPrice, 'gwei')
  },
  SET_TOKEN(state, token) {
    state.token = function() {
      return token
    }
  },
  async CONNECT_WALLET(state) {
    const provider = await detectEthereumProvider()
    console.log('>>> Store[account] CONNECT_WALLET', provider)
  },
}


export const actions = {
  async CONNECT_WALLET({ commit }) {
    commit('CONNECT_WALLET')
  },
  async SET_WEB3({ commit }, web3) {
    commit('SET_WEB3', web3)
  },
  async SET_CHAIN_ID({ commit }, chainId) {
    commit('SET_CHAIN_ID', parseInt(chainId))
  },
  async SET_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_GAS_PRICE({ commit }, gasPrice) {
    commit('SET_GAS_PRICE', gasPrice)
  },
  async SET_TOKEN({ commit }, token) {
    commit('SET_TOKEN', token)
  },

  async KEEP_SYNC({ state, commit }) {
    console.log('>>> Store[account] KEEP_SYNC')

    // // on: New Block
    // await state.web3().eth
    //   .subscribe('newBlockHeaders')
    //   .on('data', async blockHeader => {
    //
    //     console.log('>>> blockHeader:', blockHeader)
    //     // await store.dispatch('ether/SET_BLOCK_NUMBER', blockHeader.number)
    //   })
  },
}
