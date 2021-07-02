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
            {{ $t('sFeeTax.title') }}
          </h2>
          <p>
            {{ $t('sFeeTax.text') }}
          </p>
        </div>

        <div class='body2 to-violet-900 from-violet-900 text-violet-300'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            Take
            <span v-if='$store.state.bsc.takerFee.tax > "0"'>
              {{ $store.state.bsc.takerFee.tax }}%
              {{ $t('sFee.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.tax > "0"'>
              {{ $store.state.bsc.makerFee.tax }}%
              {{ $t('sFee.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.tax > "0"'>
              {{ $store.state.bsc.whaleFee.tax }}%
              {{ $t('sFee.fromWhale') }}
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

      <dl v-if='$store.state.bsc.supply.totalTax > "0"' class='hdf-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-3'>
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

<!--      <div class='mt-6 md:mt-20 bg-violet-900 rounded-md py-10 px-8 lg:flex lg:items-center lg:justify-between'>-->
<!--        <div class="text-3xl font-extrabold tracking-tight">-->
<!--          <span class='text-violet-400'>Check your</span>-->
<!--          <span class="text-gray-200">harvest?</span>-->
<!--        </div>-->
<!--        <div class="mt-6 lg:mt-0">-->
<!--          <BtnConnectWallet class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-700 hover:bg-violet-600 focus:outline-none" />-->
<!--        </div>-->
<!--      </div>-->

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
.hdf-stat div dt {
  @apply text-violet-100;
}
</style>
