const assert = require('assert')

describe('Mathetmatical Operations - Test Suite', function() {
  this.beforeEach(function(done){
    this.timeout(500)
    setTimeout(done, 3000)
  })
  const a = 10
  const b = 10
  it('Addition of two numbers', function(done) {
    let sum = a + b
    assert.equal(sum, 20)
  })

  it('Subsctraction of two numbers', () => {
    let sum = a - b
    assert.equal(sum, 0)
  })

  it('Multiple of two numbers', () => {
    let sum = a * b
    assert.equal(sum, 100)
  })

  it('Divison of two numbers', () => {
    let sum = a / b
    assert.equal(sum, 1)
  })
})
