const chai = require('chai')
//expect
const expect = chai.expect
//should
const should = chai.should()
//assert - TDD style
const assert = chai.assert //no chaining possible

let a = 3
let b = 3
expect(a).to.be.equals(b, 'a and b are equal')

function myObj() {
  return{
    a: 100,
    b: 'Hello'
  }
}

x = new myObj(), y = new myObj()

expect(x).to.be.an('object')

expect(x).to.be.deep.equals(y, 'x and y are not equal')

expect(x).to.be.an('object').and.to.be.deep.equals(y)

let numbers = [1,2,3,4]
(numbers).should.be.an('array').that.includes(4)

