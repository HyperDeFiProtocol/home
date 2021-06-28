<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        A better crypto for HOLDING

        <template #tag>
          Features
        </template>
        <template #desc>
          A social experiment of wealth
        </template>
      </CH3>


      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineBadgeCheck class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                Community Powered
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Decentralized, based on a broad consensus of holders.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineScale class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                Fair launch
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              No reservations for anybody.
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineGlobeAlt class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                BSC/PancakeSwap Ecology
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              More faster, more cheaper than the ETH Chain.
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCube class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                Black-hole holds the LP Tokens
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Nobody can remove the global liquidity.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCode class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                Ready for DApps
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Provide slots for DApps
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCode class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                Open-sourced
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Contracts are verified by BSC Scan Explorer, and open-sourced on GitHub.
            </dd>
          </div>
        </dl>



      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SFeatures'
}
</script>

<style scoped>

</style>
