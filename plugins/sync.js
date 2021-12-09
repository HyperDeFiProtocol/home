import JSBI from 'jsbi'
import fn from '../utils/functions'

const BN = JSBI.BigInt
const FROM_BLOCK = process.env.fromBlock
const STEP = 5000
const INTERVAL = 200


const cut = function(n) {
  const a = 8
  const b = 10

  return JSBI.divide(JSBI.multiply(BN(n), BN(a)), BN(b)).toString()
}


const ev2Tx = function(event) {
  return {
    blockNumber: event.blockNumber,
    txHash: event.transactionHash,

    account: event.returnValues.account,
    amount: event.returnValues.amount
  }
}


export default async function({ app, store }, inject) {
  let syncTxsOption = { fromBlock: FROM_BLOCK, toBlock: FROM_BLOCK }
  let step = STEP
  let interval = 0

  const increaseInterval = async function() {
    interval += INTERVAL
  }


  // step up
  const stepUp = async function(step) {
    const toBlock = JSBI.add(BN(syncTxsOption.fromBlock), BN(step)).toString()

    if (JSBI.GT(BN(toBlock), BN(store.state.bsc.blockNumber))) {
      return store.state.bsc.blockNumber
    }

    return toBlock
  }

  // func: fetch all events
  const fetchAllEvents = async function() {
    let err = null
    const events = await app.token
      .getPastEvents('allEvents', syncTxsOption)
      .catch(e => {
        err = e
        console.error('>>> sync, fetchAllEvents', e)
      })

    if (err) {
      if (err.code === -32000) {
        //  || !err.code ?
        step = cut(step)
        return await fetchAllEvents(step)
      }

      console.log('wait: fetchAllEvents')
      await increaseInterval()
      await fn.wait(interval)
      return await fetchAllEvents(step)
    }

    interval = 0
    return events
  }

  // func: fetch IDO events
  const fetchIDOEvents = async function() {
    let err = null
    const events = await app.ido
      .getPastEvents('Deposit', syncTxsOption)
      .catch(e => {
        err = e
        console.error('>>> sync, fetchIDOEvents', e)
      })

    if (err) {
      console.log('wait: fetchIDOEvents')
      await increaseInterval()
      await fn.wait(interval)
      return await fetchIDOEvents()
    }

    interval = 0
    return events
  }

  const fetchHolders = async function() {
    let err = null
    const data = await app.token.methods.getHolders(fromId).call()
      .catch(e => {
        err = e
        console.error('>>> sync, syncHolders:', e)
      })

    if (err) {
      console.log('wait: fetchHolders')
      await increaseInterval()
      await fn.wait(interval)
      return await fetchHolders()
    }

    interval = 0
    return data
  }


  const events = async function() {
    syncTxsOption = {
      fromBlock: FROM_BLOCK,
      toBlock: FROM_BLOCK
    }

    if (store.state.bsc.synchronizing.fromBlock) {
      console.warn(`Synchronizing in progress blocks: #${store.state.bsc.synchronizing.fromBlock} - #${store.state.bsc.synchronizing.toBlock}`)
      return
    }

    await app.db.pointers.get('sync').then(pointer => {
      if (pointer) {
        syncTxsOption.fromBlock = pointer.blockNumber
      }
    })

    while (JSBI.LT(BN(syncTxsOption.fromBlock), BN(store.state.bsc.blockNumber))) {
      let tx = []
      let transfer = []
      let buffer = []
      let airdrop = []
      let bonus = []
      let fund = []

      syncTxsOption.fromBlock = JSBI.add(BN(syncTxsOption.fromBlock), BN(1)).toString()
      syncTxsOption.toBlock = await stepUp(step)
      await store.dispatch('bsc/SET_SYNCHRONIZING_EV', syncTxsOption)

      const events = await fetchAllEvents()

      for (const event of events) {
        switch (event.event) {
          case 'Transfer':
            transfer.push({
              blockNumber: event.blockNumber,
              txHash: event.transactionHash,
              sender: event.returnValues.from,
              recipient: event.returnValues.to,
              amount: event.returnValues.value
            })

            if (
              event.returnValues.from === store.state.bsc.globalAccounts.buffer
              ||
              event.returnValues.to === store.state.bsc.globalAccounts.buffer
            ) {
              if (buffer.length) {
                const key = buffer.length - 1
                if (
                  buffer[key].txHash === event.transactionHash
                  &&
                  buffer[key].sender === event.returnValues.from
                  &&
                  buffer[key].recipient === event.returnValues.to
                ) {
                  buffer[key].amount = JSBI.add(BN(buffer[key].amount), BN(event.returnValues.value)).toString()
                  break
                }
              }

              buffer.push({
                blockNumber: event.blockNumber,
                txHash: event.transactionHash,
                sender: event.returnValues.from,
                recipient: event.returnValues.to,
                amount: event.returnValues.value
              })
            }
            break
          case 'TX':
            if (tx.length) {
              const key = tx.length - 1
              if (
                tx[key].txHash === event.transactionHash &&
                tx[key].txType === event.returnValues.txType &&
                tx[key].sender === event.returnValues.sender &&
                tx[key].recipient === event.returnValues.recipient
              ) {
                tx[key].amount = JSBI.add(BN(tx[key].amount), BN(event.returnValues.amount)).toString()
                tx[key].txAmount = JSBI.add(BN(tx[key].txAmount), BN(event.returnValues.txAmount)).toString()
                break
              }
            }

            tx.push({
              blockNumber: event.blockNumber,

              txHash: event.transactionHash,
              txType: event.returnValues.txType,
              sender: event.returnValues.sender,
              recipient: event.returnValues.recipient,

              amount: event.returnValues.amount,
              txAmount: event.returnValues.txAmount
            })
            break
          case 'Airdrop':
            airdrop.push(ev2Tx(event))
            break
          case 'Bonus':
            bonus.push(ev2Tx(event))
            break
          case 'Fund':
            fund.push(ev2Tx(event))
            break
          // case 'SlotRegistered':
          //   break
          // case 'UsernameSet':
          //   break
          // case 'CouponVisitor':
          //   break
        }
      }

      if (events.length) {
        if (tx) {
          await app.db.tx.bulkAdd(tx).catch(e => {
            console.error('>>> sync events: bulkAdd tx:', e)
          })
        }

        if (airdrop) {
          await app.db.airdrop.bulkAdd(airdrop).catch(e => {
            console.error('>>> sync events: bulkAdd airdrop:', e)
          })
        }

        if (bonus) {
          await app.db.bonus.bulkAdd(bonus).catch(e => {
            console.error('>>> sync events: bulkAdd bonus:', e)
          })
        }

        if (fund) {
          await app.db.fund.bulkAdd(fund).catch(e => {
            console.error('>>> sync events: bulkAdd fund:', e)
          })
        }

        // sum airdrop
        await store.dispatch(
          'stat/SET_AIRDROPS',
          await app.db.airdrop.toArray()
        )


        if (transfer) {
          await app.db.transfer.bulkAdd(transfer).catch(e => {
            console.error('>>> sync events: bulkAdd transfer:', e)
          })

          await store.dispatch(
            'stat/SET_BURN',
            await app.db.transfer
              .where('recipient')
              .equals(store.state.bsc.globalAccounts.burn)
              .toArray()
          )

          await store.dispatch(
            'stat/SET_FOMO_IN',
            await app.db.transfer
              .where('recipient')
              .equals(store.state.bsc.globalAccounts.fomo)
              .toArray()
          )

          await store.dispatch(
            'stat/SET_FOMO_OUT',
            await app.db.transfer
              .where('sender')
              .equals(store.state.bsc.globalAccounts.fomo)
              .toArray()
          )
        }

        if (buffer) {
          await app.db.buffer.bulkAdd(buffer).catch(e => {
            console.error('>>> sync events: bulkAdd buffer:', e)
          })

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
        }
      }

      let genesisDeposit = []
      const idoEvents = await fetchIDOEvents()
      for (const event of idoEvents) {
        genesisDeposit.push(ev2Tx(event))
      }

      if (genesisDeposit) {
        await app.db.genesisDeposit.bulkAdd(genesisDeposit).catch(e => {
          console.error('>>> sync events: bulkAdd deposit:', e)
        })
      }

      syncTxsOption.fromBlock = syncTxsOption.toBlock
      await app.db.pointers.put({ name: 'sync', blockNumber: syncTxsOption.toBlock }).catch(e => {
        console.error('putBlockPoint:', e)
      })

      // break
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_EV')

    await fn.wait(INTERVAL)

    return syncTxsOption
    // return range
  }


  const holders = async function() {
    let syncHoldersOption = { fromId: '0', toId: '0' }

    if (store.state.bsc.synchronizing.fromHolderId !== null) {
      console.warn(`Holders synchronizing in progress from id: #${store.state.bsc.synchronizing.fromHolderId}`)
      return
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID', syncHoldersOption.fromId)

    await app.db.pointers.get('holder').then(point => {
      if (point && point.id) {
        syncHoldersOption.fromId = point.id
      }
    })

    syncHoldersOption.toId = syncHoldersOption.fromId
    if (syncHoldersOption.fromId > '0') {
      syncHoldersOption.fromId = JSBI.add(BN(syncHoldersOption.fromId), BN(1)).toString()
    }

    while (JSBI.LT(BN(syncHoldersOption.fromId), JSBI.subtract(BN(store.state.bsc.metadata.holders), BN(1)))) {
      await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID', syncHoldersOption.fromId)

      console.log(`Synchronize holders: #${syncHoldersOption.fromId}`)

      const data = await fetchHolders(syncHoldersOption.fromId)

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

      syncHoldersOption.fromId = JSBI.add(BN(syncHoldersOption.toId), BN(1)).toString()

      await app.db.holder.bulkAdd(holders).catch(e => {
        console.error('>>> sync, syncHolders, bulkAdd:', e)
      })

      await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID')

      await app.db.pointers.put({ name: 'holder', id: syncHoldersOption.toId }).catch(e => {
        console.error('putHolderIdPoint:', e)
      })

      await fn.wait(INTERVAL)
    }

    await store.dispatch('bsc/SET_SYNCHRONIZING_FROM_HOLDER_ID')
  }

  app.sync = {
    events: events,
    holders: holders
    // genesisDeposit: genesisDeposit,
    // genesisRedeem: genesisRedeem,
  }
}
