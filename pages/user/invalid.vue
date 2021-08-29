<template>
  <LAutoWidth class='p-24 text-gray-500'>
    <div>
      <HeroIconOutlineExclamation class='h-20 w-20' />
    </div>

    <h1 class='mt-10 font-mono font-bold text-4xl'>
      Invalid username
    </h1>

    <h2 class='mt-6 text-2xl'>
      <span>
        A username must start with "@"
      </span>
      <span v-if='$route.query.username'>
        but got "{{ $route.query.username }}".
      </span>
    </h2>
  </LAutoWidth>
</template>

<script>
export default {
  name: 'UsernameInvalid',
  async asyncData({ params }) {
    const username = params.username
    return { username }
  },
}
</script>

<style scoped lang='scss'>

</style>
