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
        Realtime data on BSC chain
      </h2>
      <p class="mt-3 text-2xl font-extrabold text-white break-all">
        Contract Address: {{ tokenAddress }}
      </p>

      <p class="mt-2 text-base text-gray-400 break-all">
        Token Name/Symbol:
        <span class='font-bold text-white'>{{ $store.state.bsc.metadata.tokenSymbol }}</span>;
        with
        <span class='font-bold text-white'>{{ $store.state.bsc.metadata.tokenDecimals }} decimals</span>
      </p>

      <div class="mt-5 inline-flex rounded-md shadow">
        <a target='_blank' :href='explorer.exploreToken(tokenAddress)' class="a-track bg-violet-600 hover:bg-violet-700 space-x-2">
          <HeroIconSolidCursorClick class="h-5 w-5" />
          <span>
            Track on BSC Scan Explorer
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
              Latest Price,
            </span>
            provided by
            <CPancakeTo class='font-medium text-violet-300'>PancakeSwap Finance</CPancakeTo>
          </span>
        </p>


        <p>
          <span class="block text-2xl font-bold text-violet-300">
            $<CBN :value='String($store.state.bsc.marketValue.totalSupply)' :price='true' :padding='6' /> USD
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              Circulating Market Cap,
            </span>
            of current total supply.
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='String($store.state.bsc.supply.totalSupply)' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              Current Total Supply,
            </span>
            which is also the circulating total supply
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.bsc.supply.cap' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              Total Supply Cap
            </span>
            decreasing...
          </span>
        </p>

        <p v-if='$store.state.bsc.metadata.holders > "1"'>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='String($store.state.bsc.metadata.holders)' />
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              Holders,
            </span>
            are holding HyperDeFi in their wallets.
          </span>
        </p>

        <p v-if='!$store.state.wallet.account' class='transition duration-300 ease-out'>
          <span class="block inline-flex items-center space-x-2 text-2xl font-bold text-violet-300">
            <HeroIconSolidFire class='inline w-6 h-6' />
            <span>
              Check your
              <span class='text-gray-200'>
                harvest?
              </span>
            </span>
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <BtnConnectWallet class='focus:outline-none'>
              <span class="font-medium text-white">
                Click here
              </span>
              to connect wallet...
            </BtnConnectWallet>
          </span>
        </p>
      </div>

      <div v-if='$store.state.wallet.account' class="transition duration-300 ease-in-out mt-12 border-t-2 border-gray-700 pt-12">
        <CH3>
          <span>
            Your
          </span>
          <span class='hidden lg:inline'>
            harvest and
          </span>
          <span>
            balance
          </span>

          <template #tag>
            Tax Farm
          </template>
          <template #desc>
            <p class='truncate'>
              Hello,
              <span v-if='$store.state.wallet.username'>
                {{ $store.state.wallet.username }}
              </span>
              <span v-else>
                {{ $store.state.wallet.account.slice(0, 12) }}...{{ $store.state.wallet.account.slice(-4) }}
              </span>
            </p>
          </template>
        </CH3>

        <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
          <p>
            <span class="block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2">
              <HeroIconSolidFire class='inline w-6 h-6' />
              <CBN :value='$store.state.wallet.power' :token='true' />
            </span>
            <span class="mt-1 block text-base text-gray-300">
              Your
              <span class="font-medium text-white">
                Harvest Power
              </span>
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-violet-300">
              <CBN :value='$store.state.wallet.harvest' :token='true' /> HyperDeFi
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                To Harvest,
              </span>
              on block number #<CBN :value='$store.state.bsc.blockNumber' />
            </span>
          </p>

          <p v-if='$store.state.wallet.harvest > "0"' class='transition duration-300 ease-out'>
            <BtnGetHarvest class='a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
              <span class='hidden lg:inline'>
                Click to
              </span>
              <span>
                Harvest all
              </span>
            </BtnGetHarvest>
          </p>

          <p v-if='$store.state.wallet.totalHarvest > "0"'>
            <span class="block text-2xl font-bold text-violet-300">
              <CBN :value='$store.state.wallet.totalHarvest' :token='true' /> HyperDeFi
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                Total
              </span>
              already harvested
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-violet-300">
              <CBN :value='$store.state.wallet.balance' :token='true' /> HyperDeFi
            </span>
            <span class="mt-1 block text-base text-gray-300">
              <span class="font-medium text-white">
                Balance,
              </span>
              in your wallet
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
    explorer() {
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
