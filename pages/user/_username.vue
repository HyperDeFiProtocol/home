<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        Coming Soon...

        <template #tag>
          User Dashboard
        </template>
      </CH3>

      <div class='mt-24'>
        <ul>
          <li>
            Balance and All Harvest History
          </li>
          <li>
            Lotto History
          </li>
          <li>
            FOMO History
          </li>
        </ul>
      </div>
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
ul {
  @apply space-y-4;
}

li {
  @apply bg-gray-800 rounded-md px-8 py-3 hover:bg-gray-700;
}
</style>
