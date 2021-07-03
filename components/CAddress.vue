<template>
  <span>{{ display }}</span>
</template>

<script>
export default {
  name: 'CAddress',
  props: {
    value: {
      type: String,
      required: true
    },
  },
  computed: {
    display() {
      const text = this.addressName(this.value)

      if (text) {
        return this.$t('user.' + text)
      }

      return this.value
    },
  },
  methods: {
    addressName(address) {
      switch (address) {
        case this.$store.state.bsc.globalAccounts.pair:
          return 'liquidity'
        case this.$store.state.bsc.globalAccounts.buffer:
          return 'buffer'
        case this.$store.state.bsc.globalAccounts.dev:
          return 'deployer'
        default:
          return null
      }
    }
  },
}
</script>

<style scoped>

</style>
