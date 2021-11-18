const JSBI = require('jsbi')
const BN = JSBI.BigInt
const Web3 = require('web3')
const TOKEN_ABI = require('./utils/token.json')
const TOKEN_ADDRESS = '0xCBA6e270969B1390C89eB6a18594cDBA6EB52A28'
const FROM_BLOCK = '14229705'

const PROVIDER = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')
const TOKEN = new PROVIDER.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS)

let blockNumber
const STEP = 5000
let BUFFER

const getBlockNumber = async function() {
  let exception = false
  const blockNumber = await PROVIDER.eth.getBlockNumber().catch(e => {
    exception = true
  })

  if (exception) {
    return await getBlockNumber()
  }

  return blockNumber
}

const cut = function(n) {
  const a = 8
  const b = 10

  return JSBI.divide(JSBI.multiply(BN(n), BN(a)), BN(b)).toString()
}

const stepUp = async function(fromBlock, step) {
  const toBlock = JSBI.add(BN(fromBlock), BN(step)).toString()

  if (JSBI.GT(BN(toBlock), BN(blockNumber))) {
    return blockNumber
  }

  return toBlock
}

const fetchAllEvents = async function(fromBlock, step) {
  fromBlock = JSBI.add(BN(fromBlock), BN(1)).toString()
  const toBlock = await stepUp(fromBlock, step)

  console.log(`#${fromBlock} >>> #${toBlock} ::: #${blockNumber}`)

  let exception = false
  const events = await TOKEN
    .getPastEvents('allEvents', {
      fromBlock: fromBlock,
      toBlock: toBlock
    }).catch(e => {
      exception = true
    })

  if (exception) {
    step = cut(step)
    return await fetchAllEvents(fromBlock, step)
  }

  return [events, toBlock]
}

const ev2Tx = function (event) {
  return {
    blockNumber: event.blockNumber,
    txHash: event.transactionHash,

    account: event.returnValues.account,
    amount: event.returnValues.amount
  }
}

const main = async function() {
  // metadata: buffer
  let metadata = await TOKEN.methods.getMetadata().call()
  BUFFER = metadata.accounts[4]

  // from block
  let fromBlock = JSBI.subtract(BN(FROM_BLOCK), BN(1)).toString()
  blockNumber = await getBlockNumber()

  // collections
  let txs = []
  let transfers = []
  let buffers = []
  let airdrops = []
  let bonus = []
  let funds = []
  let destroy = []
  let genesisDeposits = []
  while (JSBI.LT(BN(fromBlock), BN(blockNumber))) {
    const eventsResp = await fetchAllEvents(fromBlock, STEP)
    fromBlock = eventsResp[1]

    for (const event of eventsResp[0]) {
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
        case 'Burn':
          destroy.push({
            blockNumber: event.blockNumber,
            txHash: event.transactionHash,
            amount: event.returnValues.amount,
          })
          break
        case 'GenesisDeposit':
          genesisDeposits.push(ev2Tx(event))
          break
        // case 'SlotRegistered':
        //   break
        // case 'UsernameSet':
        //   break
        // case 'CouponVisitor':
        //   break
      }
    }

    blockNumber = await getBlockNumber()
  }

  // for (const transfer of transfers) {
  //   // console.log(`transfer: ${transfer.sender} => ${transfer.recipient}: ${transfer.amount}`)
  // }

  console.log(`txs: ${txs.length}`)
  console.log(`transfers: ${transfers.length}`)
  console.log(`airdrops: ${airdrops.length}`)
  console.log(`bonus: ${bonus.length}`)
  console.log(`funds: ${funds.length}`)
  console.log(`destroy: ${destroy.length}`)
  console.log(`genesisDeposits: ${genesisDeposits.length}`)

  metadata = await TOKEN.methods.getMetadata().call()

  console.log(metadata.holders)

  let holders = []
  while (JSBI.LT(BN(holders.length), JSBI.subtract(BN(metadata.holders), BN(1)))) {
    console.log(`Holders: #${holders.length}`)
    const holdersResp = await TOKEN.methods.getHolders(holders.length).call()
      .catch(e => {
        console.error('>>> sync, syncHolders:', e)
      })

    for (let i = 0; i < holdersResp.ids.length; i++) {
      if (holdersResp.holders[i] !== '0x0000000000000000000000000000000000000000') {
        holders.push({
          id: holdersResp.ids[i],
          address: holdersResp.holders[i],
          username: holdersResp.usernames[i],
          balance: holdersResp.balances[i],
          isWhale: holdersResp.isWhales[i],
        })
      }
    }
  }

  console.log(holders.length)
}

main().then()
