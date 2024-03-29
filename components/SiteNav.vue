<template>
  <header class='relative'>
    <LAutoWidth class='relative py-6 flex items-center justify-between px-4 sm:px-6' aria-label='Global'>
      <div class='flex items-center flex-1'>
        <div class='flex items-center justify-between w-full lg:w-auto'>
          <nuxt-link :to='localePath("/")' class='text-violet-500 hover:text-violet-600'>
            <span class='sr-only'>HyperDeFi Home</span>
            <IconDiceHyper class='h-8 w-auto sm:h-10' />
          </nuxt-link>

          <div class='lg:hidden'>
            <nuxt-link v-if='$store.state.wallet.account && $store.state.wallet.username'
                       :to='localeLocation("/user/@" + $store.state.wallet.username)'
               class='inline-flex items-center font-mono font-medium text-lg text-gray-500 space-x-2 hover:text-gray-200'>
              <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
              <span>
                @{{ $store.state.wallet.username }}
              </span>
            </nuxt-link>
            <nuxt-link v-else-if='$store.state.wallet.account'
                       :to='localeLocation("/address/" + $store.state.wallet.account)'
                       class='inline-flex items-center font-mono font-medium text-lg text-gray-500 space-x-2 hover:text-gray-200'>
              <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
              <span>
                {{ $store.state.wallet.account.slice(0, 4) }}...{{ $store.state.wallet.account.slice(-4) }}
              </span>
            </nuxt-link>
            <BtnConnectWallet v-else @click='connectWallet'
               class='inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-emerald-300 bg-emerald-900 hover:bg-emerald-800 focus:outline-none' />
          </div>

          <div class='-mr-2 flex items-center space-x-4 lg:hidden'>
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

        <div class='hidden space-x-8 lg:flex lg:ml-10'>
          <nuxt-link v-for='item in navigation' :key='item.name' :to='localePath(item.href)'
                     class='font-medium text-white hover:text-gray-300'>
            {{ $t('siteNav.' + item.name) }}
          </nuxt-link>
          <a target='_blank' :href='hpLink.exploreTokenHolders()' class='font-medium text-white hover:text-gray-300'>
            {{ $t('siteNav.topAccount') }}
          </a>
<!--          <a target='_blank' :href='$t("siteNav.documentationHref")' class='font-medium text-white hover:text-gray-300'>-->
<!--            {{ $t('siteNav.documentation') }}-->
<!--          </a>-->
<!--          <a target='_blank' :href='$t("siteNav.forumHref")' class='font-medium text-white hover:text-gray-300'>-->
<!--            {{ $t('siteNav.forum') }}-->
<!--          </a>-->
        </div>
      </div>

      <div class='hidden lg:flex lg:items-center lg:space-x-6'>
        <BtnTranslate class='text-gray-500 hover:text-gray-200 focus:outline-none' />

        <nuxt-link v-if='$store.state.wallet.account && $store.state.wallet.username'
                   class='btn-md-account space-x-2 font-mono'
                   :to='localeLocation("/user/@" + $store.state.wallet.username)'
        >
          <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
          <span>
            @{{ $store.state.wallet.username }}
          </span>
        </nuxt-link>
        <nuxt-link v-else-if='$store.state.wallet.account'
                   class='btn-md-account space-x-2 font-mono'
                   :to='localeLocation("/address/" + $store.state.wallet.account)'
        >
          <IconWhale v-if='$store.state.wallet.isWhale' class='inline h-6 w-6' />
          <span>
            {{ $store.state.wallet.account.slice(0, 4) }}...{{ $store.state.wallet.account.slice(-4) }}
          </span>
        </nuxt-link>

        <BtnConnectWallet v-else class='btn-md-account' />
      </div>
    </LAutoWidth>

    <!--  Menu Mobile  -->
    <transition name="fade">
      <div v-show='$store.state.nav.menuMobi' class='absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden'>
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
              <a target='_blank' :href='hpLink.exploreTokenHolders()' class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                {{ $t('siteNav.topAccount') }}
              </a>
<!--              <a target='_blank' :href='$t("siteNav.documentationHref")'-->
<!--                 class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>-->
<!--                {{ $t('siteNav.documentation') }}-->
<!--              </a>-->
<!--              <a target='_blank' :href='$t("siteNav.forumHref")'-->
<!--                 class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>-->
<!--                {{ $t('siteNav.forum') }}-->
<!--              </a>-->
            </div>
            <div class='mt-6 px-5'>
              <p class='text-center text-base font-medium text-gray-500'>Open-sourced on
                <a target='_blank' :href='hpLink.github()' class='text-violet-700 hover:text-violet-900 hover:underline'>GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import hpLink from '~/utils/hpLink'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  { name: 'howToBuy', href: '/buy' },
  { name: 'coupon', href: '/coupon' },
  { name: 'txExplorer', href: '/history/txs' },
  { name: 'genesis', href: '/ido' },
  { name: 'community', href: '/community' },
  // { name: 'topAccount', href: '/holders' },
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
    hpLink() {
      return hpLink
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
