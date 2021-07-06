<template>
  <LAutoWidth class="transition duration-300 ease-in-out mt-12 pb-12 sm:pb-24">
    <div class='border-t-2 border-gray-700 pt-12 px-4 sm:px-8'>
      <CH3>
        <span>
          {{ $t('sHarvest.yourBalance') }}
        </span>
        <span class='hidden lg:inline'>
          {{ $t('sHarvest.andHarvest') }}
        </span>

        <template #tag>
          {{ $t('sHarvest.taxFarm') }}
        </template>
      </CH3>

      <p class='flex justify-start mt-8 sm:mt-12 text-2xl text-gray-500 break-all truncate'>
        <span>
          {{ $t('sHarvest.hello_') }}
        </span>
        <span v-if='$store.state.wallet.username' class='font-semibold text-gray-300'>
          "{{ $store.state.wallet.username }}"
        </span>
        <span v-else class='font-mono'>
          {{ $store.state.wallet.account.slice(0, 10) }}...{{ $store.state.wallet.account.slice(-4) }}
        </span>
      </p>

      <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.wallet.balance' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.balance_') }}
            </span>
            {{ $t('sHarvest.inYourWallet') }}
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2">
            <HeroIconSolidFire v-if='$store.state.wallet.harvest > "0"' class='inline w-6 h-6' />
            <CBN :value='$store.state.wallet.harvest' :token='true' />
            <span>
              HyperDeFi
            </span>
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.toHarvest_') }}
            </span>
            {{ $t('sHarvest.onBlockNumber') }}<CBN :value='$store.state.bsc.blockNumber' />
          </span>
        </p>

        <p v-if='$store.state.wallet.harvest > "0"' class='transition duration-300 ease-out'>
          <BtnTakeHarvest class='a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
            <HeroIconSolidFire v-if='$store.state.wallet.harvest > "0"' class='inline w-6 h-6' />
            <span class='hidden lg:inline'>
              {{ $t('sHarvest.clickHereTo') }}
            </span>
            <span>
              {{ $t('sHarvest.harvestAll') }}
            </span>
          </BtnTakeHarvest>
        </p>

        <p v-if='$store.state.wallet.totalHarvest > "0"'>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.wallet.totalHarvest' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.total_') }}
            </span>
            {{ $t('sHarvest.alreadyHarvested') }}
          </span>
        </p>
      </div>
    </div>

    <!--  harvest history  -->
    <div v-if='$store.state.wallet.account && transactions.length' class="transition duration-300 ease-in-out pt-12 px-4">
      <h6 class='ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase'>
        {{ $t('txTable.latest') }}
        {{ transactions.length }}
        {{ $t('sHarvest.txHarvestHistory') }}
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
                  <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                    #<CBN :value='tx.blockNumber' />
                  </a>
                </p>
              </div>
              <p class='text-sm text-gray-500 break-all'>
                <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 44) }}...</a>
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
                  <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                    #<CBN :value='tx.blockNumber' />
                  </a>
                </td>
                <td class='font-mono'>
                  <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 44) }}...</a>
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
  </LAutoWidth>
</template>

<script>
import Web3 from 'web3'
import hdfLink from '~/utils/hdfLink'

const BN = Web3.utils.BN

export default {
  name: 'SHarvest',
  data() {
    return {
      counter: 0,
      amount: '0',

      transactions: []
    }
  },
  computed: {
    hdfLink() {
      return hdfLink
    },
  },
  watch: {
    '$store.state.wallet.account': async function() {
      await this.loadHarvestHistory()
    },
    '$store.state.bsc.blockNumber': async function() {
      if (this.$store.state.wallet.account) {
        await this.loadHarvestHistory()
      }
    },
  },
  async mounted() {
    await this.loadHarvestHistory()
  },
  methods: {
    async loadHarvestHistory() {
      const events = await this.$store.state.bsc.token().getPastEvents('Transfer', {
        filter: {
          from: this.$store.state.bsc.globalAccounts.tax,
          to: this.$store.state.wallet.account,
        },
        fromBlock: 0,
        toBlock: 'latest'
      })
        .catch(async function(error) {
          console.error('>>> SAirdrop:', error)
        })

      if (events) {
        events.reverse()
        // console.log(events)
        let amount = new BN()
        let transactions = []
        for (let i = 0; i < events.length; i++) {
          amount = amount.add(new BN(events[i].returnValues.value))

          if (i < 10) {
            transactions.push({
              blockNumber: events[i].blockNumber,
              txHash: events[i].transactionHash,

              account: events[i].returnValues.to,
              amount: events[i].returnValues.value
            })
          }
        }

        this.transactions = transactions
        this.counter = events.length
        this.amount = amount.toString()
      }
    }
  },
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
