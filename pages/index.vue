<template>
  <div>
    <SWelcome />
    <SFomo v-if='$store.state.bsc.fomo.amount > "0"' />
    <SFeatures class='bg-gray-800' />
    <SMarketValue />
    <SAirdrop class='bg-gray-800' />
    <SFee />
    <SFeeTax class='bg-gray-800' />
    <SFeeLotto />
    <SFeeFomo class='bg-gray-800' />
    <SFeeLiquidity />
    <SFeeFund class='bg-gray-800' />
    <SFeeBurn />
    <SRestraint class='bg-gray-800' />
    <SGlobalAccounts />
    <SReadyForDApps class='bg-gray-800' />
    <SUsername />
    <SDApps />
    <SFAQ class='bg-gray-800' />
  </div>
</template>

<script>
export default {
  name: 'Index',
  watch: {
    '$store.state.bsc.blockNumber': async function() {
      await this.sync()
    }
  },

  async mounted() {
    await this.sync()
  },

  methods: {
    async sync() {
      await this.$nuxt.context.app.syncTransfer()
    },
  }
}
</script>

<style>

</style>
