<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <CH3>
        {{ $t('siteNav.genesisHistory') }}

        <template #tag>
          On Chain
        </template>
      </CH3>

      <CTableGenesis :transactions='transactions' class='mt-10 lg:mt-24' />

      <CPagination class='mt-8 lg:mt-12'
                   :records='pageRecords' :size='pageSize' :number='pageNumber' path='/history/genesis' />
    </LAutoWidth>
  </div>
</template>

<script>
import fn from '~/utils/functions'

export default {
  scrollToTop: true,
  name: 'HistoryGenesisDeposit',
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
    '$store.state.bsc.synchronizing.genesisDepositFrom': async function() {
      await fn.wait(1000)
      await this.load()
    },
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.genesisDeposit
        .reverse()
        .offset(this.pageOffset)
        .limit(this.pageSize)
        .toArray()

      this.pageRecords = await this.$nuxt.context.app.db.genesisDeposit.count()
    },
  }

}
</script>


<style scoped lang='scss'>

</style>
