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


// our flatten will only handle one level of nesting

const flatten = function(arrayToFlatten) {
  let flattenedArr = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let j = 0; j < arrayToFlatten[i].length; j++) {
        flattenedArr.push(arrayToFlatten[i][j]);
      }
    } else {
      flattenedArr.push(arrayToFlatten[i]);
    }
  }
  return flattenedArr;
};

module.exports = flatten;

//TESTCODE
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten(["e", "m", "i", ["l", "y"]]), ["e", "m", "i", "l","y"]));
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
