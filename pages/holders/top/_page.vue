<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('siteNav.topAccount') }}
      </span>

      <template #tag>
        On Chain
      </template>

      <template #desc>
        <span v-if='$store.state.bsc.synchronizing.fromHolderId !== null' class='animate-pulse'>
          Updating... #{{ $store.state.bsc.synchronizing.fromHolderId }}
        </span>
        <span v-else @click='refresh'>
          Click to Refresh
        </span>
      </template>
    </CH3>

    <CTableHolder :holders='holders' class='mt-10 lg:mt-24' />

    <CPagination class='mt-8 lg:mt-12'
                 :records='pageRecords' :size='pageSize' :number='pageNumber' path='/holders' />

  </LAutoWidth>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'HoldersTop',
  data() {
    return {
      holders: [],

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
    '$store.state.bsc.synchronizing.fromHolderId': async function() {
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.holders = await this.$nuxt.context.app.db.holder
        // .where('balance')
        // .above('0')
        .orderBy('balance')
        .reverse()
        .offset(this.pageOffset)
        .limit(this.pageSize)
        .toArray()

      let rank = this.pageOffset
      for (let i = 0; i < this.holders.length; i++) {
        rank++
        this.holders[i].rank = rank
      }

      this.pageRecords = await this.$nuxt.context.app.db.holder
        .count()
    },
    async refresh() {
      await this.$nuxt.context.app.db.pointers.delete('holder')
      await this.$nuxt.context.app.db.holder.clear()
      await this.$nuxt.context.app.sync.holders()
    },
  }
}
</script>

<style scoped lang='scss'>

</style>
