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
            {{ $t('sTaxLiquidity.title') }}
          </h2>
          <p>
            {{ $t('sTaxLiquidity.text') }}
          </p>
        </div>

        <div class='body1 to-red-900 from-rose-900 text-rose-300'>
          <h3>
            {{ $t('sTax.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sTax.take') }}
            <span v-if='$store.state.bsc.takerTax.liquidity > "0"'>
              {{ $store.state.bsc.takerTax.liquidity }}%
              {{ $t('sTax.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerTax.liquidity > "0"'>
              {{ $store.state.bsc.makerTax.liquidity }}%
              {{ $t('sTax.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleTax.liquidity > "0"'>
              {{ $store.state.bsc.whaleTax.liquidity }}%
              {{ $t('sTax.fromWhale') }}
            </span>
            {{ $t('sTaxLiquidity.thenDeposit1__') }}
            <CBN :value='autoSwapAmountMin' :token='true' /> HyperDeFi
            {{ $t('sTaxLiquidity.thenDeposit2__') }}
            {{ $store.state.bsc.global.autoSwapNumeratorMin }}/<CBN :value='$store.state.bsc.global.autoSwapDenominator' />
            {{ $t('sTaxLiquidity.thenDeposit3__') }}
<!--            max limit is <CBN :value='$store.state.bsc.global.autoSwapAmountMax' :token='true' />-->
          </p>

          <p>
            {{ $t('sTaxLiquidity.newLPTokens__') }}
          </p>
        </div>
      </main>

      <dl v-if='$store.state.bsc.supply.liquidity > "0"'
          class='hdf-stat grid grid-cols-1 xl:max-w-7xl'
          :class='{"xl:grid-cols-3": $store.state.stat.liquidity.count, "xl:grid-cols-2": !$store.state.stat.liquidity.count}'>

<!--        <div>-->
<!--          <dt>-->
<!--            {{ $t('sTaxLiquidity.statLiquidityMarketValue') }}-->
<!--          </dt>-->
<!--          <dd>-->
<!--            $<CBN :value='String($store.state.bsc.marketValue.liquidity)' :price='true' :padding='9' /> USD-->
<!--          </dd>-->
<!--        </div>-->

        <div>
          <dt>
            {{ $t('sTaxLiquidity.statLiquidity') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.liquidity)' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            <span>
              {{ $t('sTaxLiquidity.statBuffer') }}
            </span>
            <span v-if='$store.state.bsc.global.autoSwapReady'>
              {{ $t('sTaxLiquidity.statReady') }}
            </span>
          </dt>
          <dd>
            <CBN :value='$store.state.bsc.supply.buffer' :token='true' />
          </dd>
        </div>

        <div v-if='$store.state.stat.liquidity.count'>
          <dt>
            {{ $t('sTaxLiquidity.statLiquidityAddTransfers') }}
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
          {{ $t('sTaxLiquidity.liquidityAddHistory') }}
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
import BN from 'bn.js'
import hpLink from '~/utils/hpLink'
import fn from '~/utils/functions'

export default {
  name: 'STaxLiquidity',
  data() {
    return {
      transactions: [],
    }
  },
  computed: {
    explorer() {
      return hpLink
    },

    autoSwapAmountMin() {
      if (this.$store.state.bsc.genesis.liquidityCreatedTimestamp !== '0') {
        return this.$store.state.bsc.global.autoSwapAmountMin
      } else {
        return new BN(this.$store.state.bsc.global.initLiquidity)
          .mul(new BN(this.$store.state.bsc.global.autoSwapNumeratorMin))
          .div(new BN(this.$store.state.bsc.global.autoSwapDenominator))
      }
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
      this.transactions = await this.$nuxt.context.app.db.buffer
        .where('sender')
        .equals(this.$store.state.bsc.globalAccounts.buffer)
        .reverse()
        .limit(10)
        .toArray()
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
