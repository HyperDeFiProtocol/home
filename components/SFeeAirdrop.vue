<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class='span-icon bg-teal-50 text-teal-700'>
        <HeroIconOutlineSparkles class='h-8 w-8' />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header2'>
          <h2 class='text-teal-400'>
            {{ $t('sFeeAirdrop.title') }}
          </h2>
          <p>
            {{ $t('sFeeAirdrop.text') }}
          </p>
        </div>

        <div class='body1 to-blue-900 from-teal-900 text-teal-300'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sFee.take') }}
            <span v-if='$store.state.bsc.takerFee.airdrop > "0"'>
              {{ $store.state.bsc.takerFee.airdrop }}%
              {{ $t('sFee.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.airdrop > "0"'>
              {{ $store.state.bsc.makerFee.airdrop }}%
              {{ $t('sFee.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.airdrop > "0"'>
              {{ $store.state.bsc.whaleFee.airdrop }}%
              {{ $t('sFee.fromWhale') }}
            </span>
            {{ $t('sFeeAirdrop.takeThen__') }}
            <CBN :value='String($store.state.bsc.global.airdropThreshold)' :token='true' />
            HyperDeFi{{ $t('sFeeAirdrop.takeThen2__') }}
            <span v-if='$store.state.bsc.metadata.holders > "0"'>
              {{ $t('sFeeAirdrop.now__') }} 1/<CBN :value='String($store.state.bsc.metadata.holders)' />
              {{ $t('sFeeAirdrop.chance__') }}
            </span>
          </p>

          <div v-if='$store.state.stat.airdrop.count' class='mt-5 inline-flex rounded-md shadow'>
            <nuxt-link :to='localeLocation("/history/airdrop")' class='hdf-a-track bg-teal-700 hover:bg-teal-600 space-x-2'>
              <HeroIconSolidCursorClick class='h-5 w-5' />
              <span>
                {{ $t('sFee.trackAll') }}
                {{ $store.state.stat.airdrop.count }}
                {{ $t('sFeeAirdrop.trackAirdropTransfers') }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </main>

      <dl v-if='$store.state.stat.airdrop.count' class='hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2'>


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
            {{ $t('sFeeAirdrop.statTotalAirdrop') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.airdrop.amount' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            {{ $t('sFeeAirdrop.statAirdropTransfers') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.airdrop.count' />
          </dd>
        </div>
      </dl>


      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-teal-500 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sFeeAirdrop.airdropHistory') }}
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
          <ul class='hdf-tx-ul'>
            <li v-for='tx in transactions'>
              <span class='span-icon-wrap'>
                <HeroIconSolidGift />
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
                  <a target='_blank' :href='explorer.exploreToken4address(tx.account)'>
                    {{ tx.account.slice(0, 8) }}...{{ tx.account.slice(-4) }}
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
import hdfLink from '~/utils/hdfLink'
import fn from '~/utils/functions'

export default {
  name: 'SFeeAirdrop',
  data() {
    return {
      transactions: [],
      marketValue: '0',
    }
  },
  computed: {
    explorer() {
      return hdfLink
    }
  },
  watch: {
    '$store.state.bsc.synchronizing.fromBlock': async function() {
      await fn.wait(1000)
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.airdrop.reverse().limit(10).toArray()
    }
  }
}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-teal-100;
}


tbody {
  tr {
    &:hover {
      @apply bg-teal-900;

      td {
        @apply text-teal-200;
      }
    }
  }
}
</style>
