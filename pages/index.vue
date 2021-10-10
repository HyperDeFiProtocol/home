<template>
  <div>

    <SWelcome />
    <SFomo v-if='$store.state.bsc.fomo.amount > "0"' class='bg-gray-800' />
    <SFeatures />
    <SMarketValue class='bg-gray-800' />
    <SFee />
    <SFeeTax class='bg-gray-800' />
    <SFeeAirdrop />
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
}
</script>

<style>

</style>
