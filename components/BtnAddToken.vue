<template>
  <button class='btn space-x-2' @click='addToken'>
    <slot>
      <span>
        Add HyperDeFi to Your MetaMask Wallet
      </span>
    </slot>
    <IconDiceHyperSpin v-show='processing' class='inline w-6 h-6' />
  </button>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider'

export default {
  name: 'BtnAddToken',
  data() {
    return {
      processing: false,
    }
  },
  methods: {
    async addToken() {
      if (!this.$store.state.wallet.account) {
        this.processing = true
        const provider = await detectEthereumProvider()
        await this.$nuxt.context.app.conn.connect(provider)
      }

      if (this.$nuxt.context.app.web3.currentProvider.isMetaMask) {
        this.processing = true

        const image = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPg0KPHJlY3QgaWQ9ImdyYXktMTAwIiB4PSIxOTIiIHk9IjE5MiIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiIHN0eWxlPSJmaWxsOiNmM2Y0ZjY7Ii8+DQo8cGF0aCBpZD0iRGljZS1IeXBlciIgc2VyaWY6aWQ9IkRpY2UgSHlwZXIiIGQ9Ik03NjkuMTQzLDE1MmwtNTE0LjI4NiwtMGMtNTYuODEyLC0wIC0xMDIuODU3LDQ2LjA0NSAtMTAyLjg1NywxMDIuODU3bC0wLDUxNC4yODZjLTAsNTYuODEyIDQ2LjA0NSwxMDIuODU3IDEwMi44NTcsMTAyLjg1N2w1MTQuMjg2LDBjNTYuODEyLDAgMTAyLjg1NywtNDYuMDQ1IDEwMi44NTcsLTEwMi44NTdsMCwtNTE0LjI4NmMwLC01Ni44MTIgLTQ2LjA0NSwtMTAyLjg1NyAtMTAyLjg1NywtMTAyLjg1N1ptLTM4NS43MTQsNjE3LjE0M2MtMjguMzk5LC0wIC03Ny4xNDMsLTQ4Ljc0NSAtNzcuMTQzLC03Ny4xNDNjLTAsLTI4LjM5OCA0OC43NDQsLTc3LjE0MyA3Ny4xNDMsLTc3LjE0M2MyOC4zOTgsMCA3Ny4xNDIsNDguNzQ1IDc3LjE0Miw3Ny4xNDNjMCwyOC4zOTggLTQ4Ljc0NCw3Ny4xNDMgLTc3LjE0Miw3Ny4xNDNabTI1Ny4xNDIsLTE1NC4yODZjLTI4LjM5OCwwIC03Ny4xNDIsLTQ4Ljc0NSAtNzcuMTQyLC03Ny4xNDNjLTAsLTI4LjM5OCA0OC43NDQsLTc3LjE0MyA3Ny4xNDIsLTc3LjE0M2MyOC4zOTksMCA3Ny4xNDMsNDguNzQ1IDc3LjE0Myw3Ny4xNDNjMCwyOC4zOTkgLTQ4Ljc0NCw3Ny4xNDMgLTc3LjE0Myw3Ny4xNDNabTAsLTIwNS43MTRjLTI4LjM5OCwtMCAtNzcuMTQyLC00OC43NDUgLTc3LjE0MiwtNzcuMTQzYy0wLC0yOC4zOTggNDguNzQ0LC03Ny4xNDMgNzcuMTQyLC03Ny4xNDNjMjguMzk5LDAgNzcuMTQzLDQ4Ljc0NSA3Ny4xNDMsNzcuMTQzYzAsMjguMzk4IC00OC43NDQsNzcuMTQzIC03Ny4xNDMsNzcuMTQzWiIgc3R5bGU9ImZpbGw6IzdjM2FlZDtmaWxsLXJ1bGU6bm9uemVybzsiLz4NCjwvc3ZnPg=='

        const tokenAdded = await this.$nuxt.context.app.web3.currentProvider.request(
          {
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: process.env.tokenAddress,
                symbol: this.$store.state.bsc.metadata.tokenSymbol,
                decimals: parseInt(this.$store.state.bsc.metadata.tokenDecimals),
                image: image,
              }
            }
          })
          .catch(async function(error) {
            await this.$store.dispatch('warning/SET_WARNING', {
              title: 'Add to Wallet: failed...',
              message: error.message,
            })
          })

        if (!tokenAdded) {
          await this.$store.dispatch('warning/SET_WARNING', {
            title: 'Add to Wallet: failed...',
            message: 'Add to Wallet: failed...',
          })
        }
      } else {
        await this.$store.dispatch('warning/SET_WARNING', {
          title: 'Not Metamask',
          message: 'Not connected with Metamask',
        })
      }

      this.processing = false
    }
  }
}
</script>

<style scoped>

</style>
