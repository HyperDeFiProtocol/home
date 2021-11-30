<template>
  <a :href='hpLink.pancakeSwapTo()'>
    <slot />
  </a>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'CPancakeTo',
  computed: {
    hpLink() {
      return hpLink
    }
  }
}
</script>

<style scoped>

</style>
