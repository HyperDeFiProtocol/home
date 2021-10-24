<template>
  <div>
    <div class='border-l-8 border-gray-700 py-4 px-4 leading-6 text-base text-gray-500'>
      <p class='font-bold text-lg'>
        {{ $t('sDataBoard.__mintSupplyGradually__') }}
      </p>
      <p class='mt-3'>
        {{ $t('sDataBoard.__mintWhen__') }}
        {{ $store.state.bsc.global.distOfInit }}%
        {{ $t('sDataBoard.__mintDistOfInit__') }}
        <CBN :value='$store.state.bsc.global.distThreshold' :token='true' /> HyperDeFi
        {{ $t('sDataBoard.__mintDifference__') }}
        <span v-if='$route.path.endsWith("/buffer") || $route.path.endsWith("/buffer/mint")'>
          {{ $t('sDataBoard.__mintTypeInTable__') }}
          <span class='text-sky-500'>
            {{ $t('txTable.mint') }}
          </span>
          {{ $t('sDataBoard.__mintTypeInTable2__') }}
        </span>
        {{ $t('sDataBoard.__mintTheAmount__') }}
        <CBN :value='$store.state.bsc.supply.gate' :token='true' /> HyperDeFi
        {{ $t('sDataBoard.__mintWhich__') }}
        <CBN :value='$store.state.bsc.supply.gateRatio' :decimals='3' />%
        {{ $t('sDataBoard.__mintOfTheTotal__') }}

        <nuxt-link v-if='$route.path.endsWith("/buffer")'
                   class='hdf-a-colored'
                   :to='localePath("/history/buffer/mint")'
        >
          {{ $t('sDataBoard.__mintDistHistoryOnly__') }}

        </nuxt-link>
        <nuxt-link v-else-if='$route.path.endsWith("/buffer/mint")'
                   class='hdf-a-colored'
                   :to='localePath("/history/buffer")'
        >
          {{ $t('sDataBoard.__mintFullBufferHistory__') }}
        </nuxt-link>
        <nuxt-link v-else class='hdf-a-colored'
                   :to='localePath("/history/buffer/mint")'
        >
          {{ $t('sDataBoard.__mintDistHistory__') }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSupplyMint',
  computed: {
    //
  },
}
</script>

<style scoped>

</style>
