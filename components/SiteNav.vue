<template>
  <header class='relative'>
    <div v-if='devMode' class="bg-black">
      <LAutoWidth class="py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-rose-600">
              <HeroIconOutlineExclamation class="h-6 w-6 text-white" />
            </span>
            <p class="ml-3 font-medium text-rose-500 truncate">
              Working in
              <span class='font-bold text-white uppercase'>Development MODE,</span>
              BSC Chain ID#{{ $store.state.bsc.chainId }},
              <span class='font-bold text-white uppercase'>Testnet</span>
            </p>
          </div>
        </div>
      </LAutoWidth>
    </div>

    <div class='pt-6'>
      <nav class='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6' aria-label='Global'>
        <div class='flex items-center flex-1'>
          <div class='flex items-center justify-between w-full md:w-auto'>
            <nuxt-link to='/'>
              <span class='sr-only'>Workflow</span>
              <img class='h-8 w-auto sm:h-10' src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                   alt=''>
            </nuxt-link>
            <div class='-mr-2 flex items-center md:hidden' :class='showMobileMenuButton'>
              <button type='button'
                      class='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                      aria-expanded='false'
                      @click='toggleMobileMenuOpen'>
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
            <nuxt-link v-for='item in navigation' :key='item.name' :to='item.href'
                       class='font-medium text-white hover:text-gray-300'>{{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div class='hidden md:flex md:items-center md:space-x-6'>
          <a target='_blank' :href='hdfLink.github()' class='text-base font-medium text-white hover:text-gray-300'>
            GitHub
          </a>
          <a href='#'
             class='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700'>
            Connect Wallet
          </a>
        </div>
      </nav>
    </div>

    <transition
                enter-active-class='duration-150 ease-out'
                enter-from-class='opacity-0 scale-95'
                enter-to-class='opacity-100 scale-100'
                leave-active-class='duration-100 ease-in'
                leave-from-class='opacity-100 scale-100'
                leave-to-class='opacity-0 scale-95'>
      <div v-show='mobileMenuOpen' class='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
        <div class='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div class='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img class='h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt=''>
            </div>
            <div class='-mr-2'>
              <button type='button'
                      class='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600'
                      @click='toggleMobileMenuOpen'>
                <span class='sr-only'>Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                     stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
          <div class='pt-5 pb-6'>
            <div class='px-2 space-y-1'>
              <nuxt-link v-for='item in navigation' :key='item.name' :to='item.href'
                         class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                {{ item.name }}
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
    </transition>
  </header>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  { name: 'Transaction Explorer', href: '/txs' }
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
    showMobileMenuButton() {
      if (this.mobileMenuOpen) {
        return ['hidden']
      }
    },
  },
  methods: {
    toggleMobileMenuOpen() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>

<style scoped>

</style>
