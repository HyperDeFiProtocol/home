<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        <span>
          {{ $t('pTrade.title') }}
        </span>

        <template #tag>
          {{ $t('pTrade.tag') }}
        </template>
      </CH3>

      <!--  tabs  -->
      <div class="mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto">
        <div class="">
          <nav class="-mb-px flex" aria-label="Tabs">
            <button class="btn-tab" :class='tabClass(0)' @click='conShow(0)'>
              {{ $t('pTrade.tabPC') }}
            </button>

            <button class="btn-tab" :class='tabClass(1)' @click='conShow(1)'>
              {{ $t('pTrade.tabMobile') }}
            </button>
          </nav>
        </div>
      </div>

      <!--  pc  -->
      <div class='con' v-show='tab === 0'>
        <h3>
          Desktop
        </h3>
        <p>
          TBC...
        </p>
      </div>

      <!--  mobile  -->
      <div class='con' v-show='tab === 1'>
        <h3>
          Mobile
        </h3>
        <p>
          TBC...
        </p>
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'trade',
  data() {
    return {
      tab: 0,
    }
  },
  computed: {
    //
  },
  methods: {
    tabClass(index) {
      if (this.tab === index) {
        return 'tab-current'
      }

      return null
    },
    conShow(index) {
      this.tab = index
    }
  },

}

</script>

<style scoped lang='scss'>
.btn-tab {
  @apply flex-1;
  @apply border-b-2 py-4 px-1;
  @apply font-medium text-sm text-center;
  @apply border-gray-500 text-gray-500;
  @apply hover:text-gray-300 hover:border-gray-300;

  &.tab-current {
    @apply border-violet-300 text-violet-300;
  }
}

.con {
  @apply mt-10 lg:mt-16 xl:mt-20 mx-auto text-gray-400;
  @apply prose xl:prose-xl;

  h2, h3, h4, h5, h6 {
    @apply text-gray-300;
  }

  p {
    @apply text-gray-400;
  }
}
</style>
