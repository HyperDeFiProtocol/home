<template>
  <div>
    <LAutoWidth v-if='!loaded' class='p-24 text-gray-500'>
      <h1 class='mt-10 font-bold text-4xl animate-pulse'>
        {{ $t('global.loading') }}
      </h1>
    </LAutoWidth>

    <LAutoWidth v-else-if='!isAddress' class='p-24 text-gray-500'>
      <div>
        <HeroIconOutlineExclamation class='h-20 w-20' />
      </div>

      <div>
        <div class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.invalidAddress') }}
        </div>

        <div class='mt-6 text-2xl break-all'>
          "{{ $route.params.address }}" {{ $t('pUser.isNotAValidAddress') }}
        </div>
      </div>
    </LAutoWidth>

    <LAutoWidth v-else-if='isGlobalAccount' class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pAddress.' + globalAddressKey + 'Title') }}
        </span>

        <template #tag>
          {{ $t('pAddress.globalAddress') }}
        </template>

        <template #desc>
          <div class='truncate'>
            {{ checksumAddress }}
          </div>
        </template>
      </CH3>

      <div class='mt-12 sm:mt-24'>
        <h2>
          {{ $t('pAddress.' + globalAddressKey) }}
        </h2>

        <p class='mt-6'>
          {{ $t('pAddress.' + globalAddressKey + 'Desc') }}
        </p>

        <div class='mt-8 sm:mt-14 mx-auto w-full max-w-xl'>
          <div v-if='checksumAddress === $store.state.bsc.globalAccounts.burn' class='flex flex-col space-y-3'>
            <nuxt-link :to='localePath("/history/burn")' class='hp-btn-md hp-btn-violet hp-btn-center space-x-3'>
              <HeroIconOutlineBreaker class='w-5 h-5'/>
              <span>
                {{ $t('pAddress.trackBurn__') }}
              </span>
            </nuxt-link>

            <a target='_blank'
               :href='hpLink.exploreToken4address($store.state.bsc.globalAccounts.burn)'
               class='hp-btn-md hp-btn-emerald hp-btn-center space-x-3'>
              <HeroIconSolidCursorClick class='w-5 h-5' />
              <span>
                {{ $t('pAddress.trackBurnOnBSCScan__') }}
              </span>
            </a>

            <a target='_blank'
               :href='hpLink.exploreToken4address($store.state.bsc.globalAccounts.burn, $store.state.bsc.globalAccounts.pair)'
               class='hp-btn-md hp-btn-emerald hp-btn-center space-x-3'>
              <HeroIconSolidCursorClick class='w-5 h-5' />
              <span>
                {{ $t('pAddress.trackLPToken__') }}
              </span>
            </a>
          </div>
          <div v-else-if='checksumAddress === $store.state.bsc.globalAccounts.tax'>
            <nuxt-link :to='localePath("/history/farm")' class='hp-btn-md hp-btn-violet hp-btn-center space-x-3'>
              <HeroIconOutlineCurrencyDollar class='w-5 h-5'/>
              <span>
                {{ $t('pAddress.trackFarm__') }}
              </span>
            </nuxt-link>
          </div>
          <div v-else-if='checksumAddress === $store.state.bsc.globalAccounts.fomo'>
            <nuxt-link :to='localePath("/history/fomo")' class='hp-btn-md hp-btn-violet hp-btn-center space-x-3'>
              <HeroIconOutlineClock class='w-5 h-5'/>
              <span>
                {{ $t('pAddress.trackFomo__') }}
              </span>
            </nuxt-link>
          </div>
          <div v-else-if='checksumAddress === $store.state.bsc.globalAccounts.buffer'>
            <nuxt-link :to='localePath("/history/buffer")' class='hp-btn-md hp-btn-violet hp-btn-center space-x-3'>
              <HeroIconOutlineServer class='w-5 h-5'/>
              <span>
                {{ $t('pAddress.trackBuffer__') }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
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

      <div>
        <div class='mt-10 font-bold text-4xl'>
          {{ $t('pUser.notAHolder') }}
        </div>

        <div class='mt-6 text-2xl break-all'>
          "{{ checksumAddress }}" {{ $t('pUser.isNotAHyperDeFiHolder') }}
        </div>
      </div>

<!--      <div v-else>-->
<!--        <h1 class='mt-10 font-bold text-4xl'>-->
<!--          {{ $t('pUser.invalidAddress') }}-->
<!--        </h1>-->

<!--        <h2 class='mt-6 text-2xl break-all'>-->
<!--          "{{ $route.params.address }}" {{ $t('pUser.isNotAValidAddress') }}-->
<!--        </h2>-->
<!--      </div>-->
    </LAutoWidth>
  </div>
</template>

<script>
import Web3 from 'web3'
import fn from '~/utils/functions'
import hpLink from '~/utils/hpLink'

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
    hpLink() {
      return hpLink
    },
    isAddress() {
      return Web3.utils.isAddress(this.address)
    },
    checksumAddress() {
      if (this.isAddress) {
        return Web3.utils.toChecksumAddress(this.address)
      }

      return null
    },
    isGlobalAccount() {
      const globalAccounts = [
        this.$store.state.bsc.globalAccounts.burn,
        this.$store.state.bsc.globalAccounts.buffer,
        this.$store.state.bsc.globalAccounts.tax,
        this.$store.state.bsc.globalAccounts.fomo,
      ]

      for (let i = 0; i < globalAccounts.length; i++) {
        if (this.checksumAddress === globalAccounts[i]) {
          return true
        }
      }

      return false
    },
    globalAddressKey() {
      if (this.isGlobalAccount) {
        switch (this.checksumAddress) {
          case this.$store.state.bsc.globalAccounts.burn:
            return 'blackHole'
          case this.$store.state.bsc.globalAccounts.buffer:
            return 'buffer'
          case this.$store.state.bsc.globalAccounts.tax:
            return 'farm'
          case this.$store.state.bsc.globalAccounts.fomo:
            return 'fomo'
        }

        return ''
      }
    },
  },
  mounted: async function () {
    await fn.wait(500)
    await this.sync()
  },
  methods: {
    async sync() {
      if (!this.isAddress || this.isGlobalAccount) {
        this.loaded = true
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
      }

      this.loaded = true
    }
  },
}
</script>

<style scoped lang='scss'>
h2 {
  @apply text-3xl font-extrabold tracking-tight sm:text-4xl;
}

p {
  @apply text-gray-400;
}
</style>
