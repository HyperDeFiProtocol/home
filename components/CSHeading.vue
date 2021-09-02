<template>
  <div class="pb-5 border-b border-gray-700">
    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
      <h3 class="ml-2 mt-2 text-lg leading-6 font-bold text-gray-400">
        <slot />
      </h3>
      <p v-if='$slots.remark' class="ml-2 mt-1 text-sm text-gray-500 truncate">
        <slot name='remark' />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSHeading'
}
</script>
