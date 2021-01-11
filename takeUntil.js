//TEST ASSERTION CODE
const eqArrays = function(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

//ACTUAL FUNCTION

const takeUntil = function(array, callback) {
  let index = 0;
  for (let item of array) {
    if (callback(item)) {
      index = array.indexOf(item);
    }
  }
  let result = array.slice(0, index);
  return result;
};

module.exports = takeUntil;

//FOR TESTING

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']);


