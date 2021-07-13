<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav class='bg-gray-900' />
    <Nuxt />
    <SiteFooter />

    <ModalWarning v-if='$store.state.warning.title && $store.state.warning.message' />
    <ModalNoWeb3Provider />
    <ModalUnsupportedChainId />
    <ModalLang v-if='$store.state.lang.show' />
    <ModalConnectWallet />
  </div>
</template>

<style lang='scss'>
html {
  @apply bg-gray-900 text-gray-300;
}
</style>
<script>
export default {
  scrollToTop: true,
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
