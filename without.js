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


const without = function(sourceArr, removeItemArr) {
  let filteredArr = sourceArr.slice(); //slice() creates a copy of the original array
  for (let i = 0; i < filteredArr.length; i++) {
    for (let j = 0; j < removeItemArr.length; j++) {
      if (filteredArr[i] === removeItemArr[j]) {
        let spot = filteredArr.indexOf(filteredArr[i]);
        filteredArr.splice(spot, 1);
      }
    }
  }
  return filteredArr;
};

//test cases for making sure new array is filtered
console.log(without([1, 2, 3], ["2", 3]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["e", "m", "i", "k", "l", "y"], ["k"]));

//To test if original array has not been modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);