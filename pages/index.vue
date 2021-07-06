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
    <SReadyForDApps class='bg-gray-800' />
    <SDApps />
    <SRestraint class='bg-gray-800' />
    <SGlobalAccounts />
    <SFAQ class='bg-gray-800' />
<!--    <SData />-->
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
}
</script>

<style>

</style>
