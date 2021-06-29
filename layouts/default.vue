<template>
  <div @click='hideNavMenu'>
    <SiteNav />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<style>
html {
  @apply bg-gray-900 text-gray-300;
}
</style>
<script>
export default {
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>
