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
            {{ $t('sFeeFund.title') }}
          </h2>
          <p>
            {{ $t('sFeeFund.text') }}
          </p>
        </div>

        <div class='body2 to-cool-gray-900 from-gray-900 text-gray-400'>
          <h3>
            {{ $t('sFee.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sFee.takeOnly') }}
            <span v-if='$store.state.bsc.takerFee.fund === $store.state.bsc.makerFee.fund && $store.state.bsc.makerFee.fund === $store.state.bsc.whaleFee.fund'>
              {{ $store.state.bsc.takerFee.fund }}%
              {{ $t('sFee.fromTakerMakerWhale') }}
            </span>
            <span v-else>
              <span v-if='$store.state.bsc.takerFee.fund > "0"'>
                {{ $store.state.bsc.takerFee.fund }}%
                {{ $t('sFee.fromTaker') }}
              </span>
              <span v-if='$store.state.bsc.makerFee.fund > "0"'>
                {{ $store.state.bsc.makerFee.fund }}%
                {{ $t('sFee.fromMaker') }}
              </span>
              <span v-if='$store.state.bsc.whaleFee.fund > "0"'>
                {{ $store.state.bsc.whaleFee.fund }}%
                {{ $t('sFee.fromWhale') }}
              </span>
            </span>
            {{ $t('sFeeFund.thenDeposit__') }}
          </p>
        </div>
      </main>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SFeeFund',
}
</script>

<style scoped>

</style>
