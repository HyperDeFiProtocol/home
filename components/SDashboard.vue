<template>
  <div>
    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        {{ $t('pUser.balance') }}
      </template>
    </CSHeading>

    <CAccountBalance :account='account' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        {{ $t('pUser.harvestHistory') }}
      </template>
    </CSHeading>

    <CAccountHarvest :account='account' class='mt-4' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        {{ $t('pUser.airdropHistory') }}
      </template>
    </CSHeading>

    <CAccountAirdrop :account='account' class='mt-4' />

    <CSHeading class='mt-12 lg:mt-24'>
      <template>
        {{ $t('pUser.fomoHistory') }}
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
