import Dexie from 'dexie'
import axios from 'axios'
import JSBI from 'jsbi'

const BN = JSBI.BigInt
const VERSION = 1.6


const download = async function (url) {
  let exception
  const rows = await axios.get(url).catch(e => {
    console.error(e)
    exception = e
  })

  if (exception) {
    return download(url)
  }

  return rows.data
}


export default async function({ app, store }, inject) {
  app.db = await new Dexie('database')

  // create table
  await app.db
    .version(VERSION)
    .stores({
      transfer: '++id, sender, recipient, [sender+recipient]',
      buffer: '++id, sender, recipient, [sender+recipient]',

      tx: '++id',
      airdrop: '++id, account',
      bonus: '++id, account',
      fund: '++id, account',
      genesisDeposit: '++id, account',

      pointers: 'name',
      holder: '&id, &address, username, balance, isWhale',
    })

  // clear table
  await app.db.transfer.clear()
  await app.db.buffer.clear()
  await app.db.tx.clear()
  await app.db.airdrop.clear()
  await app.db.bonus.clear()
  await app.db.fund.clear()
  await app.db.genesisDeposit.clear()
  await app.db.pointers.clear()
  await app.db.holder.clear()

  // sync from json
  await app.db.transfer.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/transfers.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd transfer:', e)
  })
  await app.db.buffer.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/buffers.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd buffer:', e)
  })
  await app.db.tx.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/txs.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd tx:', e)
  })
  await app.db.airdrop.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/airdrops.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd airdrop:', e)
  })
  await app.db.bonus.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/bonus.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd bonus:', e)
  })
  await app.db.fund.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/funds.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd fund:', e)
  })
  await app.db.genesisDeposit.bulkAdd(await download(`https://db.hyperdefi.org/mainnet/genesisDeposits.json?t=${Math.floor(Date.now() / 1000)}`)).catch(e => {
    console.log('>>> db bulkAdd genesisDeposit:', e)
  })

  app.latestBlockNumber = async function () {
    let rlt = BN('0')

    await app.db.transfer.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.buffer.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.tx.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.airdrop.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.bonus.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.fund.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    await app.db.genesisDeposit.orderBy('id').last(row => {
      if (row && JSBI.GT(BN(row['blockNumber']), rlt)) {
        rlt = BN(row['blockNumber'])
      }
    })

    return rlt.toString()
  }

  // console.log(await app.latestBlockNumber())

  // // clear IndexedDB if token address changed
  // let tokenAddress
  // await app.db.pointers.get('tokenAddress')
  //   .then(pointer => {
  //     if (pointer) {
  //       tokenAddress = pointer.value
  //     }
  //   })
  //
  // if (process.env.tokenAddress !== tokenAddress) {
  //   console.warn('>>> Contract Address Changed...')
  //   console.log('process.env.tokenAddress:', process.env.tokenAddress)
  //   console.log('tokenAddress:', tokenAddress)
  //
  //   await app.db.pointers.clear()
  //   await app.db.holder.clear()
  //   await app.db.tx.clear()
  //
  //   await app.db.airdrop.clear()
  //   await app.db.bonus.clear()
  //   await app.db.fund.clear()
  //   await app.db.genesisDeposit.clear()
  //
  //   await app.db.transfer.clear()
  //   await app.db.buffer.clear()
  // }
  //
  // await app.db.pointers.put({ name: 'tokenAddress', value: process.env.tokenAddress }).catch(e => {
  //   console.error('putTokenAddress:', e)
  // })
}
