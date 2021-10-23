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
              {{ $t('txTable.address') }}
            </th>
            <th scope='col'>
              {{ $t('txTable.amount') }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='tx in transactions'>
            <td>
              <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>
                #<CBN :value='tx.blockNumber' />
              </a>
            </td>
            <td class='font-mono'>
              <a target='_blank' :href='hpLink.exploreTx(tx.txHash)'>
                <CAddress :value='tx.account' />
              </a>
            </td>
            <td>
              <CBN :value='tx.amount' :price='true' :padding='6' />
              BNB
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'CTableGenesis',
  props: {
    transactions: {
      type: Array,
      required: true
    },
  },
  computed: {
    hpLink() {
      return hpLink
    },
  },
}
</script>

<style scoped>

</style>
