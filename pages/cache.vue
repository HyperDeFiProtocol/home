<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('pCache.title') }}
      </span>

      <template #tag>
        {{ $t('pCache.tag') }}
      </template>

      <template #desc>
        {{ $t('pCache.desc') }}
      </template>
    </CH3>

    <div class='mt-10 lg:mt-24 w-full max-w-xl mx-auto flex items-center justify-center'>
      <button v-if='showRebuilding' class='btn-clear-cache animate-pulse'>
        <HeroIconSolidDatabase class='h-6 w-6 animate-bounce' />
        <span>
          {{ $t('pCache.Rebuilding__') }}
        </span>

      </button>
      <button v-else class='btn-clear-cache' @click='clear'>
        <HeroIconSolidDatabase class='h-6 w-6' />
        <span>
          {{ $t('pCache.ClearAndRebuild__') }}
        </span>
      </button>
    </div>
  </LAutoWidth>
</template>

<script>
export default {
  name: 'cache',
  layout: 'withoutCache',
  data() {
    return {
      rebuilding: false
    }
  },
  computed: {
    showRebuilding() {
      return this.rebuilding || this.$store.state.bsc.synchronizing.fromBlock || this.$store.state.bsc.synchronizing.fromHolderId !== null
    }
  },
  methods: {
    async clear() {
      console.log('clear')

      this.rebuilding = true
      await this.$nuxt.context.app.db.pointers.clear()
      await this.$nuxt.context.app.db.holder.clear()
      await this.$nuxt.context.app.db.tx.clear()

      await this.$nuxt.context.app.db.airdrop.clear()
      await this.$nuxt.context.app.db.bonus.clear()
      await this.$nuxt.context.app.db.fund.clear()
      await this.$nuxt.context.app.db.genesisDeposit.clear()

      await this.$nuxt.context.app.db.transfer.clear()
      await this.$nuxt.context.app.db.buffer.clear()
      await this.$nuxt.context.app.sync.events()
      // await this.$nuxt.context.app.sync.holders()
      this.rebuilding = false
    }
  }
}
</script>

<style scoped lang='scss'>
.btn-clear-cache {
  @apply w-full inline-flex items-center justify-center;
  @apply py-8 border border-transparent rounded-md;
  @apply font-medium text-xl text-gray-500 bg-gray-800;
  @apply uppercase;
  @apply space-x-4;

  &:hover {
    @apply bg-gray-700;
  }

  &:focus {
    @apply outline-none;
  }
}
</style>
