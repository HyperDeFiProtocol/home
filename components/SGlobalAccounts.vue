<template>
  <div>
    <LAutoWidth class='py-12 px-4 md:py-24 md:px-8'>
      <CH2>
        <span class="text-violet-400">Global Address</span>
        List

        <!--        <template #tag>-->
        <!--          DApps-->
        <!--        </template>-->
        <template #desc>
          Nobody can control the ZERO addresses (black-holes); and the only Buffer Contract we deployed has no owner nor admin.
        </template>
      </CH2>


      <div class="mt-8 sm:mt-16 rounded-lg bg-gray-700 overflow-hidden shadow divide-y divide-gray-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <div class="div-grid rounded-tl-lg rounded-tr-lg sm:rounded-tr-none">
          <div>
            <span class="span-icon-wrapper bg-teal-50 text-teal-700">
              <HeroIconOutlineClock class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a href="#" class=" focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                LP Token Holder, black-hole
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.zero }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>

        <div class="div-grid sm:rounded-tr-lg">
          <div>
            <span class="span-icon-wrapper bg-purple-50 text-purple-700">
              <HeroIconOutlineBadgeCheck class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.burn)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Burned
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.burn.toLowerCase() }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
        </div>

        <div class="div-grid">
          <div>
            <span class="span-icon-wrapper bg-sky-50 text-sky-700">
              <HeroIconOutlineUsers class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.buffer)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Buffer Pool, no owner
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.buffer }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
        </div>

        <div class="div-grid">
          <div>
            <span class="span-icon-wrapper bg-yellow-50 text-yellow-700">
              <HeroIconOutlineCash class="h-6 w-6" />
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.tax)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Tax Pool
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.tax }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
        </div>

        <div class="div-grid sm:rounded-bl-lg">
          <div>
            <span class="span-icon-wrapper bg-rose-50 text-rose-700">
              <!-- Heroicon name: outline/receipt-refund -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.fomo)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                FOMO pool
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.fomo }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
        </div>

        <div class="div-grid rounded-bl-lg rounded-br-lg sm:rounded-bl-none">
          <div>
            <span class="span-icon-wrapper bg-indigo-50 text-indigo-700">
              <!-- Heroicon name: outline/academic-cap -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold">
              <a target='_blank'
                 :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.airdrop)'
                 class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Airdrop Pool
              </a>
            </h3>
            <p class="p-address">
              {{ $store.state.bsc.globalAccounts.airdrop }}
            </p>
          </div>
          <span class="span-out-wrapper" aria-hidden="true">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
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
