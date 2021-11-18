<template>
  <LAutoWidth class="mt-12 pb-12 sm:pb-24">
    <div class='border-t-2 border-gray-700 pt-12 px-4 sm:px-8'>
      <CH3>
        <span>
          {{ $t('sHarvest.yourBalance') }}
        </span>
        <span class='hidden lg:inline'>
          {{ $t('sHarvest.andHarvest') }}
        </span>

        <template #tag>
          {{ $t('sHarvest.taxFarm') }}
        </template>
      </CH3>

      <p class='flex justify-start mt-8 sm:mt-12 text-2xl text-gray-500 space-x-2 break-all truncate'>
        <span>
          {{ $t('sHarvest.hello_') }}
        </span>
        <span v-if='$store.state.wallet.username' class='font-semibold text-gray-300'>
          "@{{ $store.state.wallet.username }}"
        </span>
        <span v-else class='font-mono truncate'>
          {{ $store.state.wallet.account.slice(0, 6) }}...{{ $store.state.wallet.account.slice(-4) }}
        </span>
        <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-8 w-8' />
      </p>

      <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.wallet.balance' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.balance_') }}
            </span>
            {{ $t('sHarvest.inYourWallet') }}
          </span>
        </p>

        <p>
          <span class="block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2">
            <HeroIconSolidFire v-if='$store.state.wallet.harvest > "0"' class='inline w-6 h-6' />
            <CBN :value='$store.state.wallet.harvest' :token='true' />
            <span>
              HyperDeFi
            </span>
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.toHarvest_') }}
            </span>
            {{ $t('sHarvest.onBlockNumber') }}<CBN :value='$store.state.bsc.blockNumber' />
          </span>
        </p>

        <p v-if='$store.state.wallet.harvest > "0"' class='transition duration-300 ease-out'>
          <BtnTakeHarvest class='hdf-a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
            <HeroIconSolidFire v-if='$store.state.wallet.harvest > "0"' class='inline w-6 h-6' />
            <span class='hidden lg:inline'>
              {{ $t('sHarvest.clickHereTo') }}
            </span>
            <span>
              {{ $t('sHarvest.harvestAll') }}
            </span>
          </BtnTakeHarvest>
        </p>

        <p v-if='$store.state.wallet.totalHarvest > "0"'>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='$store.state.wallet.totalHarvest' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.total_') }}
            </span>
            {{ $t('sHarvest.alreadyHarvested') }}
          </span>
        </p>
      </div>
    </div>

    <!--  harvest history  -->
    <div v-if='$store.state.wallet.account && transactions.length' class="pt-12 px-4">
      <h6 class='ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase'>
        {{ $t('txTable.latest') }}
        {{ transactions.length }}
        {{ $t('sHarvest.txHarvestHistory') }}
      </h6>

      <!-- md:hidden -->
      <div class='md:hidden mt-4 px-4'>
        <ul class='divide-y divide-gray-700'>
          <li v-for='tx in transactions' class='py-4 flex space-x-3'>
              <span class='h-6 w-6'>
                <HeroIconSolidGift />
              </span>
            <div class='flex-1 space-y-2'>
              <div class='flex items-center justify-between'>
                <h4 class='font-medium text-base'>
                  <CBN :value='tx.amount' />
                  HyperDeFi
                </h4>
                <p class='text-sm text-gray-500'>
                  <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>
                    #<CBN :value='tx.blockNumber' />
                  </a>
                </p>
              </div>
              <p class='text-sm text-gray-500 break-all'>
                <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>{{ tx.txHash.slice(0, 44) }}...</a>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- md: -->
      <CTableHarvest :transactions='transactions' class='hidden mt-4 md:block' />
    </div>
  </LAutoWidth>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'SHarvest',
  data() {
    return {
      transactions: []
    }
  },
  computed: {
    hpLink() {
      return hpLink
    },
  },
  watch: {
    '$store.state.wallet.account': async function() {
      if (this.$store.state.wallet.account) {
        await this.load()
      }
    },
    '$store.state.bsc.blockNumber': async function() {
      if (this.$store.state.wallet.account) {
        await this.load()
      }
    },
  },
  async mounted() {
    await this.load()
  },
  methods: {
    async load() {
      this.transactions = await this.$nuxt.context.app.db.transfer.where({
        sender: this.$store.state.bsc.globalAccounts.tax,
        recipient: this.$store.state.wallet.account,
      }).reverse().limit(10).toArray()
    }
  },
}
</script>


<style scoped lang='scss'>

</style>
