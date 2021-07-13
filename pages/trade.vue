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
          A step by step guide on how to trade HyperDeFi via PancakeSwap. This will take approximately 15-30 minutes if you're new.
        </template>
      </CH3>

      <!--  tabs  -->
      <div class="mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto">
        <div class="">
          <nav class="-mb-px flex" aria-label="Tabs">
            <button class="btn-tab" :class='tabClass(0)' @click='conShow(0)'>
              {{ $t('pTrade.tabPC') }}
            </button>

            <button class="btn-tab" :class='tabClass(1)' @click='conShow(1)'>
              {{ $t('pTrade.tabMobile') }}
            </button>
          </nav>
        </div>
      </div>

      <!--
        -------- -------- -------- -------- -------- -------- pc
      -->
      <div class='con' v-show='tab === 0'>
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
          Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with anyone and store it properly!
        </p>

        <p>
          Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.
        </p>

        <p>
          0x...
        </p>

<!--        <h3>-->
<!--          Step.2 Make sure you are on the right chain-->
<!--        </h3>-->

<!--        <p>-->
<!--          The real HyperDeFi Protocol is created and trading on BSC Chain (Binance Smart Chain), mainnet.-->
<!--          So, just make sure your wallet is working on the right chain.-->
<!--        </p>-->

        <h3>
          Step.2 Add HyperDeFi to the Wallet
        </h3>

        <h4>
          For MetaMask:
        </h4>

        <p>
          Click the <b>Add Token</b> button; enter the <b>contract address</b>.
          The wallet will auto-load for you.
        </p>


        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/metamask/main.png"  alt='Main'/>
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/metamask/add-token.png"  alt='Add Token'/>
        </p>

        <h4>
          For Binance Chain Wallet:
        </h4>

        <p>
          Click the
          <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
            <HeroIconSolidPlusSm class='inline w-5 h-5' />
          </span>
          icon; then enter the contract address... (similar to MetaMask)
        </p>

        <h3>
          Step.3 Deposit BNB, or any other tokens
        </h3>

        <p>
          Transfer some BNB to your wallet (withdraw from an exchange).
        </p>

        <h3>
          Step.4 Swap to HyperDeFi, and start holding
        </h3>

        <p>
          Tips: if you intend to swap another token to HyperDeFi, make sure you are keeping a small amount of BNB to execute the transaction.
        </p>

        <p>
          Visit PancakeSwap, easily click
          <a target='_blank' :href='hdfLink.pancakeSwapTo()'>
            https://pancakeswap.finance/#/swap?outputCurrency={{ tokenAddress }}
          </a>, or this button:
        </p>
      </div>

      <div class='mt-8 max-w-sm mx-auto' v-show='tab === 0'>
        <CPancakeTo class='relative w-full inline-flex justify-center space-x-2 py-3 px-4 rounded-md shadow bg-violet-600 text-white font-medium hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300 focus:ring-offset-gray-900'>
          <IconPancakeSwap class='inline w-6 h-6' />
          <span>
            {{ $t('sWelcome.buyOnPancakeSwap') }}
          </span>
        </CPancakeTo>
      </div>


      <div class='con' v-show='tab === 0'>
        <p>
          If you are already there, you will see a <b>Import Token</b> tips,
          click <b>I understand</b>, and <b>Continue:</b>
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/import-token.png"  alt='Import Token'/>
        </p>



        <p>
          Click <b>Connect</b> or <b>Unlock Wallet</b> to start:
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/unconnected.png"  alt='Unconnected'/>
        </p>

        <p>
          Choose the wallet you are using:
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/connect.png"  alt='Connect to a wallet'/>
        </p>

        <p>
          (Optional) if you're planning to be a whale:
          click the
          <span class='inline-flex px-1 py-1 bg-gray-700 rounded'>
            <HeroIconOutlineAdjustments class='inline w-5 h-5 transform rotate-90' />
          </span>
          icon, set the <b>Slippage Tolerance</b> to <b>45%</b>.
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/main.png"  alt='Main'/>
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/slippage.png"  alt='Slippage Tolerance'/>
        </p>

        <p>
          Then, just swap.
        </p>

        <p>
          <img class='mx-auto border border-gray-400 shadow-2xl' src="~/assets/images/pancakeswap/swap.png"  alt='Swap'/>
        </p>
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
          Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with anyone and store it properly!
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
      tab: 0,
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
  },

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

  h2, h3, h4, h5, h6 {
    @apply text-violet-400;
  }

  h3 {

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

}
</style>
