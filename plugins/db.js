import Dexie from 'dexie'
import BN from 'bn.js'

const VERSION = 0.1
const FROM_BLOCK = 10593970
const BLOCK_STEP = 4999

export default async function({ app, store }, inject) {
  app.db = await new Dexie('database')

  // create table
  await app.db
    .version(VERSION)
    .stores({
      tx: '++id',
      points: 'name'
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

      const events = await app.token
        .getPastEvents('Tx', {
          fromBlock: fromBlock,
          toBlock: toBlock
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
        })
      }

      fromBlock = toBlock

      await app.db.points.put({ name: 'tx', blockNumber: toBlock }).catch(e => {
        console.error(e)
      })
    }
  }
}
