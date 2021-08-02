const assert = require('assert');

describe('Mathetmatical Operations - Test Suite', () => {
  const a = 10;
  const b = 10;
  it.skip('Addition of two numbers', () => {
    let sum = a + b;
    assert.equal(sum, 20);
  });
  
  it('Subsctraction of two numbers', () => {
    let sum = a -b;
    assert.equal(sum, 0);
  });

  it('Multiple of two numbers', () => {
    let sum = a * b;
    assert.equal(sum, 100);
  });

  it('Divison of two numbers', () => {
    let sum = a / b;
    assert.equal(sum, 1);
  });
});