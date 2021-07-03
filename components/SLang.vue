<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click='close'>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="transition duration-300 ease-in-out fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


      <div class="transition duration-300 ease-in-out inline-block align-bottom w-full bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg">
        <div class='bg-white pt-8 px-4 pb-6'>
          <div class="flex flex-col justify-center">

            <div class='flex items-center justify-center space-x-6'>
              <div class="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-violet-200">
                <HeroIconOutlineTranslate class='h-6 w-6 text-violet-600' />
              </div>

              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {{ $t('locales.title') }}
              </h3>
            </div>

            <div class="mt-8 flex flex-col items-center justify-center text-center space-y-3">
              <nuxt-link v-for='locale in locales' :key='locale.code' :to='switchLocalePath(locale.code)' @click='close'
                 class='block w-full py-3 px-4 bg-violet-200 rounded-md  hover:bg-violet-700 text-violet-800 hover:text-violet-50'>
                {{ locale.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import locales from '~/locales/conf'

export default {
  name: 'SLang',
  computed: {
    locales() {
      return locales
    }
  },
  methods: {
    close() {
      this.$store.dispatch('lang/HIDE')
    }
  }
}
</script>

<style scoped>

</style>
