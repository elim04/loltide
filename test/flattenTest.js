const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });

  it("returns ['e', 'm', 'i', 'l', 'y'] for ['e', 'm', ['i','l'],'y']", () => {
    assert.deepEqual(flatten(['e', 'm', ['i','l'],'y']), ['e', 'm', 'i', 'l', 'y']);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});


