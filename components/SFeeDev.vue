<template>
  <div class='section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-cool-gray-50 text-cool-gray-700">
        <HeroIconOutlineCode class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>


        <div class='header1'>
          <h2 class='text-cool-gray-400'>
            Dev
          </h2>
          <p>
            For the promotion of HyperDeFi.
          </p>
        </div>

        <div class='body2 to-cool-gray-900 from-gray-900 text-gray-400'>
          <h3>
            For each transaction:
          </h3>

          <p>
            Take only
            <span v-if='$store.state.bsc.takerFee.dev === $store.state.bsc.makerFee.dev && $store.state.bsc.makerFee.dev === $store.state.bsc.whaleFee.dev'>
              {{ $store.state.bsc.takerFee.dev }}% from taker, maker, and whale,
            </span>
            <span v-else>
              <span v-if='$store.state.bsc.takerFee.dev > "0"'>
                {{ $store.state.bsc.takerFee.dev }}% from taker,
              </span>
              <span v-if='$store.state.bsc.makerFee.dev > "0"'>
                {{ $store.state.bsc.makerFee.dev }}% from maker,
              </span>
              <span v-if='$store.state.bsc.whaleFee.dev > "0"'>
                {{ $store.state.bsc.whaleFee.dev }}% from whale,
              </span>
            </span>
            then send to the team fund.
            For amortizing development costs, funding marketing, communities and other operating costs...
          </p>
        </div>
      </main>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SFeeDev',
}
</script>

<style scoped>

</style>
