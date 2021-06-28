<template>
  <div class='section-fee'>
    <div class='text-center'>
      <span class='span-icon bg-emerald-50 text-emerald-700'>
        <HeroIconOutlineBreaker class='h-8 w-8' />
      </span>
    </div>

    <LAutoWidth class='auto-layout'>
      <main>


        <div class='header2'>
          <h2 class='text-emerald-500'>
            Burn
          </h2>
          <p>
            Globally, keep making HyperDeFi deflationary in the long term.
          </p>
        </div>

        <div class='body1 to-emerald-900 from-green-900 text-emerald-300'>
          <h3>
            For each transaction:
          </h3>

          <p>
            Burn
            <span v-if='$store.state.bsc.takerFee.destroy > "0"'>
              {{ $store.state.bsc.takerFee.destroy }}% from taker,
            </span>
            <span v-if='$store.state.bsc.makerFee.destroy > "0"'>
              {{ $store.state.bsc.makerFee.destroy }}% from maker,
            </span>
            <span v-if='$store.state.bsc.whaleFee.destroy > "0"'>
              {{ $store.state.bsc.whaleFee.destroy }}% from whale.
            </span>
          </p>

          <div v-if='counter' class="mt-5 inline-flex rounded-md shadow">
            <a target='_blank'
               :href='explorer.exploreToken4address($store.state.bsc.globalAccounts.burn)'
               class="a-track bg-emerald-700 hover:bg-emerald-600 space-x-2">
              <HeroIconSolidCursorClick class="h-5 w-5" />
              <span>
                Track all {{ counter }} burn transfers
              </span>
            </a>
          </div>
        </div>
      </main>

      <dl v-if='counter' class='dl-stat lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2'>
        <div>
          <dt>
            Burn Transfers
          </dt>
          <dd>
            <CBN :value='counter' />
          </dd>
        </div>

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
            Total Burned
          </dt>
          <dd>
            <CBN :value='amount' :token='true' />
          </dd>
        </div>
      </dl>




      <div v-if='transactions.length'>
        <h6 class="mt-12 md:mt-16 ml-2 text-sm font-semibold text-emerald-500 tracking-wide uppercase">
          Latest {{ transactions.length }} Burn History
        </h6>

        <!-- md:hidden -->
        <div class='md:hidden mt-4'>
          <ul class='divide-y divide-gray-700'>
            <li v-for='tx in transactions' class='py-4 flex space-x-3'>
              <span class='h-6 w-6'>
                <HeroIconSolidGift />
              </span>
              <div class="flex-1 space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class='font-medium text-base'>
                    <CBN :value='tx.amount' /> HyperDeFi
                  </h4>
                  <p class="text-sm text-gray-500">
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 10) }}...</a>
                  </p>
                </div>
                <p class="text-sm text-gray-500">
                  <a target='_blank' :href='explorer.exploreToken4address(tx.account)'>{{ tx.account }}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- md: -->
        <div class="hidden mt-4 overflow-x-auto md:block">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-700">
              <table class="min-w-full divide-y divide-gray-700">
                <thead>
                <tr>
                  <th scope="col">
                    Tx Hash
                  </th>
                  <th scope="col">
                    Address
                  </th>
                  <th scope="col">
                    Amount
                  </th>
                </tr>
                </thead>
                <tbody class='divide-y divide-gray-700'>
                <tr v-for='tx in transactions'>
                  <td>
                    <a target='_blank' :href='explorer.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 6) }}...</a>
                  </td>
                  <td>
                    <a target='_blank' :href='explorer.exploreToken4address(tx.account)'>{{ tx.account }}</a>
                  </td>
                  <td>
                    <CBN :value='tx.amount' :token='true' :padding='2' /> HyperDeFi
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
import Web3 from 'web3'
import hdfLink from '~/utils/hdfLink'

const BN = Web3.utils.BN

export default {
  name: 'SFeeBurn',
  data() {
    return {
      counter: 0,
      amount: '0',
      marketValue: '0',

      transactions: []
    }
  },
  computed: {
    explorer() {
      return hdfLink
    },
  },
  async mounted() {
    const events = await this.$store.state.bsc.token().getPastEvents('Transfer', {
      filter: {
        to: this.$store.state.bsc.globalAccounts.burn
      },
      fromBlock: 0,
      toBlock: 'latest'
    })

    events.reverse()
    // console.log(events)

    let amount = new BN(this.amount)
    for (let i = 0; i < events.length; i++) {
      amount = amount.add(new BN(events[i].returnValues.value))

      if (i < 10) {
        this.transactions.push({
          blockNumber: events[i].blockNumber,
          txHash: events[i].transactionHash,

          account: events[i].returnValues.from,
          amount:  events[i].returnValues.value,
        })
      }
    }

    this.counter = events.length
    this.amount = amount.toString()
    this.marketValue = amount.mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()
  }
}
</script>

<style scoped lang='scss'>
.dl-stat div dt {
  @apply text-emerald-100;
}

thead {
  th {
    @apply px-3 py-3 text-xs text-gray-100 text-left;
    @apply uppercase tracking-wider;

    &:nth-child(3) {
      @apply text-center;
    }
  }
}

tbody {
  tr {
    &:nth-child(odd) {
      @apply bg-gray-700;
    }

    td {
      @apply px-3 py-4 whitespace-nowrap text-sm text-gray-400;
    }

    td:nth-child(1) {
      @apply text-gray-500;
    }

    td:nth-child(3) {
      @apply text-gray-300 text-right;
    }

    &:hover {
      @apply bg-emerald-900;

      td {
        @apply text-emerald-200;
      }
    }
  }
}
</style>
