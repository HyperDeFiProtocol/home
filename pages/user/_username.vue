<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        Hello, "{{ indexedUsername }}"

        <template #tag>
          User Dashboard
        </template>

        <template #desc>
          <div class='truncate'>
            {{ account.address }}
          </div>
        </template>
      </CH3>

      <div class='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2'>
        <p>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='account.balance' :token='true' /> HyperDeFi
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
            <HeroIconSolidFire v-if='account.harvest > "0"' class='inline w-6 h-6' />
            <CBN :value='account.harvest' :token='true' />
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

        <p v-if='account.harvest > "0"' class='transition duration-300 ease-out'>
          <BtnTakeHarvest class='hdf-a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase'>
            <HeroIconSolidFire v-if='account.harvest > "0"' class='inline w-6 h-6' />
            <span class='hidden lg:inline'>
              {{ $t('sHarvest.clickHereTo') }}
            </span>
            <span>
              {{ $t('sHarvest.harvestAll') }}
            </span>
          </BtnTakeHarvest>
        </p>

        <p v-if='account.totalHarvest > "0"'>
          <span class="block text-2xl font-bold text-violet-300">
            <CBN :value='account.totalHarvest' :token='true' /> HyperDeFi
          </span>
          <span class="mt-1 block text-base text-gray-300">
            <span class="font-medium text-white">
              {{ $t('sHarvest.total_') }}
            </span>
            {{ $t('sHarvest.alreadyHarvested') }}
          </span>
        </p>
      </div>


      <div class='mt-24'>
        <ul>
          <li>
            Balance and All Harvest History
          </li>
          <li>
            Lotto History
          </li>
          <li>
            FOMO History
          </li>
        </ul>
      </div>

      <div>
        {{ account }}
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'UserUsername',
  middleware: ['user'],
  async asyncData({ params }) {
    const username = params.username
    return { username }
  },
  data() {
    return {
      account: {
        address: '',
        isHolder: false,
        isWhale: false,
        isFlat: false,
        isSlot: false,

        username: '',
        balance: '',
        harvest: '',
        totalHarvest: '',
        totalTaxSnap: '',
      }
    }
  },
  computed: {
    indexedUsername() {
      if (this.username.startsWith('@')) {
        return this.username.slice(1)
      }

      return ''
    }
  },
  mounted: async function () {
    const data = await this.$nuxt.context.app.token.methods.getAccountByUsername(this.indexedUsername).call()
      .catch(error => {
        console.error('>>> P[/user/_username] getAccountByUsername:', error.message)
      })

    if (data.account !== this.$store.state.bsc.globalAccounts.zero) {
      this.account.address = data.account

      this.account.isHolder = data.isHolder
      this.account.isWhale = data.isWhale
      this.account.isFlat = data.isFlat
      this.account.isSlot = data.isSlot

      this.account.username = data.username
      this.account.balance = data.balance
      this.account.harvest = data.harvest
      this.account.totalHarvest = data.totalHarvest
      this.account.totalTaxSnap = data.totalTaxSnap
    }
  },
}
</script>

<style scoped lang='scss'>
ul {
  @apply space-y-4;
}

li {
  @apply bg-gray-800 rounded-md px-8 py-3 hover:bg-gray-700;
}
</style>
