<template>
  <div>
    <LAutoWidth class='relative py-12 pt-24 px-4 sm:px-8' :class='{"sm:py-24": !$store.state.wallet.account}'>
      <div v-if='$store.state.bsc.genesis.liquidityCreatedTimestamp === "0"' class="mb-12 md:mb-20 text-center">
        <h2 class="text-base text-violet-300 font-semibold tracking-wide uppercase">
          {{ $t('sMarketValue.genesisTag') }}
        </h2>
        <h3 class="mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200">
          <CCountdown :timestamp='$store.state.bsc.genesis.endTimestamp * 1000'
                      :show-ds='true' v-on:finished='setGenesisCountdownFinished' />
        </h3>
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          <span v-if='$store.state.bsc.genesis.liquidityCreatedTimestamp === "0" && this.genesisCountdownFinished'>
            {{ $t('pGenesis.nowTheLastDeposit') }}
          </span>
          <span v-else>
            {{ $t('sMarketValue.genesisText') }}
            {{ moment($store.state.bsc.genesis.endTimestamp * 1000) }}
          </span>
          <nuxt-link :to='localePath("/genesis")' class='hdf-a-colored'>
            {{ $t('sMarketValue.visitGenesis') }}
          </nuxt-link>
        </p>
      </div>

      <div v-else-if='!launchCountdownFinished' class="mb-12 md:mb-20 text-center">
        <h2 class="text-base text-violet-300 font-semibold tracking-wide uppercase">
          {{ $t('sMarketValue.launchTag') }}
        </h2>
        <h3 class="mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200">
          <CCountdown :timestamp='$store.state.bsc.global.launchTimestamp * 1000'
                      :show-ds='true' v-on:finished='setLaunchCountdownFinished' />
        </h3>
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          {{ $t('sMarketValue.launchText') }}
          {{ moment($store.state.bsc.global.launchTimestamp * 1000) }}
        </p>
      </div>

      <h2 class="text-sm font-semibold text-violet-300 tracking-wide uppercase">
        {{ $t('sMarketValue.tag') }}
      </h2>
      <p class="mt-3 text-2xl font-extrabold text-white break-all">
        {{ $t('sMarketValue.contractAddress_') }}{{ tokenAddress }}
      </p>

      <p class="mt-2 text-base text-gray-400 break-all">
        {{ $t('sMarketValue.launchTime') }}
        {{ moment($store.state.bsc.global.launchTimestamp * 1000) }}
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
        <a target='_blank' :href='hdfLink.exploreToken(tokenAddress)' class='hdf-a-track bg-violet-600 hover:bg-violet-700 space-x-2'>
          <HeroIconSolidCursorClick class="h-5 w-5" />
          <span>
            {{ $t('global.trackWithBSCScan') }}
          </span>
        </a>
      </div>

      <!--  part.1  -->
      <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2">
        <!--  price  -->
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

        <!--  current market value  -->
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            $<CBN :value='String($store.state.bsc.marketValue.cap)' :price='true' :padding='6' /> USD
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.currentMarketValue_') }}
            </span>
            {{ $t('sMarketValue.ofTotalSupplyCap') }}
          </span>
        </p>

        <!--  current total supply  -->
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='String($store.state.bsc.supply.totalSupply)' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.currentTotalSupply_') }}
            </span>
            {{ $t('sMarketValue.blackHoleIncluded') }}
          </span>
        </p>

        <!--  circulating  -->
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.bsc.supply.circulating' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.currentCirculating') }}
            </span>
          </span>
        </p>

        <!--  total supply cap  -->
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.bsc.supply.cap' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.totalSupplyCap_') }}
            </span>
            {{ $t('sMarketValue.fixed') }}
          </span>
        </p>

        <!--  burned  -->
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.bsc.supply.burnedRatio' :decimals='3' :padding='3' /> %

          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sMarketValue.burned') }}
            </span>
            <CBN :value='$store.state.bsc.supply.burned' :token='true' /> HyperDeFi
            {{ $t('sMarketValue.held__') }}
            <a target='_blank'
               :href='hdfLink.exploreToken4address($store.state.bsc.globalAccounts.burn)'
               class='hdf-a-colored'>
              {{ $t('sMarketValue.blackHole') }}
            </a>
            {{ $t('sMarketValue.increasing_') }}
          </span>
        </p>
      </div>

      <div class='mt-6 border-l-8 border-gray-700 py-4 px-4 leading-6 text-base text-gray-500'
           v-if='$store.state.bsc.genesis.liquidityCreatedTimestamp > "0"'>
        <p>
          {{ $t('sMarketValue.thereIsA__') }}
          <CBN :value='$store.state.bsc.supply.gate' :token='true' /> HyperDeFi
          {{ $t('sMarketValue.willBeMinted__') }}
          <CBN :value='$store.state.bsc.global.initLiquidity' :token='true' /> HyperDeFi
          {{ $t('sMarketValue.executeByContract__') }}
          <a class='hover:text-gray-300' target='_blank'
             :href='hdfLink.exploreToken4address($store.state.bsc.globalAccounts.zero)'>
            {{ $t('sMarketValue.clickToMintHistory') }}
          </a>
        </p>
      </div>

      <!--  part.2  -->
      <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"
           v-if='$store.state.bsc.metadata.holders > "1" || !$store.state.wallet.account'>
        <!--  holders  -->
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

        <!--  check harvest  -->
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
    </LAutoWidth>

    <SHarvest v-if='$store.state.wallet.account' />
  </div>
</template>

<script>
import moment from 'moment'
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SDataBoard',
  data() {
    return {
      launchCountdownFinished: false,
      genesisCountdownFinished: false,
    }
  },
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
  },
  methods: {
    setLaunchCountdownFinished(value) {
      this.launchCountdownFinished = value
    },
    setGenesisCountdownFinished(value) {
      this.genesisCountdownFinished = value
    },
  }
}
</script>

<style scoped>

</style>
