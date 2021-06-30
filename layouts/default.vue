<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav />
    <Nuxt />
    <SiteFooter />
    <SUnsupportedChainId v-if='unsupportedChainId' />
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
