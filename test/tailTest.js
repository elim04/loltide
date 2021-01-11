

const assert = require('chai').assert;
const tail  = require('../tail');

describe('#tail', () => {

  it("returns ['lighthouse', 'labs'] for ['hello', 'lighthouse', 'labs]", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("it returns [] for ['hi']", () => {
    assert.deepEqual(tail(['hi']), []);
  });

  it("it returns 3 as the original array length and no changes are made to original array", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    let newWords = tail(words);
    assert.strictEqual(words.length, 3);
  });

});



