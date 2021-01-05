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
  let arrayResult = eqArrays(arrayOne, arrayTwo);
  if (arrayResult === true) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

//TEST call of function to make sure it prints correctly
assertArraysEqual([1, 2, 3], [2, 3]);