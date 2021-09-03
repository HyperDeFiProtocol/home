<template>
  <div>
    <LAutoWidth v-if='!loaded' class='p-24 text-gray-500'>
      <h1 class='mt-10 font-bold text-4xl animate-pulse'>
        {{ $t('global.loading') }}
      </h1>
    </LAutoWidth>

    <LAutoWidth v-else-if='account.username' class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        {{ $t('pUser.user') }}"@{{ indexedUsername }}"

        <template #tag>
          User Dashboard
        </template>

        <template #desc>
          <div class='truncate'>
            {{ account.address }}
          </div>
        </template>
      </CH3>

      <SDashboard :account='account' />
    </LAutoWidth>

    <LAutoWidth v-else class='p-24 text-gray-500'>
      <div>
        <HeroIconOutlineExclamation class='h-20 w-20' />
      </div>

      <div v-if='$route.params.username.startsWith("@")'>
        <h1 class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.usernameDoesNotExist') }}
        </h1>

        <h2 class='mt-6 text-2xl'>
          {{ $t('pUser.couldNotFound_') }}{{ username }}
        </h2>
      </div>

      <div v-else>
        <h1 class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.invalidUsername') }}
        </h1>

        <h2 class='mt-6 text-2xl'>
          <span>
            {{ $t('pUser.aUsernameMustStartWith__') }}
          </span>
        </h2>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
import fn from '~/utils/functions'

export default {
  scrollToTop: true,
  name: 'UserUsername',
  async asyncData({ params }) {
    const username = params.username
    return { username }
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
    indexedUsername() {
      if (this.username.startsWith('@')) {
        return this.username.slice(1)
      }

      return ''
    }
  },
  mounted: async function () {
    await fn.wait(500)
    await this.sync()
  },
  methods: {
    async sync() {
      if (this.indexedUsername) {
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

        this.loaded = true
      }
    }
  },
}
</script>

<style scoped lang='scss'>

</style>
