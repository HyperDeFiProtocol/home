<template>
  <button @click='connectWallet' class='space-x-2'>
    <slot>Connect Wallet</slot>
    <IconDiceHyperSpin v-show='$store.state.wallet.loading' />
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
