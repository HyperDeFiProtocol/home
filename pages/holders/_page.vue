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

    <CTableHolderTop :holders='holders' class='mt-10 lg:mt-24' />

    <CPagination class='mt-8 lg:mt-12'
                 :records='pageRecords' :size='pageSize' :number='pageNumber' path='/holders' />

  </LAutoWidth>
</template>

<script>
import BN from 'bn.js'

export default {
  scrollToTop: true,
  name: 'Holders',
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
      if (this.$store.state.bsc.synchronizing.fromHolderId === '0') await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.pageRecords = await this.$nuxt.context.app.db.holder.count()

      if (this.pageRecords > this.pageSize * (this.pageNumber - 1)) {
        let holders = await this.$nuxt.context.app.db.holder
          .toCollection()
          .sortBy('balance', function(arr) {
            return arr.sort(function(x, y) {
              const m = new BN(x['balance'])
              const n = new BN(y['balance'])

              if (m.lt(n)) {
                return 1
              }

              if (m.gt(n)) {
                return -1
              }

              return 0
            })
          })

        if (holders.length > this.pageOffset) {
          holders = holders.slice(this.pageOffset)
        }

        if (holders.length > this.pageSize) {
          holders = holders.slice(0, this.pageSize)
        }

        let rank = this.pageOffset
        for (let i = 0; i < holders.length; i++) {
          rank++
          holders[i].rank = rank
        }

        this.holders = holders
      }
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
