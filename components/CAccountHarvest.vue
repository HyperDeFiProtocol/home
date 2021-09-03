<template>
  <div>
    <div v-if='account.totalHarvest > "0"' class='my-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
      <p>
        <span class="block text-2xl font-bold text-violet-300">
          <CBN :value='account.totalHarvest' :token='true' /> HyperDeFi
        </span>
        <span class="mt-1 block text-base text-gray-300">
        <span class="font-medium text-white">
          {{ $t('sHarvest.total_') }}
        </span>
          {{ $t('sHarvest.alreadyHarvested') }}
        </span>
      </p>
    </div>

    <CTableHarvest v-if='transactions.length' :transactions='transactions' />

    <div v-else class='font-mono text-center text-gray-600'>
      No data
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAccountHarvest',
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
      this.transactions = await this.$nuxt.context.app.db.transfer
        .where({
          fromAccount: this.$store.state.bsc.globalAccounts.tax,
          toAccount: this.account.address
        })
        .reverse()
        .toArray()
    }
  }
}
</script>
