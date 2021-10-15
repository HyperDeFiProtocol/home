<template>
  <div>
    <LAutoWidth class='pt-12 pb-20 px-4 md:py-24 md:px-8'>
      <CH2>
        {{ $t('sFee.title') }}
        <span class='text-violet-400'>
          {{ $t('sFee.title2') }}
        </span>

        <template #tag>
          {{ $t('sFee.tag') }}
        </template>
      </CH2>

      <div class='mt-8 sm:mt-16 border-l-8 border-gray-700 rounded-r bg-gray-800 py-4 px-6 leading-9 text-xl text-gray-400'>
        {{ $t('sFee.desc') }}
      </div>


      <div class='mt-8 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-8'>
        <table class='w-full h-px table-fixed'>
          <caption class='sr-only'>
            {{ $t('sFee.tradeFees') }}
          </caption>
          <thead>
          <tr>
            <th class='pb-4 px-6 text-sm font-medium text-gray-200 text-left' scope='col'>
              <span class='sr-only'>{{ $t('sFee.type') }}</span>
              <span>{{ $t('sFee.type') }}</span>
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sFee.taker') }}
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sFee.maker') }}
            </th>
            <th class='w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left' scope='col'>
              {{ $t('sFee.whale') }}
            </th>
          </tr>
          </thead>
          <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
          <tr>
            <th class='py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-200 text-left' scope='row'>
              {{ $t('sFee.total') }}
            </th>

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
              {{ $t('sFee.tradeFees') }}
            </th>
          </tr>


          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.tax') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.tax > "0"'>
                {{ $store.state.bsc.takerFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.tax > "0"'>
                {{ $store.state.bsc.makerFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.tax > "0"'>
                {{ $store.state.bsc.whaleFee.tax }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.airdrop') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.airdrop > "0"'>
                {{ $store.state.bsc.takerFee.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.airdrop > "0"'>
                {{ $store.state.bsc.makerFee.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.airdrop > "0"'>
                {{ $store.state.bsc.whaleFee.airdrop }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.fomo') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.fomo > "0"'>
                {{ $store.state.bsc.takerFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.fomo > "0"'>
                {{ $store.state.bsc.makerFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.fomo > "0"'>
                {{ $store.state.bsc.whaleFee.fomo }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>


          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.lpAcquisition') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.liquidity > "0"'>
                {{ $store.state.bsc.takerFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.liquidity > "0"'>
                {{ $store.state.bsc.makerFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.liquidity > "0"'>
                {{ $store.state.bsc.whaleFee.liquidity }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.fund') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.fund > "0"'>
                {{ $store.state.bsc.takerFee.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.fund > "0"'>
                {{ $store.state.bsc.makerFee.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.fund > "0"'>
                {{ $store.state.bsc.whaleFee.fund }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>

          <tr>
            <th class='th-item' scope='row'>
              {{ $t('sFee.burn') }}
            </th>
            <td class='td-item'>
              <span v-if='$store.state.bsc.takerFee.destroy > "0"'>
                {{ $store.state.bsc.takerFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForTaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.makerFee.destroy > "0"'>
                {{ $store.state.bsc.makerFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForMaker') }}
              </span>
            </td>
            <td class='td-item'>
              <span v-if='$store.state.bsc.whaleFee.destroy > "0"'>
                {{ $store.state.bsc.whaleFee.destroy }}%
              </span>
              <span v-else class='sr-only'>
                {{ $t('sFee.freeForWhale') }}
              </span>
            </td>
          </tr>
          </tbody>
        </table>


        <div class='w-full'>
          <h2 class='mt-10 lg:mt-0 text-sm font-semibold text-gray-500 tracking-wide uppercase'>
            {{ $t('sFee.definitions') }}
          </h2>

          <dl class='mt-10 space-y-10 lg:space-y-16'>
            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineRefresh class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sFee.taker') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sFee.definitionsTaker') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineCash class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sFee.maker') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sFee.definitionsMaker') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <IconWhale class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sFee.whale') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sFee.definitionsWhaleWho__') }}
                <span v-if='$store.state.bsc.global.whaleThreshold > "0"'>
                  <CBN :value='$store.state.bsc.global.whaleThreshold' :token='true' /> HyperDeFi
                </span>
                <span v-else>
                  {{ $t('sFee.definitionsWhaleALarge__') }}
                </span>
                {{ $t('sFee.definitionsWhaleRemark1') }}
                {{ $store.state.bsc.global.whaleFractionA }}/<CBN :value='$store.state.bsc.global.whaleFractionB' />
                {{ $t('sFee.definitionsWhaleRemark2') }}
              </dd>
            </div>

            <div class='relative'>
              <dt>
                <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white'>
                  <HeroIconOutlineEmojiSad class='h-6 w-6' />
                </div>
                <p class='ml-16 text-lg leading-6 font-bold text-gray-200'>
                  {{ $t('sFee.robber') }}
                </p>
              </dt>
              <dd class='mt-2 ml-16 text-base text-gray-500'>
                {{ $t('sFee.definitionsRobber') }}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class='mt-10 md:mt-16 w-full bg-gray-800 py-8 md:py-12 px-10 md:px-16 rounded-md'>
        <div class='mx-auto max-w-md lg:max-w-md xl:max-w-3xl'>
          <h3 class='w-full bg-red-900 py-1 md:py-2 font-semibold tracking-widest text-center text-white uppercase'>
            {{ $t('sFee.scriptWarning') }}
          </h3>

          <p class='mt-3 md:mt-6 px-4 md:px-8 leading-loose tracking-wide'>
            {{ $t('sFee.scriptNotWelcomed__moreThan') }}
            {{ $store.state.bsc.global.robberPercentage }}%
            {{ $t('sFee.scriptCannot__') }}
            {{ $store.state.bsc.robberFee.total }}%
            {{ $t('sFee.scriptOfTheFee') }}
            {{ $store.state.bsc.robberFee.tax }}%

            {{ $t('sFee.script4Tax_') }}
            {{ $store.state.bsc.robberFee.airdrop }}%
            {{ $t('sFee.script4Airdrop_') }}
            {{ $store.state.bsc.robberFee.fomo }}%
            {{ $t('sFee.script4FOMO_') }}
            {{ $store.state.bsc.robberFee.liquidity }}%
            {{ $t('sFee.script4LPAcquisition_') }}
            {{ $store.state.bsc.robberFee.fund }}%
            {{ $t('sFee.script4Fund_') }}
            {{ $store.state.bsc.robberFee.destroy }}%
            {{ $t('sFee.script4Burning_') }}
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
