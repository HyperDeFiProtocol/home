<template>
  <div class="hdf-ch2">
    <header v-if='$slots.tag'>
      <slot name='tag' />
    </header>

    <h2>
      <slot />
    </h2>

    <main v-if='$slots.desc'>
      <slot name='desc' />
    </main>
  </div>
</template>

<script>
export default {
  name: 'CH2'
}
</script>

<style scoped>

</style>
