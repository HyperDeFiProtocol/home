<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <div class='mt-4 overflow-x-auto'>
        <div class='align-middle inline-block min-w-full'>
          <div class='shadow overflow-hidden border-b border-gray-700'>
            <table class='min-w-full divide-y divide-gray-700'>
              <thead>
              <tr>
                <th scope='col'>
                  TxHash
                </th>
                <th scope='col'>
                  Type
                </th>
                <th scope='col'>
                  From
                </th>
                <th scope='col'>
                </th>
                <th scope='col'>
                  To
                </th>
                <th scope='col'>
                  Amount
                </th>
              </tr>
              </thead>
              <tbody class='divide-y divide-gray-700'>
              <tr v-for='tx in transactions' :class='txName(tx.txType)'>
                <td class='hash'>
                  <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 6) }}...</a>
                </td>
                <td class='type capitalize'>
                  {{ txName(tx.txType) }}
                </td>
                <td class='sender' :class='markingClass(tx.sender)'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.sender)'>
                    <LAddress :value='tx.sender' />
                  </a>
                </td>
                <td>
                  <span class='w-5 h-5 text-gray-500'>
                    <HeroIconOutlineArrowCircleRight class='w-5 h-5 text-gray-400' />
                  </span>
                </td>
                <td class='recipient' :class='markingClass(tx.recipient)'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.recipient)'>
                    <LAddress :value='tx.recipient' />
                  </a>
                </td>
                <td class='amount'>
                  <CBN :value='tx.amount' :token='true' :padding='2' class='amount-ori' />
                  <CBN :value='tx.txAmount' :token='true' :padding='2' class='amount-tx' />
                  HyperDeFi
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LAutoWidth>

  </div>
</template>

<script>
import Web3 from 'web3'
import explorer from '~/utils/hdfLink'

const BN = Web3.utils.BN

export default {
  name: 'txs',
  data() {
    return {
      transactions: []
    }
  },
  computed: {
    explorer() {
      return explorer
    },

  },
  methods: {
    txName(txType) {
      switch (txType) {
        case "0":
          return 'taker'
        case "1":
          return 'maker'
        case "2":
          return 'whale'
        case "3":
          return 'robber'
        case "4":
          return 'flat'
        default:
          return ''
      }
    },
    markingClass(address) {
      if (address === this.$store.state.bsc.globalAccounts.pair) return null
      if (address === this.$store.state.bsc.globalAccounts.buffer) return null
      return 'mark'
    }
  },
  async mounted() {
    const events = await this.$store.state.bsc.token()
      .getPastEvents('Tx',
        {
          // filter: {
          //   to: this.$store.state.bsc.globalAccounts.burn
          // },
          fromBlock: 0,
          toBlock: 'latest'
        })

    events.reverse()
    // console.log(events)

    for (let i = 0; i < events.length; i++) {
      if (this.transactions.length) {
        let tx = this.transactions[this.transactions.length - 1]
        if (tx.txHash === events[i].transactionHash &&
          tx.txType === events[i].returnValues.txType &&
          tx.sender === events[i].returnValues.sender &&
          tx.recipient === events[i].returnValues.recipient
        ) {
          this.transactions[this.transactions.length - 1].amount =
            new BN(tx.amount).add(new BN(events[i].returnValues.amount)).toString()
          this.transactions[this.transactions.length - 1].txAmount =
            new BN(tx.txAmount).add(new BN(events[i].returnValues.txAmount)).toString()

          continue
        }
      }

      // if (i < 10) {
      this.transactions.push({
        blockNumber: events[i].blockNumber,
        txHash: events[i].transactionHash,

        txType: events[i].returnValues.txType,
        sender: events[i].returnValues.sender,
        recipient: events[i].returnValues.recipient,
        amount: events[i].returnValues.amount,
        txAmount: events[i].returnValues.txAmount
      })
      // }
    }
  }
}
</script>


<style scoped lang='scss'>
thead {
  th {
    @apply px-3 py-3 text-xs text-gray-100 text-left;
    @apply uppercase tracking-wider;

    &:last-child {
      @apply text-center;
    }
  }
}

tbody {
  tr {
    @apply text-xs text-gray-400;

    &.taker {
      .type, .mark {
        @apply text-sky-400;
      }
    }

    &.maker {
      .type, .mark {
        @apply text-emerald-400;
      }
    }

    &.whale {
      .type, .mark {
        @apply text-orange-400;
      }
    }

    &.robber {
      .type, .mark {
        @apply text-rose-400;
      }
    }


    &:nth-child(odd) {
      @apply bg-gray-800;
    }

    td {
      @apply px-3 py-4 whitespace-nowrap text-sm;
    }

    td:not(:last-child) {
      @apply truncate;
    }

    td:last-child {
      @apply text-right text-gray-200;
    }

    .amount-ori {
      @apply hidden inline;
    }

    .amount-tx {
      @apply block inline;
    }

    &:hover {
      @apply bg-violet-900;

      td {
        @apply text-violet-200;
      }

      .amount-ori {
        @apply block inline;
      }

      .amount-tx {
        @apply hidden inline;
      }
    }
  }
}
</style>
