const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns object with each letter counted", () => {

  const result = { e: 3,
    m: 2,
    i: 3,
    l: 2,
    y: 1,
    s: 1,
    a: 1,
    n: 1,
    w: 1,
    c: 1,
    o: 1,
    d: 1,
    r: 1 };

    assert.deepEqual(countLetters("emily lim is a new coder"), result);
  });


  it("returns number of 'e's as 3", () => {

    const result = { e: 3,
      m: 2,
      i: 3,
      l: 2,
      y: 1,
      s: 1,
      a: 1,
      n: 1,
      w: 1,
      c: 1,
      o: 1,
      d: 1,
      r: 1 };
  
      assert.strictEqual(countLetters("emily lim is a new coder").e, 3);
    });

});
