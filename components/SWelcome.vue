<template>
  <main class='pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
    <LAutoWidth class='lg:px-8'>
      <div class='lg:grid lg:grid-cols-2 lg:gap-8'>
        <div
          class='mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 md:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
          <div class='lg:py-24'>
            <CPancakeTo class='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
              <span
                class='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-violet-600 rounded-full'>
                {{ $t('sWelcome.pancakeSwap') }}
              </span>
              <span class='ml-4 text-sm'>
                {{ $t('sWelcome.tradeHyperDeFi') }}
              </span>

              <!-- Heroicon name: solid/chevron-right -->
              <svg class='ml-2 w-5 h-5 text-gray-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'
                   fill='currentColor' aria-hidden='true'>
                <path fill-rule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clip-rule='evenodd' />
              </svg>
            </CPancakeTo>
            <h1
              class='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
              <span class='block'>
                {{ $t('sWelcome.welcomeTo') }}
              </span>
              <span class='block mt-1 md:mt-2 text-violet-400'>
                {{ $t('sWelcome.hyperDeFiProtocol') }}
              </span>
            </h1>
            <p class='mt-3 leading-loose lg:leading-extra-loose xl:leading-extra-loose text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              {{ $t('sWelcome.text') }}
            </p>
            <div class='mt-10 sm:mt-12'>
              <div class='md:max-w-3xl sm:mx-auto lg:mx-0'>
                <div class='xl:flex space-y-3 xl:space-x-3 xl:space-y-0'>
                  <div class='min-w-0 flex-1'>
                    <div class='block w-full px-4 py-3 rounded-md border-0 bg-white font-mono text-base text-gray-900 hover:bg-violet-600 hover:text-white'>
                      $ <CBN :value='String($store.state.bsc.metadata.price)' :price='true' :padding='18' /> BUSD
                    </div>
                  </div>
                  <div>
                    <CPancakeTo class='w-full inline-flex space-x-2 py-3 px-4 rounded-md shadow bg-violet-600 text-white font-medium hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-300 focus:ring-offset-gray-900'>
                      <IconPancakeSwap class='inline w-6 h-6' />
                      <span>
                        {{ $t('sWelcome.buyOnPancakeSwap') }}
                      </span>
                    </CPancakeTo>
                  </div>
                </div>
                <p class='mt-3 text-sm text-gray-300 sm:mt-4'>
                  {{ $t('sWelcome._providedBy') }}
                  <CPancakeTo class='hdf-a-colored'>
                    PancakeSwap Finance
                  </CPancakeTo>
                  {{ $t('sWelcome.onBlockNumber') }}
                  #<CBN :value='String($store.state.bsc.blockNumber)' />
                  {{ $t('sWelcome.of') }}
                  {{ chainName }},
                  {{ $t('sWelcome.chainId') }}
                  #{{ chainId }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
          <div class='mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:max-w-none lg:px-0'>
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                 src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg' alt=''>
          </div>
        </div>
      </div>
    </LAutoWidth>
  </main>
</template>

<script>
export default {
  name: 'SWelcome',
  computed: {
    chainName() {
      return process.env.chainName
    },
    chainId() {
      return process.env.chainId
    },
  }
}
</script>

<style scoped>

</style>
