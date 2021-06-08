class Abracadabra {
  *execute (string, maxLen = null) {
    const arr = [...string]
    const len = (maxLen) ? maxLen - 1 : string.length * 2 - 1
    if (arr.length === 0) return console.log('\n')
    yield arr.join(' ').padStart(len, ' ')
    yield* this.execute(arr.slice(0, arr.length - 1), len)
  }
}

module.exports = Abracadabra