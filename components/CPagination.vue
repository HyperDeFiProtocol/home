<template>
  <div v-if='pages > 1' class='c-pagination'>
    <div class='flex items-center justify-start'>
      <nuxt-link v-if='pathToPrevious' :to='pathToPrevious'>
        Previous Page
      </nuxt-link>
    </div>

    <div class='flex items-center justify-center'>
      <span>
        Page {{ number }} of {{ pages }}
      </span>
    </div>

    <div class='flex items-center justify-end'>
      <nuxt-link v-if='pathToNext' :to='pathToNext'>
        Next Page
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CPagination',
  props: {
    path: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    records: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.records / this.size)
    },
    pathToPrevious() {
      const pageNumber = this.number - 1
      if (pageNumber > 0) {
        return this.path + '/' + pageNumber
      }

      return null
    },
    pathToNext() {
      const pageNumber = this.number + 1
      if (pageNumber <= this.pages) {
        return this.path + '/' + pageNumber
      }

      return null
    },
  },
}
</script>

<style scoped lang='scss'>
.c-pagination {
  //@apply flex items-center justify-between;

  @apply w-full grid grid-cols-3 gap-10;
  @apply text-gray-400;


  a {
    @apply w-full max-w-xs;
    @apply inline-flex items-center justify-center py-3 border border-gray-700 rounded-md;
    @apply font-medium text-base text-gray-500;
    @apply focus:outline-none;

    &:hover {
      @apply bg-gray-800;
    }
  }

  span {
    @apply py-2 px-4;
  }
}

</style>
