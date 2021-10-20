<template>
  <div v-if='transactions.length' class='overflow-x-auto'>
    <div class='align-middle inline-block min-w-full'>
      <div class='shadow overflow-hidden border-b border-gray-700'>
        <table class='table-history'>
          <thead>
          <tr>
            <th scope='col'>
              {{ $t('txTable.block') }}
            </th>
            <th scope='col'>
              {{ $t('txTable.txHash') }}
            </th>
            <th scope='col'>
              {{ $t('txTable.amount') }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='tx in transactions'>
            <td>
              <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                #<CBN :value='tx.blockNumber' />
              </a>
            </td>
            <td class='font-mono'>
              <a target='_blank' :href='hdfLink.exploreTx(tx.txHash)'>
                {{ tx.txHash.slice(0, 44) }}...
              </a>
            </td>
            <td>
              <CBN :value='tx.amount' :token='true' :padding='2' />
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
  name: 'CTableAccountBonus',
  props: {
    transactions: {
      type: Array,
      required: true
    },
    hash: {
      type: Boolean,
      default: false,
    }

  },
  computed: {
    hdfLink() {
      return hdfLink
    },
  },
}
</script>

<style scoped>

</style>
