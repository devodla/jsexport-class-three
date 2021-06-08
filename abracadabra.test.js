const Abracadabra = require('./abracadabra')
const sinon = require('sinon')
const assert = require('assert')

;(async () => {
  {
    const abracadabra = new Abracadabra()
    const spy = sinon.spy(abracadabra, abracadabra.execute.name)
    for await (const i of abracadabra.execute('abracadabra')) {
      // console.log(i)
    }
    const expectedCallCount = 12
    assert.deepStrictEqual(spy.callCount, expectedCallCount)
  }
  {
    const abracadabra = new Abracadabra()
    const spy = sinon.spy(abracadabra, abracadabra.execute.name)
    const [...results] = abracadabra.execute('abracadabra')
    const { args } = spy.getCall(9)
    const expectedResult = [
      'a b r a c a d a b r a',
      ' a b r a c a d a b r',
      '  a b r a c a d a b',
      '   a b r a c a d a',
      '    a b r a c a d',
      '     a b r a c a',
      '      a b r a c',
      '       a b r a',
      '        a b r',
      '         a b',
      '          a'
    ]
    const expectedParams = Object.values({
      string: ['a', 'b'],
      maxLen: 13
    })
    assert.deepStrictEqual(args, expectedParams)
    assert.deepStrictEqual(results, expectedResult)
  }
})()