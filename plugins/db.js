import Dexie from 'dexie'
import BN from 'bn.js'

const VERSION = 0.3
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

      points: 'name'
    })

  const getFromBlockViaPoint = async function(name) {
    let fromBlock = FROM_BLOCK

    await app.db.points.get(name)
      .then(async function(point) {
        if (point) {
          fromBlock = point.blockNumber + 1
        }
      })

    return fromBlock
  }

  const putBlockPoint = async function (name, blockNumber) {
    await app.db.points.put({ name: name, blockNumber: blockNumber }).catch(e => {
      console.error('putBlockPoint:', name, e)
    })
  }

  /**
   * sync tx
   */
  app.syncTx = async function() {
    if (store.state.sync.tx) {
      return
    }

    await store.dispatch('sync/SET_TX', true)

    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = await getFromBlockViaPoint('tx')
    let toBlock = fromBlock

    while (fromBlock < latestBlockNumber) {
      await store.dispatch('points/SET_TX_FROM_BLOCK_NUMBER', fromBlock)

      toBlock += BLOCK_STEP
      if (toBlock > latestBlockNumber) {
        toBlock = latestBlockNumber
      }

      console.log('sync tx:', fromBlock, toBlock)

      const events = await app.token
        .getPastEvents('Tx', {
          fromBlock: fromBlock,
          toBlock: toBlock
        })
        .catch(e => {
          console.error('>>> db.js, syncTx:', e)
          // break
        })

      if (events.length) {
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

      fromBlock = toBlock + 1
      await putBlockPoint('tx', toBlock)
    }

    await store.dispatch('sync/SET_TX', false)
  }

  /**
   * sync airdrop
   */
  app.syncAirdrop = async function() {
    if (store.state.sync.airdrop) {
      return
    }

    await store.dispatch('sync/SET_AIRDROP', true)

    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = await getFromBlockViaPoint('airdrop')
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

      if (events.length) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            account: events[i].returnValues.to,
            amount: events[i].returnValues.value
          })
        }

        await app.db.airdrop.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock + 1
      await putBlockPoint('airdrop', toBlock)
    }

    const airdrops = await app.db.airdrop.toArray()
    await store.dispatch('stat/SET_AIRDROPS', airdrops)
    await store.dispatch('sync/SET_AIRDROP', false)
  }

  /**
   * sync lotto
   */
  app.syncLotto = async function() {
    if (store.state.sync.lotto) {
      return
    }

    await store.dispatch('sync/SET_LOTTO', true)

    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = await getFromBlockViaPoint('lotto')
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

      if (events.length) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            account: events[i].returnValues.account,
            amount: events[i].returnValues.amount
          })
        }

        await app.db.lotto.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock + 1
      await putBlockPoint('lotto', toBlock)
    }

    const lottos = await app.db.lotto.toArray()
    await store.dispatch('stat/SET_LOTTOS', lottos)
    await store.dispatch('sync/SET_LOTTO', false)
  }

  /**
   * sync liquidity
   */
  app.syncLiquidity = async function() {
    if (store.state.sync.liquidity) {
      return
    }

    await store.dispatch('sync/SET_LIQUIDITY', true)

    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = await getFromBlockViaPoint('liquidity')
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

      if (events.length) {
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            busdAdded: events[i].returnValues.busdAdded,
            tokenAdded: events[i].returnValues.tokenAdded
          })
        }

        // console.log('sync liquidity, from~to:', fromBlock, toBlock)
        // console.log('events:', events)
        // console.log('transactions:', transactions)

        await app.db.liquidity.bulkAdd(transactions).catch(e => {
          console.error('Ooops:', e)
          // break
        })
      }

      fromBlock = toBlock + 1
      await putBlockPoint('liquidity', toBlock)
    }

    const liquidityTxs = await app.db.liquidity.toArray()
    await store.dispatch('stat/SET_LIQUIDITY', liquidityTxs)
    await store.dispatch('sync/SET_LIQUIDITY', false)
  }

  /**
   * sync transfer
   */
  app.syncTransfer = async function() {
    if (store.state.sync.transfer) {
      return
    }

    await store.dispatch('sync/SET_TRANSFER', true)

    const latestBlockNumber = store.state.bsc.blockNumber

    let fromBlock = await getFromBlockViaPoint('transfer')
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

      if (events.length) {
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

      fromBlock = toBlock + 1
      await putBlockPoint('transfer', toBlock)
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
    await store.dispatch('sync/SET_TRANSFER', false)
  }
}
