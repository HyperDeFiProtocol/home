<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        {{ $t('sFeatures.title') }}

        <template #tag>
          {{ $t('sFeatures.tag') }}
        </template>
        <template #desc>
          {{ $t('sFeatures.desc') }}
        </template>
      </CH3>


      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCode class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.openSourced') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.contractsVerified__') }}
              <a target='_blank' :href='hpLink.exploreToken()' class='hdf-a-colored'>
                {{ $t('sFeatures.bscScanExplorer') }}
              </a>
              {{ $t('sFeatures._andOpenSourcedOn') }}
              <a target='_blank' :href='hpLink.github()' class='hdf-a-colored'>
                GitHub
              </a>
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineBadgeCheck class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.communityDriven') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.communityDriven__') }}
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineScale class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.fairLaunch') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.fairLaunch__') }}
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCube class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.blackHole') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.blackHole__') }}
            </dd>
          </div>


          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineGlobeAlt class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.bscEcology') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.bscEcology__') }}
            </dd>
          </div>



          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white">
                <HeroIconOutlineCode class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-200">
                {{ $t('sFeatures.ready4DApps') }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ $t('sFeatures.ready4DApps__') }}
            </dd>
          </div>



        </dl>



      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'SFeatures',
  computed: {
    hpLink() {
      return hpLink
    },

  }
}
</script>

<style scoped>

</style>
