<template>
  <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
    <p>
      <span class="block text-2xl font-bold text-violet-300">
        <CBN :value='account.balance' :token='true' /> HyperDeFi
      </span>
      <span class="mt-1 block text-base text-gray-300">
        <span class="font-medium text-white">
          {{ $t('sHarvest.balance_') }}
        </span>
        {{ $t('sHarvest.inYourWallet') }}
      </span>
    </p>

    <p>
      <span class="block text-2xl font-bold text-violet-300">
        <CBN :value='account.totalHarvest' :token='true' /> HyperDeFi
      </span>
      <span class="mt-1 block text-base text-gray-300">
        <span class="font-medium text-white">
          {{ $t('sHarvest.total_') }}
        </span>
        {{ $t('sHarvest.alreadyHarvested') }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CAccountBalance',
  props: {
    'account': {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
