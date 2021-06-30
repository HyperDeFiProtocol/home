import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

export const state = () => ({
  account: null,
  errorMessage: null,
  chainId: null,
})


export const mutations = {
  async SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  async SET_ACCOUNT(state, account) {
    state.account = Web3.utils.toChecksumAddress(account)
  },
}


export const actions = {
  async SET_CHAIN_ID({ commit }, chainId) {
    await commit('SET_CHAIN_ID', chainId)
  },
  async CONNECT_WALLET({ rootState, state, commit, dispatch }) {
    const provider = await detectEthereumProvider()
    if (!provider) {
      console.error('>>> Store[wallet] detect web3 provider: Failed')
      state.errorMessage = 'Detect web3 provider: Failed'
      return null
    }
    // ethereum.autoRefreshOnNetworkChange = false

    // Set WEB3
    if (state.web3) {
      return null
    }
    const web3 = new Web3(window.ethereum)
    if (!web3) {
      console.error('>>> Store[wallet] initialize web3: Failed')
      state.errorMessage = 'Initialize web3: Failed'
      return null
    }
    await dispatch('bsc/SET_WEB3', web3, {root: true})

    // Set Chain ID
    await commit('SET_CHAIN_ID', await rootState.bsc.web3().eth.getChainId().catch(error => {
      console.error('>>> Store[bsc] getChainId:', error.message)
    }))

    // if (state.chainId !== rootState.bsc.chainId) {
    //   return null
    // }

    // Connect
    await provider.request({method: 'eth_requestAccounts'})
      .then(async function (accounts) {
        await commit('SET_ACCOUNT', accounts[0])
      })
      .catch(error => {
        console.error('>>> Store[wallet] request.eth_requestAccounts:', error.message)
      })

    //
    // await dispatch('bsc/KEEP_SYNC', web3, {root: true})
  },
}
