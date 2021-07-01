import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

export const state = () => ({
  noWeb3Provider: null,

  loading: null,
  chainId: null,
  account: null,
})


export const mutations = {
  async SET_NO_WEB3_PROVIDER(state, value) {
    state.noWeb3Provider = value
    state.loading = null
  },
  async SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
  },
  async SET_ACCOUNT(state, account) {
    state.account = account ? Web3.utils.toChecksumAddress(account) : null
    state.loading = null
  },
  async START_LOADING(state) {
    state.loading = true
  },
  async STOP_LOADING(state) {
    state.loading = null
  }
}


export const actions = {
  async SET_NO_WEB3_PROVIDER({ commit }, value) {
    await commit('SET_NO_WEB3_PROVIDER', value)
  },
  async SET_CHAIN_ID({ commit }, chainId) {
    await commit('SET_CHAIN_ID', chainId)
  },
  async CONNECT_WALLET({ rootState, state, commit, dispatch }) {
    await commit('START_LOADING')

    const provider = await detectEthereumProvider()
    if (!provider) {
      await commit('SET_NO_WEB3_PROVIDER', true)
      return null
    }
    // ethereum.autoRefreshOnNetworkChange = false ??

    // Set WEB3
    if (state.web3) {
      await commit('STOP_LOADING')
      return null
    }
    const web3 = new Web3(window.ethereum)
    if (!web3) {
      await dispatch('warning/SET_WARNING', {
        title: 'Initialize web3: Failed',
        message: 'Please visit with your Trust Wallet App'
      }, { root: true })

      await commit('STOP_LOADING')
      return null
    }
    await dispatch('bsc/SET_WEB3', web3, { root: true })

    // Set Chain ID
    await commit('SET_CHAIN_ID', await rootState.bsc.web3().eth.getChainId()
      .catch(async function(error) {
        await dispatch('warning/SET_WARNING', {
          title: 'Error: Get Chain ID',
          message: error.message
        }, { root: true })

        await commit('STOP_LOADING')
      }))
    if (state.chainId !== rootState.bsc.chainId) {
      await commit('STOP_LOADING')
      return null
    }


    // Connect
    await provider.request({ method: 'eth_requestAccounts' })
      .then(async function(accounts) {
        await commit('SET_ACCOUNT', accounts[0])
        await dispatch('bsc/KEEP_SYNC', null, { root: true })

        // // on: Disconnect TODO: not work... but `subscribe('newBlockHeaders')` still lives
        // await provider.on('disconnect', async function(error) {
        //   await dispatch('warning/SET_WARNING', {
        //     title: 'Error: Disconnected',
        //     message: error.message
        //   }, { root: true })
        //
        //   await dispatch('bsc/SET_WEB3', new Web3(process.env.web3RpcUrl), { root: true })
        //   await dispatch('CONNECT_WALLET')
        // })

        // on: Chain Changed
        await provider.on('chainChanged', async function(chainId) {
          await dispatch('SET_CHAIN_ID', parseInt(chainId))
        })

        // on: Account Changed
        await provider.on('accountsChanged', async function(accounts) {
          await commit('SET_ACCOUNT', accounts[0])
        })
      })
      .catch(async function(error) {
        await dispatch('warning/SET_WARNING', {
          title: 'Please allow authorization',
          message: error.message
        }, { root: true })

        await commit('STOP_LOADING')
      })
  }
}
