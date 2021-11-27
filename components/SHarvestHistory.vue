<template>
  <div v-if='transactions.length'>
    <h6 class='ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase'>
      {{ $t('txTable.latest') }}
      {{ transactions.length }}
      {{ $t('sHarvestHistory.txHarvestHistory') }}
    </h6>

    <!-- md:hidden -->
    <div class='md:hidden mt-4 px-4'>
      <ul class='divide-y divide-gray-700'>
        <li v-for='tx in transactions' class='py-4 flex space-x-3'>
              <span class='h-6 w-6'>
                <HeroIconSolidGift />
              </span>
          <div class='flex-1 space-y-2'>
            <div class='flex items-center justify-between'>
              <h4 class='font-medium text-base'>
                <CBN :value='tx.amount' />
                HyperDeFi
              </h4>
              <p class='text-sm text-gray-500'>
                <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>
                  #
                  <CBN :value='tx.blockNumber' />
                </a>
              </p>
            </div>
            <p class='text-sm text-gray-500 break-all'>
              <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 44) }}...</a>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- md: -->
    <div class='hidden mt-4 overflow-x-auto md:block'>
      <div class='align-middle inline-block min-w-full'>
        <div class='shadow overflow-hidden border-b border-gray-700'>
          <table class='min-w-full divide-y divide-gray-700'>
            <thead>
            <tr>
              <th scope='col'>
                {{ $t('txTable.block') }}
              </th>
              <th scope='col'>
                {{ $t('txTable.txHash') }}
              </th>
              <th scope='col'>
                {{ $t('txTable.amount') }}
              </th>
            </tr>
            </thead>
            <tbody class='divide-y divide-gray-700'>
            <tr v-for='tx in transactions'>
              <td>
                <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>
                  #
                  <CBN :value='tx.blockNumber' />
                </a>
              </td>
              <td class='font-mono'>
                <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 44) }}...</a>
              </td>
              <td>
                <CBN :value='tx.amount' :token='true' :padding='2' />
                HyperDeFi
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import hpLink from '~/utils/hpLink'

const BN = Web3.utils.BN

export default {
  name: 'SHarvestHistory',
  data() {
    return {
      counter: 0,
      amount: '0',

      transactions: []
    }
  },
  computed: {
    hpLink() {
      return hpLink
    }
  },
  watch: {
    '$store.state.wallet.account': async function() {
      if (this.$store.state.wallet.account) {
        await this.load()
      }
    },
    '$store.state.bsc.blockNumber': async function() {
      if (this.$store.state.wallet.account) {
        await this.load()
      }
    },
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.transfer.where({
        sender: this.$store.state.bsc.globalAccounts.tax,
        recipient: this.$store.state.wallet.account
      }).reverse().limit(10).toArray()

      //   this.transactions = transactions
      //   this.counter = events.length
      //   this.amount = amount.toString()
    }
  }
}
</script>


<style scoped lang='scss'>
thead {
  th {
    @apply px-3 py-3 text-xs text-gray-100 text-left;
    @apply uppercase tracking-wider;

    &:nth-child(3) {
      @apply text-center;
    }
  }
}

tbody {
  tr {
    &:nth-child(odd) {
      @apply bg-gray-800;
    }

    td {
      @apply px-3 py-4 whitespace-nowrap text-sm text-gray-400;
    }

    td:nth-child(1) {
      @apply text-gray-500;
    }

    td:nth-child(3) {
      @apply text-gray-300 text-right;
    }

    &:hover {
      @apply bg-violet-900;

      td {
        @apply text-violet-200;
      }
    }
  }
}
</style>
