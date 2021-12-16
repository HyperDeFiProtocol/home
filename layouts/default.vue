<template>
  <div @click='hideNavMenu'>
    <SNotProductionMode v-if='notProductionMode' />
    <SiteNav class='bg-gray-900' />
    <SLoading />
    <Nuxt />
    <SiteFooter />

    <ModalWarning v-if='$store.state.warning.title && $store.state.warning.message' />
    <ModalNoWeb3Provider />
    <ModalUnsupportedChainId />
    <ModalLang />
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
  mounted: async function() {
    await this.sync()
  },
  watch: {
    '$store.state.bsc.blockNumber': async function() {
      await this.sync()
    }
  },
  computed: {
    notProductionMode() {
      return process.env.mode !== 'production'
    },
  },
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    },
    async sync() {
      await this.$nuxt.context.app.sync.events()
      // await this.$nuxt.context.app.sync.holders()
    }
  }
}
</script>
