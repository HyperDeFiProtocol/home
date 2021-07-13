export default async function({ app, store }, inject) {
  console.log('>>> plugin: web3Init')

  // init
  const connected = await app.conn.init()

  // get on chain data
  await app.web3.eth.getBlockNumber()
    .then(async blockNumber => {
      await store.dispatch('bsc/SET_BLOCK_NUMBER', blockNumber)
    }).catch(error => {
      console.error('>>> Plugin[web3Init] getBlockNumber:', error.message)
    })

  // await store.dispatch('bsc/SYNC_GAS_PRICE')
  await app.conn.tokenSync()

  if (connected) {
    await app.conn.tokenSyncKeep()
    // await store.dispatch('bsc/KEEP_SYNC')
    return null
  }
}
