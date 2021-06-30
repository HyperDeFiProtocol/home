<template>
  <div class='section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-rose-50 text-rose-700">
        <HeroIconOutlineServer class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>


        <div class='header2'>
          <h2 class='text-rose-400'>
            LP Acquisition
          </h2>
          <p>
            Globally, keep making the PancakeSwap liquidity stronger.
          </p>
        </div>

        <div class='body1 to-red-900 from-rose-900 text-rose-300'>
          <h3>
            For each transaction:
          </h3>

          <p>
            Take
            <span v-if='$store.state.bsc.takerFee.liquidity > "0"'>
              {{ $store.state.bsc.takerFee.liquidity }}% from taker,
            </span>
            <span v-if='$store.state.bsc.makerFee.liquidity > "0"'>
              {{ $store.state.bsc.makerFee.liquidity }}% from maker,
            </span>
            <span v-if='$store.state.bsc.whaleFee.liquidity > "0"'>
              {{ $store.state.bsc.whaleFee.liquidity }}% from whale,
            </span>
            then send to the Buffer pool.
            When the balance of Buffer pool grows larger than
            <CBN :value='$store.state.bsc.global.autoSwapAmountMin' :token='true' /> HyperDeFi
            ({{ $store.state.bsc.global.autoSwapNumeratorMin }}/<CBN :value='$store.state.bsc.global.autoSwapDenominator' />
            of the PancakeSwap liquidity,
            max limit is <CBN :value='$store.state.bsc.global.autoSwapAmountMax' :token='true' />),
            half of them will be swapped to BUSD, and add into the liquidity with the other half.
          </p>

          <p>
            New LP Tokens will be sent to the black-hole address, nobody can remove the global liquidity.
          </p>
        </div>
      </main>

      <dl v-if='$store.state.bsc.supply.liquidity > "0"' class='hdf-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-3'>

        <div>
          <dt>
            Liquidity Market Value
          </dt>
          <dd>
            $<CBN :value='String($store.state.bsc.marketValue.liquidity)' :price='true' :padding='9' /> USD
          </dd>
        </div>

        <div>
          <dt>
            Liquidity
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.liquidity)' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            Buffer
            <span v-if='$store.state.bsc.global.autoSwapReady'>
              Ready
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
