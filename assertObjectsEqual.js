
//eqArrays function for checking the inside an array if the values are equal
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

// eqObjects function to test if 2 objects are equal to each other
const eqObjects = function(object1, object2) {

  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }

  for (let key of objOneKeys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(assertObjectsEqual(ab, ba));
console.log(assertObjectsEqual(ab, abc));


