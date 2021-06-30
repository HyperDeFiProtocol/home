import Web3 from 'web3'

export default async function ({ app, store }, inject) {
  // // Set the function directly on the context.app object
  // app.myInjectedFunction = string =>
  //   console.log('Okay, another function', string)

  await store.dispatch('bsc/SET_WEB3', new Web3(process.env.web3RpcUrl))
  await store.dispatch('bsc/SET_CHAIN_ID')
  await store.dispatch('bsc/SYNC_BLOCK_NUMBER')
  await store.dispatch('bsc/SYNC_GAS_PRICE')
  await store.dispatch('bsc/SYNC_DATA')

  // // keep sync
  // await store.dispatch('bsc/KEEP_SYNC')
}
