<template>
  <span class='inline-flex items-end'>
    <span v-if='showHours'>
      {{ hh }}:
    </span>
    <span>
      {{ mm }}:
    </span>
    <span>
      {{ ss }}
    </span>
    <span v-if='showDs' class='ds'>
      .{{ ds }}
    </span>
  </span>
</template>

<script>
import moment from 'moment'

export default {
  name: 'CCountdown',
  props: {
    timestamp: {
      type: Number,
      required: true
    },
    mayHideHours: {
      type: Boolean,
      default: false
    },
    showDs: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      interval: null,
      finished: false,

      h: 0,
      m: 0,
      s: 0,
      ds: 0,
      hh: '00',
      mm: '00',
      ss: '00',
    }
  },
  computed: {
    showHours() {
      return this.h > 0 || !this.mayHideHours;
    }
  },
  watch: {
    timestamp() {
      this.interval = null
      this.setCountdownInterval()
    }
  },
  mounted() {
    this.setCountdownInterval()
  },
  methods: {
    touchCountdown() {
      this.finished = false
      const duration = moment.duration(moment(this.timestamp).diff(moment()))

      if (duration.asMilliseconds() > 0) {
        if (this.finished) {
          return null
        }

        this.$emit('finished', false)

        this.ds = Math.floor(duration.milliseconds() / 100)
        this.s = duration.seconds()
        this.m = duration.minutes()
        this.h = Math.floor(duration.asHours())
        this.ss = this.s < 10 ? '0' + this.s : this.s
        this.mm = this.m < 10 ? '0' + this.m : this.m
        this.hh = this.h < 10 ? '0' + this.h : this.h
      } else {
        this.finished = true
        clearInterval(this.interval)
        this.$emit('finished', true)

        this.s = 0
        this.m = 0
        this.h = 0
        this.ss = '00'
        this.mm = '00'
        this.hh = '00'
      }
    },
    async setCountdownInterval() {
      if (!this.interval) {
        if (this.showDs) {
          this.interval = window.setInterval(this.touchCountdown, 100)
        } else {
          this.interval = window.setInterval(this.touchCountdown, 1000)
        }
      }
    },
  }
}
</script>

<style scoped lang='scss'>
.ds {
  font-size: 80%;
}
</style>
