<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <CH3>
        {{ $t('siteNav.txExplorer') }}

        <template #tag>
          On Chain
        </template>
      </CH3>

      <CLoading class='mt-32' :show='showLoading' />

      <div v-show='transactions.length' class='mt-10 lg:mt-24 overflow-x-auto'>
        <div class='align-middle inline-block min-w-full'>
          <div class='shadow overflow-hidden border-b border-gray-700'>
            <table class='min-w-full divide-y divide-gray-700'>
              <thead>
              <tr>
                <th scope='col'>
                  {{ $t('txTable.block') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.type') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.from') }}
                </th>
                <th scope='col'>
                </th>
                <th scope='col'>
                  {{ $t('txTable.to') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.amount') }}
                </th>
              </tr>
              </thead>
              <tbody class='divide-y divide-gray-700'>
              <tr v-for='tx in transactions' :class='txName(tx.txType)'>
                <td class='hash'>
                  <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>#
                    <CBN :value='tx.blockNumber' />
                  </a>
                </td>
                <td class='type capitalize'>
                  {{ $t('user.' + txName(tx.txType)) }}
                </td>
                <td class='sender' :class='markClass(tx, "sender")'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.sender)'>
                    <CAddress :value='tx.sender' />
                  </a>
                </td>
                <td>
                  <span class='w-5 h-5 text-gray-500'>
                    <HeroIconOutlineArrowCircleRight class='w-5 h-5 text-gray-400' />
                  </span>
                </td>
                <td class='recipient' :class='markClass(tx, "recipient")'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.recipient)'>
                    <CAddress :value='tx.recipient' />
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
  scrollToTop: true,
  name: 'txs',
  data() {
    return {
      showLoading: true,
      transactions: []
    }
  },
  computed: {
    explorer() {
      return explorer
    },

  },
  watch: {
    '$store.state.bsc.blockNumber': async function() {
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      const events = await this.$store.state.bsc.token()
        .getPastEvents('Tx',
          {
            // filter: {
            //   to: this.$store.state.bsc.globalAccounts.burn
            // },
            fromBlock: 0,
            toBlock: 'latest'
          })


      if (events) {
        events.reverse()
        // console.log(events)

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
              transactions[this.transactions.length - 1].txAmount =
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

          this.transactions = transactions
        }
      }

      this.showLoading = false
    },
    txName(txType) {
      switch (txType) {
        case '0':
          return 'flat'
        case '1':
          return 'taker'
        case '2':
          return 'maker'
        case '3':
          return 'whale'
        case '4':
          return 'robber'
        default:
          return ''
      }
    },
    markClass(tx, account) {
      switch (account) {
        case 'sender':
          // if (tx.recipient === this.$store.state.bsc.globalAccounts.pair) {
          //   return 'mark'
          // }

          return tx.sender !== this.$store.state.bsc.globalAccounts.pair ? 'mark' : null
        case 'recipient':
          if (tx.sender !== this.$store.state.bsc.globalAccounts.pair) {
            return null
          }

          return tx.recipient !== this.$store.state.bsc.globalAccounts.pair ? 'mark' : null
        default:
          return null
      }
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
