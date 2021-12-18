const fs = require('fs')
const dotenv = require('dotenv')
const JSBI = require('jsbi')
const BN = JSBI.BigInt
const Web3 = require('web3')
const TOKEN_ABI = require('./utils/token.json')
const IDO_ABI = require('./utils/ido.json')
dotenv.config()

const EV_FROM_BLOCK = process.env.fromBlock
const IDO_TO_BLOCK = process.env.idoToBlock

const PROVIDER = new Web3(process.env.web3RpcUrl)
const TOKEN = new PROVIDER.eth.Contract(TOKEN_ABI, process.env.tokenAddress)
const IDO = new PROVIDER.eth.Contract(IDO_ABI, process.env.idoAddress)

const STEP = 5000
const INTERVAL = 200
let BUFFER
let HOLDERS
let blockNumber
let interval = 0
let range = {
  from: process.env.fromBlock,
  to: process.env.fromBlock
}
let step = STEP

const readFromJson = async function (path) {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf-8'))
  } catch (err) {
    console.error(err)
    return []
  }
}

const syncRange = async function (rows) {
  try {
    if (rows.length) {
      const row = rows.slice(-1)[0]

      if (JSBI.GT(BN(row['blockNumber']), BN(range.from))) {
        range.from = BN(row['blockNumber']).toString()
        range.to = range.from
      }
    }
  } catch (e) {
    console.error(e)
  }
}

const writeToJson = async function (path, data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
    await writeToJson(path, data)
  }
}

// wait...
const wait = function(timeout = 1000) {
  return new Promise((resolve, reject) => {
    if (timeout > 0) {
      setTimeout(() => {
        resolve(timeout)
      }, timeout)
    } else {
      reject('Invalid `timeout`')
    }
  })
}

// cut step
const cut = function(n) {
  const a = 8
  const b = 10

  return JSBI.divide(JSBI.multiply(BN(n), BN(a)), BN(b)).toString()
}

// event 2 tx
const ev2Tx = function (event) {
  return {
    blockNumber: event.blockNumber,
    txHash: event.transactionHash,

    account: event.returnValues.account,
    amount: event.returnValues.amount
  }
}

// interval +
const increaseInterval = async function() {
  interval += INTERVAL
}

// get metadata
const getMetadata = async function() {
  let exception = false
  const metadata = await TOKEN.methods.getMetadata().call().catch(e => {
    exception = true
    console.error('[getMetadata]', e)
  })

  if (exception) {
    await increaseInterval()
    console.log(`wait: getMetadata after ${interval}ms`)
    await wait(interval)
    return await getMetadata()
  }

  interval = 0
  return metadata
}

// get block number
const getBlockNumber = async function() {
  let exception = false
  const blockNumber = await PROVIDER.eth.getBlockNumber().catch(e => {
    exception = true
    console.error('[getBlockNumber]', e)
  })

  if (exception) {
    await increaseInterval()
    console.log(`wait: getBlockNumber after ${interval}ms`)
    await wait(interval)
    return await getBlockNumber()
  }

  interval = 0
  return blockNumber
}

//
const stepUp = async function() {
  range.to = JSBI.add(BN(range.from), BN(step)).toString()
  if (JSBI.GT(BN(range.to), BN(blockNumber))) {
    range.to = BN(blockNumber).toString()
  }
}

const fetchAllEvents = async function() {
  console.log(`fetchAllEvents: #${range.from} - #${range.to}/#${blockNumber}`)

  let exception = false
  const events = await TOKEN
    .getPastEvents('allEvents', {
      fromBlock: range.from,
      toBlock: range.to
    }).catch(e => {
      exception = true
      console.error('[fetchAllEvents]', e)
    })

  if (exception) {
    step = cut(step)
    await stepUp()

    await increaseInterval()
    console.log(`wait: fetchAllEvents after ${interval}ms`)
    await wait(interval)
    return await fetchAllEvents()
  }

  step = STEP
  interval = 0
  return events
}


const fetchIDOEvents = async function() {
  console.log(`fetchIDOEvents: #${range.from} - #${range.to}/#${blockNumber}`)

  let exception = false
  const events = await IDO
    .getPastEvents('Deposit', {
      fromBlock: range.from,
      toBlock: range.to
    })
    .catch(e => {
      exception = true
      console.error('[fetchIDOEvents]', e)
    })

  if (exception) {
    await increaseInterval()
    console.log(`wait: fetchIDOEvents after ${interval}ms`)
    await wait(interval)
    return await fetchIDOEvents()
  }

  interval = 0
  return events
}


const main = async function() {
  blockNumber = await getBlockNumber()

  const metadata = await getMetadata()
  BUFFER = metadata.accounts[4]
  HOLDERS = metadata.holders

  let txs = await readFromJson('./static/db/txs.json')
  let transfers = await readFromJson('./static/db/transfers.json')
  let buffers = await readFromJson('./static/db/buffers.json')
  let airdrops = await readFromJson('./static/db/airdrops.json')
  let bonus = await readFromJson('./static/db/bonus.json')
  let funds = await readFromJson('./static/db/funds.json')
  let genesisDeposits = await readFromJson('./static/db/genesisDeposits.json')

  // await syncRange(txs)
  // await syncRange(transfers)
  // await syncRange(buffers)
  // await syncRange(airdrops)
  // await syncRange(bonus)
  // await syncRange(funds)
  // await syncRange(genesisDeposits)

  // return null

  // from block
  // let fromBlock = JSBI.subtract(BN(EV_FROM_BLOCK), BN(1)).toString()

  console.log('blockNumber:', blockNumber)
  console.log('BUFFER:', BUFFER)
  console.log('HOLDERS:', HOLDERS)

  // return null

  // collections

  while (JSBI.LT(BN(range.from), BN(blockNumber))) {
    range.from = JSBI.add(BN(range.from), BN(1)).toString()
    await stepUp(step)

    const events = await fetchAllEvents(step)

    for (const event of events) {
      console.log(event.blockNumber, event.event)

      switch (event.event) {
        case 'Transfer':
          transfers.push({
            blockNumber: event.blockNumber,
            txHash: event.transactionHash,
            sender: event.returnValues.from,
            recipient: event.returnValues.to,
            amount: event.returnValues.value,
          })

          if (event.returnValues.from === BUFFER || event.returnValues.to === BUFFER) {
            if (buffers.length) {
              const key = buffers.length - 1
              if (
                buffers[key].txHash === event.transactionHash
                &&
                buffers[key].sender === event.returnValues.from
                &&
                buffers[key].recipient === event.returnValues.to
              ) {
                buffers[key].amount = JSBI.add(BN(buffers[key].amount), BN(event.returnValues.value)).toString()
                break
              }

              buffers.push({
                blockNumber: event.blockNumber,
                txHash: event.transactionHash,
                sender: event.returnValues.from,
                recipient: event.returnValues.to,
                amount: event.returnValues.value,
              })
            }
          } else if (event.returnValues.to === '0x000000000000000000000000000000000000dEaD') {

          }
          break
        case 'TX':
          if (txs.length) {
            const key = txs.length - 1
            if (
              txs[key].txHash === event.transactionHash &&
              txs[key].txType === event.returnValues.txType &&
              txs[key].sender === event.returnValues.sender &&
              txs[key].recipient === event.returnValues.recipient
            ) {
              txs[key].amount = JSBI.add(BN(txs[key].amount), BN(event.returnValues.amount)).toString()
              txs[key].txAmount = JSBI.add(BN(txs[key].txAmount), BN(event.returnValues.txAmount)).toString()
              break
            }
          }

          txs.push({
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
          airdrops.push(ev2Tx(event))
          break
        case 'Bonus':
          bonus.push(ev2Tx(event))
          break
        case 'Fund':
          funds.push(ev2Tx(event))
          break
        // case 'SlotRegistered':
        //   break
        // case 'UsernameSet':
        //   break
        // case 'CouponVisitor':
        //   break
      }


    }

    if (JSBI.LT(BN(range.from), BN(process.env.idoToBlock))) {
      const idoEvents = await fetchIDOEvents()
      for (const event of idoEvents) {
        genesisDeposits.push(ev2Tx(event))
      }
    }

    range.from = range.to
    await wait(INTERVAL)
  }


  console.log(`txs: ${txs.length}`)
  console.log(`transfers: ${transfers.length}`)
  console.log(`airdrops: ${airdrops.length}`)
  console.log(`bonus: ${bonus.length}`)
  console.log(`funds: ${funds.length}`)
  console.log(`genesisDeposit: ${genesisDeposits.length}`)

  console.log(HOLDERS)

  // console.log(`txs: ${txs.length}`)
  await writeToJson('./static/db/txs.json', txs)
  await writeToJson('./static/db/transfers.json', transfers)
  await writeToJson('./static/db/buffers.json', buffers)
  await writeToJson('./static/db/airdrops.json', airdrops)
  await writeToJson('./static/db/bonus.json', bonus)
  await writeToJson('./static/db/funds.json', funds)
  await writeToJson('./static/db/genesisDeposits.json', genesisDeposits)


  // let holders = []
  // while (JSBI.LT(BN(holders.length), JSBI.subtract(BN(metadata.holders), BN(1)))) {
  //   console.log(`Holders: #${holders.length}`)
  //   const holdersResp = await TOKEN.methods.getHolders(holders.length).call()
  //     .catch(e => {
  //       console.error('>>> sync, syncHolders:', e)
  //     })
  //
  //   for (let i = 0; i < holdersResp.ids.length; i++) {
  //     if (holdersResp.holders[i] !== '0x0000000000000000000000000000000000000000') {
  //       holders.push({
  //         id: holdersResp.ids[i],
  //         address: holdersResp.holders[i],
  //         username: holdersResp.usernames[i],
  //         balance: holdersResp.balances[i],
  //         isWhale: holdersResp.isWhales[i],
  //       })
  //     }
  //   }
  // }
  //
  // console.log(holders.length)
}

main().then()
