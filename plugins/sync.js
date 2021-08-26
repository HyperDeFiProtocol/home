import BN from 'bn.js'
import fn from '../utils/functions'

const FROM_BLOCK = 10593970
const BLOCK_STEP_RANGE = { min: 4900, max: 4999 }

let queryOption = {
  fromBlock: FROM_BLOCK,
  toBlock: FROM_BLOCK
}


export default async function({ app, store }, inject) {
  const all = async function() {
    if (store.state.bsc.synchronizing.fromBlock) {
      console.warn(
        'Synchronizing in progress blocks: #'
        + store.state.bsc.synchronizing.fromBlock
        + ' - '
        + store.state.bsc.synchronizing.toBlock
      )
      return
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING', {
      fromBlock: queryOption.fromBlock,
      toBlock: queryOption.toBlock
    })

    await app.db.points.get('sync')
      .then(point => {
        if (point) {
          queryOption.fromBlock = point.blockNumber + 1
        }
      })

    queryOption.toBlock = queryOption.fromBlock

    while (queryOption.fromBlock < store.state.bsc.blockNumber) {
      queryOption.toBlock += fn.randomInt(BLOCK_STEP_RANGE)
      if (queryOption.toBlock > store.state.bsc.blockNumber) {
        queryOption.toBlock = store.state.bsc.blockNumber
      }

      await store.dispatch('bsc/SET_SYNCHRONIZING', {
        fromBlock: queryOption.fromBlock,
        toBlock: queryOption.toBlock
      })

      /**
       * sync txs
       */
      const syncTx = new Promise(async function(resolve) {
        // console.log('syncTx:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Tx', queryOption)
          .catch(e => {
            console.error('>>> sync, syncTx:', e)
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
            console.error('>>> sync, syncTx, bulkAdd:', e)
          })
        }

        resolve(queryOption)
      })

      /**
       * sync airdrop
       */
      const syncAirdrop = new Promise(async function(resolve) {
        // console.log('syncAirdrop:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Transfer', {
            filter: {
              from: store.state.bsc.globalAccounts.airdrop
            },
            ...queryOption
          })
          .catch(e => {
            console.error('>>> sync, syncAirdrop:', e)
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
            console.error('>>> sync, syncAirdrop, bulkAdd:', e)
          })
        }

        const transactions = await app.db.airdrop.toArray()
        await store.dispatch('stat/SET_AIRDROPS', transactions)

        resolve(queryOption)
      })


      /**
       * sync lotto
       */
      const syncLotto = new Promise(async function(resolve) {
        // console.log('syncLotto:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Lotto', queryOption)
          .catch(e => {
            console.error('>>> sync, syncLiquidity:', e)
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
            console.error('>>> sync, syncLiquidity, bulkAdd:', e)
          })
        }

        const transactions = await app.db.lotto.toArray()
        await store.dispatch('stat/SET_LOTTOS', transactions)

        resolve(queryOption)
      })

      /**
       * sync liquidity
       */
      const syncLiquidity = new Promise(async function(resolve) {
        // console.log('syncLiquidity:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('LiquidityAdded', queryOption)
          .catch(e => {
            console.error('>>> sync, syncLiquidity:', e)
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

          await app.db.liquidity.bulkAdd(transactions).catch(e => {
            console.error('>>> sync, syncLiquidity, bulkAdd:', e)
          })
        }

        const transactions = await app.db.liquidity.toArray()
        await store.dispatch('stat/SET_LIQUIDITY', transactions)

        resolve(queryOption)
      })

      /**
       * sync transfer
       */
      const syncTransfer = new Promise(async function(resolve) {
        // console.log('syncTransfer:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Transfer', queryOption)
          .catch(e => {
            console.error('>>> sync, syncTransfer:', e)
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
            console.error('>>> sync, syncTransfer, bulkAdd:', e)
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

        await store.dispatch('stat/SET_FOMO_IN', fomoTxsIn)
        await store.dispatch('stat/SET_FOMO_OUT', fomoTxsOut)
        await store.dispatch('stat/SET_BURN', burnTxs)

        resolve(queryOption)
      })


      console.log('Synchronize blocks: #' + queryOption.fromBlock + ' - ' + queryOption.toBlock)

      /**
       * promise all
       */
      await Promise.all([
        syncTx,
        syncAirdrop,
        syncLotto,
        syncLiquidity,
        syncTransfer
      ])

      queryOption.fromBlock = queryOption.toBlock + 1
      await app.db.points.put({ name: 'sync', blockNumber: queryOption.toBlock }).catch(e => {
        console.error('putBlockPoint:', e)
      })
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING')

    return queryOption
    //
    // return range
  }

  app.sync = {
    all: all
  }
}

// 4609610021348
