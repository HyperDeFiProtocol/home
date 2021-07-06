<template>
  <button @click='getHarvest' class='space-x-2'>
    <slot>Get Harvest</slot>
    <IconDiceHyperSpin v-show='pending' class='inline w-6 h-6' />
  </button>
</template>

<script>
export default {
  name: 'BtnTakeHarvest',
  data() {
    return {
      pending: false
    }
  },
  methods: {
    async getHarvest() {
      this.pending = true
      await this.$store.state.bsc.token().methods.takeHarvest()
        .send({'from': this.$store.state.wallet.account})
        .on('transactionHash', this.onTransactionHash)
        .on('receipt', this.onReceipt)
        .on('confirmation', this.onConfirmation)
        .on('error', this.onError)
        .catch(this.onError)
    },
    async onTransactionHash(txHash) {
      console.log('>>> onTransactionHash:', txHash)
    },
    async onReceipt(receipt) {
      console.log('>>> onReceipt:', receipt)

      if (receipt.status) {
        //
      } else {
        //
      }
    },
    async onConfirmation(confirmation) {
      if (confirmation === 6) {
        // this.pending = false
      }
      // console.log('>>> onConfirmation:', confirmation)
    },
    async onError(error) {
      this.pending = false

      await this.$store.dispatch('warning/SET_WARNING', {
        title: 'Tx Error: ' + error.code,
        message: error.message,
      })
    },
  }
}
</script>

<style scoped>

</style>
