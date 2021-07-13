<template>
  <button @click='submit' class='space-x-2'>
    <slot>{{ $t('sUsername.submit') }}</slot>
    <IconDiceHyperSpin v-show='pending' class='inline w-6 h-6' />
  </button>
</template>

<script>
export default {
  name: 'BtnSubmitUsername',
  props: {
    username: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      pending: false
    }
  },
  methods: {
    async submit() {
      // empty check
      if (!this.username) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('modal.usernameEmpty'),
        })

        return
      }

      // length check
      if (4 > this.username.length) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('modal.usernameLengthMin'),
        })

        return
      }

      if (15 < this.username.length) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('modal.usernameLengthMax'),
        })

        return
      }

      // pending check
      if (this.pending) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.info'),
          message: this.$t('modal.pending'),
        })

        return
      }


      // username set check
      if (this.$store.state.wallet.username) {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('modal.usernameChange'),
        })

        return
      }

      // spin
      this.pending = true

      // username exist check
      const account = await this.$nuxt.context.app.token.methods
        .getAccountByUsername(this.username).call()
        .catch(async function (error) {
          this.pending = false

          await this.$store.dispatch('warning/SET_WARNING', {
            title: this.$t('modal.error'),
            message: error.message,
          })
        })
      if (account.account !== this.$store.state.bsc.globalAccounts.zero) {
        this.pending = false

        await this.$store.dispatch('warning/SET_WARNING', {
          title: this.$t('modal.error'),
          message: this.$t('modal.usernameTaken'),
        })

        return
      }

      // submit
      await this.$nuxt.context.app.token.methods
        .setUsername(this.username)
        .send({'from': this.$store.state.wallet.account})
        // .on('transactionHash', this.onTransactionHash)
        .on('receipt', this.onReceipt)
        // .on('confirmation', this.onConfirmation)
        .on('error', this.onError)
        .catch(this.onError)
    },
    // async onTransactionHash(txHash) {
    //   console.log('>>> onTransactionHash:', txHash)
    // },
    async onReceipt(receipt) {
      console.log('>>> onReceipt:', receipt)

      if (receipt.status) {
        await this.$nuxt.context.app.conn.tokenSync()
      }
    },
    // async onConfirmation(confirmation) {
    //   if (confirmation === 3) {
    //     await this.$nuxt.context.app.conn.tokenSync()
    //     // this.pending = false
    //   }
    //   // console.log('>>> onConfirmation:', confirmation)
    // },
    async onError(error) {
      this.pending = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: this.$t('modal.txError') + ' #' + error.code,
        message: error.message,
      })
    },
  }
}
</script>

<style scoped>

</style>
