<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav />
    <Nuxt />
    <SiteFooter />

    <SModalWarning v-show='$store.state.warning.title && $store.state.warning.message' />
    <SNoWeb3Provider v-show='noWeb3Provider' />
    <SUnsupportedChainId v-show='unsupportedChainId' />
  </div>
</template>

<style>
html {
  @apply bg-gray-900 text-gray-300;
}
</style>
<script>
export default {
  computed: {
    noWeb3Provider() {
      return this.$store.state.wallet.noWeb3Provider
    },
    notProductionMode() {
      return process.env.mode !== 'production'
    },
    unsupportedChainId() {
      return this.$store.state.wallet.chainId && this.$store.state.wallet.chainId !== this.$store.state.bsc.chainId
    },
  },
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    },
  }
}
</script>
