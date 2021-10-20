<template>
  <div>
    <LAutoWidth class="py-16 px-4 sm:py-24">
      <CH2>
        <span>
          {{ $t('sRestraint.title1') }}
        </span>
        <span class="text-violet-400">
          {{ $t('sRestraint.title2') }}
        </span>

<!--        <template #tag>-->
<!--          DApps-->
<!--        </template>-->
        <template #desc>
          {{ $t('sRestraint.desc') }}
        </template>
      </CH2>


      <div class="mt-10 mt-16 w-full mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineChartPie class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sRestraint.s1') }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ $t('sRestraint.s1__') }}
            </dd>
          </div>

          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineLockClosed class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sRestraint.s2') }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ $t('sRestraint.s2__') }}
            </dd>
          </div>

          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <IconGithub class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sRestraint.s3') }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ $t('sRestraint.s3__') }}
            </dd>
          </div>
        </dl>
      </div>


      <div class='mt-12 sm:mt-20'>
        <div class='text-gray-500'>
          {{ $t('sGlobalAccounts.desc') }}
        </div>

        <div class="mt-2 rounded-lg bg-gray-700 overflow-hidden shadow divide-y divide-gray-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          <div class="div-grid rounded-tl-lg rounded-tr-lg sm:rounded-tr-none">
            <div>
              <span class="span-icon-wrapper bg-emerald-50 text-emerald-700">
                <HeroIconOutlineBreaker class="h-6 w-6" />
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold">
                <a target='_blank'
                   :href='explorer.exploreAddress($store.state.bsc.globalAccounts.burn)'
                   class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <span>
                    {{ $t('sGlobalAccounts.blackHole') }}
                  </span>
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
                  <span>
                    {{ $t('sGlobalAccounts.buffer') }}
                  </span>
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
                  <span>
                    {{ $t('sGlobalAccounts.tax') }}
                  </span>
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
                  <span>
                    {{ $t('sGlobalAccounts.fomo') }}
                  </span>
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
      </div>


    </LAutoWidth>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SCodeLaw',
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
