<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if='$store.state.connectWallet.show'
       class="fixed z-10 inset-0 overflow-y-auto"
       aria-labelledby="modal-title"
       role="dialog"
       aria-modal="true"
       @click='close'>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="transition duration-300 ease-in-out fixed inset-0 bg-black bg-opacity-80 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


      <div class="transition duration-300 ease-in-out inline-block align-bottom w-full bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg">
        <div class='bg-white pt-8 px-4 pb-6'>
          <div class="flex flex-col justify-center">

            <div class='flex items-center justify-center space-x-6'>
              <div class="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200">
                <HeroIconOutlineCube class='h-6 w-6 text-indigo-600' />
              </div>

              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {{ $t('modalConnectWallet.title') }}
              </h3>
            </div>

            <div class="mt-8 flex flex-col items-center justify-center text-center space-y-3">
              <button @click.stop='connect("MetaMask")'>
                <span>
                  MetaMask
                </span>
                <IconMetaMask class='inline w-6 h-6' :class='{"animate-bounce": connecting.metamask}'/>
              </button>
              <button @click='connect("Binance Chain Wallet")'>
                <span>
                  Binance Chain Wallet
                </span>
                <IconBinance class='inline w-6 h-6 bg-gray-900 rounded' :class='{"animate-bounce": connecting.binanceChainWallet}'/>
              </button>
              <button @click.stop='connect()'>
                <span>
                  Others...
                </span>
                <HeroIconOutlineCube class='inline w-6 h-6' :class='{"animate-bounce": connecting.others}'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider'

export default {
  name: 'ModalConnectWallet',
  data() {
    return {
      connecting: {
        metamask: false,
        binanceChainWallet: false,
        others: false,
      }
    }
  },
  computed: {
    //
  },
  methods: {
    async connect(walletName) {
      let provider = null

      switch (walletName) {
        case 'MetaMask':
          this.connecting.metamask = true
          provider = await detectEthereumProvider()
          await this.$nuxt.context.app.conn.connect(provider)
          this.connecting.metamask = false
          break
        case 'Binance Chain Wallet':
          // this.connecting.binanceChainWallet = true
          provider = window.BinanceChain
          await this.$nuxt.context.app.conn.connect(provider)
          // this.connecting.binanceChainWallet = false
          break
        default:
          this.connecting.others = true
          provider = await detectEthereumProvider()
          await this.$nuxt.context.app.conn.connect(provider)
          this.connecting.others = false
          break
      }

      this.close()
    },
    close() {
      this.$store.dispatch('connectWallet/HIDE')
    }
  }
}
</script>

<style scoped lang='scss'>
button {
  @apply w-full;
  @apply inline-flex items-center;
  @apply py-4 px-3 lg:px-5;
  @apply bg-indigo-200 rounded-md hover:bg-indigo-700;
  @apply text-indigo-800 hover:text-indigo-50;

  span:first-child {
    @apply block flex-grow;
  }
}
</style>
