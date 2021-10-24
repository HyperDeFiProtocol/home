<template>
  <div>

    <SWelcome />
    <SFomo v-if='$store.state.bsc.fomo.amount > "0"' class='bg-gray-800' />
    <SFeatures />
    <SDataBoard class='bg-gray-800' />
    <STax />
    <STaxFarm class='bg-gray-800' />
    <STaxAirdrop />
    <STaxFomo class='bg-gray-800' />
    <STaxLiquidity />
    <STaxFund class='bg-gray-800' />
    <STaxBurn />
    <SDApps class='bg-gray-800' />
    <SCodeLaw />
<!--    <SGlobalAccounts />-->
    <SReadyForDApps class='bg-gray-800' />
    <SUsername />
    <SFAQ class='bg-gray-800' />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'Index',
}
</script>

<style>

</style>
