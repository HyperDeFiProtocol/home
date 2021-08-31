<template>
  <span>{{ displayText }}</span>
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
  mounted: async function() {
    await this.setDisplayText()
  },
  methods: {
    presetName(address) {
      switch (address) {
        case this.$store.state.bsc.globalAccounts.pair:
          return 'liquidity'
        case this.$store.state.bsc.globalAccounts.buffer:
          return 'buffer'
        case this.$store.state.bsc.globalAccounts.presale:
          return 'presale'
        // case this.$store.state.bsc.globalAccounts.fund:
        //   return 'fund'
        case this.$store.state.bsc.globalAccounts.zero:
          return 'zero'
        case this.$store.state.bsc.globalAccounts.burn:
          return 'burn'
        case process.env.tokenAddress:
          return 'mainContract'
        default:
          return null
      }
    },
    async setDisplayText() {
      const text = this.presetName(this.value)

      if (text) {
        this.displayText = this.$t('user.' + text)
        return
      }

      const holder = await this.$nuxt.context.app.db.holder.where('address').equals(this.value).first()

      if (holder && holder.username) {
        this.displayText = '@' + holder.username + ' ' + this.value.slice(0, 8) + '...' + this.value.slice(-4)
        return
      }

      return this.displayText = this.value
    },
  },
}
</script>

<style scoped>

</style>
