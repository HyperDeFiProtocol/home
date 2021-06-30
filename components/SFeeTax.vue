<template>
  <div class='section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-violet-50 text-violet-700">
        <HeroIconOutlineCurrencyDollar class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header1'>
          <h2 class='text-violet-400'>
            Tax Farm
          </h2>
          <p>
            For every HyperDeFi holder, keep the balance growing by just holding it.
          </p>
        </div>

        <div class='body2 to-violet-900 from-violet-900 text-violet-300'>
          <h3>
            For each transaction:
          </h3>

          <p>
            Take
            <span v-if='$store.state.bsc.takerFee.tax > "0"'>
              {{ $store.state.bsc.takerFee.tax }}% from taker,
            </span>
            <span v-if='$store.state.bsc.makerFee.tax > "0"'>
              {{ $store.state.bsc.makerFee.tax }}% from maker,
            </span>
            <span v-if='$store.state.bsc.whaleFee.tax > "0"'>
              {{ $store.state.bsc.whaleFee.tax }}% from whale,
            </span>
            then deposit to the Tax farm;
            Each HyperDeFi holder can share them on a pro-rata basis,
            that means you can earn more HyperDeFi just by holding it in your wallet,
            get your harvest weekly, or even daily.
          </p>

          <div v-if='$store.state.bsc.supply.tax > "0"' class="mt-5 inline-flex rounded-md shadow">
            <a target='_blank' :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.tax)' class="a-track bg-violet-700 hover:bg-violet-600 space-x-2">
              <HeroIconSolidCursorClick class="h-5 w-5" />
              <span>
                Track all tax transfers
              </span>
            </a>
          </div>
        </div>

      </main>

      <dl v-if='$store.state.bsc.supply.totalTax > "0"' class="dl-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-3">
        <div>
          <dt>
            Total Tax
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.totalTax)' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            Total Tax Market Value
          </dt>
          <dd>
            $<CBN :value='String($store.state.bsc.marketValue.totalTax)' :price='true' :padding='9' /> USD
          </dd>
        </div>

        <div>
          <dt>
            Tax Pool
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.tax)' :token='true' />
          </dd>
        </div>
      </dl>
    </LAutoWidth>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SFeeTax',
  computed: {
    explorer() {
      return hdfLink
    },
  }
}
</script>

<style scoped>
.dl-stat div dt {
  @apply text-violet-100;
}
</style>
