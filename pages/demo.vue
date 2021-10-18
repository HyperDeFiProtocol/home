<template>
  <div>
    <SLoading />
    <LAutoWidth class='py-16 px-4'>
      <CH3>
        <span>
          Demo Page for DEBUG
        </span>

        <template #tag>
          Developing
        </template>
      </CH3>

      <div class='mt-24 flex justify-center text-4xl'>
        <CCountdown :timestamp='1634576100 * 1000' :show-ds='true' />
      </div>

      <div class='mt-24 flex justify-center' v-show='true' @click='show = !show'>
        <IconPancakeSwap class='w-80 h-80' />
      </div>

      <transition name="fade">
        <div class='mt-24 flex justify-center test' v-show='show'>
          <IconPancakeSwap class='w-80 h-80' />
        </div>
      </transition>

    </LAutoWidth>
  </div>
</template>

<script>
import BN from 'bn.js'

export default {
  name: 'demo',
  data() {
    return {
      show: true,
    }
  },
  mounted: async function() {
    await this.$nuxt.context.app.sync.genesisDeposit()

    console.log(this.$store.state.bsc.metadata)

    // console.log('>>> window.BinanceChain:', window.BinanceChain)

    // this.$nuxt.context.app.metamask.connect()

    // console.log('this.$nuxt.context.app.p1:', this.$nuxt.context.app.p1)

    // const result = await this.$nuxt.context.app.sync.all()


    // console.log('result:', result)

    //
    // const events = await this.$nuxt.context.app.token
    //   .getPastEvents('Tx', {
    //     fromBlock: 10628967,
    //     toBlock: 10629000,
    //   })
    //   .catch(e => {
    //     console.error('>>> db.js, syncTx:', e)
    //     // break
    //   })
    //
    // console.log(events)
  }
}
</script>

<style scoped lang='scss'>











</style>
