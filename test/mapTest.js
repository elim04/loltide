
const assert = require('chai').assert;
const map = require('../map');


describe('#map', () => {
  it("returns [4, 6 ,8] for [2, 3, 4]", () => {
    const numbers = [2, 3, 4];
    const results2 = map(numbers, function(num) {
      return num * 2;
    });
    assert.deepEqual(results2, [4, 6, 8]);
  });

  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });


});

