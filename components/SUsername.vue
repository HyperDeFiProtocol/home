<template>
  <div class='py-16 sm:py-24'>
    <div class='relative sm:pt-16'>
      <div aria-hidden='true' class='hidden sm:block'>
        <!--        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-800 rounded-r-3xl"></div>-->
        <svg class='absolute top-8 left-1/2 -ml-3' width='404' height='392' fill='none' viewBox='0 0 404 392'>
          <defs>
            <pattern id='8228f071-bcee-4ec8-905a-2a059a2cc4fb' x='0' y='0' width='20' height='20'
                     patternUnits='userSpaceOnUse'>
              <rect x='0' y='0' width='4' height='4' class='text-gray-200' fill='currentColor' />
            </pattern>
          </defs>
          <rect width='404' height='392' fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)' />
        </svg>
      </div>
      <div class='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <div class='relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20'>
          <div aria-hidden='true' class='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'>
            <svg class='absolute inset-0 h-full w-full' preserveAspectRatio='xMidYMid slice'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1463 360'>
              <path class='text-gray-600 text-opacity-40' fill='currentColor'
                    d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z' />
              <path class='text-gray-800 text-opacity-40' fill='currentColor'
                    d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z' />
            </svg>
          </div>
          <div class='relative'>
            <div class='sm:text-center'>
              <h2 class='text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
                {{ $t('sUsername.title') }}
              </h2>
              <p class='mt-6 mx-auto max-w-2xl text-lg text-gray-200'>
                {{ $t('sUsername.desc') }}
              </p>
            </div>
            <div class='mt-12'>
              <div v-if='$store.state.wallet.account'>
                <div v-if='!$store.state.wallet.username' class='sm:mx-auto sm:max-w-lg sm:flex'>
                  <div class='min-w-0 flex-1'>
                    <label for='dapp-username' class='sr-only'>
                      {{ $t('sUsername.sr') }}
                    </label>
                    <span class='relative'>
                      <input id='dapp-username'
                             type='text'
                             autocomplete='off'
                             maxlength='15'
                             class='block w-full border border-transparent rounded-md pl-10 pr-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600'
                             v-model='username'
                             :placeholder='$t("sUsername.placeholder")' />
                      <span class='absolute top-3 left-5 text-base text-gray-500'>@</span>
                    </span>

                  </div>
                  <div class='mt-4 sm:mt-0 sm:ml-3'>
                    <BtnSubmitUsername :username='username' />
                  </div>
                </div>
                <div v-else class='sm:mx-auto sm:max-w-lg sm:flex'>
                  <NuxtLink :to='localePath("/user/@" + $store.state.wallet.username)'>
                    @{{ $store.state.wallet.username }}
                    {{ $t('sUsername._sDashboard') }}
                  </NuxtLink>
                </div>

              </div>
              <div v-else class='sm:mx-auto sm:max-w-sm sm:flex'>
                <BtnConnectWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SUsername',
  data() {
    return {
      username: ''
    }
  },
  watch: {
    username() {
      this.username = this.username.trim().replace(/[^A-Za-z0-9]/g, '')
    }
  },
}
</script>

<style scoped>
a, button {
  @apply block w-full rounded-md border border-transparent shadow px-5 py-3 sm:px-10;
  @apply bg-violet-600 hover:bg-violet-700 focus:outline-none;
  @apply focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600;
  @apply text-base font-medium text-white text-center;
}
</style>
