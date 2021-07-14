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
          A step by step guide on how to trade HyperDeFi via PancakeSwap. This will take approximately 15-30 minutes if
          you're new.
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

      <!--
        -------- -------- -------- -------- -------- -------- pc
      -->
      <div class='con' v-show='tab === 0'>

        <div class='flex space-x-4'>
          <div class='w-2/3 divide-y divide-gray-600'>
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


              <!--              <p>-->
              <!--                <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/metamask/main.png"  alt='Main'/>-->
              <!--              </p>-->

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

          <div class='w-1/3'>
            <img src='~/assets/images/metamask/add-token.png' alt='Add Token' />
          </div>

        </div>


        <!--        <h3>-->
        <!--          Step.2 Make sure you are on the right chain-->
        <!--        </h3>-->

        <!--        <p>-->
        <!--          The real HyperDeFi Protocol is created and trading on BSC Chain (Binance Smart Chain), mainnet.-->
        <!--          So, just make sure your wallet is working on the right chain.-->
        <!--        </p>-->


        <div class='step'>
          <h3>
            Step.3 Deposit BNB, or any other tokens
          </h3>

          <p>
            Transfer some BNB to your wallet (withdraw from an exchange).
          </p>
        </div>

        <div class='flex space-x-4 pt-6'>
          <div class='w-2/3 divide-y divide-gray-600'>
            <div class='step'>
              <h3>
                Step.4 Swap to HyperDeFi, and start holding
              </h3>

              <p>
                Tips: if you intend to swap another token to HyperDeFi, make sure you are keeping a small amount of BNB
                to execute the transaction.
              </p>

              <p>
                Visit PancakeSwap, easily click
                <a target='_blank' :href='hdfLink.pancakeSwapTo()'>
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
                If you are already there, you will see a <b>Import Token</b> tips,
                click <b>I understand</b>, and <b>Continue:</b>
              </p>


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


              <!--              <p>-->
              <!--                <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/unconnected.png"  alt='Unconnected'/>-->
              <!--              </p>-->

              <!--              <p>-->
              <!--                Choose the wallet you are using:-->
              <!--              </p>-->

              <!--              <p>-->
              <!--                <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/connect.png"  alt='Connect to a wallet'/>-->
              <!--              </p>-->

              <!--              <p>-->
              <!--                -->
              <!--              </p>-->

              <div class='mt-6 mb-8 w-11/12 flex space-x-2'>
                <div class='w-5/12'>
                  <img src="~/assets/images/pancakeswap/main.png" alt='Main'/>
                </div>
                <div class='w-7/12'>
                  <img src='~/assets/images/pancakeswap/slippage.png' alt='Slippage Tolerance' />
                </div>
              </div>

              <p>
                Once the slippage is set, and you have the BNB amount set that you wish to swap for HyperDeFi as shown,
                just click Swap and wait patiently for the transaction to clear. This process may not be instant and can
                take anywhere from a few minutes up to an hour sometimes, depending on traffic.
              </p>

              <p>
                Once the transaction has been cleared, you should have HyperDeFi in your Wallet!
              </p>

              <p>
                Now all that's left is to HODL!
              </p>
            </div>
          </div>
          <div class='w-1/3 space-y-4'>
            <img src='~/assets/images/pancakeswap/import-token.png' alt='Import Token' />
            <img src='~/assets/images/pancakeswap/swap.png' alt='Swap' />
          </div>
        </div>


      </div>


      <!--
        -------- -------- -------- -------- -------- -------- mobile
      -->
      <div class='con' v-show='tab === 1'>
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
          Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with anyone
          and store it properly!
        </p>

        <p>
          Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.
        </p>

        <p>
          0x...
        </p>

        <h3>
          Step.2 Make sure you are on the right chain
        </h3>

        <p>
          The real HyperDeFi Protocol is created and trading on BSC Chain (Binance Smart Chain), mainnet.
          So, just make sure your wallet is working on the right chain.
        </p>

        <h3>
          Step.3 Add HyperDeFi to the Wallet
        </h3>

        <h4>
          For TrustWallet:
        </h4>

        <p>
          Click the
          <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
            <HeroIconOutlineAdjustments class='inline w-5 h-5 transform rotate-90' />
          </span>
          icon;
          <b>Add Custom Token</b>
          enter the contract address,
          the Wallet App will auto-load for you.
        </p>

        <h4>
          For TokenPocket:
        </h4>

        <p>
          Click the
          <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
            <HeroIconSolidPlusSm class='inline w-5 h-5' />
          </span>
          icon; then enter the contract address...
        </p>

        <h3>
          Step.4 Buy BNB
        </h3>

        <p>
          Click <code>Buy</code> button,
          choose <b>Smart Chain</b> (that's the BNB on BSC Chain),
          the follow the wizard to get some.
        </p>
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
  @apply mt-10 lg:mt-16 xl:mt-20 mx-auto text-gray-400;
  //@apply prose xl:prose-xl;
  @apply divide-y divide-gray-600;

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

    img {
      @apply mx-auto border border-gray-400 shadow-2xl;
    }
  }

  h3 {
    @apply mb-4 leading-relaxed text-2xl text-violet-400;
  }

  h4 {
    @apply my-4 mb-4 leading-relaxed text-xl border-l-8 border-gray-700 pl-4 py-1;
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
