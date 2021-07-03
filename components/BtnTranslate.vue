<template>
  <button @click='showLangMenu'>
    <HeroIconOutlineTranslate class='h-6 w-6' />
  </button>
</template>

<script>
export default {
  name: 'BtnTranslate',
  methods: {
    showLangMenu() {
      this.$store.dispatch('lang/TOGGLE_SHOW')
    }
  }
}
</script>

<style scoped>

</style>
