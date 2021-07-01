<template>
  <button @click='connectWallet'>
    Connect Wallet
    <IconDiceHyperSpin v-show='$store.state.wallet.loading' class='ml-2 w-6 h-6' />
  </button>
</template>

<script>
export default {
  name: 'BtnConnectWallet',
  methods: {
    connectWallet() {
      this.$store.dispatch('wallet/CONNECT_WALLET')
    },
  }
}
</script>

<style scoped>

</style>
