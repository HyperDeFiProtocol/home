import Dexie from 'dexie'
import BN from 'bn.js'

const VERSION = 0.2
const FROM_BLOCK = 10593970
const BLOCK_STEP = 4999

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
      transfer: '++id, fromAccount, toAccount',

      points: 'name',
    })

  app.syncTx = async function() {
    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = FROM_BLOCK

    await app.db.points.get('tx').then(async function(point) {
      if (point) {
        fromBlock = point.blockNumber + 1
      }
    })

    let toBlock = fromBlock
    while (fromBlock < latestBlockNumber) {
      await store.dispatch('points/SET_TX_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      // console.log('sync tx:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('Tx', {
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncTx:', e)
          // break
        })

      if (events) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          if (transactions.length) {
            let tx = transactions[transactions.length - 1]
            if (tx.txHash === events[i].transactionHash &&
              tx.txType === events[i].returnValues.txType &&
              tx.sender === events[i].returnValues.sender &&
              tx.recipient === events[i].returnValues.recipient
            ) {
              transactions[transactions.length - 1].amount =
                new BN(tx.amount).add(new BN(events[i].returnValues.amount)).toString()
              transactions[transactions.length - 1].txAmount =
                new BN(tx.txAmount).add(new BN(events[i].returnValues.txAmount)).toString()
              continue
            }
          }

          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            txType: events[i].returnValues.txType,
            sender: events[i].returnValues.sender,
            recipient: events[i].returnValues.recipient,
            amount: events[i].returnValues.amount,
            txAmount: events[i].returnValues.txAmount
          })
        }

        await app.db.tx.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'tx', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }
  }



  app.syncAirdrop = async function() {
    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = FROM_BLOCK

    await app.db.points.get('airdrop').then(async function(point) {
      if (point) {
        fromBlock = point.blockNumber + 1
      }
    })

    let toBlock = fromBlock
    while (fromBlock < latestBlockNumber) {
      await store.dispatch('points/SET_AIRDROP_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      // console.log('sync airdrop:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('Transfer', {
          filter: {
            from: store.state.bsc.globalAccounts.airdrop
          },
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncAirdrop:', e)
          // break
        })

      if (events) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            account: events[i].returnValues.to,
            amount: events[i].returnValues.value,
          })
        }

        await app.db.airdrop.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'airdrop', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }

    const airdrops = await app.db.airdrop.toArray()
    await store.dispatch('stat/SET_AIRDROPS', airdrops)
  }




  app.syncLotto = async function() {
    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = FROM_BLOCK

    await app.db.points.get('lotto').then(async function(point) {
      if (point) {
        fromBlock = point.blockNumber + 1
      }
    })

    let toBlock = fromBlock
    while (fromBlock < latestBlockNumber) {
      await store.dispatch('points/SET_LOTTO_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      // console.log('sync lotto:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('Lotto', {
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncLotto:', e)
          // break
        })

      if (events) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            account: events[i].returnValues.account,
            amount: events[i].returnValues.amount,
          })
        }

        await app.db.lotto.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'lotto', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }

    const lottos = await app.db.lotto.toArray()
    await store.dispatch('stat/SET_LOTTOS', lottos)
  }








  app.syncLiquidity = async function() {
    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = FROM_BLOCK

    await app.db.points.get('liquidity').then(async function(point) {
      if (point) {
        fromBlock = point.blockNumber + 1
      }
    })

    let toBlock = fromBlock
    while (fromBlock < latestBlockNumber) {
      await store.dispatch('points/SET_LOTTO_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      // console.log('sync liquidity:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('LiquidityAdded', {
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncLiquidity:', e)
          // break
        })

      if (events) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            busdAdded: events[i].returnValues.busdAdded,
            tokenAdded: events[i].returnValues.tokenAdded,
          })
        }

        await app.db.liquidity.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'liquidity', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }

    const liquidityTxs = await app.db.liquidity.toArray()
    await store.dispatch('stat/SET_LIQUIDITY', liquidityTxs)
  }















  app.syncTransfer = async function() {
    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = FROM_BLOCK

    await app.db.points.get('transfer').then(async function(point) {
      if (point) {
        fromBlock = point.blockNumber + 1
      }
    })

    let toBlock = fromBlock
    while (fromBlock < latestBlockNumber) {
      // await store.dispatch('points/SET_LOTTO_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      // console.log('sync transfer:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('Transfer', {
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncTransfer:', e)
          // break
        })

      if (events) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            fromAccount: events[i].returnValues.from,
            toAccount: events[i].returnValues.to,
            amount: events[i].returnValues.value
          })
        }

        await app.db.transfer.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'transfer', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }

    const fomoTxsIn = await app.db.transfer.where({
      toAccount: store.state.bsc.globalAccounts.fomo
    }).toArray()

    const fomoTxsOut = await app.db.transfer.where({
      fromAccount: store.state.bsc.globalAccounts.fomo
    }).toArray()

    const burnTxs = await app.db.transfer.where({
      toAccount: store.state.bsc.globalAccounts.burn
    }).toArray()

    // console.log('fomoTxsIn:', fomoTxsIn)
    // console.log('fomoTxsOut:', fomoTxsOut)
    // console.log('burnTxs:', burnTxs)

    await store.dispatch('stat/SET_FOMO_IN', fomoTxsIn)
    await store.dispatch('stat/SET_FOMO_OUT', fomoTxsOut)
    await store.dispatch('stat/SET_BURN', burnTxs)
  }

















}
