<template>
  <div>
    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        Balance
      </template>
    </CSHeading>

    <CAccountBalance :account='account' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        Harvest History
      </template>
    </CSHeading>

    <CAccountHarvest :account='account' class='mt-4' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        Lotto History
      </template>
    </CSHeading>

    <CAccountLotto :account='account' class='mt-4' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        FOMO History
      </template>
    </CSHeading>

    <CAccountFomo :account='account' class='mt-4' />
  </div>
</template>

<script>
export default {
  name: 'SDashboard',
  props: {
    'account': {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
