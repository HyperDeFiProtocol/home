import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import tokenAbi from '~/utils/token.json'
import presaleAbi from '~/utils/presale.json'
import busdAbi from '~/utils/busd.json'

const sleepAWhile = async function() {
  await window.setTimeout('', 1000)
}

export default async function({ app, store }, inject) {
  const throwInitWarning = async function() {
    await store.dispatch('warning/SET_WARNING', {
      title: 'Initialize web3: Failed',
      message: 'Please visit with your Trust Wallet App'
    })
  }

  const setWeb3 = async function(web3) {
    app.web3 = web3

    const Contract = web3.eth.Contract
    app.token = new Contract(
      tokenAbi, process.env.tokenAddress
    )
    app.presale = new Contract(
      presaleAbi, process.env.presaleAddress
    )
    app.busd = new Contract(
      busdAbi, process.env.busdAddress
    )
  }

  const tokenSyncKeep = async function () {
    await app.web3.eth.subscribe('newBlockHeaders').on('data', async blockHeader => {
      if (blockHeader.number > store.state.bsc.blockNumber + 5) {
        await store.dispatch('bsc/SET_BLOCK_NUMBER', blockHeader.number)
        await tokenSync()
        if (store.state.wallet.account && store.state.presale.syncStatus) {
          await presaleSync()
        }

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

  const presaleSync = async function() {
    app.presale.methods.getStatus(store.state.wallet.account).call()
      .then(async function(data) {
        // console.log('>>> presale.getStatus:', data)
        await store.dispatch('presale/SET_DATA', data)
      })
      .catch(error => {
        console.error('>>> Plugin[web3] presaleSync - getStatus:', error.message)
      })
  }

  const init = async function() {
    const provider = await detectEthereumProvider()
    if (!provider) {
      return false
    }

    const web3 = new Web3(provider)
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
      await throwInitWarning()
      return null
    }

    const web3 = new Web3(provider)
    if (!web3) {
      await throwInitWarning()
      return null
    }

    // get chain id
    let chainId = await web3.eth.getChainId().catch(async function(error) {
      console.error('>>> Plugin[web3] connect ~ getChainId:', error.message)

      await store.dispatch('warning/SET_WARNING', {
        title: 'Error: Get Chain ID',
        message: error.message
      })
      return false
    })

    await store.dispatch('wallet/SET_CHAIN_ID', chainId)

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
      // .then(async function (accounts) {
      //   account = accounts[0]
      // })
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
    await provider.on('chainChanged', async function(chainId) {
      await store.dispatch('wallet/SET_CHAIN_ID', parseInt(chainId))

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
    presaleSync: presaleSync,

    tokenSyncKeep: tokenSyncKeep,
  }
}
