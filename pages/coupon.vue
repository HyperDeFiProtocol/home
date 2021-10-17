<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('pCoupon.title') }}
      </span>

      <template #tag>
        {{ $t('pCoupon.tag') }}
      </template>
    </CH3>

  </LAutoWidth>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'coupon',
  data() {
    return {
      //
    }
  },
  computed: {
    //
  },
  methods: {
    //
  }
}
</script>

<style scoped lang='scss'>

</style>
