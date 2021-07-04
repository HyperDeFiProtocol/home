<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24'>
      <CH2>
        <span class='text-violet-400'>
          {{ $t('sAirdrop.title') }}
        </span>
        <span>
          <span v-if='$store.state.bsc.supply.airdrop === "0"'>
            {{ $t('sAirdrop.titleEnded') }}
          </span>
          <span v-else-if='$store.state.bsc.global.airdropMode'>
            {{ $t('sAirdrop.titleOngoing') }}
          </span>
          <span v-else>
            {{ $t('sAirdrop.titlePaused') }}
          </span>
        </span>

        <template #tag>
          {{ $t('sAirdrop.tag') }}
        </template>
        <template #desc>
          {{ $t('sAirdrop.descUpTo') }}
          <CBN :value='String($store.state.bsc.global.airdropMax)' :token='true' /> HyperDeFi
          {{ $t('sAirdrop.descUpPerAddress_') }}
          {{ $t('sAirdrop.descWill__') }}
          <CBN :value='summed' :token='true' /> HyperDeFi
          {{ $t('sAirdrop.descFirstCame__') }}
        </template>
      </CH2>

      <dl class='hdf-stat grid grid-cols-1 sm:grid-cols-2 lg:max-w-3xl'>
        <div>
          <dt>
            {{ $t('sAirdrop.remaining') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.airdrop)' :token='true' />
          </dd>
        </div>


        <div>
          <dt>
            {{ $t('sAirdrop.totalAirdropMarketValue') }}
          </dt>
          <dd>
            $<CBN :value='summedMarketValue' :price='true' :padding='6' />
            USD
          </dd>
        </div>

        <div>
          <dt>
            {{ $t('sAirdrop.airdropped') }}
          </dt>
          <dd>
            <CBN :value='amount' :token='true' />
          </dd>
        </div>


        <div>
          <dt>
            {{ $t('sAirdrop.airdropTransfer') }}
          </dt>
          <dd>
            <CBN :value='counter' />
          </dd>
        </div>
      </dl>

      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sAirdrop.txAirdropHistory') }}
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
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
                <p class='text-sm text-gray-500'>
                  <a target='_blank' :href='hdfLink.exploreToken4address(tx.account)'>{{ tx.account }}</a>
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
                    {{ $t('txTable.address') }}
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
                    <a target='_blank' :href='hdfLink.exploreToken4address(tx.account)'>{{ tx.account }}</a>
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
  </div>
</template>

<script>
import Web3 from 'web3'
import hdfLink from '~/utils/hdfLink'

const BN = Web3.utils.BN

export default {
  name: 'SAirdrop',
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
    summed() {
      return new BN(this.$store.state.bsc.supply.airdrop).add(new BN(this.amount)).toString()
    },
    summedMarketValue() {
      return new BN(this.summed).mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()
    }
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
        .getPastEvents('Transfer', {
          filter: {
            from: this.$store.state.bsc.globalAccounts.airdrop
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
  }
}</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-indigo-200;
}

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
      @apply bg-gray-700;
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
