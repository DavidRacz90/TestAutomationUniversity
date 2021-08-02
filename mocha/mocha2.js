const assert = require('assert');

describe('Mathetmatical Operations - Test Suite', () => {
  it('Addition of two numbers', () => {
    let a = 10;
    let b = 10;
    let sum = a + b;
    assert.equal(sum, 20);
  });
  
  it('Subsctraction of two numbers', () => {
    let a = 10;
    let b = 10;
    let sum = a -b;
    assert.equal(sum, 0);
  });

  it('Multiple of two numbers', () => {
    let a = 10;
    let b = 10;
    let sum = a * b;
    assert.equal(sum, 100);
  });

  it('Divison of two numbers', () => {
    let a = 10
    let b = 10
    let sum = a / b;
    assert.equal(sum, 1);
  });
});