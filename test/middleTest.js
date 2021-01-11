
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['i'] for ['e', 'm', 'i', 'l', 'y']", () => {
    assert.deepEqual(middle(['e', 'm', 'i', 'l', 'y']), ['i']);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [])
  });

});

