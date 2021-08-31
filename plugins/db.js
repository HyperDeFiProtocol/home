import Dexie from 'dexie'

const VERSION = 0.7

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
      lotto: '++id',
      liquidity: '++id',
      transfer: '++id, fromAccount, toAccount, [fromAccount+toAccount]',

      presaleDeposit: '++id, account, bnbAmount',
      presaleRedeem: '++id, account, tokenAmount',
    })
}
