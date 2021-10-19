<template>
  <div>
    <LAutoWidth v-if='!loaded' class='p-24 text-gray-500'>
      <h1 class='mt-10 font-bold text-4xl animate-pulse'>
        {{ $t('global.loading') }}
      </h1>
    </LAutoWidth>

    <LAutoWidth v-else-if='account.isHolder' class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span v-if='account.username'>
          {{ $t('pUser.user') }}@{{ account.username }}
        </span>
        <span v-else>
          {{ $t('pUser.userDashboard') }}
        </span>

        <template #tag>
          User Dashboard
        </template>

        <template #desc>
          <div class='truncate'>
            {{ address }}
          </div>
        </template>
      </CH3>

      <SDashboard :account='account' />
    </LAutoWidth>

    <LAutoWidth v-else class='p-24 text-gray-500'>
      <div>
        <HeroIconOutlineExclamation class='h-20 w-20' />
      </div>

      <div v-if='checksumAddress'>
        <h1 class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.notAHolder') }}
        </h1>

        <h2 class='mt-6 text-2xl break-all'>
          "{{ $route.params.address }}" {{ $t('pUser.isNotAHyperDeFiHolder') }}
        </h2>
      </div>

      <div v-else>
        <h1 class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.invalidAddress') }}
        </h1>

        <h2 class='mt-6 text-2xl break-all'>
          "{{ $route.params.address }}" {{ $t('pUser.isNotAValidAddress') }}
        </h2>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import Web3 from 'web3'
import fn from '~/utils/functions'

export default {
  scrollToTop: true,
  name: 'UserAddress',
  async asyncData({ params }) {
    const address = params.address
    return { address }
  },
  data() {
    return {
      loaded: false,
      account: {
        address: '',
        isHolder: false,
        isWhale: false,
        isFlat: false,
        isSlot: false,

        username: '',
        balance: '0',
        harvest: '0',
        totalHarvest: '0',
        totalTaxSnap: '0',

        couponUsed: '0',
        coupon: '0',
        visitors: '0',

        bnbBalance: '0',
        genesisDeposit: '0',
        genesisPortion: '0',
        genesisRedeemed: false
      },
    }
  },
  watch: {
    '$store.state.bsc.blockNumber': async function() {
      await this.sync()
    }
  },
  computed: {
    isAddress() {
      return Web3.utils.isAddress(this.address)
    },
    checksumAddress() {
      if (this.isAddress) {
        return Web3.utils.toChecksumAddress(this.address)
      }

      return null
    },
  },
  mounted: async function () {
    await fn.wait(500)
    await this.sync()
  },
  methods: {
    async sync() {
      if (!this.isAddress) {
        return
      }

      const data = await this.$nuxt.context.app.token.methods.getAccount(this.checksumAddress).call()
        .catch(error => {
          console.error('>>> P[/user/_username] getAccountByUsername:', error.message)
        })

      if (data.account !== this.$store.state.bsc.globalAccounts.zero) {
        this.account.address = this.checksumAddress
        this.account.username = data.username

        this.account.isHolder = data.bools[0]
        this.account.isWhale = data.bools[1]
        this.account.isFlat = data.bools[2]

        this.account.isSlot = data.bools[3]
        this.account.balance = data.uint256s[0]
        this.account.harvest = data.uint256s[1]

        this.account.totalHarvest = data.uint256s[2]
        this.account.totalTaxSnap = data.uint256s[3]

        this.account.couponUsed = data.uint256s[4]
        this.account.coupon = data.uint256s[5]
        this.account.visitors = data.uint256s[6]

        this.account.bnbBalance = data.uint256s[7]
        this.account.genesisDeposit = data.uint256s[8]
        this.account.genesisPortion = data.uint256s[9]
        this.account.genesisRedeemed = data.bools[4]

        // this.account.isHolder = data.isHolder
        // this.account.isWhale = data.isWhale
        // this.account.isFlat = data.isFlat
        // this.account.isSlot = data.isSlot
        //
        // this.account.username = data.username
        // this.account.balance = data.balance
        // this.account.harvest = data.harvest
        // this.account.totalHarvest = data.totalHarvest
        // this.account.totalTaxSnap = data.totalTaxSnap
      }

      this.loaded = true
    }
  },
}
</script>

<style scoped lang='scss'>

</style>
