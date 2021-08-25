<template>
  <div>
    <LAutoWidth class='px-6'>
      <div class='bg-gray-800 rounded-md py-2 px-4 font-mono text-gray-400'
           :class='{ "animate-pulse": $store.state.bsc.synchronizing.fromBlock }'
      >
        <div v-if='$store.state.bsc.synchronizing.fromBlock'>
          Synchronizing:
          from #<CBN :value='$store.state.bsc.synchronizing.fromBlock' />
          to #<CBN :value='$store.state.bsc.blockNumber' />...
        </div>
        <div v-else>
          Latest Block: #<CBN :value='$store.state.bsc.blockNumber' />
        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SLoading',
}
</script>

<style scoped lang='scss'>

</style>
