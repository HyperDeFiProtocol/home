<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav />
    <Nuxt />
    <SiteFooter />

    <ModalWarning v-show='$store.state.warning.title && $store.state.warning.message' />
    <ModalNoWeb3Provider v-show='$store.state.wallet.noWeb3Provider' />
    <ModalUnsupportedChainId
      v-show='$store.state.wallet.chainId && $store.state.wallet.chainId !== $store.state.bsc.chainId' />
    <ModalLang v-show='$store.state.lang.show' />
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
  },
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>
