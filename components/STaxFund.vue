<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class="span-icon bg-cool-gray-50 text-cool-gray-700">
        <HeroIconOutlineCode class="h-8 w-8" />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header1'>
          <h2 class='text-cool-gray-400'>
            {{ $t('sTaxFund.title') }}
          </h2>
          <p>
            {{ $t('sTaxFund.text') }}
          </p>
        </div>

        <div class='body2 to-cool-gray-900 from-gray-900 text-gray-400'>
          <h3>
            {{ $t('sTax.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sTax.takeOnly') }}
            <span v-if='$store.state.bsc.takerTax.fund === $store.state.bsc.makerTax.fund && $store.state.bsc.makerTax.fund === $store.state.bsc.whaleTax.fund'>
              {{ $store.state.bsc.takerTax.fund }}%
              {{ $t('sTax.fromTakerMakerWhale') }}
            </span>
            <span v-else>
              <span v-if='$store.state.bsc.takerTax.fund > "0"'>
                {{ $store.state.bsc.takerTax.fund }}%
                {{ $t('sTax.fromTaker') }}
              </span>
              <span v-if='$store.state.bsc.makerTax.fund > "0"'>
                {{ $store.state.bsc.makerTax.fund }}%
                {{ $t('sTax.fromMaker') }}
              </span>
              <span v-if='$store.state.bsc.whaleTax.fund > "0"'>
                {{ $store.state.bsc.whaleTax.fund }}%
                {{ $t('sTax.fromWhale') }}
              </span>
            </span>
            {{ $t('sTaxFund.thenDeposit__') }}
          </p>
        </div>
      </main>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'STaxFund',
}
</script>

<style scoped>

</style>
