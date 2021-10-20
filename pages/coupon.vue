<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('pCoupon.title') }}
      </span>

      <template #tag>
        {{ $t('pCoupon.tag') }}
      </template>
    </CH3>

    <LAutoWidth class='px-4 sm:px-6 lg:px-8'>
      <div v-if='couponUsed' class='mt-12 md:mt-24'>
        <h2>
          {{ $t('pCoupon.used') }}
        </h2>

        <p class='mt-6'>
          {{ $t('pCoupon.you_veAlreadyUsed__') }}
          <span class='ml-2 font-mono font-extrabold text-2xl text-gray-300 tracking-wider'>{{ couponUsed }}</span>
        </p>
        <p class='mt-3'>
          {{ $t('pCoupon.WalletAddress') }}
          <span class='font-mono'>{{ $store.state.wallet.account }}</span>
          {{ $t('pCoupon.canGetA') }}
          <span class='font-bold text-gray-300'>
            {{ $t('pCoupon.permanent__') }}
          </span>
          {{ $t('pCoupon.forFutureTransactions_') }}
        </p>

        <div class='max-w-xl mx-auto mt-8 sm:mt-16'>
          <table class='tableTax'>
            <thead>
            <tr>
              <th scope='col' class='w-1/3'>
                {{ $t('sTax.type') }}
              </th>
              <th scope='col' class='w-1/3'>
                {{ $t('pCoupon.DefaultTax') }}
              </th>
              <th scope='col' class='w-1/3'>
                {{ $t('pCoupon.DiscountedTax') }}
              </th>
            </tr>
            </thead>
            <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
            <tr>
              <td>
                {{ $t('sTax.taker') }}
              </td>
              <td>
                &nbsp;{{ $store.state.bsc.takerTax.total }}%&nbsp;
              </td>
              <td>
                {{ takerTax }}%
              </td>
            </tr>

            <tr>
              <td>
                {{ $t('sTax.maker') }}
              </td>
              <td>
                &nbsp;{{ $store.state.bsc.makerTax.total }}%&nbsp;
              </td>
              <td>
                {{ makerTax }}%
              </td>
            </tr>

            <tr>
              <td>
                {{ $t('sTax.whale') }}
              </td>
              <td>
                &nbsp;{{ $store.state.bsc.whaleTax.total }}%&nbsp;
              </td>
              <td>
                {{ whaleTax }}%
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>

      <div v-else class='mt-12 md:mt-24'>
        <h2>
          {{ $t('pCoupon.use') }}
        </h2>

        <p class='mt-6'>
          {{ $t('pCoupon.IfYouHaveACoupon__') }}
        </p>



        <div class='mt-12 mx-auto max-w-xl'>
          <div class='space-y-2'>
            <label for='input-code0'>
              {{ $t('pCoupon.couponCode') }}
            </label>
            <div class='space-y-4'>
              <div class='inputs'>
                <input id='input-code0' ref='code0'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code0' />

                <input id='input-code1' ref='code1'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code1'
                       @keyup.delete='codeFocus(0)' />

                <input id='input-code2' ref='code2'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code2'
                       @keyup.delete='codeFocus(1)' />

                <div class='block sm:hidden'></div>
                <div class='block sm:hidden'></div>
                <div class='block sm:hidden'></div>
                <div class='block sm:hidden h-full flex items-center justify-end pr-1 font-mono font-extrabold text-4xl text-gray-500'>-</div>

                <div class='hidden sm:block sm:font-mono sm:font-extrabold sm:text-4xl sm:text-gray-500'>-</div>

                <input id='input-code3' ref='code3'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code3'
                       @keyup.delete='codeFocus(2)' />

                <input id='input-code4' ref='code4'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code4'
                       @keyup.delete='codeFocus(3)' />

                <input id='input-code5' ref='code5'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code5'
                       @keyup.delete='codeFocus(4)' />

                <input id='input-code6' ref='code6'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code6'
                       @keyup.delete='codeFocus(5)' />

                <input id='input-code7' ref='code7'
                       type='text'
                       autocomplete='off'
                       maxlength='1'
                       class='input-code'
                       v-model='code7'
                       @keyup.delete='codeFocus(6)' />
              </div>

              <div v-if='$store.state.wallet.account'>
                <button ref='use' class='hp-btn-lg hp-btn-violet hp-btn-center space-x-3' @click='use'>
                  <span>
                    {{ $t('pCoupon.bindCouponCode') }}
                  </span>
                  <IconDiceHyperSpin v-show='binding' class='inline w-7 h-7' />
                </button>
              </div>
              <div v-else>
                <BtnConnectWallet class='hp-btn-md hp-btn-violet hp-btn-center' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='mt-16 sm:mt-24'>
        <h2>
          {{ $t('pCoupon.ShareCouponCode') }}
        </h2>

        <p class='mt-6'>
          {{ $t('pCoupon.YouCanPromote__') }}
        </p>
        <p class='mt-3'>
          {{ $t('pCoupon.StartWithHolding__') }}
        </p>

        <div class='mt-12 max-w-xl mx-auto'>
          <div v-if='coupon'>
            <div>
              {{ $t('pCoupon.couponCode') }}
            </div>
            <div class='mt-2 coupon'>
              {{ coupon }}
            </div>
            <div class='mt-1 text-right'>
              {{ $t('pCoupon.Counter_') }}
              <CBN :value='$store.state.wallet.visitors' />
            </div>

            <button class='mt-4 hp-btn-xl hp-btn-rose hp-btn-center space-x-3' @click='copyCoupon'>
              <HeroIconOutlineClipboardCopy class='w-7 h-7 text-rose-300' />
              <span>
                {{ $t('pCoupon.copy__') }}
              </span>
            </button>
          </div>

          <div v-else>
            <div v-if='$store.state.wallet.account'>
              <button class='hp-btn-lg hp-btn-emerald hp-btn-center space-x-3' @click='generate'>
                <span>
                  {{ $t('pCoupon.generate') }}
                </span>
                <IconDiceHyperSpin v-show='generating' class='inline w-7 h-7' />
              </button>
            </div>
            <div v-else>
              <BtnConnectWallet class='hp-btn-md hp-btn-violet hp-btn-center' />
            </div>
          </div>
        </div>
      </div>

      <div class='mt-16 sm:mt-24'>
        <h2>
          {{ $t('pCoupon.PromotionBonus') }}
          {{ $store.state.bsc.global.bonus.total }}%
          {{ $t('pCoupon.in3Levels') }}
        </h2>

        <p class='mt-6'>
          {{ $store.state.bsc.global.bonus.level0 }}%
          {{ $t('pCoupon.fromDirect__') }}
          {{ $store.state.bsc.global.bonus.level1 }}% + {{ $store.state.bsc.global.bonus.level2 }}%
          {{ $t('pCoupon.fromIndirect__') }}
        </p>

        <div class='max-w-xl mx-auto mt-8 sm:mt-16'>
          <table>
            <thead>
            <tr>
              <th scope='col' class='w-3/5'>
                {{ $t('pCoupon.From') }}
              </th>
              <th scope='col' class='w-2/5'>
                {{ $t('pCoupon.ShareAirdrop') }}
              </th>
            </tr>
            </thead>
            <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
            <tr>
              <td>
                {{ $t('pCoupon._level0') }}
              </td>
              <td>
                {{ $store.state.bsc.global.bonus.level0 }}%
              </td>
            </tr>

            <tr>
              <td>
                {{ $t('pCoupon._level1') }}
              </td>
              <td>
                {{ $store.state.bsc.global.bonus.level1 }}%
              </td>
            </tr>

            <tr>
              <td>
                {{ $t('pCoupon._level2') }}
              </td>
              <td>
                {{ $store.state.bsc.global.bonus.level2 }}%
              </td>
            </tr>

            </tbody>
          </table>
        </div>

      </div>

    </LAutoWidth>
  </LAutoWidth>
</template>

<script>
import BN from 'bn.js'
import fn from '~/utils/functions'
import copy from 'clipboard-copy'

export default {
  scrollToTop: true,
  name: 'coupon',
  data() {
    return {
      code0: '',
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
      code7: '',

      binding: false,
      generating: false
    }
  },
  watch: {
    code0() {
      this.code0 = fn.onlyHexString(this.code0)
      if (this.code0) {
        this.$refs.code1.focus()
      }
    },
    code1() {
      this.code1 = fn.onlyHexString(this.code1)
      if (this.code1) {
        this.$refs.code2.focus()
      }
    },
    code2() {
      this.code2 = fn.onlyHexString(this.code2)
      if (this.code2) {
        this.$refs.code3.focus()
      }
    },
    code3() {
      this.code3 = fn.onlyHexString(this.code3)
      if (this.code3) {
        this.$refs.code4.focus()
      }
    },
    code4() {
      this.code4 = fn.onlyHexString(this.code4)
      if (this.code4) {
        this.$refs.code5.focus()
      }
    },
    code5() {
      this.code5 = fn.onlyHexString(this.code5)
      if (this.code5) {
        this.$refs.code6.focus()
      }
    },
    code6() {
      this.code6 = fn.onlyHexString(this.code6)
      if (this.code6) {
        this.$refs.code7.focus()
      }
    },
    code7() {
      this.code7 = fn.onlyHexString(this.code7)
      if (this.code7) {
        this.$refs.use.focus()
      }
    }
  },
  computed: {
    takerTax() {
      if (this.couponUsed) {
        return new BN(this.$store.state.bsc.takerTax.total).subn(1).toString()
      }

      return this.$store.state.bsc.takerTax.total
    },
    makerTax() {
      if (this.couponUsed) {
        return new BN(this.$store.state.bsc.makerTax.total).subn(1).toString()
      }

      return this.$store.state.bsc.makerTax.total
    },
    whaleTax() {
      if (this.couponUsed) {
        return new BN(this.$store.state.bsc.whaleTax.total).subn(1).toString()
      }

      return this.$store.state.bsc.whaleTax.total
    },
    code() {
      return this.code0 + this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6 + this.code7
    },
    codeDec() {
      return fn.hex2dec(this.code)
    },
    coupon() {
      return fn.dec2coupon(this.$store.state.wallet.coupon).toUpperCase()
    },
    couponUsed() {
      return fn.dec2coupon(this.$store.state.wallet.couponUsed).toUpperCase()
    }
  },
  methods: {
    codeFocus(index) {
      this.$refs['code' + index].focus()
      this.$refs['code' + index].select()
    },
    async use() {
      this.binding = true

      if (!this.code || this.code.length !== 8) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pCoupon.codeEmpty__')
        })

        this.binding = false
        return
      }

      if (this.codeDec === '0') {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('pCoupon.codeInvalid__')
        })

        this.binding = false
        return
      }

      // verify
      const respGetCoupon = await this.$nuxt.context.app.token.methods
        .getCoupon(this.codeDec)
        .call()
        .catch(this.onVerifyError)

      if (!respGetCoupon) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: 'Cannot verify this Coupon Code: ' + this.code
        })

        this.binding = false
        return
      }

      if (!respGetCoupon.valid) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: 'Invalid Coupon Code'
        })

        this.binding = false
        return
      }

      // submit
      await this.$nuxt.context.app.token.methods
        .useCoupon(this.codeDec)
        .send({ from: this.$store.state.wallet.account })
        .on('receipt', this.onUseReceipt)
        .on('error', this.onUseError)
        .catch(this.onUseError)
    },

    async onVerifyError(error) {
      console.error('>>> Page[coupon] getCoupon:', error.message)
    },


    async onUseReceipt(receipt) {
      if (receipt.status) {
        await this.$nuxt.context.app.conn.tokenSync()
        this.binding = false
      }
    },
    async onUseError(error) {
      this.binding = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message
      })
    },

    async generate() {
      this.generating = true

      if (this.$store.state.wallet.balance === '0' && this.$store.state.wallet.genesisDeposit === '0') {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: 'Not holding HyperDeFi'
        })

        this.generating = false
        return
      }

      if (this.coupon) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: 'Already generated: ' + this.coupon
        })

        this.generating = false
        return
      }

      // generate
      await this.$nuxt.context.app.token.methods
        .genConpon()
        .send({ from: this.$store.state.wallet.account })
        .on('receipt', this.onGenerateReceipt)
        .on('error', this.onGenerateError)
        .catch(this.onGenerateError)
    },

    async onGenerateReceipt(receipt) {
      if (receipt.status) {
        await this.$nuxt.context.app.conn.tokenSync()
        this.generating = false
      }
    },
    async onGenerateError(error) {
      this.generating = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message
      })
    },

    async copyCoupon() {
      await copy(this.coupon);
    },
  }
}
</script>

<style scoped lang='scss'>
h2 {
  @apply text-3xl font-extrabold tracking-tight sm:text-4xl;
}

p {
  @apply text-gray-400;
}

table {
  @apply w-full h-px table-fixed text-lg;

  thead {
    tr {
      th {
        @apply py-4 leading-6 font-medium text-gray-200 text-center;

        &:first-child {
          @apply bg-gray-800 text-base;
        }

        &:last-child {
          @apply bg-violet-900;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        @apply py-5 text-center;

        &:first-child {
          @apply bg-gray-800 text-base;
        }

        &:last-child {
          @apply bg-violet-900 font-extrabold;
        }
      }

      &:hover {
        @apply bg-gray-700;

        td {
          @apply bg-gray-700 font-normal;

          //&:nth-child(2) {
          //  @apply text-lg;
          //}

          &:last-child {
            @apply bg-violet-700 font-extrabold text-white;
          }
        }
      }
    }
  }
}

.tableTax {
  tbody tr:hover td {
    &:nth-child(2) {
      @apply line-through;
    }
  }
}

.inputs {
  @apply mt-1 grid grid-cols-6 gap-2;

  @screen sm {
    @apply grid-cols-none;
    @apply flex items-center;

    // @apply sm:grid-cols-8;
  }
}

.input-code {
  @apply block w-full border-0 rounded-md py-4 bg-gray-300;
  @apply font-mono font-extrabold text-lg text-gray-900 text-center;
  @apply placeholder-gray-200 shadow-sm;

  @screen xs {
    @apply py-5 text-5xl;
  }

  @screen sm {
    @apply py-4 text-4xl;
  }

  &:focus {
    @apply border-transparent bg-white outline-none ring-2 ring-white ring-offset-2 ring-offset-violet-600;
  }
}

.coupon {
  @apply w-full border-0 rounded-md py-4 shadow-sm;
  @apply bg-gradient-to-br from-cool-gray-400 via-cool-gray-300 to-cool-gray-400;
  @apply font-mono font-extrabold text-gray-900 text-center text-lg sm:text-4xl;

  letter-spacing: 0.3em;
}
</style>
