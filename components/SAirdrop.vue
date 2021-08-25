<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24'>
      <CH2>
        <span class='text-violet-400'>
          {{ $t('sAirdrop.title') }}
        </span>
        <span>
          <span v-if='$store.state.bsc.supply.airdrop === "0"'>
            {{ $t('sAirdrop.titleEnded') }}
          </span>
          <span v-else>
            {{ $t('sAirdrop.titleOngoing') }}
          </span>
        </span>

        <template #tag>
          {{ $t('sAirdrop.tag') }}
        </template>
        <template #desc>
          {{ $t('sAirdrop.descUpTo') }}
          <CBN :value='String($store.state.bsc.global.airdropMax)' :token='true' /> HyperDeFi
          {{ $t('sAirdrop.descUpPerAddress_') }}
          {{ $t('sAirdrop.descWill__') }}
          <CBN :value='summed' :token='true' /> HyperDeFi
          {{ $t('sAirdrop.descFirstCame__') }}
        </template>
      </CH2>

      <dl class='hdf-stat grid grid-cols-1 lg:max-w-7xl'
          :class='{"xl:grid-cols-3": $store.state.stat.airdrop.count, "xl:grid-cols-1": !$store.state.stat.airdrop.count}'>
        <div>
          <dt>
            {{ $t('sAirdrop.remaining') }}
          </dt>
          <dd>
            <CBN :value='String($store.state.bsc.supply.airdrop)' :token='true' />
          </dd>
        </div>


<!--        <div>-->
<!--          <dt>-->
<!--            {{ $t('sAirdrop.totalAirdropMarketValue') }}-->
<!--          </dt>-->
<!--          <dd>-->
<!--            $<CBN :value='summedMarketValue' :price='true' :padding='6' />-->
<!--            USD-->
<!--          </dd>-->
<!--        </div>-->

        <div v-if='$store.state.stat.airdrop.count'>
          <dt>
            {{ $t('sAirdrop.airdropped') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.airdrop.amount' :token='true' />
          </dd>
        </div>


        <div v-if='$store.state.stat.airdrop.count'>
          <dt>
            {{ $t('sAirdrop.airdropTransfer') }}
          </dt>
          <dd>
            <CBN :value='$store.state.stat.airdrop.count' />
          </dd>
        </div>
      </dl>

      <div v-if='transactions.length'>
        <h6 class='mt-12 md:mt-16 ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase'>
          {{ $t('txTable.latest') }}
          {{ transactions.length }}
          {{ $t('sAirdrop.txAirdropHistory') }}
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
          <ul class='hdf-tx-ul'>
            <li v-for='tx in transactions'>
              <span class='span-icon-wrap'>
                <HeroIconSolidGift />
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
                <p class='p-tx'>
                  <a target='_blank' :href='hdfLink.exploreToken4address(tx.account)'>
                    {{ tx.account.slice(0, 8) }}...{{ tx.account.slice(-4) }}
                  </a>
                </p>
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
                    <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                      #<CBN :value='tx.blockNumber' />
                    </a>
                  </td>
                  <td class='font-mono'>
                    <a target='_blank' :href='hdfLink.exploreToken4address(tx.account)'>{{ tx.account }}</a>
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
import BN from 'bn.js'
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'SAirdrop',
  data() {
    return {
      transactions: []
    }
  },
  computed: {
    hdfLink() {
      return hdfLink
    },
    summed() {
      return new BN(this.$store.state.bsc.supply.airdrop).add(new BN(this.amount)).toString()
    },
    summedMarketValue() {
      return new BN(this.summed)
        .mul(this.$store.state.bsc.metadata.bnPrice)
        .div(this.$store.state.bsc.metadata.bnDiv)
        .toString()
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
      this.transactions = await this.$nuxt.context.app.db.airdrop.reverse().limit(10).toArray()
    }
  }
}
</script>

<style scoped lang='scss'>
.hdf-stat div dt {
  @apply text-indigo-200;
}

tbody {
  tr {
    &:nth-child(odd) {
      @apply bg-gray-700;
    }

    &:hover {
      @apply bg-violet-900;

      td {
        @apply text-violet-200;
      }
    }
  }
}
</style>
