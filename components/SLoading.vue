<template>
<!--  <div class='s-loading'>-->
  <div v-show='counter < 1 && $store.state.bsc.synchronizing.fromBlock'
       class='s-loading transition ease-in-out duration-700'
  >
    <div class='bg-violet-900 rounded-md pt-6 pb-4 px-4 lg:px-6 font-mono text-gray-400'>
      <div>
        <IconDiceHyper class='animate-bounce w-8 h-8 text-violet-500' />
      </div>
      <div>
        Synchronizing...
      </div>
      <div class='mt-2 text-sm'>
        Block: #{{ $store.state.bsc.synchronizing.fromBlock }} - {{ $store.state.bsc.blockNumber }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SLoading',
  data() {
    return {
      show: true,
      counter: 0,
    }
  },
  watch: {
    '$store.state.bsc.blockNumber': async function() {
      if (this.$store.state.bsc.synchronizing.fromBlock === 0) {
        this.counter++
      }
    }
  },
}
</script>

<style scoped lang='scss'>
.s-loading {
  @apply fixed z-10 animate-pulse;
  @apply bottom-4 right-4 lg:right-8;
}
</style>
