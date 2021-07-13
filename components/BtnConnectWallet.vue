<template>
  <button @click='connectWallet'>
    <slot>{{ $t('connectWallet.connectWallet') }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BtnConnectWallet',
  methods: {
    connectWallet() {
      this.$store.dispatch('connectWallet/SHOW')
    },
  }
}
</script>

<style scoped>

</style>
