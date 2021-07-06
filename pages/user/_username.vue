<template>
  <div>
    <LAutoWidth class='py-24 text-center'>
      Coming soon...
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'UserUsername',
  async asyncData({ params }) {
    const username = params.username
    return { username }
  },
  mounted: async function () {
    //
  },
}
</script>

<style scoped>

</style>
