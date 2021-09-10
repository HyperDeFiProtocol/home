<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pBuy.title') }}
        </span>

        <template #tag>
          {{ $t('pBuy.tag') }}
        </template>

        <template #desc>
          {{ $t('pBuy.desc') }}
        </template>
      </CH3>

      <!--  tabs  -->
      <div class='mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto'>
        <div class=''>
          <nav class='-mb-px flex' aria-label='Tabs'>
            <button class='btn-tab' :class='tabClass(0)' @click='conShow(0)'>
              {{ $t('pBuy.tabPC') }}
            </button>

            <button class='btn-tab' :class='tabClass(1)' @click='conShow(1)'>
              {{ $t('pBuy.tabMobile') }}
            </button>
          </nav>
        </div>
      </div>


      <p class='mt-8 lg:mt-10 xl:mt-12 text-rose-500 text-lg'>
        {{ $t('pBuy._readTime') }}
      </p>

      <div class='con'>
        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                {{ $t('pBuy.step1') }}
              </h3>
              <p>
                {{ $t('pBuy.justPick__') }}
              </p>
              <ul>
                <li v-show='tab === 0'>
                  MetaMask
                </li>
                <li v-show='tab === 0'>
                  Binance Chain Wallet
                </li>
                <li v-show='tab === 1'>
                  TrustWallet
                </li>
                <li v-show='tab === 1'>
                  TokenPocket
                </li>
              </ul>

              <p>
                {{ $t('pBuy.create__') }}
              </p>

              <p>
                {{ $t('pBuy.copyContractAddress__') }}
              </p>

              <p>
                <CInputCopy :label='$t("pBuy.HyperDeFiContractAddress")' :value='tokenAddress' title='token-address-desktop'/>
              </p>
            </div>

            <div class='step'>
              <h3>
                {{ $t('pBuy.step2') }}
              </h3>

              <div v-show='tab === 0'>
                <h4>
                  {{ $t('pBuy.forMetaMask') }}
                </h4>

                <p v-if='!$store.state.wallet.account || ($store.state.wallet.account && $nuxt.context.app.web3.currentProvider.isMetaMask)'>
                  <button v-if='$store.state.wallet.account' class='btn' @click='addToken'>
                    Add HyperDeFi to Your Wallet
                  </button>

                  <BtnConnectWallet v-else class='btn' />
                </p>

                <p v-if='$store.state.wallet.account && !$nuxt.context.app.web3.currentProvider.isMetaMask'>
                  {{ $t('pBuy.ClickThe') }}
                  <b>{{ $t('pBuy.AddToken') }}</b>
                  {{ $t('pBuy.button_enterThe') }}
                  <b>{{ $t('pBuy.contractAddress_') }}</b>
                  {{ $t('pBuy.TheWalletWillAuto__') }}
                  <b>{{ $t('pBuy.Next') }}</b>
                  {{ $t('pBuy.and') }}
                  <b>{{ $t('pBuy.Done_') }}</b>
                </p>

                <div class='snaps-narrow'>
                  <img src='~/assets/images/metamask/add-suggested-tokens.png' alt='Add Token' />
                </div>

                <h4>
                  {{ $t('pBuy.forBinanceChainWallet') }}
                </h4>

                <p>
                  {{ $t('pBuy.JustUseThe') }}
                  <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
                    <HeroIconSolidPlusSm class='inline w-5 h-5' />
                  </span>
                  {{ $t('pBuy.iconAtTheBottom') }}
                  <b>{{ $t('pBuy.CustomAsset') }}</b>
                  {{ $t('pBuy.enterThe') }}
                  <b>{{ $t('pBuy.contractAddress_') }}</b>
                  {{ $t('pBuy.TheWalletWillAuto__') }}
                  <b>{{ $t('pBuy.AddAsset_') }}</b>
                </p>
              </div>

              <div v-show='tab === 1'>
                <h4>
                  {{ $t('pBuy.forTrustWallet') }}
                </h4>

                <p>
                  {{ $t('pBuy.TapTheIconInTheTopRight__') }}
                  <b>HyperDeFi.</b>
                </p>

                <p>
                  {{ $t('pBuy.IfItSNotThere__') }}
                  <b>{{ $t('pBuy.AddCustomToken_') }}</b>
                  {{ $t('pBuy.AtTheTop_tap') }}
                  <b>Ethereum</b>
                  {{ $t('pBuy.nextToNetwork_change__') }}
                  <b>Smart Chain.</b>
                  {{ $t('pBuy.CopyTheContractAddress__') }}
                  <b>HyperDeFi</b>,
                  {{ $t('pBuy.SymbolAs') }}
                  <b>HyperDeFi</b>,
                  {{ $t('pBuy.DecimalsAs') }}
                  <b>2</b>,
                  {{ $t('pBuy.thenTap') }}
                  <b>{{ $t('pBuy.Finish') }}</b>
                  {{ $t('pBuy.andGoBack__') }}
                </p>

                <h4>
                  {{ $t('pBuy.forTokenPocket') }}
                </h4>

                <p>
                  Click the
                  <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
                    <HeroIconSolidPlusSm class='inline w-5 h-5' />
                  </span>
                  icon, <b>Custom token</b>, <b>Add token</b>, enter the <b>contract address</b>.
                  The wallet will auto-load for you, then tap <b>Confirm</b>.
                </p>

                <div class='snaps-narrow'>
                  <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
                </div>
              </div>
            </div>
          </div>

          <div class='con-snaps-wide' v-show='tab === 0'>
            <img src='~/assets/images/metamask/add-suggested-tokens.png' alt='Add Token' />
          </div>

          <div class='con-snaps-wide' v-show='tab === 1'>
            <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
          </div>
        </div>

        <div class='step' v-show='tab === 0'>
          <h3>
            {{ $t('pBuy.step3PC') }}
          </h3>

          <p>
            {{ $t('pBuy.TransferSomeBNB__') }}
          </p>
        </div>

        <div class='step' v-show='tab === 1'>
          <h3>
            {{ $t('pBuy.step3Mobile') }}
          </h3>

          <p>
            {{ $t('pBuy.ClickThe') }}
            <b>{{ $t('pBuy.Buy') }}</b>
            {{ $t('pBuy.button_chooseThe') }}
            <b>Smart Chain</b>
            {{ $t('pBuy._thatSTheNativeToken') }}
            <b>BNB</b>
            {{ $t('pBuy.onBinanceSmartChain__') }}
          </p>
        </div>

        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                {{ $t('pBuy.step4') }}
              </h3>

              <div class='mt-6 flex space-x-3'>
                <HeroIconOutlineBell class='w-6 h-6'/>
                <span>
                  {{ $t('pBuy.IfYouIntendToSwapOther__') }}
                </span>
              </div>

              <div v-show='tab === 0'>
                <p>
                  {{ $t('pBuy.CopyTheURL_browser__') }}
                </p>

                <p>
                  <CInputCopy label='PancakeSwap URL' :value='hdfLink.pancakeSwapTo()' title='pancake-href-desktop'/>
                </p>

                <p>
                  {{ $t('pBuy.OrJustClickThisButton_') }}
                </p>

                <div class='mt-6 mb-10 max-w-sm mx-auto'>
                  <CPancakeTo class='btn-pancake-swap'>
                    <IconPancakeSwap class='inline w-6 h-6' />
                    <span>
                      {{ $t('sWelcome.buyOnPancakeSwap') }}
                    </span>
                  </CPancakeTo>
                </div>
              </div>

              <div v-show='tab === 1'>

                <div v-if='$store.state.wallet.account'>
                  <p>
                    {{ $t('pBuy.JustClickThisButton_') }}
                  </p>

                  <div class='mt-6 mb-10 max-w-sm mx-auto'>
                    <CPancakeTo class='btn-pancake-swap'>
                      <IconPancakeSwap class='inline w-6 h-6' />
                      <span>
                      {{ $t('sWelcome.buyOnPancakeSwap') }}
                    </span>
                    </CPancakeTo>
                  </div>
                </div>
                <div v-else>
                  <p>
                    {{ $t('pBuy.CopyTheURL_app__') }}
                  </p>

                  <p>
                    <CInputCopy label='PancakeSwap URL' :value='hdfLink.pancakeSwapTo()' title='pancake-href-desktop'/>
                  </p>

                  <p>
                    {{ $t('pBuy.OrJustScanThisQrCode_') }}
                  </p>

                  <p class="mx-auto w-1/3">
                    <vue-qr class="border-gray-300 border"
                            :text="hdfLink.pancakeSwapTo()"
                            :size=640
                            :margin=32
                            colorDark="#27303f" />
                  </p>
                </div>
              </div>

              <p>
                {{ $t('pBuy.IfYouAreAlreadyThere__') }}
                <b>Import Token,</b>
                {{ $t('pBuy.tips_click') }}
                <b>I understand</b>
                {{ $t('pBuy.and') }}
                <b>Import:</b>
              </p>

              <div class='snaps-narrow'>
                <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />
              </div>

              <ol>
                <li>
                  {{ $t('pBuy.Click') }}
                  <b>Connect</b>
                  {{ $t('pBuy.or') }}
                  <b>Unlock Wallet,</b>
                  {{ $t('pBuy.then') }}
                  <b>Connect</b>
                  {{ $t('pBuy.toStart') }}
                </li>

                <li>
                  {{ $t('pBuy.ClickThe') }}
                  <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
                    <HeroIconOutlineAdjustments class='inline w-5 h-5 transform rotate-270' />
                  </span>
                  {{ $t('pBuy.icon_setThe') }}
                  <b>Slippage Tolerance</b>
                  {{ $t('pBuy.to') }}
                  <b>45%</b>
                </li>
              </ol>

              <div class='mt-6 mb-8 mx-auto md:mx-0 w-2/3 sm:w-1/2 md:w-11/12 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
                <div class='md:w-5/12'>
                  <img src="~/assets/images/pancakeswap/main.png" alt='Main'/>
                </div>
                <div class='md:w-7/12'>
                  <img src='~/assets/images/pancakeswap/slippage.png' alt='Slippage Tolerance' />
                </div>
              </div>

              <p>
                {{ $t('pBuy.OnceThe') }}
                <b>slippage</b>
                {{ $t('pBuy.isSet_and__') }}
              </p>

              <div class='snaps-narrow'>
                <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />
              </div>

              <p>
                {{ $t('pBuy.JustClick') }}
                <b>Swap</b>
                {{ $t('pBuy.andWaitPatiently__') }}
              </p>

              <p>
                {{ $t('pBuy.OnceTheTx__') }}
              </p>

              <p>
                {{ $t('pBuy.Now__HODL') }}
              </p>
            </div>
          </div>
          <div class='con-snaps-wide'>
            <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />
            <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />
          </div>
        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'buy',
  components: {VueQr},
  data() {
    return {
      tab: 0
    }
  },
  computed: {
    tokenAddress() {
      return process.env.tokenAddress
    },
    hdfLink() {
      return hdfLink
    }
    //
  },
  methods: {
    tabClass(index) {
      if (this.tab === index) {
        return 'tab-current'
      }

      return null
    },
    conShow(index) {
      this.tab = index
    },
    async addToken() {
      const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyOCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEyOCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjEyOCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTI4IgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI3Mi4wIgogICB0aWZmOllSZXNvbHV0aW9uPSI3Mi4wIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJv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'

      const tokenAdded = await this.$nuxt.context.app.web3.currentProvider.request(
        {
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: process.env.tokenAddress,
              symbol: this.$store.state.bsc.metadata.tokenSymbol,
              decimals: parseInt(this.$store.state.bsc.metadata.tokenDecimals),
              image: image,
            }
          }
        })
        .catch(async function(error) {
          console.error('>>> Add token:', error)
        })
    }
  }
}

</script>

<style scoped lang='scss'>
.btn-tab {
  @apply flex-1;
  @apply border-b-2 py-4 px-1;
  @apply font-medium text-sm text-center;
  @apply border-gray-500 text-gray-500;
  @apply hover:text-gray-300 hover:border-gray-300;

  &.tab-current {
    @apply border-violet-300 text-violet-300;
  }
}

.con {
  @apply mt-8 lg:mt-10 xl:mt-12;
  @apply mx-auto text-gray-400;
  //@apply prose xl:prose-xl;
  @apply divide-y divide-gray-600;



  .con-inner {
    @apply pt-6;
    @apply lg:flex lg:items-start lg:space-x-4;

    &:first-child {
      @apply pt-0;
    }
  }

  .con-body {
    @apply flex-grow divide-y divide-gray-600;
  }

  img {
    @apply mx-auto border border-gray-400;
  }

  .snaps-narrow {
    @apply lg:hidden;

    @apply my-6 w-2/3 sm:w-1/2 md:w-5/12 mx-auto;
  }

  .con-snaps-wide {
    @apply flex-shrink-0 hidden lg:block lg:w-5/12 xl:w-1/3 flex flex-col items-start justify-center space-y-4;
  }

  .step {
    @apply py-6;

    &:first-child {
      @apply pt-0;
    }

    p {
      @apply mt-6 leading-normal text-xl;
    }

    ul, ol {
      @apply mt-8 ml-3;
      @apply list-inside;
      @apply text-xl;
      @apply space-y-3;
    }

    ul {
      @apply list-disc;
    }

    ol {
      @apply list-decimal;
    }


  }

  h3 {
    @apply mb-4 leading-relaxed font-semibold text-2xl text-violet-400;
  }

  h4 {
    @apply my-6 leading-relaxed text-xl border-l-8 border-gray-700 pl-4 py-1;
  }

  p, ul {
    @apply text-gray-400;
  }

  b {
    @apply text-gray-300;
  }

  a {
    @apply text-violet-500 hover:text-white;
  }

  code {
    @apply mx-2 bg-gray-700 rounded py-1 px-3 text-gray-200;
  }

  .btn-pancake-swap {
    @apply relative w-full inline-flex justify-center space-x-2 py-3 px-4 rounded-md shadow bg-violet-600 text-white font-medium hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300 focus:ring-offset-gray-900;
  }

}
</style>
