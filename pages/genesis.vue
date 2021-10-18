<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pGenesis.title') }}
        </span>

        <template #tag>
          {{ $t('siteNav.genesis') }}
        </template>

        <template #desc>
          {{ $t('pGenesis.desc') }}
        </template>
      </CH3>

      <!--  timeline  -->
      <div class='mt-24 hdf-timeline'>

        <!--  deploy  -->
        <div class='hdf-timeline-item done'>
          <HeroIconSolidBadgeCheck class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pGenesis.deploy') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pGenesis.contractAddress_') }}
              </p>

              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200 break-all'>
                {{ tokenAddress }}
              </p>

              <p class='mt-2 md:mt-4 space-x-4'>
                <nuxt-link :to='localeLocation("/history/genesis")' class='a-list-deposit'>
                  <HeroIconSolidMenuAlt2 class="h-5 w-5" />
                  <span>
                    {{ $t('pGenesis.listAllDeposit') }}
                  </span>
                </nuxt-link>

                <a target='_blank' :href='hdfLink.exploreAddress(tokenAddress)' class='a-track'>
                  <HeroIconSolidCursorClick class="h-5 w-5" />
                  <span>
                    {{ $t('global.trackWithBSCScan') }}
                  </span>
                </a>
              </p>

              <!--              <p class='mt-12 py-6 px-4 md:px-8 border-l-8 border-amber-600 bg-amber-100 rounded-r-xl leading-relaxed text-base lg:text-lg text-amber-700'>-->
              <!--                {{ $t('pGenesis.depositWarning') }}-->
              <!--              </p>-->
            </div>
          </div>
        </div>

        <!--  mint 3%  -->
        <div class='hdf-timeline-item done'>
          <HeroIconSolidBadgeCheck class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pGenesis.mint') }}
              <CBN :value='$store.state.bsc.genesis.genesisPercent' />%
              {{ $t('pGenesis.mint2__') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pGenesis.sameTx__') }}
                <a target='_blank' :href='hdfLink.exploreTx(tokenCreationTxHash)' class='hover:text-white'>
                  {{ $t('pGenesis.review') }}
                </a>
              </p>

              <p class='mt-2 md:mt-4'>
                {{ $t('pGenesis.amount_') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200'>
                <CBN :value='$store.state.bsc.genesis.genesisAmount' :token='true' /> HyperDeFi
              </p>
            </div>
          </div>
        </div>

        <!--  deposit  -->
        <div class='hdf-timeline-item' :class='{ "doing": genesisStartedCountdownFinished && !tradeAllowed, "done": tradeAllowed }'>
          <HeroIconOutlineClock v-if='!genesisStartedCountdownFinished' class='hdf-timeline-icon' />
          <HeroIconSolidFire v-else-if='!tradeAllowed' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3>
              {{ $t('pGenesis.depositAllowed') }}
            </h3>
            <div class='hdf-timeline-body'>
              <p>
                {{ $t('pGenesis.startTime_') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200'>
                {{ moment($store.state.bsc.genesis.startTimestamp * 1000) }}
              </p>

              <p class='mt-2 md:mt-4'>
                {{ $t('pGenesis.endTime_') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200'>
                {{ moment($store.state.bsc.genesis.endTimestamp * 1000) }}
                {{ $t('pGenesis.or') }}
                <CBN :value='$store.state.bsc.genesis.depositCap' :price='true' /> BNB
              </p>

              <p class='mt-2 md:mt-4'>
                {{ $t('global.latestBlockNumber') }}
              </p>
              <p class='mt-2 font-mono text-lg md:text-xl text-gray-200'>
                #<CBN :value='$store.state.bsc.blockNumber' />
              </p>

              <div v-if='genesisEndedCountdownFinished && $store.state.bsc.genesis.liquidityCreatedTimestamp === "0"' class='mt-2 md:mt-4'>
                <p class='font-bold text-rose-400'>
                  {{ $t('pGenesis.nowTheLastDeposit') }}
                </p>
              </div>


              <dl class='hdf-stat lg:max-w-full grid grid-cols-1 lg:grid-cols-2'>
                <div>
                  <dt>
                    {{ $t('pGenesis.depositedBNBAmount') }}
                  </dt>
                  <dd>
                    <CBN :value='$store.state.bsc.genesis.fund' :decimals='18' :padding='6' />
                  </dd>
                </div>

                <!-- not started -->
                <div v-if='!genesisStartedCountdownFinished'>
                  <dt>
                    {{ $t('pGenesis.startCountdown') }}
                  </dt>
                  <dd>
                    <CCountdown :timestamp='$store.state.bsc.genesis.startTimestamp * 1000'
                                :show-ds='true'
                                v-on:finished='setGenesisStartedCountdownFinished' />
                  </dd>
                </div>

                <!-- not ended -->
                <div v-else-if='!genesisEndedCountdownFinished'>
                  <dt>
                    {{ $t('pGenesis.endCountdown') }}
                  </dt>
                  <dd>
                    <CCountdown :timestamp='$store.state.bsc.genesis.endTimestamp * 1000'
                                :show-ds='true'
                                v-on:finished='setGenesisEndedCountdownFinished' />
                  </dd>
                </div>

                <!-- last deposit -->
                <div v-else-if='!tradeAllowed'>
                  <dt>
                    {{ $t('pGenesis.waitForTheLastDeposit') }}
                  </dt>
                  <dd>
                    {{ $t('pGenesis.closing') }}
                  </dd>
                </div>

                <!-- finished -->
                <div v-else>
                  <dt>
                    {{ $t('pGenesis.initialLiquidityCreated') }}
                  </dt>
                  <dd>
                    {{ $t('pGenesis.finished') }}
                  </dd>
                </div>
              </dl>

              <div class='my-14 md:my-20' v-if='!tradeAllowed'>
                <div v-if='$store.state.wallet.account' class='mx-auto max-w-xl space-y-2'>
                  <div class='min-w-0 flex-1'>
                    <label for='deposit-amount'>
                      {{ $t('pGenesis.bnbBalance_') }}
                      <CBN class='font-semibold' :value='$store.state.wallet.bnbBalance' :decimals='18' :padding='6' />
                    </label>
                    <div class='mt-1 relative'>
                      <input id='deposit-amount'
                             type='text'
                             autocomplete='off'
                             class='block w-full border-0 rounded-md pl-14 pr-10 py-4 font-mono text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600'
                             v-model='amount'
                             :placeholder='$t("pGenesis.amountToDeposit")' />
                      <IconBNB class='absolute bottom-4 left-4 w-6 h-6 bg-yellow-500 rounded-full text-white' />
                      <span class='absolute bottom-4 right-4 pl-2 bg-white text-base text-gray-500'>BNB</span>
                    </div>
                  </div>
                  <div>
                    <button class='btn-add'
                            :class='{"bg-violet-600 hover:bg-violet-700 focus:ring-offset-violet-600": !insufficientBNB, "bg-rose-600 hover:bg-rose-700 focus:ring-offset-rose-600": insufficientBNB}'
                            @click='deposit'>
                      <span v-if='insufficientBNB'>
                        {{ $t('pGenesis.insufficientBNBBalance') }}
                      </span>
                      <span v-else>
                        {{ $t('pGenesis.deposit') }}
                      </span>
                      <IconDiceHyperSpin v-show='pendingDeposit' class='inline w-6 h-6' />
                    </button>
                  </div>
                </div>
                <div v-else class='flex justify-center'>
                  <BtnConnectWallet class='connectWallet'>
                    <span>
                      {{ $t('pGenesis.connectWalletToDeposit') }}
                    </span>
                  </BtnConnectWallet>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  add liquidity  -->
        <div class='hdf-timeline-item' :class='{ "done": tradeAllowed }'>
          <HeroIconOutlineClock v-if='!tradeAllowed' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl hidden sm:block'>
              {{ $t('pGenesis.createLiquidity1') }}
              <CBN :value='$store.state.bsc.genesis.initLiquidityPercent' />%
              {{ $t('pGenesis.createLiquidity2') }}<br>
              {{ $t('pGenesis.createLiquidity3') }}
            </h3>
            <h3 class='text-2xl sm:hidden'>
              {{ $t('pGenesis.createLiquidity1') }}{{ $t('pGenesis.createLiquidity2') }}
            </h3>

            <div class='hdf-timeline-body'>
              <div v-if='$store.state.bsc.genesis.liquidityCreatedTimestamp > "0"'>
                <p>
                  {{ $t('pGenesis.liquidityCreatedAt') }}
                </p>
                <p class='mt-2 font-mono text-lg md:text-xl text-gray-200'>
                  {{ moment($store.state.bsc.genesis.liquidityCreatedTimestamp * 1000) }}
                </p>
              </div>

              <ul>
                <li>
                  {{ $t('pGenesis.createLi1__') }}
                </li>
                <li>
                  {{ $t('pGenesis.createLi2__') }}
                </li>
              </ul>
            </div>
          </div>
        </div>


        <!--  redeem  -->
        <div class='hdf-timeline-item' :class='{ "doing": redeeming, "done": tradeAllowed && !redeeming }'>
          <HeroIconOutlineDotsCircleHrizontal v-if='tradeAllowed && redeeming' class='hdf-timeline-icon' />
          <HeroIconSolidBadgeCheck v-else-if='tradeAllowed && !redeeming' class='hdf-timeline-icon' />
          <HeroIconOutlineClock v-else class='hdf-timeline-icon' />

          <div class='hdf-timeline-inner'>
            <h3 class='text-2xl'>
              {{ $t('pGenesis.redeemTitle') }}
            </h3>

            <div class='hdf-timeline-body' v-if='$store.state.wallet.account'>
              <div v-if='$store.state.wallet.genesisPortion > "0"'>
                <p>
                  {{ $t('pGenesis.yourPortion') }}
                </p>
                <p class='mt-2 text-lg md:text-xl text-gray-200'>
                  <CBN :value='$store.state.wallet.genesisPortion' :token='true' :padding='2' /> HyperDeFi
                  <span v-if='redeemable'>
                    {{ $t('pGenesis.notRedeemed') }}
                  </span>
                  <span v-else>
                    {{ $t('pGenesis.redeemed') }}
                  </span>
                </p>

                <div class='my-6 md:my-10 mx-auto max-w-xl flex justify-center'
                     v-if='redeemable'>
                  <button class='btn-add btn-redeem' @click='redeem'>
                    <span>
                      {{ $t('pGenesis.redeem') }}
                    </span>
                    <CBN :value='$store.state.wallet.genesisPortion' :token='true' :padding='2' />
                    <span>
                      HyperDeFi
                    </span>
                    <IconDiceHyperSpin v-show='pendingRedeem' class='inline w-6 h-6' />
                  </button>
                </div>
              </div>
              <p v-else class='text-rose-400'>
                {{ $t('pGenesis.noPortion') }}
              </p>
            </div>
            <div class='hdf-timeline-body' v-else>
              <div class='my-6 md:my-10 mx-auto max-w-md flex justify-center'>
                <BtnConnectWallet class='connectWallet'>
                  <span>
                    {{ $t('pGenesis.connectWalletToCheck') }}
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
              {{ $t('pGenesis.launch') }}
            </h3>
          </div>
        </div>

      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'
import BN from 'bn.js'
import moment from 'moment'
import hdfLink from '~/utils/hdfLink'


export default {
  name: 'Genesis',
  data() {
    return {
      genesisStartedCountdownFinished: false,
      genesisEndedCountdownFinished: false,

      amount: '',
      tokenCreationTxHash: process.env.tokenCreationTxHash,

      pendingApprove: false,
      pendingDeposit: false,
      pendingRedeem: false,
    }
  },
  watch: {
    amount() {
      this.amount = this.amount
        .replace('。', '.')
        .replace(/[^\d.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace('.', '#')
        .replace(/\./g, '')
        .replace('#', '.')
        .replace(new RegExp('^(\\d+)\\.(\\d{0,6}).*$' ), '$1.$2')
    },
  },
  computed: {
    moment() {
      return moment
    },
    hdfLink() {
      return hdfLink
    },
    tokenAddress() {
      return process.env.tokenAddress
    },

    tradeAllowed() {
      return this.$store.state.bsc.genesis.liquidityCreatedTimestamp !== "0"
    },

    redeeming() {
      return this.tradeAllowed && this.$store.state.bsc.genesis.balance > '0'
    },
    redeemable() {
      return this.$store.state.wallet.genesisPortion > '0' && !this.$store.state.wallet.genesisRedeemed
    },

    amountStr() {
      if (this.amount) {
        return new BigNumber(this.amount).multipliedBy('1000000000000000000').toString()
      }

      return '0'
    },

    insufficientBNB() {
      return new BN(this.amountStr).gt(new BN(this.$store.state.wallet.bnbBalance))
    },
  },
  methods: {
    setGenesisStartedCountdownFinished(value) {
      this.genesisStartedCountdownFinished = value
    },
    setGenesisEndedCountdownFinished(value) {
      this.genesisEndedCountdownFinished = value
    },

    async deposit() {

      // genesisStarted
      if (!this.genesisStarted) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pGenesis.notStarted'),
        })

        return
      }


      // pending check
      if (this.pendingDeposit) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.pending'),
        })

        return
      }

      // amount check
      if (!this.amount) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pGenesis.amountEmpty'),
        })

        return
      }

      // insufficient BNB balance check
      if (this.insufficientBNB) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pGenesis.insufficientBNBBalance'),
        })

        return
      }

      this.pendingDeposit = true

      // submit
      await this.$nuxt.context.app.token.methods
        .deposit()
        .send({from: this.$store.state.wallet.account, value: this.amountStr})
        // .on('transactionHash', this.onDepositTransactionHash)
        .on('receipt', this.onDepositReceipt)
        // .on('confirmation', this.onDepositConfirmation)
        .on('error', this.onDepositError)
        .catch(this.onDepositError)
    },


    // async onDepositTransactionHash(txHash) {
    //   console.log('>>> onTransactionHash:', txHash)
    // },
    async onDepositReceipt(receipt) {
      if (receipt.status) {
        await this.$nuxt.context.app.conn.tokenSync()
        this.pendingDeposit = false
      }
    },
    // async onDepositConfirmation(confirmation) {
    //   // if (confirmation === 3) {
    //   //   await this.syncData()
    //   //   await this.$nuxt.context.app.conn.tokenSync()
    //   //   this.pendingDeposit = false
    //   // }
    //   // console.log('>>> onConfirmation:', confirmation)
    // },
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
          title: this.$t('pGenesis.tooEarly'),
          message: this.$t('pGenesis.redeemNotAllowedBefore__'),
        })

        return
      }

      // portion check
      if (this.$store.state.wallet.genesisPortion === '0') {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('pGenesis.noPortion'),
        })

        return
      }

      this.pendingRedeem = true

      await this.$nuxt.context.app.token.methods.genesisRedeem()
        .send({'from': this.$store.state.wallet.account})
        // .on('transactionHash', this.onRedeemTransactionHash)
        .on('receipt', this.onRedeemReceipt)
        // .on('confirmation', this.onRedeemConfirmation)
        .on('error', this.onRedeemError)
        .catch(this.onRedeemError)
    },

    // async onRedeemTransactionHash(txHash) {
    //   console.log('>>> onTransactionHash:', txHash)
    // },
    async onRedeemReceipt(receipt) {
      if (receipt.status) {
        await this.$nuxt.context.app.conn.tokenSync()
        this.pendingRedeem = false
      }
    },
    // async onRedeemConfirmation(confirmation) {
    //   // if (confirmation === 3) {
    //   //   await this.syncData()
    //   //   await this.$nuxt.context.app.conn.tokenSync()
    //   //   this.pendingDeposit = false
    //   // }
    //   // console.log('>>> onConfirmation:', confirmation)
    // },
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
  @apply mx-4 md:mx-6 lg:mx-14 xl:mx-20;
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

.a-list-deposit {
  @apply inline-flex items-center px-5 py-3 border border-transparent rounded-md;
  @apply font-medium text-base text-white bg-orange-600 hover:bg-orange-700;
  @apply focus:outline-none;
  @apply space-x-2;
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
