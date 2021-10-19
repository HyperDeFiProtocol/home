import BN from 'bn.js'

const wait = function(timeout = 1000) {
  return new Promise((resolve, reject) => {
    if (timeout > 0) {
      setTimeout(() => {
        resolve(timeout)
      }, timeout)
    } else {
      reject('Invalid `timeout`')
    }
  })
}

const randomInt = function(range = { min: 0, max: 1000 }) {
  return Math.round(Math.random() * (range.max + 1 - range.min)) + Math.floor(range.min)
}

const onlyHexString = function(str = '') {
  return str.replace(/[^\d^a-f^A-F]/g, '').toUpperCase()
}

const hex2dec = function(hexString = '') {
  if (hexString) {
    try {
      return new BN(hexString, 16).toString()
    } catch (e) {
      console.error('>>> [' + e.message + ']: fn.hex2dec(\'' + hexString + '\')')

      return '0'
    }
  }

  return '0'
}

const dec2hex = function(decString = '') {
  if (decString) {
    try {
      let hexString = new BN(decString).toString(16)

      if (hexString === '0') {
        return ''
      }

      return hexString
    } catch (e) {
      console.error('>>> [' + e.message + ']: fn.dec2hex(\'' + decString + '\')')

      return ''
    }
  }

  return ''
}

const dec2coupon = function(decString = '') {
  let hexString = dec2hex(decString)

  if (!hexString) {
    return ''
  }

  while (hexString.length < 8) {
    hexString = '0' + hexString
  }

  return hexString
}

export default {
  wait: wait,
  randomInt: randomInt,
  onlyHexString: onlyHexString,
  hex2dec: hex2dec,
  dec2hex: dec2hex,
  dec2coupon: dec2coupon,
}
