<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pPresale.title') }}
        </span>

        <template #tag>
          {{ $t('pPresale.tag') }}
        </template>

        <template #desc>
          Coming soon... Just preview here...
        </template>
      </CH3>

      <!--  timeline  -->
      <div class='mt-24 hdf-timeline'>

        <!--  deploy  -->
        <div class='hdf-timeline-item done'>
          <HeroIconSolidBadgeCheck class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pPresale.deploy') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pPresale.contractAddress_') }}
              </p>

              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 truncate'>
                {{ $store.state.bsc.globalAccounts.presale }}
              </p>

              <p class='mt-2 md:mt-4'>
                <a target='_blank' :href='hdfLink.exploreAddress($store.state.bsc.globalAccounts.presale)' class='a-track'>
                  <HeroIconSolidCursorClick class="h-5 w-5" />
                  <span>
                    {{ $t('global.trackWithBSCScan') }}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <!--  mint 3%  -->
        <div class='hdf-timeline-item done'>
          <HeroIconSolidBadgeCheck class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pPresale.mint') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pPresale.sameTx__') }}
                <a target='_blank' :href='hdfLink.exploreTx(tokenCreationTxHash)' class='hover:text-white'>
                  {{ $t('pPresale.review') }}
                </a>
              </p>

              <p class='mt-2 md:mt-4'>
                {{ $t('pPresale.amount_') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 truncate'>
                <CBN :value='$store.state.bsc.presale.presaleAmount' :token='true' /> HyperDeFi
              </p>
            </div>
          </div>
        </div>

        <!--  deposit BUSD  -->
        <div class='hdf-timeline-item' :class='{ "doing": liquidityNotCreatedAsDepositAllowed, "done": !liquidityNotCreatedAsDepositAllowed }'>
          <HeroIconSolidFire v-if='liquidityNotCreatedAsDepositAllowed' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pPresale.depositAllowed') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pPresale.endTime_') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 truncate'>
                {{ moment($store.state.bsc.presale.endTimestamp * 1000) }}
              </p>

              <p class='mt-2 md:mt-4'>
                {{ $t('global.latestBlockNumber') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 truncate'>
                #<CBN :value='$store.state.bsc.blockNumber' />
              </p>

              <div v-if='theLastDeposit' class='mt-2 md:mt-4'>
                <p class='font-bold text-rose-400'>
                  {{ $t('pPresale.theLastDeposit') }}
                </p>
              </div>


              <dl class='hdf-stat lg:max-w-full grid grid-cols-1 lg:grid-cols-2'>
                <div>
                  <dt>
                    {{ $t('pPresale.depositedBUSDAmount') }}
                  </dt>
                  <dd>
                    $<CBN :value='$store.state.bsc.presale.fund' :decimals='18' :padding='3' />
                  </dd>
                </div>

                <div>
                  <dt>
                    {{ $t('pPresale.countdown') }}
                  </dt>
                  <dd>
                    <CCountdown :timestamp='$store.state.bsc.presale.endTimestamp * 1000' :show-ds='true' v-on:finished='setCountdownFinished' />
                  </dd>
                </div>
              </dl>

              <div class='my-14 md:my-20' v-if='liquidityNotCreatedAsDepositAllowed'>
                <div v-if='$store.state.wallet.account' class='mx-auto max-w-xl space-y-2'>
                  <div class='min-w-0 flex-1'>
                    <label for='deposit-amount' class='sr-only'>
                      {{ $t('sUsername.sr') }}
                    </label>
                    <div class='relative'>
                      <input id='deposit-amount'
                             type='text'
                             autocomplete='off'
                             maxlength='15'
                             class='block w-full border border-transparent rounded-md pl-10 pr-5 py-3 font-mono text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600'
                             v-model='amount'
                             :placeholder='$t("pPresale.amountToDeposit")' />
                      <span class='absolute top-3 left-5 text-base text-gray-500'>$</span>
                      <span class='absolute top-3 right-5 text-base text-gray-500'>BUSD</span>
                    </div>
                  </div>
                  <div class='flex space-x-2'>
                    <button class='btn-add btn-approved' disabled v-if='approved'>
                      <span>
                        {{ $t('pPresale.approved') }}
                      </span>
                      <span v-if='this.$store.state.presale.busdAllowance > "0"'>
                        <CBN :value='$store.state.presale.busdAllowance' :decimals='18' /> BUSD
                      </span>
                      <IconDiceHyperSpin v-show='pendingApprove' class='inline w-6 h-6' />
                    </button>
                    <button class='btn-add btn-approve' @click='approve' v-else-if='this.amount'>
                      <span>
                        {{ $t('pPresale.approve') }}
                      </span>
                      <span v-if='this.amount'>
                        {{ amount }} BUSD
                      </span>
                      <IconDiceHyperSpin v-show='pendingApprove' class='inline w-6 h-6' />
                    </button>
                    <button class='btn-add btn-deposit' @click='deposit'>
                      <span>
                        {{ $t('pPresale.deposit') }}
                      </span>
                      <IconDiceHyperSpin v-show='pendingDeposit' class='inline w-6 h-6' />
                    </button>
                  </div>
                </div>
                <div v-else class='flex justify-center'>
                  <BtnConnectWallet class='connectWallet'>
                    <span>
                      {{ $t('pPresale.connectWalletToDeposit') }}
                    </span>
                  </BtnConnectWallet>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  presale close  -->
        <div class='hdf-timeline-item' :class='{ "done": !liquidityNotCreatedAsDepositAllowed }'>
          <HeroIconOutlineClock v-if='liquidityNotCreatedAsDepositAllowed' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else class='hdf-timeline-icon' />
          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl capitalize'>
              {{ $t('pPresale.presaleClose') }}
            </h3>
          </div>
        </div>

        <!--  add liquidity  -->
        <div class='hdf-timeline-item' :class='{ "done": !liquidityNotCreatedAsDepositAllowed }'>
          <HeroIconOutlineClock v-if='liquidityNotCreatedAsDepositAllowed' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl'>
              {{ $t('pPresale.createLiquidity') }}
            </h3>

            <div class='hdf-timeline-body'>
              <div v-if='$store.state.bsc.presale.liquidityCreatedTimestamp > "0"'>
                <p>
                  {{ $t('pPresale.liquidityCreatedAt') }}
                </p>
                <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 truncate'>
                  {{ moment($store.state.bsc.presale.liquidityCreatedTimestamp * 1000) }}
                </p>
              </div>

              <ul>
                <li>
                  {{ $t('pPresale.createLi1__') }}
                </li>
                <li>
                  {{ $t('pPresale.createLi2__') }}
                </li>
              </ul>
            </div>
          </div>
        </div>


        <!--  redeem  -->
        <div class='hdf-timeline-item' :class='{ "doing": redeeming, "done": tradeAllowed && !redeeming }'>
          <HeroIconOutlineDotsCircleHrizontal v-if='!liquidityNotCreatedAsDepositAllowed && redeeming' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else-if='tradeAllowed && !redeeming' class='hdf-timeline-icon' />
          <HeroIconOutlineClock v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl'>
              {{ $t('pPresale.redeemTitle') }}
            </h3>

            <div class='hdf-timeline-body' v-if='$store.state.wallet.account'>
              <div v-if='$store.state.presale.portion > "0"'>
                <p>
                  {{ $t('pPresale.yourPortion') }}
                </p>
                <p class='mt-2 text-lg md:text-xl text-gray-200 truncate'>
                  <CBN :value='$store.state.presale.portion' :token='true' /> HyperDeFi
                  <span v-if='redeemable'>
                    {{ $t('pPresale.notRedeemed') }}
                  </span>
                  <span v-else>
                    {{ $t('pPresale.redeemed') }}
                  </span>
                </p>

                <div class='my-6 md:my-10 mx-auto max-w-xl flex justify-center'
                     v-if='redeemable'>
                  <button class='btn-add btn-redeem' @click='redeem'>
                    <span>
                      {{ $t('pPresale.redeem') }}
                    </span>
                    <CBN :value='$store.state.presale.portion' :token='true' />
                    <span>
                      HyperDeFi
                    </span>
                    <IconDiceHyperSpin v-show='pendingRedeem' class='inline w-6 h-6' />
                  </button>
                </div>
              </div>
              <p v-else>
                {{ $t('pPresale.noPortion') }}
              </p>
            </div>
            <div class='hdf-timeline-body' v-else>
              <div class='my-6 md:my-10 mx-auto max-w-md flex justify-center'>
                <BtnConnectWallet class='connectWallet'>
                  <span>
                    {{ $t('pPresale.connectWalletToCheck') }}
                  </span>
                </BtnConnectWallet>
              </div>
            </div>
          </div>
        </div>

        <!--  trade launched  -->
        <div class='hdf-timeline-item' :class='{ "done": tradeAllowed }'>
          <HeroIconSolidBadgeCheck v-if='tradeAllowed' class='hdf-timeline-icon' />
          <HeroIconOutlineClock v-else class='hdf-timeline-icon' />
          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl'>
              {{ $t('pPresale.launch') }}
            </h3>
          </div>
        </div>

      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import Web3 from 'web3'
import moment from 'moment'
import hdfLink from '~/utils/hdfLink'

const BN = Web3.utils.BN

export default {
  name: 'presale',
  data() {
    return {
      countdownFinished: false,

      amount: '',
      tokenCreationTxHash: process.env.tokenCreationTxHash,

      pendingApprove: false,
      pendingDeposit: false,
      pendingRedeem: false,
    }
  },
  computed: {
    moment() {
      return moment
    },
    hdfLink() {
      return hdfLink
    },

    theLastDeposit() {
      return this.$store.state.bsc.presale.liquidityCreatedTimestamp === '0' && this.countdownFinished
    },

    // depositAllowed() {
    liquidityNotCreatedAsDepositAllowed() {
      return this.$store.state.bsc.presale.liquidityCreatedTimestamp === '0'
    },
    redeeming() {
      return !this.liquidityNotCreatedAsDepositAllowed && this.$store.state.bsc.presale.balance > '0'
    },
    tradeAllowed() {
      return !this.liquidityNotCreatedAsDepositAllowed && this.countdownFinished
    },
    redeemable() {
      return this.$store.state.presale.portion > '0' && !this.$store.state.presale.redeemed
    },

    amountStr() {
      if (this.amount) {
        return new BN(this.amount).mul(new BN('1000000000000000000')).toString()
      }

      return '0'
    },

    approved() {
      return this.amount && parseInt(this.amount) <= parseInt(this.busdAllowance)
    },

    busdBalance() {
      return new BN(this.$store.state.presale.busdBalance).div(new BN('1000000000000000000')).toString()
    },
    busdAllowance() {
      return new BN(this.$store.state.presale.busdAllowance).div(new BN('1000000000000000000')).toString()
    },

    tradeLaunchCountdown() {
      return this.$store.state.bsc.global.launchCountdown
    }
  },
  watch: {
    amount() {
      this.amount = this.amount.trim().replace(/[^0-9]/g, '')
    },
    '$store.state.bsc.blockNumber': async function() {
      if (this.$store.state.wallet.account && this.$store.state.presale.liquidityCreatedTimestamp === '0') {
        await this.syncData()
      }
    },
    '$store.state.wallet.account': async function() {
      if (this.$store.state.wallet.account) {
        await this.syncData()
      }
    },
  },
  mounted: async function () {
    await this.setContract()
    if (this.$store.state.wallet.account) {
      await this.syncData()
    }
  },
  methods: {
    async setContract() {
      await this.$store.dispatch('presale/SET_CONTRACT')
    },
    async syncData() {
      await this.$store.dispatch('presale/SYNC_DATA')
    },

    async setCountdownFinished(value) {
      this.countdownFinished = value
    },

    async approve() {
      // pending check
      if (this.pendingApprove) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.pending'),
        })

        return
      }

      // balance check
      if (!this.amount) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.amountEmpty'),
        })

        return
      }

      if (this.amount && parseInt(this.amount) > parseInt(this.busdBalance)) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pPresale.insufficientBusdBalance'),
        })

        return
      }

      this.pendingApprove = true

      await this.$store.state.bsc.busd().methods
        .approve(this.$store.state.bsc.globalAccounts.presale, this.amount + '000000000000000000')
        .send({'from': this.$store.state.wallet.account})
        .on('transactionHash', this.onApproveTransactionHash)
        .on('receipt', this.onApproveReceipt)
        .on('confirmation', this.onApproveConfirmation)
        .on('error', this.onApproveError)
        .catch(this.onApproveError)

      // await this.$store.dispatch('warning/SET_WARNING', {
      //   title: 'Developing',
      //   message: 'Coming soon...',
      // })
    },


    async onApproveTransactionHash(txHash) {
      console.log('>>> onTransactionHash:', txHash)
    },
    async onApproveReceipt(receipt) {
      console.log('>>> onReceipt:', receipt)

      if (receipt.status) {
        //
      } else {
        //
      }
    },
    async onApproveConfirmation(confirmation) {
      if (confirmation === 3) {
        await this.syncData()
        await this.$store.dispatch('bsc/SYNC_DATA')
        this.pendingApprove = false
      }
      // console.log('>>> onConfirmation:', confirmation)
    },
    async onApproveError(error) {
      this.pendingApprove = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message,
      })
    },



    async deposit() {
      // pending check
      if (this.pendingDeposit) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.pending'),
        })

        return
      }

      // balance check
      if (!this.amount) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pPresale.amountEmpty'),
        })

        return
      }
      // approved check
      if (!this.approved) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('pPresale.notApproved'),
          message: this.$t('pPresale.notApproved__'),
        })

        return
      }

      this.pendingDeposit = true

      // submit
      await this.$store.state.presale.contract().methods
        .deposit(this.amountStr)
        .send({'from': this.$store.state.wallet.account})
        .on('transactionHash', this.onDepositTransactionHash)
        .on('receipt', this.onDepositReceipt)
        .on('confirmation', this.onDepositConfirmation)
        .on('error', this.onDepositError)
        .catch(this.onDepositError)
    },


    async onDepositTransactionHash(txHash) {
      console.log('>>> onTransactionHash:', txHash)
    },
    async onDepositReceipt(receipt) {
      console.log('>>> onReceipt:', receipt)

      if (receipt.status) {
        //
      } else {
        //
      }
    },
    async onDepositConfirmation(confirmation) {
      if (confirmation === 3) {
        await this.syncData()
        await this.$store.dispatch('bsc/SYNC_DATA')
        this.pendingDeposit = false
      }
      // console.log('>>> onConfirmation:', confirmation)
    },
    async onDepositError(error) {
      this.pendingDeposit = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message,
      })
    },


    async redeem() {
      // pending check
      if (this.pendingRedeem) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.pending'),
        })

        return
      }

      // redeeming check
      if (!this.redeeming) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('pPresale.tooEarly'),
          message: this.$t('pPresale.redeemNotAllowedBefore__'),
        })

        return
      }

      // portion check
      if (this.$store.state.presale.portion === '0') {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('pPresale.noPortion'),
        })

        return
      }

      this.pendingRedeem = true

      await this.$store.state.presale.contract().methods.redeem()
        .send({'from': this.$store.state.wallet.account})
        .on('transactionHash', this.onRedeemTransactionHash)
        .on('receipt', this.onRedeemReceipt)
        .on('confirmation', this.onRedeemConfirmation)
        .on('error', this.onRedeemError)
        .catch(this.onRedeemError)
    },

    async onRedeemTransactionHash(txHash) {
      console.log('>>> onTransactionHash:', txHash)
    },
    async onRedeemReceipt(receipt) {
      console.log('>>> onReceipt:', receipt)

      if (receipt.status) {
        //
      } else {
        //
      }
    },
    async onRedeemConfirmation(confirmation) {
      if (confirmation === 3) {
        await this.syncData()
        await this.$store.dispatch('bsc/SYNC_DATA')
        this.pendingDeposit = false
      }
      // console.log('>>> onConfirmation:', confirmation)
    },
    async onRedeemError(error) {
      this.pendingRedeem = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message,
      })
    },
  }
}
</script>

<style scoped lang='scss'>
.hdf-timeline {
  @apply mx-10 md:ml-14 lg:ml-20;
  @apply border-l border-gray-500;
  @apply pl-6 text-gray-400;
}

.hdf-timeline-item {
  @apply mt-14;

  &:first-child {
    @apply mt-0;
  }

  .hdf-timeline-icon {
    @apply -ml-10 w-8 h-8 bg-gray-900 ring-8 ring-gray-900 text-gray-500;
  }

  .hdf-timeline-inner {
    @apply -mt-8 ml-2 md:ml-3 lg:ml-4;

    h3 {
      @apply leading-relaxed text-xl lg:text-2xl text-gray-400;
    }

    .hdf-timeline-body {
      @apply mt-3 md:mt-4 md:pl-2 text-gray-400;
    }
  }

  &.done {
    .hdf-timeline-icon {
      @apply text-violet-400;
    }

    .hdf-timeline-inner {
      h3 {
        @apply text-violet-400;
      }
    }
  }

  &.doing {
    .hdf-timeline-icon {
      @apply text-white;
    }

    .hdf-timeline-inner {
      h3 {
        @apply text-white;
      }
    }
  }
}

.a-track {
  @apply inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md;
  @apply bg-emerald-600 hover:bg-emerald-700 space-x-2;
  @apply font-medium text-base text-white;
}

.connectWallet {
  @apply inline-flex items-center px-5 py-3 border border-transparent rounded-md;
  @apply font-medium text-base text-white bg-violet-600 hover:bg-violet-700;
  @apply focus:outline-none;
}

.btn-add {
  @apply w-full rounded-md border border-transparent shadow px-5 py-3 sm:px-10;
  @apply focus:outline-none;
  @apply focus:ring-2 focus:ring-white focus:ring-offset-2;
  @apply inline-flex justify-center space-x-2;
  @apply text-base font-medium text-white text-center;

  &.btn-approve {
    @apply bg-sky-600 hover:bg-sky-700 focus:ring-offset-sky-600;
  }

  &.btn-approved {
    @apply bg-emerald-600 hover:bg-emerald-700 focus:ring-offset-emerald-600;
  }

  &.btn-deposit {
    @apply bg-violet-600 hover:bg-violet-700 focus:ring-offset-violet-600;
  }

  &.btn-redeem {
    @apply bg-violet-600 hover:bg-violet-700 focus:ring-offset-violet-600;
  }
}

ul {
  @apply mt-6 md:mt-8 lg:mt-10;
  @apply ml-4;
  @apply list-disc;
  @apply text-lg lg:text-xl;
  @apply space-y-4;

  li {

  }
}

</style>
