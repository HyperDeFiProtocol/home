<template>
  <div>
    <LAutoWidth class='pt-12 pb-20 px-4 md:py-24 md:px-8'>
      <CH2>
        {{ $t('sTax.title') }}

        <template #tag>
          {{ $t('sTax.tag') }}
        </template>
      </CH2>

      <div class='mt-8 sm:mt-16 border-l-8 border-gray-700 rounded-r bg-gray-800 py-4 px-6 leading-9 text-xl text-gray-400'>
        {{ $t('sTax.desc') }}
      </div>


      <div class='mt-8 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-8'>
        <table class='w-full h-px table-fixed'>
          <caption class='sr-only'>
            {{ $t('sTax.for') }}
          </caption>
          <thead>
          <tr>
            <th class='pb-4 px-6 text-sm font-medium text-gray-200 text-left' scope='col'>
              <span class='sr-only'>{{ $t('sTax.type') }}</span>
              <span>{{ $t('sTax.type') }}</span>
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sTax.taker') }}
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sTax.maker') }}
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sTax.whale') }}
            </th>
          </tr>
          </thead>
          <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
          <tr>
            <th class='py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-200 text-left' scope='row'>
              {{ $t('sTax.total') }}
            </th>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.takerTax.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.makerTax.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>

            <td class='h-full py-8 px-6 align-top'>
              <span class='text-4xl font-extrabold text-gray-200'>{{ $store.state.bsc.whaleTax.total }}</span>
              <span class='text-base font-medium text-gray-300'>%</span>
            </td>
          </tr>

          <tr>
            <th class='py-3 pl-6 bg-gray-800 text-sm font-medium text-gray-400 text-left' colspan='4' scope='colgroup'>
              {{ $t('sTax.for') }}
            </th>
          </tr>


          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.farm') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.tax > "0"'>
                {{ $store.state.bsc.takerTax.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.tax > "0"'>
                {{ $store.state.bsc.makerTax.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.tax > "0"'>
                {{ $store.state.bsc.whaleTax.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.airdrop') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.airdrop > "0"'>
                {{ $store.state.bsc.takerTax.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.airdrop > "0"'>
                {{ $store.state.bsc.makerTax.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.airdrop > "0"'>
                {{ $store.state.bsc.whaleTax.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.fomo') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.fomo > "0"'>
                {{ $store.state.bsc.takerTax.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.fomo > "0"'>
                {{ $store.state.bsc.makerTax.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.fomo > "0"'>
                {{ $store.state.bsc.whaleTax.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>


          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.lpAcquisition') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.liquidity > "0"'>
                {{ $store.state.bsc.takerTax.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.liquidity > "0"'>
                {{ $store.state.bsc.makerTax.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.liquidity > "0"'>
                {{ $store.state.bsc.whaleTax.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.fund') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.fund > "0"'>
                {{ $store.state.bsc.takerTax.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.fund > "0"'>
                {{ $store.state.bsc.makerTax.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.fund > "0"'>
                {{ $store.state.bsc.whaleTax.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sTax.burn') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerTax.destroy > "0"'>
                {{ $store.state.bsc.takerTax.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerTax.destroy > "0"'>
                {{ $store.state.bsc.makerTax.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleTax.destroy > "0"'>
                {{ $store.state.bsc.whaleTax.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sTax.freeForWhale') }}
              </span>
            </td>
          </tr>
          </tbody>
        </table>


        <div class='w-full'>
          <h2 class='mt-10 lg:mt-0 text-sm font-semibold text-gray-500 tracking-wide uppercase'>
            {{ $t('sTax.definitions') }}
          </h2>

          <dl class='mt-10 space-y-10 lg:space-y-16'>
            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineRefresh class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sTax.taker') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sTax.definitionsTaker') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineCash class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sTax.maker') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sTax.definitionsMaker') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <IconWhale class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sTax.whale') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sTax.definitionsWhaleWho__') }}
                <span v-if='$store.state.bsc.global.whaleThreshold > "0"'>
                  <CBN :value='$store.state.bsc.global.whaleThreshold' :token='true' /> HyperDeFi
                </span>
                <span v-else>
                  {{ $t('sTax.definitionsWhaleALarge__') }}
                </span>
                {{ $t('sTax.definitionsWhaleRemark1') }}
                {{ $store.state.bsc.global.whaleFractionA }}/<CBN :value='$store.state.bsc.global.whaleFractionB' />
                {{ $t('sTax.definitionsWhaleRemark2') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineEmojiSad class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sTax.robber') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sTax.definitionsRobber') }}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class='mt-10 md:mt-16 w-full bg-gray-800 py-8 md:py-12 px-10 md:px-16 rounded-md'>
        <div class='mx-auto max-w-md lg:max-w-md xl:max-w-3xl'>
          <h3 class='w-full bg-red-900 py-1 md:py-2 font-semibold tracking-widest text-center text-white uppercase'>
            {{ $t('sTax.scriptWarning') }}
          </h3>

          <p class='mt-3 md:mt-6 px-4 md:px-8 leading-loose tracking-wide'>
            {{ $t('sTax.scriptNotWelcomed__moreThan') }}
            {{ $store.state.bsc.global.robberPercentage }}%
            {{ $t('sTax.scriptCannot__') }}
            {{ $store.state.bsc.robberTax.total }}%
            {{ $t('sTax.scriptOfTheTax') }}
            {{ $store.state.bsc.robberTax.tax }}%

            {{ $t('sTax.script4Farm_') }}
            {{ $store.state.bsc.robberTax.airdrop }}%
            {{ $t('sTax.script4Airdrop_') }}
            {{ $store.state.bsc.robberTax.fomo }}%
            {{ $t('sTax.script4FOMO_') }}
            {{ $store.state.bsc.robberTax.liquidity }}%
            {{ $t('sTax.script4LPAcquisition_') }}
            {{ $store.state.bsc.robberTax.fund }}%
            {{ $t('sTax.script4Fund_') }}
            {{ $store.state.bsc.robberTax.destroy }}%
            {{ $t('sTax.script4Burning_') }}
          </p>
        </div>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'STax'
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
