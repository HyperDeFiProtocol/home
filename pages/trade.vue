<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pTrade.title') }}
        </span>

        <template #tag>
          {{ $t('pTrade.tag') }}
        </template>
      </CH3>

      <!--  tabs  -->
      <div class="mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto">
        <div class="">
          <nav class="-mb-px flex" aria-label="Tabs">
            <button class="flex-1 border-b-2 border-violet-300 py-4 px-1 text-violet-300 text-center font-medium text-sm">
              {{ $t('pTrade.forPC') }}
            </button>

            <button class="flex-1 border-b-2 border-gray-500 py-4 px-1 text-gray-500 hover:text-gray-300 hover:border-gray-300 text-center font-medium text-sm">
              {{ $t('pTrade.forMobile') }}
            </button>
          </nav>
        </div>
      </div>

      <!--  pc  -->
      <div class='mt-24 prose xl:prose-xl text-gray-400 mx-auto'>
        <p>
          TBC...
        </p>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'trade'
}
</script>

<style scoped>

</style>
