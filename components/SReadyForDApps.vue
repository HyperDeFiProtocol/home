<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        Ready for DApps

        <template #tag>
          Slot
        </template>
        <template #desc>
          Interface is provided, for building DApps with HyperDeFi functions.
        </template>
      </CH3>

      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a target='_blank' :href='hdfLink.githubToRepo("contracts")'
             class="text-white bg-violet-600 hover:bg-violet-700">
            Documentation
          </a>
        </div>
        <div class="ml-3 inline-flex">
          <a target='_blank' :href='hdfLink.githubToRepo("contracts")'
             class="text-violet-700 bg-violet-100 hover:bg-violet-200">
            GitHub Code
          </a>
        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SReadyForDApps',
  computed: {
    hdfLink() {
      return hdfLink
    },
  }
}
</script>

<style scoped>
a {
  @apply inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md;
}
</style>
