import BN from 'bn.js'
import fn from '../utils/functions'

const FROM_BLOCK = process.env.fromBlock
const BLOCK_STEP_RANGE = { min: 4900, max: 4999 }

export default async function({ app, store }, inject) {
  const all = async function() {
    let syncTxsOption = { fromBlock: FROM_BLOCK, toBlock: FROM_BLOCK }

    if (store.state.bsc.synchronizing.fromBlock) {
      console.warn(
        'Txs synchronizing in progress blocks: #'
        + store.state.bsc.synchronizing.fromBlock
        + ' - '
        + store.state.bsc.synchronizing.toBlock
      )
      return
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_TX', syncTxsOption)

    await app.db.pointers.get('sync')
      .then(pointer => {
        if (pointer) {
          syncTxsOption.fromBlock = pointer.blockNumber + 1
        }
      })

    syncTxsOption.toBlock = syncTxsOption.fromBlock

    while (syncTxsOption.fromBlock < store.state.bsc.blockNumber) {
      syncTxsOption.toBlock += fn.randomInt(BLOCK_STEP_RANGE)
      if (syncTxsOption.toBlock > store.state.bsc.blockNumber) {
        syncTxsOption.toBlock = store.state.bsc.blockNumber
      }

      await store.dispatch('bsc/SET_SYNCHRONIZING_TX', syncTxsOption)

      console.log('Synchronize blocks: #' + syncTxsOption.fromBlock + ' - ' + syncTxsOption.toBlock)

      /**
       * sync txs
       */
      const syncTx = new Promise(async function(resolve) {
        // console.log('syncTx:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Tx', syncTxsOption)
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

        resolve(syncTxsOption)
      })

      /**
       * sync airdrop
       */
      const syncAirdrop = new Promise(async function(resolve) {
        // console.log('syncAirdrop:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Airdrop', syncTxsOption)
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

          await app.db.airdrop.bulkAdd(transactions).catch(e => {
            console.error('>>> sync, syncLiquidity, bulkAdd:', e)
          })
        }

        const transactions = await app.db.airdrop.toArray()
        await store.dispatch('stat/SET_AIRDROPS', transactions)

        resolve(syncTxsOption)
      })

      /**
       * sync liquidity
       */
      const syncLiquidity = new Promise(async function(resolve) {
        // console.log('syncLiquidity:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('LiquidityAdded', syncTxsOption)
          .catch(e => {
            console.error('>>> sync, syncLiquidity:', e)
          })

        if (events.length) {
          let transactions = []
          for (let i = 0; i < events.length; i++) {
            transactions.push({
              blockNumber: events[i].blockNumber,
              txHash: events[i].transactionHash,

              wbnbAdded: events[i].returnValues.wbnbAdded,
              tokenAdded: events[i].returnValues.tokenAdded
            })
          }

          await app.db.liquidity.bulkAdd(transactions).catch(e => {
            console.error('>>> sync, syncLiquidity, bulkAdd:', e)
          })
        }

        const transactions = await app.db.liquidity.toArray()
        await store.dispatch('stat/SET_LIQUIDITY', transactions)

        resolve(syncTxsOption)
      })

      /**
       * sync transfer
       */
      const syncTransfer = new Promise(async function(resolve) {
        // console.log('syncTransfer:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('Transfer', syncTxsOption)
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

        resolve(syncTxsOption)
      })

      /**
       * promise all
       */
      await Promise.all([
        syncTx,
        syncAirdrop,
        syncLiquidity,
        syncTransfer
      ])

      syncTxsOption.fromBlock = syncTxsOption.toBlock + 1
      await app.db.pointers.put({ name: 'sync', blockNumber: syncTxsOption.toBlock }).catch(e => {
        console.error('putBlockPoint:', e)
      })
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_TX')

    return syncTxsOption
    //
    // return range
  }


  const holders = async function() {
    let syncHoldersOption = { fromId: '0', toId: '0' }

    if (store.state.bsc.synchronizing.fromHolderId !== null) {
      console.warn(
        'Holders synchronizing in progress from id: #'
        + store.state.bsc.synchronizing.fromHolderId
      )
      return
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID', syncHoldersOption.fromId)

    await app.db.pointers.get('holder')
      .then(point => {
        if (point) {
          syncHoldersOption.fromId = point.id
        }
      })

    syncHoldersOption.toId = syncHoldersOption.fromId
    if (syncHoldersOption.fromId > '0') {
      syncHoldersOption.fromId = new BN(syncHoldersOption.fromId).addn(1).toString()
    }

    while (syncHoldersOption.fromId < new BN(store.state.bsc.metadata.holders).subn(1).toString()) {
      await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID', syncHoldersOption.fromId)

      console.log('Synchronize holders: #' + syncHoldersOption.fromId)

      const data = await app.token.methods.getHolders(syncHoldersOption.fromId).call()
        .catch(e => {
          console.error('>>> sync, syncHolders:', e)
        })

      let holders = []
      for (let i = 0; i < data.ids.length; i++) {
        if (data.holders[i] !== store.state.bsc.globalAccounts.zero) {
          holders.push({
            id: data.ids[i],
            address: data.holders[i],
            username: data.usernames[i],
            balance: data.balances[i],
            isWhale: data.isWhales[i]
          })

          syncHoldersOption.toId = data.ids[i]
        }
      }

      syncHoldersOption.fromId = new BN(syncHoldersOption.toId).addn(1).toString()

      await app.db.holder.bulkAdd(holders).catch(e => {
        console.error('>>> sync, syncHolders, bulkAdd:', e)
      })

      await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID')

      await app.db.pointers.put({ name: 'holder', id: syncHoldersOption.toId }).catch(e => {
        console.error('putHolderIdPoint:', e)
      })
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID')
  }

  const presaleDeposit = async function() {
    let syncOption = { fromBlock: FROM_BLOCK, toBlock: FROM_BLOCK }

    if (store.state.bsc.synchronizing.presaleDepositFrom) {
      console.warn(
        'Pre-sale deposit synchronizing in progress blocks: #'
        + store.state.bsc.synchronizing.presaleDepositFrom
        + ' - '
        + store.state.bsc.synchronizing.presaleDepositTo
      )
      return
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_PD', syncOption)

    await app.db.pointers.get('syncPresaleDeposit')
      .then(pointer => {
        if (pointer) {
          syncOption.fromBlock = pointer.blockNumber + 1
        }
      })

    syncOption.toBlock = syncOption.fromBlock

    while (syncOption.fromBlock < store.state.bsc.blockNumber) {
      syncOption.toBlock += fn.randomInt(BLOCK_STEP_RANGE)
      if (syncOption.toBlock > store.state.bsc.blockNumber) {
        syncOption.toBlock = store.state.bsc.blockNumber
      }

      await store.dispatch('bsc/SET_SYNCHRONIZING_PD', syncOption)

      console.log('Synchronize pre-sale deposit blocks: #' + syncOption.fromBlock + ' - ' + syncOption.toBlock)

      /**
       * sync deposit
       */
      const syncDeposit = new Promise(async function(resolve) {
        // console.log('syncTx:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('PresaleDeposit', syncOption)
          .catch(e => {
            console.error('>>> sync, syncPresaleDeposit:', e)
          })

        if (events.length) {
          let transactions = []
          for (let i = 0; i < events.length; i++) {
            transactions.push({
              blockNumber: events[i].blockNumber,
              txHash: events[i].transactionHash,

              account: events[i].returnValues.account,
              bnbAmount: events[i].returnValues.bnbAmount,
            })
          }

          await app.db.presaleDeposit.bulkAdd(transactions).catch(e => {
            console.error('>>> sync, syncPresaleDeposit, bulkAdd:', e)
          })
        }

        resolve(syncOption)
      })

      /**
       * promise all
       */
      await Promise.all([
        syncDeposit,
      ])

      syncOption.fromBlock = syncOption.toBlock + 1
      await app.db.pointers.put({ name: 'syncPresaleDeposit', blockNumber: syncOption.toBlock }).catch(e => {
        console.error('putBlockPoint:', e)
      })
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_PD')

    return syncOption
    //
    // return range
  }

  // const presaleRedeem = async function() {
  //   let syncOption = { fromBlock: FROM_BLOCK, toBlock: FROM_BLOCK }
  //
  //   if (store.state.bsc.synchronizing.presaleRedeemFrom) {
  //     console.warn(
  //       'Pre-sale redeem synchronizing in progress blocks: #'
  //       + store.state.bsc.synchronizing.presaleRedeemFrom
  //       + ' - '
  //       + store.state.bsc.synchronizing.presaleRedeemTo
  //     )
  //     return
  //   }
  //
  //   await store.dispatch('bsc/SET_SYNCHRONIZING_PR', syncOption)
  //
  //   await app.db.pointers.get('syncPresaleRedeem')
  //     .then(pointer => {
  //       if (pointer) {
  //         syncOption.fromBlock = pointer.blockNumber + 1
  //       }
  //     })
  //
  //   syncOption.toBlock = syncOption.fromBlock
  //
  //   while (syncOption.fromBlock < store.state.bsc.blockNumber) {
  //     syncOption.toBlock += fn.randomInt(BLOCK_STEP_RANGE)
  //     if (syncOption.toBlock > store.state.bsc.blockNumber) {
  //       syncOption.toBlock = store.state.bsc.blockNumber
  //     }
  //
  //     await store.dispatch('bsc/SET_SYNCHRONIZING_PR', syncOption)
  //
  //     console.log('Synchronize pre-sale redeem blocks: #' + syncOption.fromBlock + ' - ' + syncOption.toBlock)
  //
  //     /**
  //      * sync deposit
  //      */
  //     const syncDeposit = new Promise(async function(resolve) {
  //       // console.log('syncTx:', queryOption.fromBlock, queryOption.toBlock)
  //
  //       const events = await app.token
  //         .getPastEvents('PresaleDeposit', syncOption)
  //         .catch(e => {
  //           console.error('>>> sync, syncPresaleRedeem:', e)
  //         })
  //
  //       if (events.length) {
  //         let transactions = []
  //         for (let i = 0; i < events.length; i++) {
  //           transactions.push({
  //             blockNumber: events[i].blockNumber,
  //             txHash: events[i].transactionHash,
  //
  //             account: events[i].returnValues.account,
  //             tokenAmount: events[i].returnValues.tokenAmount,
  //           })
  //         }
  //
  //         await app.db.presaleRedeem.bulkAdd(transactions).catch(e => {
  //           console.error('>>> sync, syncPresaleRedeem, bulkAdd:', e)
  //         })
  //       }
  //
  //       resolve(syncOption)
  //     })
  //
  //     /**
  //      * promise all
  //      */
  //     await Promise.all([
  //       syncDeposit,
  //     ])
  //
  //     syncOption.fromBlock = syncOption.toBlock + 1
  //     await app.db.pointers.put({ name: 'syncPresaleRedeem', blockNumber: syncOption.toBlock }).catch(e => {
  //       console.error('putBlockPoint:', e)
  //     })
  //   }
  //
  //   await store.dispatch('bsc/SET_SYNCHRONIZING_PR')
  //
  //   return syncOption
  //   //
  //   // return range
  // }

  app.sync = {
    all: all,
    holders: holders,
    presaleDeposit: presaleDeposit,
    // presaleRedeem: presaleRedeem,
  }
}
