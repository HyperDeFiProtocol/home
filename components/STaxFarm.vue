<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-violet-50 text-violet-700">
        <HeroIconOutlineCurrencyDollar class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header1'>
          <h2 class='text-violet-400'>
            {{ $t('sTaxFarm.title') }}
          </h2>
          <p>
            {{ $t('sTaxFarm.text') }}
          </p>
        </div>

        <div class='body2 to-violet-900 from-violet-900 text-violet-300'>
          <h3>
            {{ $t('sTax.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sTax.take') }}
            <span v-if='$store.state.bsc.takerTax.tax > "0"'>
              {{ $store.state.bsc.takerTax.tax }}%
              {{ $t('sTax.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerTax.tax > "0"'>
              {{ $store.state.bsc.makerTax.tax }}%
              {{ $t('sTax.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleTax.tax > "0"'>
              {{ $store.state.bsc.whaleTax.tax }}%
              {{ $t('sTax.fromWhale') }}
            </span>
            {{ $t('sTaxFarm.takeThen__') }}
          </p>

          <div v-if='$store.state.bsc.supply.tax > "0"' class="mt-5 inline-flex rounded-md shadow">
            <nuxt-link :to='localeLocation("/history/tax")'
                       class='hdf-a-track bg-violet-700 hover:bg-violet-600 space-x-2'>
              <HeroIconSolidCursorClick class="h-5 w-5" />
              <span>
                {{ $t('sTaxFarm.track__') }}
              </span>
            </nuxt-link>
          </div>
        </div>

      </main>

      <dl v-if='$store.state.bsc.supply.totalTax > "0"' class='hdf-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-2'>
        <div>
          <dt>
            {{ $t('sTaxFarm.totalTax') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.totalTax)' :token='true' />
          </dd>
        </div>

<!--        <div>-->
<!--          <dt>-->
<!--            {{ $t('sTaxFarm.totalTaxMarketValue') }}-->
<!--          </dt>-->
<!--          <dd>-->
<!--            $<CBN :value='String($store.state.bsc.marketValue.totalTax)' :price='true' :padding='9' /> USD-->
<!--          </dd>-->
<!--        </div>-->

        <div>
          <dt>
            {{ $t('sTaxFarm.taxPool') }}
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
  name: 'STaxFarm',
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
