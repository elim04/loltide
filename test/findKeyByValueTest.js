
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {

  it("returns 'drama' for key that holds value 'the wire'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')
  });

  it("returns undefined for no key holding input value 'that 70s show'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });

});


