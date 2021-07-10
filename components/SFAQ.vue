<template>
  <div>
    <LAutoWidth class="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
      </div>
      <div class="mt-20">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div>
            <dt>
              How does the transaction fee work?
            </dt>
            <dd>
              HyperDeFi has a 10%-30% transaction fee
              ({{ $store.state.bsc.takerFee.total }}% for Taker,
              {{ $store.state.bsc.makerFee.total }}% for Maker,
              {{ $store.state.bsc.whaleFee.total }}% for Whale).
              Please check the Trade Fee Section of the home page.
            </dd>
          </div>

          <div>
            <dt>
              How do I buy HyperDeFi? Is it safe?
            </dt>
            <dd>
              HyperDeFi is based on BSC Chain (Binance Smart Chain) and the liquidity is locked in PancakeSwap.
              It is completely safe. You can get HyperDeFi from
              <CPancakeTo class='hdf-a-colored'>
                PancakeSwap Finance
              </CPancakeTo>.
            </dd>
          </div>

          <div>
            <dt>
              What makes HyperDeFi different from other tokens?
            </dt>
            <dd>
              Holding is farming; 100% decentralized; no reservation for team nor anyone;
              more healthier 3 trade fee levels for Taker, Maker, and Whale, heavy tax for scripts;
              a FOMO prize is accumulating there to incentive trading consistently;
              and even a auto-burning scheme to keep making HyperDeFi deflationary in the long term;
              and one more thing: the upcoming DApps.
            </dd>
          </div>


          <div>
            <dt>
              Is the HyperDeFi auto-farming?
            </dt>
            <dd>
              Yes, Safe Auto-farming: 26.6% - 30% of all transaction fees are distributed to holders.
              You will see your harvest (a wealth accumulation) in the wallet right away once you start holding.
            </dd>
          </div>
        </dl>
      </div>
    </LAutoWidth>
  </div>

</template>

<script>
export default {
  name: 'SFAQ'
}
</script>

<style scoped lang='scss'>

dt {
  @apply font-semibold text-white;
}

dd {
  @apply mt-3 text-gray-400;
}

</style>
