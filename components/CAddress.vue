<template>
  <span>{{ display }}</span>
</template>

<script>
export default {
  name: 'CAddress',
  data() {
    return {
      displayText: '',
    }
  },
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
        case this.$store.state.bsc.globalAccounts.presale:
          return 'presale'
        case this.$store.state.bsc.globalAccounts.fund:
          return 'fund'
        case this.$store.state.bsc.globalAccounts.zero:
          return 'zero'
        case this.$store.state.bsc.globalAccounts.burn:
          return 'burn'
        default:
          return null
      }
    }
  },
}
</script>

<style scoped>

</style>
