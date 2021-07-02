<template>
  <div class='section-fee'>
    <div class='text-center'>
      <span class='span-icon bg-teal-50 text-teal-700'>
        <HeroIconOutlineSparkles class='h-8 w-8' />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header2'>
          <h2 class='text-teal-400'>
            {{ $t('sFeeLotto.title') }}
          </h2>
          <p>
            {{ $t('sFeeLotto.text') }}
          </p>
        </div>

        <div class='body1 to-blue-900 from-teal-900 text-teal-300'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sFee.take') }}
            <span v-if='$store.state.bsc.takerFee.lotto > "0"'>
              {{ $store.state.bsc.takerFee.lotto }}%
              {{ $t('sFee.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.lotto > "0"'>
              {{ $store.state.bsc.makerFee.lotto }}%
              {{ $t('sFee.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.lotto > "0"'>
              {{ $store.state.bsc.whaleFee.lotto }}%
              {{ $t('sFee.fromWhale') }}
            </span>
            {{ $t('sFeeLotto.takeThen__') }}
            <CBN :value='String($store.state.bsc.global.lottoThreshold)' :token='true' />
            HyperDeFi{{ $t('sFeeLotto.takeThen2__') }}
            <span v-if='$store.state.bsc.metadata.holders > "0"'>
              {{ $t('sFeeLotto.now__') }} 1/<CBN :value='String($store.state.bsc.metadata.holders)' />
              {{ $t('sFeeLotto.chance__') }}
            </span>
          </p>

          <div v-if='counter' class='mt-5 inline-flex rounded-md shadow'>
            <a href='#' class='a-track bg-teal-700 hover:bg-teal-600 space-x-2'>
              <HeroIconSolidCursorClick class='h-5 w-5' />
              <span>
                {{ $t('sFee.trackAll') }}
                {{ counter }}
                {{ $t('sFeeLotto.trackLottoTransfers') }}
              </span>
            </a>
          </div>
        </div>
      </main>

      <dl v-if='counter > "0"' class='hdf-stat lg:max-w-4xl grid grid-cols-1 sm:grid-cols-2'>
        <div>
          <dt>
            {{ $t('sFeeLotto.statLottoTransfers') }}
          </dt>
          <dd>
            <CBN :value='counter' />
          </dd>
        </div>

        <!--        <div>-->
        <!--          <dt>-->
        <!--            Tax Market Value-->
        <!--          </dt>-->
        <!--          <dd>-->
        <!--            $<CBN :value='marketValue' :price='true' /> USD-->
        <!--          </dd>-->
        <!--        </div>-->

        <div>
          <dt>
            {{ $t('sFeeLotto.statTotalLotto') }}
          </dt>
          <dd>
            <CBN :value='amount' :token='true' />
          </dd>
        </div>
      </dl>


      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-teal-500 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sFeeLotto.lottoHistory') }}
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
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>#
                      <CBN :value='tx.blockNumber' />
                    </a>
                  </p>
                </div>
                <p class='text-sm text-gray-500'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.account)'>{{ tx.account }}</a>
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
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </td>
                  <td class='font-mono'>
                    <a target='_blank' :href='explorer.exploreToken4address(tx.account)'>{{ tx.account }}</a>
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
  name: 'SFeeLotto',
  data() {
    return {
      counter: 0,
      amount: '0',
      marketValue: '0',

      transactions: []
    }
  },
  computed: {
    explorer() {
      return hdfLink
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
        .getPastEvents('Lotto', {
          // filter: {
          //   to: this.$store.state.bsc.globalAccounts.zero
          // },
          fromBlock: 0,
          toBlock: 'latest'
        })
        .catch(async function(error) {
          console.error('>>> SFeeLotto:', error)
        })

      events.reverse()
      // console.log(events)

      let amount = new BN()
      let transactions = []
      for (let i = 0; i < events.length; i++) {
        amount = amount.add(new BN(events[i].returnValues.amount))

        if (i < 10) {
          transactions.push({
            blockNumber: events[i].blockNumber,
            txHash: events[i].transactionHash,

            account: events[i].returnValues.account,
            amount: events[i].returnValues.amount
          })
        }
      }

      this.transactions = transactions
      this.counter = events.length
      this.amount = amount.toString()
      this.marketValue = amount.mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()
    }
  }
}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-teal-100;
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
      @apply bg-teal-900;

      td {
        @apply text-teal-200;
      }
    }

  }
}
</style>
