<template>
  <LAutoWidth>
    <div class='p-2'>
      <h1>
        Dashboard
      </h1>

      <h2>
        BSC Chain (testnet)
      </h2>
      <ul>
        <li>
          (Chain ID): {{ $store.state.bsc.chainId }}
        </li>
        <li>
          (最新区块): {{ $store.state.bsc.blockNumber }}
        </li>
        <li>
          Gas 价格: {{ $store.state.bsc.gasPriceStr }} Gwei
        </li>
      </ul>

      <h2>
        Supply
      </h2>
      <ul>
        <li>
          待缓释量: {{ $store.state.bsc.supply.gate }}
        </li>
        <li>
          FOMO 池: {{ $store.state.bsc.supply.fomo }}
        </li>
      </ul>
    </div>
  </LAutoWidth>
</template>

<script>
export default {
  name: 'Data',
}
</script>

<style scoped>
h1 {
  @apply mt-12 mb-6 text-4xl;
}

h2 {
  @apply mt-8 mb-4 text-3xl;
}

li {
  @apply font-mono;
}
</style>
