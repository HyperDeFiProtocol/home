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
            {{ $store.state.bsc.global.autoSwapNumeratorMin }}/<CBN :value='$store.state.bsc.global.autoSwapDenominator' />{{ $t('sFeeLiquidity.thenDeposit3__') }}
<!--            max limit is <CBN :value='$store.state.bsc.global.autoSwapAmountMax' :token='true' />-->
          </p>

          <p>
            {{ $t('sFeeLiquidity.newLPTokens__') }}
          </p>
        </div>
      </main>

      <dl v-if='$store.state.bsc.supply.liquidity > "0"' class='hdf-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-3'>

        <div>
          <dt>
            {{ $t('sFeeLiquidity.statLiquidityMarketValue') }}
          </dt>
          <dd>
            $<CBN :value='String($store.state.bsc.marketValue.liquidity)' :price='true' :padding='9' /> USD
          </dd>
        </div>

        <div>
          <dt>
            {{ $t('sFeeLiquidity.statLiquidity') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.liquidity)' :token='true' />
          </dd>
        </div>

        <div>
          <dt class='inline-flex justify-center'>
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
      </dl>

    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SFeeLiquidity',
}
</script>

<style scoped>
.hdf-stat div dt {
  @apply text-rose-100;
}
</style>
