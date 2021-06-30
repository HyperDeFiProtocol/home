import Web3 from 'web3'
import tokenAbi from '~/utils/token.json'


export default async function ({ app, store }, inject) {
  // // Set the function directly on the context.app object
  // app.myInjectedFunction = string =>
  //   console.log('Okay, another function', string)

  if (store.state.bsc.blockNumber) {
    return null
  }

  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')

  await store.dispatch('bsc/SET_WEB3', web3)

  // Chain ID
  await web3.eth
    .getChainId()
    .then(async function(chainId) {
      await store.dispatch('bsc/SET_CHAIN_ID', chainId)
    })
    .catch(error => {
      console.error('>>> Plugin[bsc] getChainId:', error.message)
    })

  // Block Number
  await web3.eth.getBlockNumber()
    .then(async function(blockNumber) {
      await store.dispatch('bsc/SET_BLOCK_NUMBER', blockNumber)
      // state.blockNumberStr = fnFormat.ns2Str(blockNumber)
    })
    .catch(error => {
      console.error('>>> Plugin[bsc] getBlockNumber:', error.message)
    })

  // Gas Price
  await web3.eth.getGasPrice()
    .then(async function(gasPrice) {
      if (gasPrice > '0') {
        await store.dispatch('bsc/SET_GAS_PRICE', gasPrice)
      }
    })
    .catch(error => {
      console.error('>>> Plugin[bsc] getGasPrice:', error.message)
    })

  // Contract
  const Contract = web3.eth.Contract
  await store.dispatch('bsc/SET_TOKEN', new Contract(
    tokenAbi, process.env.tokenAddress
  ))

  // read token data
  await store.dispatch('bsc/READ_DATA')

  // keep sync
  await store.dispatch('bsc/KEEP_SYNC')
}
