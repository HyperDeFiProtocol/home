import BN from 'bn.js'
import fn from '../utils/functions'
import enums from '~/utils/enums'

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
       * sync TX
       */
      const syncTx = new Promise(async function(resolve) {
        // console.log('syncTx:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('TX', syncTxsOption)
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
       * sync EV
       */
      const syncEv = new Promise(async function(resolve) {
        // console.log('syncEV:', queryOption.fromBlock, queryOption.toBlock)

        const events = await app.token
          .getPastEvents('EV', syncTxsOption)
          .catch(e => {
            console.error('>>> sync, syncEV:', e)
          })

        if (events.length) {
          let txnsAirdrop = []
          let txnsBonus = []
          let txnsFund = []
          let txnsDestroy = []
          let txnsGenesisDeposit = []

          for (let i = 0; i < events.length; i++) {
            if (enums.evType.AIRDROP === events[i].returnValues.evType) {
              txnsAirdrop.push({
                blockNumber: events[i].blockNumber,
                txHash: events[i].transactionHash,

                account: events[i].returnValues.account,
                amount: events[i].returnValues.amount
              })
            } else if (enums.evType.BONUS === events[i].returnValues.evType) {
              txnsBonus.push({
                blockNumber: events[i].blockNumber,
                txHash: events[i].transactionHash,

                account: events[i].returnValues.account,
                amount: events[i].returnValues.amount
              })
            } else if (enums.evType.FUND === events[i].returnValues.evType) {
              txnsFund.push({
                blockNumber: events[i].blockNumber,
                txHash: events[i].transactionHash,

                account: events[i].returnValues.account,
                amount: events[i].returnValues.amount
              })
            } else if (enums.evType.DESTROY === events[i].returnValues.evType) {
              txnsDestroy.push({
                blockNumber: events[i].blockNumber,
                txHash: events[i].transactionHash,

                account: events[i].returnValues.account,
                amount: events[i].returnValues.amount
              })
            } else if (enums.evType.GENESIS_DEPOSIT === events[i].returnValues.evType) {
              txnsGenesisDeposit.push({
                blockNumber: events[i].blockNumber,
                txHash: events[i].transactionHash,

                account: events[i].returnValues.account,
                amount: events[i].returnValues.amount
              })
            }
          }

          if (txnsAirdrop) {
            await app.db.airdrop.bulkAdd(txnsAirdrop).catch(e => {
              console.error('>>> sync, syncEV - AIRDROP, bulkAdd:', e)
            })
          }

          if (txnsBonus) {
            await app.db.bonus.bulkAdd(txnsBonus).catch(e => {
              console.error('>>> sync, syncEV - BONUS, bulkAdd:', e)
            })
          }

          if (txnsFund) {
            await app.db.fund.bulkAdd(txnsFund).catch(e => {
              console.error('>>> sync, syncEV - FUND, bulkAdd:', e)
            })
          }

          if (txnsDestroy) {
            await app.db.destroy.bulkAdd(txnsDestroy).catch(e => {
              console.error('>>> sync, syncEV - FUND, bulkAdd:', e)
            })
          }

          if (txnsGenesisDeposit) {
            await app.db.genesisDeposit.bulkAdd(txnsGenesisDeposit).catch(e => {
              console.error('>>> sync, syncEV - GENESIS_DEPOSIT, bulkAdd:', e)
            })
          }
        }

        // sum airdrop
        await store.dispatch(
          'stat/SET_AIRDROPS',
          await app.db.airdrop.toArray()
        )

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
          let txnsTransfer = []
          let txnsBuffer = []
          for (let i = 0; i < events.length; i++) {
            txnsTransfer.push({
              blockNumber: events[i].blockNumber,
              txHash: events[i].transactionHash,

              fromAccount: events[i].returnValues.from,
              toAccount: events[i].returnValues.to,
              amount: events[i].returnValues.value
            })
          }


          for (let i = 0; i < events.length; i++) {
            if (
              store.state.bsc.globalAccounts.buffer !== events[i].returnValues.from &&
              store.state.bsc.globalAccounts.buffer !== events[i].returnValues.to
            ) {
              continue
            }

            if (txnsBuffer.length) {
              let tx = txnsBuffer[txnsBuffer.length - 1]
              if (tx.txHash === events[i].transactionHash &&
                tx.sender === events[i].returnValues.from &&
                tx.recipient === events[i].returnValues.to
              ) {
                txnsBuffer[txnsBuffer.length - 1].amount =
                  new BN(tx.amount).add(new BN(events[i].returnValues.value)).toString()
                continue
              }
            }

            txnsBuffer.push({
              blockNumber: events[i].blockNumber,
              txHash: events[i].transactionHash,

              sender: events[i].returnValues.from,
              recipient: events[i].returnValues.to,

              amount: events[i].returnValues.value
            })
          }

          await app.db.transfer.bulkAdd(txnsTransfer).catch(e => {
            console.error('>>> sync, syncTransfer, bulkAdd - txnsTransfer:', e)
          })

          await app.db.buffer.bulkAdd(txnsBuffer).catch(e => {
            console.error('>>> sync, syncTransfer, bulkAdd - txnsBuffer:', e)
          })
        }

        await store.dispatch(
          'stat/SET_BURN',
          await app.db.transfer
            .where('toAccount')
            .equals(store.state.bsc.globalAccounts.burn)
            .toArray()
        )

        await store.dispatch(
          'stat/SET_BUFFER',
          await app.db.buffer
            .toArray()
        )

        await store.dispatch(
          'stat/SET_BUFFER_OUT',
          await app.db.buffer
            .where('sender')
            .equals(store.state.bsc.globalAccounts.buffer)
            .toArray()
        )

        await store.dispatch(
          'stat/SET_FOMO_IN',
          await app.db.transfer
            .where('toAccount')
            .equals(store.state.bsc.globalAccounts.fomo)
            .toArray()
        )

        await store.dispatch(
          'stat/SET_FOMO_OUT',
          await app.db.transfer
            .where('fromAccount')
            .equals(store.state.bsc.globalAccounts.fomo)
            .toArray()
        )


        resolve(syncTxsOption)
      })

      /**
       * promise all
       */
      await Promise.all([
        syncTx,
        syncEv,
        syncTransfer
      ])

      syncTxsOption.fromBlock = syncTxsOption.toBlock + 1
      await app.db.pointers.put({ name: 'sync', blockNumber: syncTxsOption.toBlock }).catch(e => {
        console.error('putBlockPoint:', e)
      })
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_TX')

    return syncTxsOption
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

  app.sync = {
    all: all,
    holders: holders
    // genesisDeposit: genesisDeposit,
    // genesisRedeem: genesisRedeem,
  }
}
