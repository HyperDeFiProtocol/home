<template>
  <div>
    <LAutoWidth class='pt-12 pb-20 px-4 md:py-24 md:px-8'>
      <CH2>
        Trade
        <span class='text-violet-400'>Fees</span>

        <template #tag>
          RULES
        </template>
        <template #desc>
          Fees will be taken from each transaction:
          Lotto, FOMO, LP Acquisition, Burn, Dev, and Tax share to every holders.
        </template>
      </CH2>


      <div class='mt-8 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-8'>
        <table class='w-full h-px table-fixed'>
          <caption class='sr-only'>
            Trade Fees
          </caption>
          <thead>
          <tr>
            <th class='pb-4 px-6 text-sm font-medium text-gray-200 text-left' scope='col'>
              <span class='sr-only'>Fees for</span>
              <span>Types</span>
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>Taker</th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>Maker</th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>Whale</th>
          </tr>
          </thead>
          <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
          <tr>
            <th class='py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-200 text-left' scope='row'>Total</th>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.takerFee.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.makerFee.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.whaleFee.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>
          </tr>

          <tr>
            <th class='py-3 pl-6 bg-gray-800 text-sm font-medium text-gray-400 text-left' colspan='4' scope='colgroup'>
              Fees
            </th>
          </tr>


          <tr>
            <th class='th-item' scope='row'>Tax</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.tax > "0"'>
                {{ $store.state.bsc.takerFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.tax > "0"'>
                {{ $store.state.bsc.makerFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.tax > "0"'>
                {{ $store.state.bsc.whaleFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>Lotto</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.lotto > "0"'>
                {{ $store.state.bsc.takerFee.lotto }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.lotto > "0"'>
                {{ $store.state.bsc.makerFee.lotto }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.lotto > "0"'>
                {{ $store.state.bsc.whaleFee.lotto }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>FOMO</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.fomo > "0"'>
                {{ $store.state.bsc.takerFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.fomo > "0"'>
                {{ $store.state.bsc.makerFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.fomo > "0"'>
                {{ $store.state.bsc.whaleFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>


          <tr>
            <th class='th-item' scope='row'>LP Acquisition</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.liquidity > "0"'>
                {{ $store.state.bsc.takerFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.liquidity > "0"'>
                {{ $store.state.bsc.makerFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.liquidity > "0"'>
                {{ $store.state.bsc.whaleFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>Dev</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.dev > "0"'>
                {{ $store.state.bsc.takerFee.dev }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.dev > "0"'>
                {{ $store.state.bsc.makerFee.dev }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.dev > "0"'>
                {{ $store.state.bsc.whaleFee.dev }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>Burn</th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.destroy > "0"'>
                {{ $store.state.bsc.takerFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                Free for Taker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.destroy > "0"'>
                {{ $store.state.bsc.makerFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                Free for Maker
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.destroy > "0"'>
                {{ $store.state.bsc.whaleFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                Free for Whale
              </span>
            </td>
          </tr>


          </tbody>
        </table>


        <div class='w-full'>
          <h2 class='mt-10 lg:mt-0 text-sm font-semibold text-gray-500 tracking-wide uppercase'>
            Definitions
          </h2>

          <dl class='mt-10 space-y-10 lg:space-y-16'>
            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineRefresh class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>Taker</p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                Sell to PancakeSwap Liquidity, or the sender of a transaction.
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineCash class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>Maker</p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                Buy from PancakeSwap Liquidity.
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineLibrary class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>Whale</p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                Who holds or trades
                <span v-if='$store.state.bsc.global.whaleThreshold > "0"'>
                  more than <CBN :value='$store.state.bsc.global.whaleThreshold' :token='true' /> HyperDeFi
                </span>
                <span v-else>
                  a large amount of HyperDeFi
                </span>
                (dynamic value,
                {{ $store.state.bsc.global.whaleFractionA }}/<CBN :value='$store.state.bsc.global.whaleFractionB' />
                of the liquidity)
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineEmojiSad class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  Robber
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                Read <span class='uppercase'>Scripts Warning</span> info below...
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class='mt-10 md:mt-16 w-full bg-black py-8 md:py-12 px-10 md:px-16 rounded-md'>
        <div class='mx-auto max-w-md lg:max-w-md xl:max-w-3xl'>
          <h3 class='w-full bg-red-900 py-1 md:py-2 font-semibold tracking-widest text-center text-white uppercase'>
            Scripts Warning
          </h3>

          <p class='mt-3 md:mt-6 px-4 md:px-8 leading-loose tracking-wide'>
            Scripts are not welcomed in HyperDeFi ecology, especially in the very beginning phases.
            If someone uses scripts to make a big-trade that takes or puts
            more than {{ $store.state.bsc.global.robberPercentage }}% of the liquidity,
            he will be treat as a ROBBER and be charged up to {{ $store.state.bsc.robberFee.total }}% of the fee
            ({{ $store.state.bsc.robberFee.tax }}% for tax,
            {{ $store.state.bsc.robberFee.lotto }}% for lotto,
            {{ $store.state.bsc.robberFee.fomo }}% for FOMO,
            {{ $store.state.bsc.robberFee.liquidity }}% for LP Acquisition,
            {{ $store.state.bsc.robberFee.dev }}% for dev,
            {{ $store.state.bsc.robberFee.destroy }}% for burning).
          </p>
        </div>
      </div>


    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SFee'
}
</script>

<style scoped>

.th-item {
  @apply py-5 px-6 text-sm font-normal text-gray-300 text-left;
}

.td-item {
  @apply py-5 px-6;
}
</style>
