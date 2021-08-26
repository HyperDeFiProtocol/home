import Dexie from 'dexie'

const VERSION = 0.5

export default async function({ app, store }, inject) {
  app.db = await new Dexie('database')

  // create table
  await app.db
    .version(VERSION)
    .stores({
      tx: '++id',
      airdrop: '++id',
      lotto: '++id',
      liquidity: '++id',
      transfer: '++id, fromAccount, toAccount, [fromAccount+toAccount]',

      points: 'name'
    })
}
