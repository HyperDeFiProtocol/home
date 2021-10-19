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

    <div v-if='couponUsed' class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <h2>
        {{ $t('pCoupon.used') }}
      </h2>

      <p>...</p>

      <div>
        {{ couponUsed }}
      </div>
    </div>

    <div v-else class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <h2>
        {{ $t('pCoupon.use') }}
      </h2>

      <p>...</p>

      <div class='mt-24 mx-auto max-w-xl px-4 xl:px-0'>
        <div class='space-y-2'>
          <label for='input-code0'>
            {{ $t('pCoupon.couponCode') }}
          </label>
          <div class='space-y-4'>
            <div class='mt-1 grid grid-cols-6 sm:grid-cols-8 gap-2'>
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
              <div class='block sm:hidden'></div>

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
            <div>
              <button ref='use' class='btn-bind' @click='use'>
                <span>
                  {{ $t('pCoupon.use') }}
                </span>
                <IconDiceHyperSpin v-show='binding' class='inline w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <h2 v-if='coupon'>
        {{ $t('pCoupon.couponCodeGenerated') }}
      </h2>
      <h2 v-else>
        {{ $t('pCoupon.generateACouponCode') }}
      </h2>

      <p v-if='coupon'>...</p>
      <p v-else>...</p>

      <div class='mt-8 max-w-xl mx-auto'>
        <input v-if='coupon'
               id='coupon' ref='coupon'
               type='text'
               autocomplete='off'
               maxlength='1'
               class='input-code'
               :value='coupon'
               disabled />

        <button v-else class='btn-bind' @click='generate'>
          <span>
            {{ $t('pCoupon.generate') }}
          </span>
          <IconDiceHyperSpin v-show='generating' class='inline w-6 h-6' />
        </button>
      </div>
    </div>
  </LAutoWidth>
</template>

<script>
import fn from '~/utils/functions'

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

      if (this.$store.state.wallet.balance === '0') {
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
    }
  }
}
</script>

<style scoped lang='scss'>
h2 {
  @apply text-3xl font-extrabold tracking-tight sm:text-4xl;
}

p {
  @apply mt-4 text-gray-500;
}

.input-code {
  @apply block w-full border-0 rounded-md py-4 bg-gray-300;
  @apply font-mono font-extrabold text-lg sm:text-4xl text-gray-900 text-center;
  @apply placeholder-gray-200 shadow-sm;

  &:focus {
    @apply border-transparent bg-white outline-none ring-2 ring-white ring-offset-2 ring-offset-violet-600;
  }
}

.code-separator {
  @apply h-full flex items-center;
}

.btn-bind {
  @apply w-full rounded-md border border-transparent shadow px-5 py-3 sm:px-10;
  @apply focus:outline-none;
  @apply focus:ring-2 focus:ring-white focus:ring-offset-2;
  @apply inline-flex justify-center space-x-2;
  @apply text-base font-medium text-white text-center;
  @apply bg-violet-600 hover:bg-violet-700 focus:ring-offset-violet-600;
}
</style>
