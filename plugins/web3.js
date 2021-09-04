import Web3 from 'web3'
// import detectEthereumProvider from '@metamask/detect-provider'
import tokenAbi from '~/utils/token.json'

const sleepAWhile = async function(milliseconds = 1000) {
  await window.setTimeout('', milliseconds)
}

export default async function({ app, store }, inject) {
  const getChainId = async function(provider) {
    const chainIdHex = await provider.request({ method: 'eth_chainId' })
      .catch(async function(error) {
        console.error('>>> Plugin[web3] connect ~ eth_chainId:', error)
      })

    return Web3.utils.hexToNumber(chainIdHex)
  }

  const switchNetwork = async function(provider) {
    await provider.request(
      {
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: Web3.utils.numberToHex(process.env.chainId).toString()
          }
        ]
      })
      .catch(async function(error) {
        if (error.code === 4902) {
          console.warn('>>> Plugin[web3] connect ~ `wallet_switchEthereumChain` failed: try `wallet_addEthereumChain`')
          await addNetwork(provider)
        } else {
          console.error('>>> Plugin[web3] connect ~ wallet_switchEthereumChain:', error)
        }
      })
  }

  const addNetwork = async function(provider) {
    await provider.request(
      {
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: Web3.utils.numberToHex(process.env.chainId).toString(),
            chainName: process.env.chainName,
            rpcUrls: [process.env.web3RpcUrl],
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18
            },
            blockExplorerUrls: [process.env.explorerBaseUrl]
          }
        ]
      })
      .catch(async function(error) {
        console.error('>>> Plugin[web3] connect ~ wallet_addEthereumChain:', error)
      })
  }

  const addToken = async function(provider) {
    const tokenAdded = await provider.request(
      {
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: process.env.tokenAddress,
            symbol: store.state.bsc.metadata.tokenSymbol,
            decimals: parseInt(store.state.bsc.metadata.tokenDecimals),
            image: process.env.baseUrl + '/avatar.png'
          }
        }
      })
      .catch(async function(error) {
        console.error('>>> Plugin[web3] addToken ~ wallet_watchAsset:', error)
      })

    if (!tokenAdded) {
      console.error('Add token: FAILED')
    }

    return tokenAdded
  }

  const setWeb3 = async function(web3) {
    app.web3 = web3

    const Contract = web3.eth.Contract
    app.token = new Contract(
      tokenAbi, process.env.tokenAddress
    )
  }

  const tokenSyncKeep = async function() {
    await app.web3.eth.subscribe('newBlockHeaders').on('data', async blockHeader => {
      if (blockHeader.number > store.state.bsc.blockNumber + 5) {
        await store.dispatch('bsc/SET_BLOCK_NUMBER', blockHeader.number)
        await tokenSync()
        await sleepAWhile()
        return null
      }

      await sleepAWhile()
    })
  }

  const tokenSync = async function() {
    await app.token.methods.getMetadata().call()
      .then(async function(data) {
        // console.log('>>> token.getMetadata:', data)
        await store.dispatch('bsc/SET_METADATA', data)
      })
      .catch(error => {
        console.error('>>> Plugin[web3] tokenSync - getMetadata:', error.message)
      })

    await app.token.methods.getGlobal().call()
      .then(async function(data) {
        // console.log('>>> token.getGlobal:', data)
        await store.dispatch('bsc/SET_GLOBAL', data)
      })
      .catch(error => {
        console.error('>>> Plugin[web3] tokenSync - getGlobal:', error.message)
      })

    if (store.state.wallet.account) {
      await app.token.methods.getAccount(store.state.wallet.account).call()
        .then(async function(data) {
          // console.log('>>> token.getAccount:', data)
          await store.dispatch('wallet/SET_ACCOUNT_DATA', data)
        })
        .catch(error => {
          console.error('>>> Plugin[web3] tokenSync - getAccount:', error.message)
        })
    }
  }

  const init = async function() {
    // const provider = await detectEthereumProvider().catch(console.error)
    // if (!provider) {
    //   return false
    // }

    const web3 = new Web3(window.ethereum)
    if (!web3) {
      return false
    }

    let chainId = await web3.eth.getChainId().catch(error => {
      console.error('>>> Plugin[web3] tryConnect ~ getChainId:', error.message)
      return false
    })

    if (process.env.chainId !== chainId) {
      await setWeb3(new Web3(process.env.web3RpcUrl))
      return false
    }

    await setWeb3(web3)
    return true
  }


  const connect = async function(provider) {
    if (!provider) {
      await store.dispatch('warning/SET_NO_WEB3_PROVIDER', true)
      return null
    }

    const web3 = new Web3(provider)
    if (!web3) {
      await store.dispatch('warning/SET_NO_WEB3_PROVIDER', true)
      return null
    }

    // get chain id
    let chainId = await getChainId(provider)

    // try switch or add network
    if (process.env.chainId !== chainId && provider.isMetaMask) {
      console.warn('>>> Plugin[web3] ~ MetaMask detected...')
      await switchNetwork(provider)
    }

    // re-get chain id
    chainId = await getChainId(provider)

    // verify chain id, if incorrect, roll back to preset
    if (process.env.chainId !== chainId) {
      await setWeb3(new Web3(process.env.web3RpcUrl))
    }

    // set chain id
    await store.dispatch('wallet/SET_CHAIN_ID', chainId)
    if (process.env.chainId !== chainId) {
      return null
    }

    // get account
    const accounts = await provider.request({ method: 'eth_requestAccounts' })
      .catch(async function(error) {
        console.error('>>> Plugin[web3] connect ~ get accounts:', error)

        await store.dispatch('warning/SET_WARNING', {
          title: 'Connect failed',
          message: error.message
        })
      })

    if (!accounts || !accounts[0]) {
      await store.dispatch('warning/SET_WARNING', {
        title: 'Connect failed',
        message: 'Please check again...'
      })

      return null
    }

    // set account
    await store.dispatch('wallet/SET_ACCOUNT', accounts[0])

    // set web3
    await setWeb3(web3)

    // on: Chain Changed
    await provider.on('chainChanged', async function(chainIdHex) {
      const chainId = parseInt(chainIdHex)
      await store.dispatch('wallet/SET_CHAIN_ID', chainId)

      // TODO: stop keep sync if chain Id is incorrect
    })

    // on: Account Changed
    await provider.on('accountsChanged', async function(accounts) {
      await store.dispatch('wallet/SET_ACCOUNT', accounts[0])
      await tokenSync()
    })

    // keep sync
    await tokenSyncKeep()

    // touch sync
    await tokenSync()
    return true
  }


  app.conn = {
    init: init,
    connect: connect,

    tokenSync: tokenSync,
    tokenSyncKeep: tokenSyncKeep,

    addToken: addToken
  }
}
