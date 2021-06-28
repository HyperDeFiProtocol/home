<template>
  <div>
    <LAutoWidth class="py-16 px-4 sm:py-24">
      <CH2>
        Team
        <span class="text-violet-400">Restraint</span>

<!--        <template #tag>-->
<!--          DApps-->
<!--        </template>-->
        <template #desc>
          Long-term value is more important than immediate benefits.
        </template>
      </CH2>


      <div class="mt-10 mt-16 max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineChartPie class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                No reservations
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              The team has no initial set-aside, fair participation, and will grow along with the HyperDeFi ecology.
            </dd>
          </div>

          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineLockClosed class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                Cannot remove the liquidity
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              The LP Token is held by the black-hole, not any private address, there is no possibility of cheating and the liquidity cannot be removed.
            </dd>
          </div>

          <div>
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineBan class="h-6 w-6" />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-200">
                No backdoor
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              No privileges, no backdoor, open-sourced.
            </dd>
          </div>
        </dl>
      </div>





    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SRestraint'
}
</script>

<style scoped>

</style>
