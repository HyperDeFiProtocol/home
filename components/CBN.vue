<template>
  <span class='cbn-number'>
    <span class='cbn-integer'>{{ display.a }}</span><span class='cbn-dot' v-if='display.b.length'>.</span><span class='cbn-decimal' v-for='part in display.b'>{{ part }}</span>
  </span>
</template>

<script>
export default {
  name: 'CBN',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    padding: {
      type: Number,
      default: 0
    },
    keep: {
      type: Boolean,
      default: false
    },
    price: {
      type: Boolean,
      default: false
    },
    token: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    numDecimals() {
      if (this.token) return parseInt(this.$store.state.bsc.metadata.tokenDecimals)
      else if (this.price) return parseInt(this.$store.state.bsc.metadata.priceDecimals)

      return this.decimals
    },
    step1() {
      let s = String(this.value).trim().replace(new RegExp('^0+'), '')

      let step1 = {
        a: '0',
        b: null
      }

      if (this.numDecimals > 0) {
        if (this.numDecimals < s.length) {
          const pos = s.length - this.numDecimals
          step1.a = s.slice(0, pos)
          step1.b = s.slice(pos)
        } else {
          step1.b = s
          while (this.numDecimals > step1.b.length) {
            step1.b = '0' + step1.b
          }
        }
      } else {
        step1.a = s
      }

      if (step1.b && !this.keep) {
        step1.b = step1.b.replace(new RegExp('0+$'), '')
      }

      if (this.padding) {
        if (!step1.b) {
          step1.b = ''
        }

        // padding
        if (this.padding > step1.b.length) {
          while (this.padding > step1.b.length) {
            step1.b = step1.b + '0'
          }
        }
        // cutting
        else if (this.padding < step1.b.length) {
          step1.b = step1.b.slice(0, this.padding)
        }
      }

      return step1
    },
    display() {
      let display = {
        a: [],
        b: []
      }

      let a = this.step1.a
      while (3 < a.length) {
        display.a.unshift(a.slice(-3))
        a = a.slice(0, a.length - 3)
      }

      if (a.length) {
        display.a.unshift(a)
      }

      let b = this.step1.b
      if (b) {
        while (3 < b.length) {
          display.b.push(b.slice(0, 3))
          b = b.slice(3)
        }

        if (b.length) {
          display.b.push(b)
        }
      }

      if (0 === display.a.length) display.a = ['0']
      display.a = display.a.join(',')
      return display
    }
  }
}
</script>

<style scoped lang='scss'>
.cbn-decimal {
  margin-right: 0.2rem;
  font-size: 90%;

  &:last-child {
    margin-right: 0;
  }
}
</style>
