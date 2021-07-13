<template>
  <div>
    <LAutoWidth class='py-16 px-4'>
      <CH3>
        <span>
          Demo Page for DEBUG
        </span>

        <template #tag>
          Developing
        </template>
      </CH3>

      <div class='mt-24 flex justify-center'>
        <IconPancakeSwap class='w-80 h-80' />
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'demo',
  mounted: async function() {
    // console.log('>>> window.BinanceChain:', window.BinanceChain)

    // this.$nuxt.context.app.metamask.connect()
  }
}
</script>

<style scoped>

</style>
