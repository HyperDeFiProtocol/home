<template>
  <button @click='connectWallet' class='space-x-2'>
    <span>
      <slot>{{ $t('connectWallet.connectWallet') }}</slot>
    </span>
    <IconDiceHyperSpin v-show='$store.state.wallet.loading' class='w-6 h-6' />
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
