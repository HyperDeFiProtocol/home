<template>
  <!--  <div class='s-loading'>-->
  <transition name='s-loading'>
    <div v-show='$store.state.bsc.synchronizing.fromBlock'
         class='s-loading transition ease-in-out duration-700'>
      <div class='bg-violet-900 rounded-md pt-6 pb-4 px-4 lg:px-6 font-mono text-gray-400'>
        <div>
          <IconDiceHyper class='animate-bounce w-8 h-8 text-violet-500' />
        </div>
        <template v-if='$store.state.bsc.synchronizing.fromBlock'>
          <div class='animate-pulse'>
            Synchronizing...
          </div>
          <div class='animate-pulse mt-2 text-sm'>
            Block: #{{ $store.state.bsc.synchronizing.fromBlock }} / {{ $store.state.bsc.blockNumber }}
          </div>
        </template>
        <template v-else>
          <div>
            Synchronized.
          </div>
          <div class='mt-2 text-sm'>
            Block: #{{ $store.state.bsc.blockNumber }} / {{ $store.state.bsc.blockNumber }}
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SLoading'
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  // computed: {
  //   loading() {
  //     return this.counter < 1 && this.$store.state.bsc.synchronizing.fromBlock
  //   }
  // },
  // watch: {
  //   '$store.state.bsc.blockNumber': async function() {
  //     if (this.$store.state.bsc.synchronizing.fromBlock === 0) {
  //       this.counter++
  //     }
  //   }
  // }
}
</script>

<style scoped lang='scss'>
.s-loading {
  @apply fixed z-10;
  @apply bottom-4 right-4 lg:right-8;
}

.s-loading-enter-active, .s-loading-leave-active {
  transition: opacity 6s;
}

.s-loading-enter, .s-loading-leave-to {
  opacity: 0;
}
</style>
