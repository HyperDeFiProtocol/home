<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <CH3>
        {{ $t('siteNav.bufferHistory') }}

        <template #tag>
          On Chain
        </template>

        <template #desc>
          {{ $t('sDataBoard.__mintLatestBlockNumber__') }}
          #<CBN :value='$store.state.bsc.blockNumber' />
        </template>
      </CH3>

      <CSupplyMint class='mt-12 sm:mt-24' />

      <CTableBuffer :transactions='transactions' class='mt-10 lg:mt-24' />

      <CPagination class='mt-8 lg:mt-12'
                   :records='pageRecords' :size='pageSize' :number='pageNumber' path='/history/buffer' />
    </LAutoWidth>
  </div>
</template>

<script>
import fn from '~/utils/functions'

export default {
  scrollToTop: true,
  name: 'HistoryBuffer',
  data() {
    return {
      transactions: [],

      pageSize: 20,
      pageRecords: 0
    }
  },
  computed: {
    pageNumber() {
      if (this.$route.params.page && this.$route.params.page > '1') {
        const pageNumber = parseInt(this.$route.params.page)
        if (pageNumber > 1) {
          return pageNumber
        }
      }

      return 1
    },
    pageOffset() {
      return this.pageSize * (this.pageNumber - 1)
    }
  },
  watch: {
    '$store.state.bsc.synchronizing.fromBlock': async function() {
      await fn.wait(1000)
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.buffer
        .reverse()
        .offset(this.pageOffset)
        .limit(this.pageSize)
        .toArray()

      this.pageRecords = await this.$nuxt.context.app.db.buffer
        .count()
    },
  },
}
</script>

<style scoped lang='scss'>
h2 {
  @apply text-3xl font-extrabold tracking-tight sm:text-4xl;
}

p {
  @apply text-gray-400;
}
</style>
