<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        {{ $t('sDApps.title') }}

        <template #tag>
          {{ $t('sDApps.tag') }}
        </template>
        <template #desc>
          {{ $t('sDApps.desc') }}
        </template>
      </CH3>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  name: 'SDApps'
}
</script>

<style scoped>

</style>
