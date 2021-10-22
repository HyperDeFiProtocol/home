<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('modes.title') }}
      </span>

      <template #tag>
        {{ $t('modes.tag') }}
      </template>

      <template #desc>
        {{ $t('modes.desc') }}
      </template>
    </CH3>

    <LAutoWidth class='mt-12 md:mt-24 px-4 sm:px-6 lg:px-8'>
      <div class='max-w-2xl mx-auto mt-8 sm:mt-16'>
        <table class='tableTax'>
          <thead>
          <tr>
            <th scope='col' class='w-1/4'>
              {{ $t('modes.title') }}
            </th>
            <th scope='col' class='w-1/4'>
              {{ $t('modes.network') }}
            </th>
            <th scope='col' class='w-1/2'>
              {{ $t('modes.URL') }}
            </th>
          </tr>
          </thead>
          <tbody class='border-t border-gray-600 divide-y divide-gray-600'>
          <tr>
            <td>
              {{ $t('modes.mainnet') }}
            </td>
            <td>
              {{ $t('modes.bscMainnet') }}
            </td>
            <td>
              <a target='_blank' :href='hdLink.home()'>
                {{ hdLink.home() }}
              </a>
            </td>
          </tr>

          <tr>
            <td>
              {{ $t('modes.beta') }}
            </td>
            <td>
              {{ $t('modes.bscTestnet') }}
            </td>
            <td>
              <a target='_blank' :href='hdLink.home("testnet")'>
                {{ hdLink.home("testnet") }}
              </a>
            </td>
          </tr>

          <tr>
            <td>
              {{ $t('modes.alpha') }}
            </td>
            <td>
              {{ $t('modes.bscTestnet') }}
            </td>
            <td>
              <a target='_blank' :href='hdLink.home("alpha")'>
                {{ hdLink.home("alpha") }}
              </a>
            </td>
          </tr>

          <tr>
            <td>
              {{ $t('modes.development') }}
            </td>
            <td>
              {{ $t('modes.bscTestnet') }}
            </td>
            <td>
              <a target='_blank' href='https://localhost:3000/'>
                https://localhost:3000/
              </a>
            </td>
          </tr>

          </tbody>
        </table>
      </div>

    </LAutoWidth>
  </LAutoWidth>
</template>

<script>
import hdLink from '~/utils/hdfLink'

export default {
  name: 'modes',
  data() {
    return {
      //
    }
  },
  computed: {
    hdLink() {
      return hdLink
    }
  },
  methods: {
    //
  }
}
</script>

<style scoped lang='scss'>
h2 {
  @apply text-3xl font-extrabold tracking-tight sm:text-4xl;
}

p {
  @apply text-gray-400;
}

table {
  @apply w-full h-px table-fixed text-lg;

  thead {
    tr {
      th {
        @apply py-4 leading-6 font-medium text-gray-200 text-center;

        &:first-child {
          @apply text-base;
        }
      }
    }
  }
  tbody {
    tr {
      &:nth-of-type(odd) {
        @apply bg-gray-800;
      }

      td {
        @apply py-5 text-center truncate;

        &:first-child {
          @apply text-base;
        }
      }

      &:hover {
        @apply bg-gray-700;
      }
    }
  }
}
</style>
