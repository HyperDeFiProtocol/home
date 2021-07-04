<template>
  <div>
    <LAutoWidth class='relative py-12 px-4 sm:py-24 sm:px-8'>
      <div v-if='!launchCountdown.finished' class="mb-12 md:mb-20 text-center">
        <h2 class="text-base text-violet-300 font-semibold tracking-wide uppercase">LAUNCH TIME</h2>
        <h1 class="mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200">
          {{ launchCountdown.hh }}:{{ launchCountdown.mm }}:{{ launchCountdown.ss }}
        </h1>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Trading is allowed after {{ moment($store.state.bsc.global.launchTimestamp * 1000) }}
        </p>
      </div>

      <h2 class="text-sm font-semibold text-violet-300 tracking-wide uppercase">
        {{ $t('sMarketValue.tag') }}
      </h2>
      <p class="mt-3 text-2xl font-extrabold text-white break-all">
        {{ $t('sMarketValue.contractAddress_') }}{{ tokenAddress }}
      </p>

      <p class="mt-2 text-base text-gray-400 break-all">
        {{ $t('sMarketValue.tokenNameSymbol_') }}
        <span class='font-bold text-white'>{{ $store.state.bsc.metadata.tokenSymbol }}</span>
        {{ $t('sMarketValue.with') }}
        <span class='font-bold text-white'>
          {{ $store.state.bsc.metadata.tokenDecimals }}
          {{ $t('sMarketValue.decimals') }}
        </span>
      </p>

      <div class="mt-5 inline-flex rounded-md shadow">
        <a target='_blank' :href='hdfLink.exploreToken(tokenAddress)' class="a-track bg-violet-600 hover:bg-violet-700 space-x-2">
          <HeroIconSolidCursorClick class="h-5 w-5" />
          <span>
            {{ $t('sMarketValue.trackWith__') }}
          </span>
        </a>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2">
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            $<CBN :value='String($store.state.bsc.metadata.price)' :price='true' :padding='18' /> USD
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.latestPrice_') }}
            </span>
            {{ $t('sMarketValue.providedBy') }}
            <CPancakeTo class='font-medium text-violet-300'>PancakeSwap Finance</CPancakeTo>
          </span>
        </p>


        <p>
          <span class="block text-2xl font-bold text-violet-300">
            $<CBN :value='String($store.state.bsc.marketValue.totalSupply)' :price='true' :padding='6' /> USD
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.circulatingMarketCap_') }}
            </span>
            {{ $t('sMarketValue.ofCurrentTotalSupply') }}
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='String($store.state.bsc.supply.totalSupply)' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.currentTotalSupply_') }}
            </span>
            {{ $t('sMarketValue._alsoTheCirculatingTotalSupply') }}
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.bsc.supply.cap' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.totalSupplyCap_') }}
            </span>
            {{ $t('sMarketValue.decreasing_') }}
          </span>
        </p>

        <p v-if='$store.state.bsc.metadata.holders > "1"'>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='String($store.state.bsc.metadata.holders)' />
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.holders_') }}
            </span>
            {{ $t('sMarketValue._holding_') }}
          </span>
        </p>

        <p v-if='!$store.state.wallet.account' class='transition duration-300 ease-out'>
          <span class="block inline-flex items-center space-x-2 text-2xl font-bold text-violet-300">
            <HeroIconSolidFire class='inline w-6 h-6' />
            <span>
              {{ $t('sMarketValue.checkYour') }}
              <span class='text-gray-200'>
                {{ $t('sMarketValue.harvest_') }}
              </span>
            </span>
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <BtnConnectWallet class='inline-flex text-base focus:outline-none'>
              <span class="font-medium text-white">
                {{ $t('sMarketValue.clickHere') }}
              </span>
              <span class='text-violet-300'>
                {{ $t('sMarketValue.toConnectWallet_') }}
              </span>
            </BtnConnectWallet>
          </span>
        </p>
      </div>

      <div v-if='$store.state.wallet.account' class="transition duration-300 ease-in-out mt-12 border-t-2 border-gray-700 pt-12">
        <CH3>
          <span>
            {{ $t('sMarketValue.yourBalance') }}
          </span>
          <span class='hidden lg:inline'>
            {{ $t('sMarketValue.andHarvest') }}
          </span>

          <template #tag>
            {{ $t('sMarketValue.taxFarm') }}
          </template>
          <template #desc>
            <p class='truncate'>
              {{ $t('sMarketValue.hello_') }}
              <span v-if='$store.state.wallet.username'>
                {{ $store.state.wallet.username }}
              </span>
              <span v-else class='font-mono'>
                {{ $store.state.wallet.account.slice(0, 10) }}...{{ $store.state.wallet.account.slice(-4) }}
              </span>
            </p>
          </template>
        </CH3>

        <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
          <p>
            <span class="block text-2xl font-bold text-violet-300">
              <CBN :value='$store.state.wallet.balance' :token='true' /> HyperDeFi
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                {{ $t('sMarketValue.balance_') }}
              </span>
              {{ $t('sMarketValue.inYourWallet') }}
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2">
              <HeroIconSolidFire v-if='$store.state.wallet.harvest > "0"' class='inline w-6 h-6' />
              <CBN :value='$store.state.wallet.harvest' :token='true' />
              <span>
                HyperDeFi
              </span>
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                {{ $t('sMarketValue.toHarvest_') }}
              </span>
              {{ $t('sMarketValue.onBlockNumber') }}<CBN :value='$store.state.bsc.blockNumber' />
            </span>
          </p>

          <p v-if='$store.state.wallet.harvest > "0"' class='transition duration-300 ease-out'>
            <BtnTakeHarvest class='a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
              <span class='hidden lg:inline'>
                {{ $t('sMarketValue.clickHereTo') }}
              </span>
              <span>
                {{ $t('sMarketValue.harvestAll') }}
              </span>
            </BtnTakeHarvest>
          </p>

          <p v-if='$store.state.wallet.totalHarvest > "0"'>
            <span class="block text-2xl font-bold text-violet-300">
              <CBN :value='$store.state.wallet.totalHarvest' :token='true' /> HyperDeFi
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                {{ $t('sMarketValue.total_') }}
              </span>
              {{ $t('sMarketValue.alreadyHarvested') }}
            </span>
          </p>


        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import moment from 'moment'
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SMarketValue',
  computed: {
    moment() {
      return moment
    },
    tokenAddress() {
      return process.env.tokenAddress
    },
    hdfLink() {
      return hdfLink
    },
    launchCountdown() {
      return this.$store.state.bsc.global.launchCountdown
    }
  }
}
</script>

<style scoped>

</style>
