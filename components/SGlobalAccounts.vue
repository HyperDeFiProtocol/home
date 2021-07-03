<template>
  <div>
    <LAutoWidth class='py-12 px-4 md:py-24 md:px-8'>
      <CH2>
        <span class="text-violet-400">
          {{ $t('sGlobalAccounts.title1') }}
        </span>
        <span>
          {{ $t('sGlobalAccounts.title2') }}
        </span>

        <!--        <template #tag>-->
        <!--          DApps-->
        <!--        </template>-->
        <template #desc>
          {{ $t('sGlobalAccounts.desc') }}
        </template>
      </CH2>


      <div class="mt-8 sm:mt-16 rounded-lg bg-gray-700 overflow-hidden shadow divide-y divide-gray-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <div class="div-grid rounded-tl-lg rounded-tr-lg sm:rounded-tr-none">
          <div>
            <span class="span-icon-wrapper bg-gray-50 text-gray-700">
              <HeroIconOutlineCube class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreAddress($store.state.bsc.globalAccounts.zero)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.lpHolder') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.zero }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>

        <div class="div-grid sm:rounded-tr-lg">
          <div>
            <span class="span-icon-wrapper bg-emerald-50 text-emerald-700">
              <HeroIconOutlineBreaker class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.burn)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.burned') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.burn.toLowerCase() }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>

        <div class="div-grid">
          <div>
            <span class="span-icon-wrapper bg-rose-50 text-rose-700">
              <HeroIconOutlineServer class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.buffer)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.buffer') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.buffer }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>

        <div class="div-grid">
          <div>
            <span class="span-icon-wrapper bg-violet-50 text-violet-700">
              <HeroIconOutlineCurrencyDollar class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.tax)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.tax') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.tax }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>

        <div class="div-grid sm:rounded-bl-lg">
          <div>
            <span class="span-icon-wrapper bg-violet-50 text-violet-700">
              <HeroIconSolidGift class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.airdrop)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.airdrop') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.airdrop }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>



        <div class="div-grid rounded-bl-lg rounded-br-lg sm:rounded-bl-none">
          <div>
            <span class="span-icon-wrapper bg-orange-50 text-orange-700">
              <HeroIconOutlineClock class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.fomo)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ $t('sGlobalAccounts.fomo') }}
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.fomo }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <IconArrowOut class="h-6 w-6" />
          </span>
        </div>

      </div>

    </LAutoWidth>
  </div>

</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SGlobalAccounts',
  computed: {
    explorer() {
      return hdfLink
    },
  }
}
</script>

<style scoped>
.div-grid {
  @apply relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500;
}

.span-icon-wrapper {
  @apply rounded-lg inline-flex p-3 ring-4 ring-white;
}

.p-address {
  @apply mt-2 text-sm text-gray-400 break-all;
}

.span-out-wrapper {
  @apply pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400;
}

</style>
