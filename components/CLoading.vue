<template>
  <div v-if='show' class='transform-gpu transition duration-500 ease-in-out'>
    <div class='mt-2 sm:mt-3 lg:mt-4 flex justify-center'>
      <!--      <IconDiceHyperSpin class='inline w-32 h-32 text-violet-500' />-->
      <IconDiceHyper class='animate-bounce w-10 h-10 text-violet-500 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' />
    </div>
    <div class='loading-text'>
      <div>
        Loading
      </div>
      <div>
        {{ dots[i] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CLoading',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      i: 0,
      dots: ['.', '..', '...', '....'],
      interval: null
    }
  },
  mounted() {
    this.setIntervalTouch()
  },
  methods: {
    touch() {
      this.i = this.i > 2 ? 0 : this.i + 1
    },
    setIntervalTouch() {
      if (!this.interval) {
        this.interval = window.setInterval(this.touch, 319)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.loading-text {
  @apply w-full flex space-x-2 pl-6;
  @apply mt-2 flex justify-center font-mono text-base;
  @apply sm:text-lg;
  @apply md:mt-3 md:text-2xl;
  @apply lg:mt-4 lg:text-3xl;

  div {
    @apply flex-1 text-gray-600;
  }

  div:first-child {
    @apply text-right;
  }
}
</style>
