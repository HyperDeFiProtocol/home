<template>
  <button @click='getHarvest' class='space-x-2'>
    <slot>Get Harvest</slot>
    <IconDiceHyperSpin v-show='pending' class='w-6 h-6' />
  </button>
</template>

<script>
export default {
  name: 'BtnGetHarvest',
  data() {
    return {
      pending: false
    }
  },
  methods: {
    getHarvest() {
      this.$store.dispatch('warning/SET_WARNING', {
        title: 'In development',
        message: 'Coming soon...',
      })
    }
  }
}
</script>

<style scoped>

</style>
