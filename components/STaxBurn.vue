<template>
  <div class='hdf-section-fee'>
    <div class='text-center'>
      <span class='span-icon bg-emerald-50 text-emerald-700'>
        <HeroIconOutlineBreaker class='h-8 w-8' />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>
        <div class='header2'>
          <h2 class='text-emerald-500'>
            {{ $t('sTaxBurn.title') }}
          </h2>
          <p>
            {{ $t('sTaxBurn.text') }}
          </p>
        </div>

        <div class='body1 to-emerald-900 from-green-900 text-emerald-300'>
          <h3>
            {{ $t('sTax.forEachTransaction') }}
          </h3>

          <p>
            {{ $t('sTaxBurn.burn') }}
            <span v-if='$store.state.bsc.takerFee.destroy > "0"'>
              {{ $store.state.bsc.takerFee.destroy }}%
              {{ $t('sTax.fromTaker') }}
            </span>
            <span v-if='$store.state.bsc.makerFee.destroy > "0"'>
              {{ $store.state.bsc.makerFee.destroy }}%
              {{ $t('sTax.fromMaker') }}
            </span>
            <span v-if='$store.state.bsc.whaleFee.destroy > "0"'>
              {{ $store.state.bsc.whaleFee.destroy }}%
              {{ $t('sTax.fromWhale') }}
            </span>
            {{ $t('sTaxBurn.destroy__') }}
          </p>

          <div v-if='$store.state.stat.burn.count' class='mt-5 inline-flex rounded-md shadow'>
            <nuxt-link :to='localeLocation("/history/burn")'
               class='hdf-a-track bg-emerald-700 hover:bg-emerald-600 space-x-2'>
              <HeroIconSolidCursorClick class='h-5 w-5' />
              <span>
                {{ $t('sTax.trackAll') }}
                {{ $store.state.stat.burn.count }}
                {{ $t('sTaxBurn.trackBurnTransfers') }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </main>

      <dl v-if='$store.state.stat.burn.count' class='hdf-stat lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2'>


        <!--        <div>-->
        <!--          <dt>-->
        <!--            Total Burned Market Value-->
        <!--          </dt>-->
        <!--          <dd>-->
        <!--            $<CBN :value='marketValue' :price='true' :padding='6' /> USD-->
        <!--          </dd>-->
        <!--        </div>-->

        <div>
          <dt>
            {{ $t('sTaxBurn.statTotalBurned') }}
          </dt>
          <dd>
            <CBN :value='$store.state.bsc.supply.burned' :token='true' />
          </dd>
        </div>

        <div>
          <dt>
            {{ $t('sTaxBurn.statBurnTransfers') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.burn.count' />
          </dd>
        </div>
      </dl>

      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-emerald-500 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sTaxBurn.burnHistory') }}
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
          <ul class='hdf-tx-ul'>
            <li v-for='tx in transactions'>
              <span class='span-icon-wrap'>
                <HeroIconOutlineBreaker />
              </span>
              <div class='div-body'>
                <div>
                  <h4>
                    <CBN :value='tx.amount' />
                    HyperDeFi
                  </h4>
                  <p>
                    <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </p>
                </div>
<!--                <p class='p-txs'>-->
<!--                  <a target='_blank' :href='hdfLink.exploreTx(txs.txHash)'>{{ txs.txHash.slice(0, 20) }}...</a>-->
<!--                </p>-->
              </div>
            </li>
          </ul>
        </div>

        <!-- md: -->
        <div class='hidden mt-4 overflow-x-auto md:block'>
          <div class='align-middle inline-block min-w-full'>
            <div class='shadow overflow-hidden border-b border-gray-700'>
              <table class='hdf-tx-table'>
                <thead>
                <tr>
                  <th scope='col'>
                    {{ $t('txTable.block') }}
                  </th>
                  <th scope='col'>
                    {{ $t('txTable.txHash') }}
                  </th>
                  <th scope='col'>
                    {{ $t('txTable.amount') }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for='tx in transactions'>
                  <td>
                    <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </td>
                  <td class='font-mono'>
                    <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                      {{ tx.txHash.slice(0, 36) }}...{{ tx.txHash.slice(-4) }}
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
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'
import fn from '~/utils/functions'

export default {
  name: 'STaxBurn',
  data() {
    return {
      marketValue: '0',
      transactions: []
    }
  },
  computed: {
    hdfLink() {
      return hdfLink
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
      this.transactions = await this.$nuxt.context.app.db.transfer.where({
        toAccount: this.$store.state.bsc.globalAccounts.burn
      }).reverse().limit(10).toArray()

      //   this.marketValue = amount.mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()
    }
  }
}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-emerald-100;
}


tbody {
  tr {
    &:hover {
      @apply bg-emerald-900;

      td {
        @apply text-emerald-200;
      }
    }
  }
}
</style>
