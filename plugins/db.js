import Dexie from 'dexie'

const VERSION = 0.9


export default async function({ app, store }, inject) {
  app.db = await new Dexie('database')

  // create table
  await app.db
    .version(VERSION)
    .stores({
      pointers: 'name',
      holder: '&id, &address, username, balance, isWhale',

      tx: '++id',
      airdrop: '++id',
      lotto: '++id, account',
      liquidity: '++id',
      transfer: '++id, fromAccount, toAccount, [fromAccount+toAccount]',

      presaleDeposit: '++id, account',
      presaleRedeem: '++id, account',
    })

  // clear IndexedDB if token address changed
  let tokenAddress
  await app.db.pointers.get('tokenAddress')
    .then(pointer => {
      if (pointer) {
        tokenAddress = pointer.value
      }
    })

  if (process.env.tokenAddress !== tokenAddress) {
    console.warn('>>> Contract Address Changed...')
    await app.db.pointers.clear()
    await app.db.holder.clear()
    await app.db.tx.clear()
    await app.db.airdrop.clear()
    await app.db.lotto.clear()
    await app.db.liquidity.clear()
    await app.db.transfer.clear()
  }

  await app.db.pointers.put({ name: 'tokenAddress', value: process.env.tokenAddress }).catch(e => {
    console.error('putTokenAddress:', e)
  })
}
