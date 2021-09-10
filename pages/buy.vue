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
                <p v-else>
                  <BtnAddToken />
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
