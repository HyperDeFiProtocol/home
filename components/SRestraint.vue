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


      <div class="mt-10 mt-16 max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
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
                <HeroIconOutlineBan class="h-6 w-6" />
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
