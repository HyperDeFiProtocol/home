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
      <span class="block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2">
        <HeroIconSolidFire v-if='account.harvest > "0"' class='inline w-6 h-6' />
        <CBN :value='account.harvest' :token='true' />
        <span>
          HyperDeFi
        </span>
      </span>
      <span class="mt-1 block text-base text-gray-300">
        <span class="font-medium text-white">
          {{ $t('sHarvest.toHarvest_') }}
        </span>
        {{ $t('sHarvest.onBlockNumber') }}<CBN :value='$store.state.bsc.blockNumber' />
      </span>
    </p>

    <p v-if='account.address === $store.state.wallet.account && account.harvest > "0"' class='transition duration-300 ease-out'>
      <BtnTakeHarvest class='hdf-a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
        <HeroIconSolidFire v-if='account.harvest > "0"' class='inline w-6 h-6' />
        <span class='hidden lg:inline'>
          {{ $t('sHarvest.clickHereTo') }}
        </span>
        <span>
          {{ $t('sHarvest.harvestAll') }}
        </span>
      </BtnTakeHarvest>
    </p>

    <p v-if='account.totalHarvest > "0"'>
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
