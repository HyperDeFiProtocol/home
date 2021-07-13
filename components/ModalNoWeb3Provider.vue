<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div  v-if='$store.state.warning.noWeb3Provider'
        class="fixed z-10 inset-0 overflow-y-auto"
       aria-labelledby="modal-title"
       role="dialog"
       aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="transition duration-300 ease-in-out fixed inset-0 bg-black bg-opacity-80 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


      <div class="transition duration-300 ease-in-out inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <HeroIconOutlineExclamation class='h-6 w-6 text-red-600' />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {{ $t('modalNoWeb3.title') }}
              </h3>

              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {{ $t('modalNoWeb3.pleaseInstall') }}
                  <a target='_blank' href='https://metamask.io/' class='font-medium text-violet-500 hover:text-violet-700'>
                    {{ $t('modalNoWeb3.metaMaskExtension') }}
                  </a>
                  {{ $t('modalNoWeb3.forYour') }}
                  <span v-if='metaMaskOnBoardReady' class='capitalize'>
                    {{ browser.name }}
                  </span>
                  <span v-else>
                    Chrome/Firefox
                  </span>
                  {{ $t('modalNoWeb3.browser_') }}
                </p>
              </div>

              <div v-if='mode === "production"' class="mt-6">
                <div class="w-1/2">
                  <vue-qr class="border-gray-300 border"
                          :text="locationHref"
                          :size=640
                          :margin=32
                          colorDark="#27303f" />
                </div>

                <p class="mt-2 text-sm text-gray-500">
                  {{ $t('modalNoWeb3.orScan__') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click='getMetaMask'
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            {{ $t('modalNoWeb3.installMetaMask') }}
          </button>
          <button type="button" @click='close'
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            {{ $t('modal.close') }}
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VueQr from 'vue-qr'
import MetaMaskOnboarding from '@metamask/onboarding'
import {detect} from 'detect-browser'

import hdfLink from '~/utils/hdfLink'

export default {
  name: 'ModalNoWeb3Provider',
  components: {VueQr},
  data() {
    return {
      locationHref: location.href
    }
  },

  computed: {
    browser() {
      return detect()
    },
    metaMaskOnBoardReady() {
      return this.browser.name.toLowerCase() === 'chrome'
        || this.browser.name.toLowerCase() === 'firefox'
        // || this.browser.name.toLowerCase() === 'edge-chromium'
    },
    hdfLink() {
      return hdfLink
    },
    mode() {
      return process.env.mode
    },
    chainName() {
      return process.env.chainName
    },
  },
  methods: {
    async getMetaMask() {
      const onBoarding = new MetaMaskOnboarding()
      onBoarding.startOnboarding()
    },
    close() {
      this.$store.dispatch('warning/SET_NO_WEB3_PROVIDER', null)
    }
  }
}
</script>

<style scoped>

</style>
