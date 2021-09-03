<template>
  <div>
    <LAutoWidth v-if='account.isHolder' class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span v-if='account.username !== ""'>
          Hello, "{{ account.username }}"
        </span>
        <span v-else>
          User Dashboard
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
        <h1 class='mt-10 font-mono font-bold text-4xl'>
          Not a holder
        </h1>

        <h2 class='mt-6 text-2xl break-all'>
          "{{ $route.params.address }}" is not a HyperDeFi holder
        </h2>
      </div>

      <div v-else>
        <h1 class='mt-10 font-mono font-bold text-4xl'>
          Invalid address
        </h1>

        <h2 class='mt-6 text-2xl break-all'>
          "{{ $route.params.address }}" is not a valid address
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
    }
  },
}
</script>

<style scoped lang='scss'>

</style>
