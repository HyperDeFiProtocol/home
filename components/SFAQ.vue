<template>
  <div>
    <LAutoWidth class="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <CHSimple>
        {{ $t('sFAQ.title') }}
      </CHSimple>

      <div class="mt-20">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div>
            <dt>
              {{ $t('sFAQ.qFee') }}
            </dt>
            <dd>
              {{ $t('sFAQ.aFee1') }}
              {{ $store.state.bsc.takerTax.total }}%
              {{ $t('sFAQ.fromTaker') }}
              {{ $store.state.bsc.makerTax.total }}%
              {{ $t('sFAQ.fromMaker') }}
              {{ $store.state.bsc.whaleTax.total }}%
              {{ $t('sFAQ.fromWhale') }}
              {{ $t('sFAQ.aFee2') }}
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('sFAQ.qBuyAndSafety') }}
            </dt>
            <dd>
              {{ $t('sFAQ.aBuyAndSafety1') }}
              <CPancakeTo class='hdf-a-colored'>
                PancakeSwap Finance
              </CPancakeTo>
              {{ $t('sFAQ.aBuyAndSafety2') }}
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('sFAQ.qDifferent') }}
            </dt>
            <dd>
              {{ $t('sFAQ.aDifferent') }}
            </dd>
          </div>


          <div>
            <dt>
              {{ $t('sFAQ.qAutoFarming') }}
            </dt>
            <dd>
              {{ $t('sFAQ.aAutoFarming') }}
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
