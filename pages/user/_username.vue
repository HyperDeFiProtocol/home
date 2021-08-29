<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        User "{{ indexedUsername }}"

        <template #tag>
          User Dashboard
        </template>

        <template #desc>
          0x...
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
  middleware: ['user'],
  async asyncData({ params }) {
    const username = params.username
    return { username }
  },
  computed: {
    indexedUsername() {
      if (this.username.startsWith('@')) {
        return this.username
      }

      return ''
    }
  },
  mounted: async function () {
    //
  },
}
</script>

<style scoped lang='scss'>
ul {
  @apply space-y-4;
}

li {
  @apply bg-gray-800 rounded-md px-8 py-3 hover:bg-gray-700;
}
</style>
