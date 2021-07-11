<template>
  <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
    <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
      <slot />
    </h2>
    <p class="mt-4 text-gray-400">
      <slot name='desc' />
    </p>
  </div>
</template>

<script>
export default {
  name: 'CHSimple'
}
</script>

<style scoped>

</style>
