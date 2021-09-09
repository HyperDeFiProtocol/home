<template>
  <div>
    <label :for="xHash" class="block text-sm font-medium text-gray-400">
      {{ label }}
    </label>
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input type="text" :ref='xHash' :value='value' @click='copy' readonly />
      </div>
      <button type="button" @click='copy'>
        <HeroIconOutlineClipboardCopy class='w-6 h-6 text-gray-500' />
        <span>
          Copy
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import sha256 from 'crypto-js/sha256'

export default {
  name: 'CInputCopy',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String | Number,
      required: true
    },
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    xHash() {
      if (this.title) {
        return 'x' + sha256(this.title).toString().slice(-10)
      }

      return 'x' + sha256(this.value).toString().slice(-10)
    }
  },
  methods: {
    copy() {
      this.$refs[this.xHash].select()

      if (document.execCommand('copy')) {
        console.log('copied...')
      } else {
        console.log('copy failed...')
      }
    },
  },
}
</script>

<style scoped lang='scss'>
input {
  @apply block w-full rounded-none rounded-l-md py-3 px-4 border-gray-300;
  @apply font-mono text-sm sm:text-base md:text-lg lg:text-xl text-violet-700;

  &:focus {
    @apply ring-gray-500 border-gray-500;
  }
}

button {
  @apply -ml-px relative inline-flex items-center space-x-2 px-4 py-2;
  @apply border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50;
  @apply text-sm sm:text-base md:text-lg lg:text-xl;
  @apply uppercase;

  &:hover {
    @apply bg-gray-100;
  }

  &:focus {
    @apply outline-none ring-1 ring-gray-500 border-gray-500;
  }
}
</style>
