<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class='span-icon bg-orange-50 text-orange-700'>
        <HeroIconOutlineClock class='h-8 w-8' />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header1'>
          <h2 class='text-orange-400'>
            {{ $t('sFeeFomo.title') }}
          </h2>
          <p>
            {{ $t('sFeeFomo.text') }}
          </p>
        </div>

        <div class='body2 to-orange-900 from-yellow-800 text-orange-300'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sFee.take') }}
            <span v-if='$store.state.bsc.takerFee.fomo > "0"'>
              {{ $store.state.bsc.takerFee.fomo }}%
              {{ $t('sFee.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.fomo > "0"'>
              {{ $store.state.bsc.makerFee.fomo }}%
              {{ $t('sFee.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.fomo > "0"'>
              {{ $store.state.bsc.whaleFee.fomo }}%
              {{ $t('sFee.fromWhale') }}
            </span>
            {{ $t('sFeeFomo.thenDeposit__') }}
            <span v-if='timerStep.h > "0"'>{{ timerStep.h }} {{ $t('sFeeFomo.hours') }}</span>
            <span v-if='timerStep.m > "0"'>{{ timerStep.m }} {{ $t('sFeeFomo.minutes') }}</span>
            <span v-if='timerStep.s > "0"'>{{ timerStep.s }} {{ $t('sFeeFomo.seconds') }}</span>
            {{ $t('sFeeFomo.ifNoOther__') }}
          </p>

          <div v-if='$store.state.bsc.supply.fomo > "0"' class='mt-5 inline-flex rounded-md shadow'>
            <a target='_blank'
               :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.fomo)'
               class='hdf-a-track bg-yellow-700 hover:bg-yellow-600 space-x-2'>
              <HeroIconSolidCursorClick class='h-5 w-5' />
              <span>
                {{ $t('sFee.trackAll') }}
                {{ $store.state.stat.fomo.out.count + $store.state.stat.fomo.in.count }}
                {{ $t('sFeeFomo.trackFomoTransfers') }}
              </span>
            </a>
          </div>
        </div>
      </main>

      <dl v-if='$store.state.stat.fomo.out.count' class='hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <dt>
            {{ $t('sFeeFomo.statFomoPool') }}
          </dt>
          <dd>
            <CBN :value='$store.state.bsc.supply.fomo' :token='true' />
          </dd>
        </div>

        <div>
          <dt class='order-2 mt-1 text-base leading-6 font-medium text-yellow-100'>
            {{ $t('sFeeFomo.statFomoPrizeTransfers') }}
          </dt>
          <dd class='order-1 text-3xl font-extrabold text-white'>
            <CBN :value='$store.state.stat.fomo.out.count' />
          </dd>
        </div>
      </dl>


      <!--      <div class='mt-10 md:mt-12'>-->
      <!--        <h6 class='ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase'>-->
      <!--          <span v-if='fomo.countdown.finished && !this.isZero(fomo.next)'>-->
      <!--            {{ $t('sFeeFomo.prizeWinner') }}-->
      <!--          </span>-->
      <!--          <span v-else>-->
      <!--            {{ $t('sFeeFomo.nextWinner') }}-->
      <!--          </span>-->
      <!--        </h6>-->

      <!--        <div class='mt-4'>-->
      <!--          <div class='mx-auto max-w-2xl flex rounded-md shadow-sm'>-->
      <!--            <span-->
      <!--              class='inline-flex items-center px-8 rounded-l-md border border-r-0 border-orange-300 bg-orange-50 font-bold text-lg text-orange-600'>-->
      <!--              {{ $t('sFeeFomo.address') }}-->
      <!--            </span>-->
      <!--            <div-->
      <!--              class='flex-1 min-w-0 block w-full p-4 border border-orange-300 bg-white text-lg rounded-none rounded-r-md border-gray-300 truncate'>-->
      <!--              <span v-if='!this.isZero(fomo.next)' class='font-bold text-orange-700'>-->
      <!--                {{ fomo.next }}-->
      <!--              </span>-->
      <!--              <span v-else class='font-normal text-gray-400'>-->
      <!--                {{ $t('sFeeFomo.nextBuyer') }} 0x...-->
      <!--              </span>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->


      <div v-if='oTransactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ oTransactions.length }}
          {{ $t('sFeeFomo.fomoPrizeHistory') }}
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
          <ul class='hdf-tx-ul'>
            <li v-for='tx in oTransactions'>
              <span class='span-icon-wrap'>
                <HeroIconSolidBadgeCheck />
              </span>
              <div class='div-body'>
                <div>
                  <h4>
                    <CBN :value='tx.amount' />
                    HyperDeFi
                  </h4>
                  <p>
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </p>
                </div>
                <p class='p-tx'>
                  <a target='_blank' :href='explorer.exploreToken4address(tx.toAccount)'>
                    {{ tx.toAccount.slice(0, 8) }}...{{ tx.toAccount.slice(-4) }}
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- md: -->
        <div class='hidden mt-4 overflow-x-auto md:block'>
          <div class='align-middle inline-block min-w-full'>
            <div class='shadow overflow-hidden border-b border-gray-700'>
              <table class='hdf-tx-table'>
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
                <tbody>
                <tr v-for='tx in oTransactions'>
                  <td>
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </td>
                  <td class='font-mono'>
                    <a target='_blank' :href='explorer.exploreToken4address(tx.toAccount)'>{{ tx.toAccount }}</a>
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
import moment from 'moment'
import hdfLink from '~/utils/hdfLink'


const BN = Web3.utils.BN

export default {
  name: 'SFeeFomo',
  data() {
    return {
      oCounter: 0,
      oAmount: '0',
      oMarketValue: '0',

      oTransactions: [],

      iCounter: 0,
      iAmount: '0',
      iMarketValue: '0',

      timerStep: {
        h: '0',
        m: '0',
        s: '0'
      }
    }
  },

  computed: {
    explorer() {
      return hdfLink
    },
    next() {
      if (this.isZero(this.$store.state.bsc.fomo.next)) return '0x...'

      return this.$store.state.bsc.fomo.next
    },
    fomo() {
      return this.$store.state.bsc.fomo
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
    isZero(address) {
      return address === this.$store.state.bsc.globalAccounts.zero
    },
    async load() {
      const timerStep = moment.duration(this.$store.state.bsc.fomo.timestampStep * 1000)
      this.timerStep.s = timerStep.seconds()
      this.timerStep.m = timerStep.minutes()
      this.timerStep.h = timerStep.hours()

      this.oTransactions = await this.$nuxt.context.app.db.transfer.where({
        fromAccount: this.$store.state.bsc.globalAccounts.fomo
      }).limit(10).toArray()

      //   this.iMarketValue = iAmount.mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()
    }
  }


}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-yellow-200;
}

tbody {
  tr {
    &:nth-child(odd) {
      @apply bg-gray-700;
    }

    &:hover {
      @apply bg-orange-900;

      td {
        @apply text-orange-200;
      }
    }
  }
}
</style>
