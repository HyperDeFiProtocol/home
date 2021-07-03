import locales from './locales/conf'

export default {
  env: {
    mode: process.env.mode,
    tokenAddress: process.env.tokenAddress,
    web3RpcUrl: process.env.web3RpcUrl || 'https://bsc-dataseed.binance.org/',
    chainName: process.env.chainName || 'BSC Chain Mainnet',
    explorerBaseUrl: process.env.explorerBaseUrl || 'https://bscscan.com',
    pancakeBaseUrl: process.env.pancakeBaseUrl || 'https://pancakeswap.finance',

    githubUsername: process.env.githubUsername || 'HyperDeFiProtocol',
    twitterUsername: process.env.twitterUsername || 'hyperdefiorg',
    telegramUsername: process.env.telegramUsername || 'HyperDeFi',
    telegramChannel: process.env.telegramChannel || 'hyperdefiprotocol'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  //
  generate: {
    dir: 'dist',
    fallback: '404.html'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HyperDeFi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/init-web3.js'
  ],

  router: {
    middleware: [
      //
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  i18n: {
    locales: locales,
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieSecure: false,
      alwaysRedirect: false,
      fallbackLocale: 'en'
    }
  },

  googleAnalytics: {
    id: process.env.googleAnalyticsId
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
