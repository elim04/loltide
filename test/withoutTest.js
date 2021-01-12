
const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(without([1,2,3], [1]), [2, 3])
  });

  it("returns ['e', 'm', 'i', 'l', 'y'] for ['e', 'm', 'i', 'k', 'l', 'y']", () => {
    assert.deepEqual(without(['e', 'm', 'i', 'k', 'l', 'y'], ['k']), ['e', 'm', 'i', 'l', 'y'])
  });

  it("does not modify original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"])
    assert.deepEqual(words, ["hello", "world", "lighthouse"])
  });


});

