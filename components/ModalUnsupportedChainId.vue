<template>
  <transition name="fade">
    <div v-if='$store.state.wallet.chainId && $store.state.wallet.chainId !== chainId'
         class="fixed z-20 inset-0 overflow-y-auto"
         aria-labelledby="modal-title"
         role="dialog"
         aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-black bg-opacity-80 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <HeroIconOutlineExclamation class='h-6 w-6 text-red-600' />
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {{ $t('modalUnsupportedChainId.title') }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ $t('modalUnsupportedChainId.please') }}
                    <span v-if='mode === "production"'>
                      visit with your Trust Wallet App or
                    </span>
                    {{ $t('modalUnsupportedChainId.change__') }}
                    <b>{{ chainName }}</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a target='_blank'
               :href='hpLink.githubToWiki("home", "Connecting-wallet-to-Binance-Smart-Chain")'
               class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm">
              {{ $t('modalUnsupportedChainId.read') }}
            </a>
            <button type="button" @click='close'
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              {{ $t('modal.close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'ModalUnsupportedChainId',
  computed: {
    hpLink() {
      return hpLink
    },
    mode() {
      return process.env.mode
    },
    chainName() {
      return process.env.chainName
    },
    chainId() {
      return process.env.chainId
    }
  },
  methods: {
    close() {
      this.$store.dispatch('wallet/SET_CHAIN_ID', null)
    }
  }
}
</script>

<style scoped>

</style>
