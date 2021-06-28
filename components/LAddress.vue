<template>
  <span>{{ addressName(value) }}</span>
</template>

<script>
export default {
  name: 'LAddress',
  props: {
    value: {
      type: String,
      required: true
    },
  },
  methods: {
    addressName(address) {
      switch (address) {
        case this.$store.state.bsc.globalAccounts.pair:
          return 'PancakeSwap Liquidity'
        case this.$store.state.bsc.globalAccounts.buffer:
          return 'Buffer'
        case this.$store.state.bsc.globalAccounts.dev:
          return 'Deployer'
        default:
          return address
      }
    }
  },
}
</script>

<style scoped>

</style>
