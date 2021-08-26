<template>
  <div>
    <LAutoWidth class='py-10 md:py-20'>
      <CH3>
        {{ $t('siteNav.fomoHistory') }}

        <template #tag>
          On Chain
        </template>
      </CH3>

      <div v-if='transactions.length' class='mt-10 lg:mt-24 overflow-x-auto'>
        <div class='align-middle inline-block min-w-full'>
          <div class='shadow overflow-hidden border-b border-gray-700'>
            <table class='table-history'>
              <thead>
              <tr>
                <th scope='col'>
                  {{ $t('txTable.block') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.type') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.address') }}
                </th>
                <th scope='col'>
                  {{ $t('txTable.amount') }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for='tx in transactions'>
                <td>
                  <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>
                    #<CBN :value='tx.blockNumber' />
                  </a>
                </td>
                <td v-if='tx.fromAccount === $store.state.bsc.globalAccounts.fomo' class='text-emerald-400'>
                  {{ $t('txTable.winner') }}
                </td>
                <td v-else>
                  {{ $t('txTable.accumulate') }}
                </td>
                <td v-if='tx.fromAccount === $store.state.bsc.globalAccounts.fomo' class='font-mono text-emerald-400'>
                  <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                    <CAddress :value='tx.toAccount' />
                  </a>
                </td>
                <td v-else class='font-mono'>
                  <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                    <CAddress :value='tx.fromAccount' />
                  </a>
                </td>
                <td>
                  <CBN :value='tx.amount' :token='true' :padding='2' />
                  HyperDeFi
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CPagination class='mt-8 lg:mt-12'
                   :records='pageRecords' :size='pageSize' :number='pageNumber' path='/history/fomo' />
    </LAutoWidth>
  </div>
</template>

<script>
import explorer from '~/utils/hdfLink'
import hdfLink from '~/utils/hdfLink'

export default {
  scrollToTop: true,
  name: 'HistoryFomo',
  data() {
    return {
      transactions: [],

      pageSize: 20,
      pageRecords: 0
    }
  },
  computed: {
    explorer() {
      return explorer
    },
    hdfLink() {
      return hdfLink
    },
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
    '$store.state.bsc.synchronizing': async function() {
      await this.load()
    }
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.transfer
        .where('fromAccount')
        .equals(this.$store.state.bsc.globalAccounts.fomo)
        .or('toAccount')
        .equals(this.$store.state.bsc.globalAccounts.fomo)
        .reverse()
        .offset(this.pageOffset)
        .limit(this.pageSize)
        .toArray()

      this.pageRecords = await this.$nuxt.context.app.db.transfer
        .where('fromAccount')
        .equals(this.$store.state.bsc.globalAccounts.fomo)
        .or('toAccount')
        .equals(this.$store.state.bsc.globalAccounts.fomo)
        .count()
    },
  }

}
</script>


<style scoped lang='scss'>

</style>
