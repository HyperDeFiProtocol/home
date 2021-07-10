<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        {{ $t('sFomo.title') }}

        <template #tag>
          {{ $t('sFomo.tag') }}
        </template>
      </CH3>

      <div class='mt-10 sm:mt-16 lg:text-center'>
        <div class='text-lg text-gray-500'>
          <span>
            {{ $t('sFomo.countdown') }}
          </span>
          <span v-if='this.isZero($store.state.bsc.fomo.next)'>
            {{ $t('sFomo.waitForStarting') }}
          </span>
        </div>

        <h4 class="mt-2 lg:mt-3 lg:w-full lg:mx-auto text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200">
          <CTimeDuration v-if='!isZero($store.state.bsc.fomo.next)'
                         :milliseconds='$store.state.bsc.fomo.timestampStep * 1000'
                         :may-hide-hours='true' />

          <CCountdown v-else
                      :timestamp='$store.state.bsc.fomo.timestamp * 1000'
                      :may-hide-hours='true'
                      :show-ds='true'
                      class='lg:justify-center'
                      v-on:finished='setCountdownFinished' />
        </h4>

        <div class='mt-10 sm:mt-16 text-lg text-gray-500'>
          {{ $t('sFomo.latestBuyerWin') }}
        </div>

        <h5 class="mt-2 lg:mt-3 w-full mx-auto text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-gray-200">
          <CBN :value='$store.state.bsc.fomo.amount' :token='true' /> HyperDeFi
        </h5>
      </div>

      <div class='mt-10 sm:mt-16'>
        <div class='mx-auto max-w-2xl flex rounded-md shadow-sm'>
          <span
            class='inline-flex items-center px-4 lg:px-8 rounded-l-md border border-r-0 border-violet-300 bg-violet-50 font-bold text-lg text-violet-600'>
            <span v-if='!this.countdownFinished'>
              {{ $t('sFomo.current') }}
            </span>
            <span v-else>
              {{ $t('sFomo.winner') }}
            </span>
          </span>
          <div
            class='flex-1 min-w-0 block w-full p-4 border border-violet-300 bg-white text-lg rounded-none rounded-r-md border-gray-300 truncate'>
            <span v-if='!this.isZero($store.state.bsc.fomo.next)' class='font-bold text-violet-700'>
              {{ $store.state.bsc.fomo.next }}
            </span>
            <span v-else class='font-normal text-gray-400'>
              {{ $t('sFomo.nextBuyer') }} 0x...
            </span>
          </div>
        </div>
      </div>

    </LAutoWidth>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'sFomo',
  data() {
    return {
      countdownFinished: true
    }
  },
  computed: {
    step() {
      let step = {
        hh: '00',
        mm: '00',
        ss: '00',
      }

      const duration = moment.duration(this.$store.state.bsc.fomo.timestampStep * 1000)
      const s = duration.seconds()
      const m = duration.minutes()
      const h = duration.hours()
      step.ss = s < 10 ? '0' + s : s
      step.mm = m < 10 ? '0' + m : m
      step.hh = h < 10 ? '0' + h : h

      return step
    }
  },
  methods: {
    isZero(address) {
      return address === this.$store.state.bsc.globalAccounts.zero
    },

    setCountdownFinished(value) {
      this.countdownFinished = value
    }
  }
}
</script>

<style scoped>

</style>
