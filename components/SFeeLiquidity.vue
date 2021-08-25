<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-rose-50 text-rose-700">
        <HeroIconOutlineServer class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header2'>
          <h2 class='text-rose-400'>
            {{ $t('sFeeLiquidity.title') }}
          </h2>
          <p>
            {{ $t('sFeeLiquidity.text') }}
          </p>
        </div>

        <div class='body1 to-red-900 from-rose-900 text-rose-300'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sFee.take') }}
            <span v-if='$store.state.bsc.takerFee.liquidity > "0"'>
              {{ $store.state.bsc.takerFee.liquidity }}%
              {{ $t('sFee.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.liquidity > "0"'>
              {{ $store.state.bsc.makerFee.liquidity }}%
              {{ $t('sFee.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.liquidity > "0"'>
              {{ $store.state.bsc.whaleFee.liquidity }}%
              {{ $t('sFee.fromWhale') }}
            </span>
            {{ $t('sFeeLiquidity.thenDeposit1__') }}
            <CBN :value='$store.state.bsc.global.autoSwapAmountMin' :token='true' /> HyperDeFi
            {{ $t('sFeeLiquidity.thenDeposit2__') }}
            {{ $store.state.bsc.global.autoSwapNumeratorMin }}/<CBN :value='$store.state.bsc.global.autoSwapDenominator' />
            {{ $t('sFeeLiquidity.thenDeposit3__') }}
<!--            max limit is <CBN :value='$store.state.bsc.global.autoSwapAmountMax' :token='true' />-->
          </p>

          <p>
            {{ $t('sFeeLiquidity.newLPTokens__') }}
          </p>
        </div>
      </main>

      <dl v-if='$store.state.bsc.supply.liquidity > "0"'
          class='hdf-stat grid grid-cols-1 xl:max-w-7xl'
          :class='{"xl:grid-cols-3": $store.state.stat.liquidity.count, "xl:grid-cols-2": !$store.state.stat.liquidity.count}'>

<!--        <div>-->
<!--          <dt>-->
<!--            {{ $t('sFeeLiquidity.statLiquidityMarketValue') }}-->
<!--          </dt>-->
<!--          <dd>-->
<!--            $<CBN :value='String($store.state.bsc.marketValue.liquidity)' :price='true' :padding='9' /> USD-->
<!--          </dd>-->
<!--        </div>-->

        <div>
          <dt>
            {{ $t('sFeeLiquidity.statLiquidity') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.liquidity)' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            <span>
              {{ $t('sFeeLiquidity.statBuffer') }}
            </span>
            <span v-if='$store.state.bsc.global.autoSwapReady'>
              {{ $t('sFeeLiquidity.statReady') }}
            </span>
          </dt>
          <dd>
            <CBN :value='$store.state.bsc.supply.buffer' :token='true' />
          </dd>
        </div>

        <div v-if='$store.state.stat.liquidity.count'>
          <dt>
            {{ $t('sFeeLiquidity.statLiquidityAddTransfers') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.liquidity.count' />
          </dd>
        </div>
      </dl>

      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-rose-500 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sFeeLiquidity.liquidityAddHistory') }}
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
                    <CBN :value='tx.tokenAdded' />
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
                    {{ tx.txHash.slice(0, 8) }}...{{ tx.txHash.slice(-4) }}
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
                    {{ $t('txTable.txHash') }}
                  </th>
<!--                  <th scope='col'>-->
<!--                    {{ $t('txTable.BUSD') }}-->
<!--                  </th>-->
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
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>
                      {{ tx.txHash.slice(0, 36) }}...{{ tx.txHash.slice(-4) }}
                    </a>
                  </td>
<!--                  <td>-->
<!--                    <CBN :value='tx.busdAdded' :decimals='18' :padding='6' />-->
<!--                    BUSD-->
<!--                  </td>-->
                  <td>
                    <CBN :value='tx.tokenAdded' :token='true' :padding='2' />
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

export default {
  name: 'SFeeLiquidity',
  data() {
    return {
      transactions: [],
    }
  },
  computed: {
    explorer() {
      return hdfLink
    }
  },
  watch: {
    '$store.state.bsc.synchronizing': async function() {
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.liquidity.reverse().limit(10).toArray()
    }
  }
}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-rose-100;
}

tbody {
  tr {
    &:hover {
      @apply bg-rose-900;

      td {
        @apply text-rose-200;
      }
    }
  }
}
</style>
