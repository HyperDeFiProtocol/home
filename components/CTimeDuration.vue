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
  name: 'CTimeDuration',
  props: {
    milliseconds: {
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
    }
  },
  computed: {
    duration() {
      return moment.duration(this.milliseconds)
    },
    s() {
      return this.duration.seconds()
    },
    m() {
      return this.duration.minutes()
    },
    h() {
      return this.duration.hours()
    },
    ds() {
      return Math.floor(this.duration.milliseconds() / 100)
    },
    ss() {
      return this.s < 10 ? '0' + this.s : this.s
    },
    mm() {
      return this.m < 10 ? '0' + this.m : this.m
    },
    hh() {
      return this.h < 10 ? '0' + this.h : this.h
    },
    showHours() {
      if (this.h) {
        return true
      }

      return !this.mayHideHours;
    }
  },
}
</script>

<style scoped lang='scss'>
.ds {
  font-size: 80%;
}
</style>
