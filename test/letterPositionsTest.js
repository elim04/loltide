
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for index number of e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  });

  it("returns [2, 3] for index number of e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3])
  });

  it("returns undefined for index number of f in 'hello'", () => {
    assert.strictEqual(letterPositions("hello").f, undefined)
  });

});

