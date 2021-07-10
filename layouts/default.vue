<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav class='bg-gray-900' />
    <Nuxt />
    <SiteFooter />

    <ModalWarning v-if='$store.state.warning.title && $store.state.warning.message' />
    <ModalNoWeb3Provider v-if='$store.state.wallet.noWeb3Provider' />
    <ModalUnsupportedChainId
      v-if='$store.state.wallet.chainId && $store.state.wallet.chainId !== $store.state.bsc.chainId' />
    <ModalLang v-if='$store.state.lang.show' />
  </div>
</template>

<style lang='scss'>
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
