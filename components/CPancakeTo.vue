<template>
  <a target='_blank' :href='hdfLink.pancakeSwapTo()'>
    <slot />
  </a>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'CPancakeTo',
  computed: {
    hdfLink() {
      return hdfLink
    }
  }
}
</script>

<style scoped>

</style>
