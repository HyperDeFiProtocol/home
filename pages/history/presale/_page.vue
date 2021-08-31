<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <CH3>
        {{ $t('siteNav.presaleHistory') }}

        <template #tag>
          On Chain
        </template>
      </CH3>

      <CTablePresale :transactions='transactions' class='mt-10 lg:mt-24' />

      <CPagination class='mt-8 lg:mt-12'
                   :records='pageRecords' :size='pageSize' :number='pageNumber' path='/history/presale' />
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'HistoryPresaleDeposit',
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
    '$store.state.bsc.blockNumber': async function() {
      await this.sync()
    },
    '$store.state.bsc.synchronizing.presaleDepositFrom': async function() {
      await this.load()
    },
  },
  async mounted() {
    await this.sync()
    await this.load()
  },
  methods: {
    async sync() {
      await this.$nuxt.context.app.sync.presaleDeposit()
    },
    async load() {
      this.transactions = await this.$nuxt.context.app.db.presaleDeposit
        .reverse()
        .offset(this.pageOffset)
        .limit(this.pageSize)
        .toArray()

      this.pageRecords = await this.$nuxt.context.app.db.presaleDeposit.count()
    },
  }

}
</script>


<style scoped lang='scss'>

</style>
