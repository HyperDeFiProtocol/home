import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

export default async function ({ app, store }, inject) {
  // // Set the function directly on the context.app object
  // app.myInjectedFunction = string =>
  //   console.log('Okay, another function', string)

  await store.dispatch('bsc/SET_WEB3', new Web3(process.env.web3RpcUrl))
  await store.dispatch('bsc/SET_CHAIN_ID')
  let goodChain = true

  const provider = await detectEthereumProvider()
  if (provider) {
    const web3 = new Web3(window.ethereum)

    let chainId = await web3.eth.getChainId().catch(error => {
      goodChain = false
      console.error('>>> Plugin[init-web3] getChainId:', error.message)
    })

    if (store.state.bsc.chainId !== chainId) {
      goodChain = false
    }

    if (goodChain) {
      await store.dispatch('bsc/SET_WEB3', web3)
      await store.dispatch('wallet/SET_CHAIN_ID')
    }
  }

  await store.dispatch('bsc/SYNC_BLOCK_NUMBER')
  await store.dispatch('bsc/SYNC_GAS_PRICE')
  await store.dispatch('bsc/SYNC_DATA')
  await store.dispatch('bsc/SET_BUSD')

  if (provider) {
    await store.dispatch('bsc/KEEP_SYNC')
  }
}
