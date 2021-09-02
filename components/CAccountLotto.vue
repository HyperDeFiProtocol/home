<template>
  <div>
    <CTableLotto v-if='transactions.length' :transactions='transactions' :hash='true' />

    <div v-else class='font-mono text-center text-gray-600'>
      No data
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAccountLotto',
  props: {
    'account': {
      type: Object,
      required: true
    }
  },
  watch: {
    '$store.state.bsc.synchronizing.fromBlock': async function() {
      if (this.$store.state.bsc.synchronizing.fromBlock === 0) {
        await this.load()
      }
    }
  },
  data() {
    return {
      transactions: []
    }
  },
  mounted: async function () {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.lotto
        .where('account')
        .equals(this.account.address)
        .reverse()
        .toArray()
    }
  }
}
</script>
