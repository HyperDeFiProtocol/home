<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pTrade.title') }}
        </span>

        <template #tag>
          {{ $t('pTrade.tag') }}
        </template>

        <template #desc>
          A step by step guide on how to trade HyperDeFi via PancakeSwap.
        </template>
      </CH3>

      <!--  tabs  -->
      <div class='mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto'>
        <div class=''>
          <nav class='-mb-px flex' aria-label='Tabs'>
            <button class='btn-tab' :class='tabClass(0)' @click='conShow(0)'>
              {{ $t('pTrade.tabPC') }}
            </button>

            <button class='btn-tab' :class='tabClass(1)' @click='conShow(1)'>
              {{ $t('pTrade.tabMobile') }}
            </button>
          </nav>
        </div>
      </div>


      <p class='mt-8 lg:mt-10 xl:mt-12 text-rose-500 text-lg'>
        This will take approximately 15-30 minutes if you're new.
      </p>

      <!--
        -------- -------- -------- -------- -------- -------- pc
      -->
      <div class='con' v-show='tab === 0'>
        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                Step.1 Create a Wallet
              </h3>
              <p>
                Just pick one from below:
              </p>
              <ul>
                <li>
                  MetaMask
                </li>
                <li>
                  Binance Chain Wallet
                </li>
              </ul>

              <p>
                Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with
                anyone and store it properly!
              </p>

              <p>
                Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.
              </p>

              <p>
                0x...
              </p>
            </div>

            <div class='step'>
              <h3>
                Step.2 Add HyperDeFi to the Wallet
              </h3>

              <h4>
                For MetaMask:
              </h4>

              <p>
                Click the <b>Add Token</b> button; enter the <b>contract address</b>.
                The wallet will auto-load for you. Then, <b>Next</b> and <b>Done</b>.
              </p>

              <div class='snaps-narrow'>
                <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
              </div>

              <h4>
                For Binance Chain Wallet:
              </h4>

              <p>
                Just use the
                <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
                  <HeroIconSolidPlusSm class='inline w-5 h-5' />
                </span>
                icon; it is similar to MetaMask.
              </p>
            </div>
          </div>

          <div class='con-snaps-wide'>
            <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
          </div>
        </div>

        <div class='step'>
          <h3>
            Step.3 Deposit BNB, or any other tokens on BSC
          </h3>

          <p>
            Transfer some BNB to your wallet (withdraw from an exchange).
          </p>
        </div>

        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                Step.4 Swap to HyperDeFi, and start holding
              </h3>

              <div class='mt-6 flex space-x-3'>
                <HeroIconOutlineBell class='w-8 h-8'/>
                <span>
                  If you intend to swap other tokens to HyperDeFi,
                  make sure you are keeping a small amount of BNB to execute the transaction.
                </span>
              </div>

              <p>
                Visit PancakeSwap, easily click
                <a target='_blank' :href='hdfLink.pancakeSwapTo()' class='break-all'>
                  https://pancakeswap.finance/#/swap?outputCurrency={{ tokenAddress }}
                </a>, or this button:
              </p>

              <div class='mt-6 mb-10 max-w-sm mx-auto'>
                <CPancakeTo class='btn-pancake-swap'>
                  <IconPancakeSwap class='inline w-6 h-6' />
                  <span>
                    {{ $t('sWelcome.buyOnPancakeSwap') }}
                  </span>
                </CPancakeTo>
              </div>

              <p>
                If you are already there, you can see a <b>Import Token</b> tips,
                click <b>I understand</b>, and <b>Continue:</b>
              </p>

              <div class='snaps-narrow'>
                <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />
              </div>

              <ol>
                <li>
                  Click <b>Connect</b> or <b>Unlock Wallet</b>, then <b>Connect</b> to start
                </li>

                <li>
                  Click the
                  <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
                    <HeroIconOutlineAdjustments class='inline w-5 h-5 transform rotate-90' />
                  </span>
                  icon, set the <b>Slippage Tolerance</b> to <b>45%</b>
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
                Once the slippage is set, and you have the BNB amount set that you wish to swap for HyperDeFi as shown.
              </p>

              <div class='snaps-narrow'>
                <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />
              </div>

              <p>
                Just click Swap and wait patiently for the transaction to clear. This process may not be instant and can
                take anywhere from a few seconds (usually) up to 10-15 minutes sometimes, depending on traffic.
              </p>

              <p>
                Once the transaction has been cleared, you should have HyperDeFi in your Wallet!
              </p>

              <p>
                Now all that's left is to HODL!
              </p>
            </div>
          </div>
          <div class='con-snaps-wide'>
            <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />
            <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />
          </div>
        </div>


      </div>


      <!--
        -------- -------- -------- -------- -------- -------- mobile
      -->
      <div class='con' v-show='tab === 1'>

        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                Step.1 Create a Wallet
              </h3>
              <p>
                Just pick one from below:
              </p>
              <ul>
                <li>
                  TrustWallet
                </li>
                <li>
                  TokenPocket
                </li>
              </ul>

              <p>
                Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with
                anyone and store it properly!
              </p>

              <p>
                Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.
              </p>

              <p>
                0x...
              </p>
            </div>

            <div class='step'>
              <h3>
                Step.2 Add HyperDeFi to the Wallet
              </h3>


              <h4>
                For Truest Wallet:
              </h4>

              <p>
                Tap the icon in the top-right and search for <b>HyperDeFi</b>.
              </p>

              <p>
                If it's not there, tap <b>Add Custom Token</b>.
                At the top, tap <b>Ethereum</b> next to Network, change it to <b>Smart Chain</b>.
                Copy the contract address above on this page and put it in the Contract Address box,
                with the Name as <b>HyperDeFi</b>, Symbol as <b>HyperDeFi</b>, Decimals as <b>2</b>,
                then tap <b>Finish</b> and go back, you will see it listed in your assets.
              </p>

              <h4>
                For TokenPocket:
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

          <div class='con-snaps-wide'>
            <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
          </div>
        </div>

        <div class='step'>
          <h3>
            Step.3 Buy or deposit BNB
          </h3>

          <p>
            Click <b>Buy</b> button, choose <b>Smart Chain</b>
            (that's the native token <b>BNB</b> on Binance Smart Chain),
            then follow the wizard to get some.
            Or you can deposit BNB to your wallet by withdrawing from an exchange.
          </p>
        </div>

        <div class='con-inner'>
          <div class='con-body'>
            <div class='step'>
              <h3>
                Step.4 Swap to HyperDeFi, and start holding
              </h3>

              <div class='mt-6 flex space-x-3'>
                <HeroIconOutlineBell class='w-8 h-8'/>
                <span>
                  If you intend to swap other tokens to HyperDeFi,
                  make sure you are keeping a small amount of BNB to execute the transaction.
                </span>
              </div>


<!--              <p>-->
<!--                Visit PancakeSwap, easily click-->
<!--                <a target='_blank' :href='hdfLink.pancakeSwapTo()' class='break-all'>-->
<!--                  https://pancakeswap.finance/#/swap?outputCurrency={{ tokenAddress }}-->
<!--                </a>, or this button:-->
<!--              </p>-->

<!--              <div class='mt-6 mb-10 max-w-sm mx-auto'>-->
<!--                <CPancakeTo class='btn-pancake-swap'>-->
<!--                  <IconPancakeSwap class='inline w-6 h-6' />-->
<!--                  <span>-->
<!--                    {{ $t('sWelcome.buyOnPancakeSwap') }}-->
<!--                  </span>-->
<!--                </CPancakeTo>-->
<!--              </div>-->

<!--              <p>-->
<!--                If you are already there, you can see a <b>Import Token</b> tips,-->
<!--                click <b>I understand</b>, and <b>Continue:</b>-->
<!--              </p>-->

<!--              <div class='snaps-narrow'>-->
<!--                <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />-->
<!--              </div>-->

<!--              <ol>-->
<!--                <li>-->
<!--                  Click <b>Connect</b> or <b>Unlock Wallet</b>, then <b>Connect</b> to start-->
<!--                </li>-->

<!--                <li>-->
<!--                  Click the-->
<!--                  <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>-->
<!--                    <HeroIconOutlineAdjustments class='inline w-5 h-5 transform rotate-90' />-->
<!--                  </span>-->
<!--                  icon, set the <b>Slippage Tolerance</b> to <b>45%</b>-->
<!--                </li>-->
<!--              </ol>-->

<!--              <div class='mt-6 mb-8 mx-auto md:mx-0 w-2/3 sm:w-1/2 md:w-11/12 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>-->
<!--                <div class='md:w-5/12'>-->
<!--                  <img src="~/assets/images/pancakeswap/main.png" alt='Main'/>-->
<!--                </div>-->
<!--                <div class='md:w-7/12'>-->
<!--                  <img src='~/assets/images/pancakeswap/slippage.png' alt='Slippage Tolerance' />-->
<!--                </div>-->
<!--              </div>-->

<!--              <p>-->
<!--                Once the slippage is set, and you have the BNB amount set that you wish to swap for HyperDeFi as shown.-->
<!--              </p>-->

<!--              <div class='snaps-narrow'>-->
<!--                <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />-->
<!--              </div>-->

<!--              <p>-->
<!--                Just click Swap and wait patiently for the transaction to clear. This process may not be instant and can-->
<!--                take anywhere from a few seconds (usually) up to 10-15 minutes sometimes, depending on traffic.-->
<!--              </p>-->

<!--              <p>-->
<!--                Once the transaction has been cleared, you should have HyperDeFi in your Wallet!-->
<!--              </p>-->

<!--              <p>-->
<!--                Now all that's left is to HODL!-->
<!--              </p>-->
            </div>
          </div>
          <div class='con-snaps-wide'>
<!--            <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />-->
<!--            <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />-->
          </div>
        </div>






      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'trade',
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
