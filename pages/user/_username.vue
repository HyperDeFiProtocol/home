<template>
  <div>
    <LAutoWidth class='py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <CH3>
        Hello, "{{ indexedUsername }}"

        <template #tag>
          User Dashboard
        </template>

        <template #desc>
          <div class='truncate'>
            {{ account.address }}
          </div>
        </template>
      </CH3>

      <CSHeading class='mt-12 lg:mt-24'>
        <template>
          Balance and harvest
        </template>
      </CSHeading>

      <CAccountBalance :account='account' />

      <CSHeading class='mt-12 lg:mt-24'>
        <template>
          Harvest History
        </template>
      </CSHeading>

      <div class='mt-12'>
        ...
      </div>

      <CSHeading class='mt-12 lg:mt-24'>
        <template>
          Lotto History
        </template>
      </CSHeading>

      <div class='mt-12'>
        ...
      </div>

      <CSHeading class='mt-12 lg:mt-24'>
        <template>
          FOMO History
        </template>
      </CSHeading>

      <div class='mt-12'>
        ...
      </div>
    </LAutoWidth>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  name: 'UserUsername',
  middleware: ['user'],
  async asyncData({ params }) {
    const username = params.username
    return { username }
  },
  data() {
    return {
      account: {
        address: '',
        isHolder: false,
        isWhale: false,
        isFlat: false,
        isSlot: false,

        username: '',
        balance: '',
        harvest: '',
        totalHarvest: '',
        totalTaxSnap: '',
      }
    }
  },
  computed: {
    indexedUsername() {
      if (this.username.startsWith('@')) {
        return this.username.slice(1)
      }

      return ''
    }
  },
  mounted: async function () {
    const data = await this.$nuxt.context.app.token.methods.getAccountByUsername(this.indexedUsername).call()
      .catch(error => {
        console.error('>>> P[/user/_username] getAccountByUsername:', error.message)
      })

    if (data.account !== this.$store.state.bsc.globalAccounts.zero) {
      this.account.address = data.account

      this.account.isHolder = data.isHolder
      this.account.isWhale = data.isWhale
      this.account.isFlat = data.isFlat
      this.account.isSlot = data.isSlot

      this.account.username = data.username
      this.account.balance = data.balance
      this.account.harvest = data.harvest
      this.account.totalHarvest = data.totalHarvest
      this.account.totalTaxSnap = data.totalTaxSnap
    }
  },
}
</script>

<style scoped lang='scss'>
ul {
  @apply space-y-4;
}

li {
  @apply bg-gray-800 rounded-md px-8 py-3 hover:bg-gray-700;
}
</style>
