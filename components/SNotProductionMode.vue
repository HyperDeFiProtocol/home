<template>
  <div class="bg-black">
    <LAutoWidth class="py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <HeroIconSolidExclamation class="h-8 w-8 text-white" />
          <p class="ml-3 font-medium text-rose-500">
            Working in
            <span class='font-bold text-white'>{{ mode }}, {{ chainName }}.</span>
            Chain ID#{{ chainId }}
          </p>
        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SNotProductionMode',
  computed: {
    mode() {
      return process.env.mode
    },
    chainName() {
      return process.env.chainName
    },
    chainId() {
      return process.env.chainId
    },
  },
}
</script>

<style scoped>

</style>
