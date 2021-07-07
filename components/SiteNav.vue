<template>
  <header class='relative'>
    <LAutoWidth class='relative pt-6 flex items-center justify-between px-4 sm:px-6' aria-label='Global'>
      <div class='flex items-center flex-1'>
        <div class='flex items-center justify-between w-full md:w-auto'>
          <nuxt-link :to='localePath("/")' class='text-violet-500 hover:text-violet-600'>
            <span class='sr-only'>HyperDeFi Home</span>
            <IconDiceHyper class='h-8 w-auto sm:h-10' />
          </nuxt-link>

          <div class='md:hidden'>
            <a v-if='$store.state.wallet.account'
               target='_blank'
               :href='hdfLink.exploreToken4address($store.state.wallet.account)'
               class='inline-flex items-center font-mono font-medium text-lg text-gray-500 space-x-2 hover:text-gray-200'>
              <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
              <span>
                {{ $store.state.wallet.account.slice(0, 4) }}...{{ $store.state.wallet.account.slice(-4) }}
              </span>
            </a>
            <BtnConnectWallet v-else @click='connectWallet'
               class='inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-emerald-300 bg-emerald-900 hover:bg-emerald-800 focus:outline-none' />
          </div>

          <div class='-mr-2 flex items-center space-x-4 md:hidden'>
            <BtnTranslate class='text-gray-500 hover:text-gray-200 focus:outline-none' />

            <button type='button'
                    class='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                    aria-expanded='false'
                    @click.stop='toggleMenuMobi'>
              <span class='sr-only'>Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                   stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>

        <div class='hidden space-x-8 md:flex md:ml-10'>
          <nuxt-link v-for='item in navigation' :key='item.name' :to='localePath(item.href)'
                     class='font-medium text-white hover:text-gray-300'>
            {{ $t('siteNav.' + item.name) }}
          </nuxt-link>
        </div>
      </div>

      <div class='hidden md:flex md:items-center md:space-x-6'>
        <BtnTranslate class='text-gray-500 hover:text-gray-200 focus:outline-none' />

        <a v-if='$store.state.wallet.account' class='btn-md-account space-x-2 font-mono'
           target='_blank' :href='hdfLink.exploreToken4address($store.state.wallet.account)'>
          <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
          <span>
            {{ $store.state.wallet.account.slice(0, 4) }}...{{ $store.state.wallet.account.slice(-4) }}
          </span>
        </a>
        <BtnConnectWallet v-else class='btn-md-account' />
      </div>
    </LAutoWidth>

    <!--  Menu Mobile  -->
    <div v-show='$store.state.nav.menuMobi' class='transition duration-300 ease-in-out absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
      <div class='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
        <div class='px-5 pt-4 flex items-center justify-between'>
          <div>
            <IconDiceHyper class='h-8 w-auto sm:h-10 text-violet-600' />
          </div>
          <div class='-mr-2'>
            <button type='button'
                    class='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600'
                    @click='toggleMenuMobi'>
              <span class='sr-only'>Close menu</span>
              <HeroIconOutlineX class='h-6 w-6' />
            </button>
          </div>
        </div>
        <div class='pt-5 pb-6'>
          <div class='px-2 space-y-1'>
            <nuxt-link v-for='item in navigation' :key='item.name' :to='localePath(item.href)'
                       class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
              {{ $t('siteNav.' + item.name) }}
            </nuxt-link>
          </div>
          <div class='mt-6 px-5'>
            <p class='text-center text-base font-medium text-gray-500'>Open-sourced on
              <a target='_blank' :href='hdfLink.github()' class='text-violet-700 hover:text-violet-900 hover:underline'>GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  { name: 'txExplorer', href: '/txs' }
]


export default {
  name: 'SiteNav',
  data() {
    return {
      navigation: navigation,
      mobileMenuOpen: false
    }
  },
  computed: {
    hdfLink() {
      return hdfLink
    },
    devMode() {
      return process.env.dev
    },
  },
  methods: {
    toggleMenuMobi() {
      this.$store.dispatch('nav/TOGGLE_MENU_MOBI')
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    connectWallet() {
      this.$store.dispatch('wallet/CONNECT_WALLET')
    },
  }
}
</script>

<style scoped>
.btn-md-account {
  @apply inline-flex items-center px-4 py-2 border border-transparent rounded-md;
  @apply font-medium text-base text-white bg-violet-600 hover:bg-violet-700;
  @apply focus:outline-none;
}
.a-md-account {
  @apply inline-flex items-center px-4 py-2 border border-transparent rounded-md;
  @apply font-medium text-base text-white bg-gray-600 hover:bg-gray-700;
  @apply focus:outline-none;
}
</style>
