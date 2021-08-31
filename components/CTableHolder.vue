<template>
  <div v-if='holders.length' class='overflow-x-auto'>
    <div class='align-middle inline-block min-w-full'>
      <div class='shadow overflow-hidden border-b border-gray-700'>
        <table class='table-history'>
          <thead>
          <tr>
            <th scope='col'>
              {{ $t('txTable.rank') }}
            </th>
            <th scope='col'>
              {{ $t('txTable.username') }}
            </th>
            <th scope='col'>
            </th>
            <th scope='col'>
              {{ $t('txTable.address') }}
            </th>
            <th scope='col'>
              {{ $t('txTable.balance') }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='holder in holders'>
            <td>
              {{ holder.rank }}
            </td>
            <td>
              {{ holder.username ? '@' + holder.username : '' }}
            </td>
            <td>
              <IconWhale v-if='holder.isWhale' class='h-5 w-5' />
            </td>
            <td class='font-mono'>
              {{ holder.address }}
            </td>
            <td>
              <CBN :value='holder.balance' :token='true' :padding='2' />
              HyperDeFi
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import hdfLink from '~/utils/hdfLink'

export default {
  name: 'CTableHolder',
  props: {
    holders: {
      type: Array,
      required: true
    },
  },
  computed: {
    hdfLink() {
      return hdfLink
    },
  },
}
</script>

<style scoped lang='scss'>
</style>
