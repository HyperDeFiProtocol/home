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

export default {
  wait: wait,
  randomInt: randomInt,
}
