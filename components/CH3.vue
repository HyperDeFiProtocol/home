<template>
  <div class="hdf-ch3">
    <header v-if='$slots.tag'>
      <slot name='tag' />
    </header>

    <h3>
      <slot />
    </h3>

    <main v-if='$slots.desc'>
      <slot name='desc' />
    </main>
  </div>
</template>

<script>
export default {
  name: 'CH3'
}
</script>

<style scoped>

</style>
