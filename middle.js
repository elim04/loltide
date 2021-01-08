//TEST ASSERTION FUNCTIONS
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

//WHAT I HAVE TO DO
//Create a function that returns the middle part of the array that is input as a parameter 

//for arrays with 1 or 2 elements, there is no middle, return empty array

//for arrays with odd number of elements, return array with single middle element

//for arrays with even number of elements, return array with both elements returned 

const middle = function(array) {
  //determine what the middle index is using the array length and dividing in half
  let midIndex = Math.floor(array.length/2);
  //declare an empty array to push middle elements to
  let middleArray = [];
  //determine if array is odd or even using modulus operator to use if statement and decide if two elements are pushed or one is to middleArray
  if (array.length % 2 === 0) {
    //if array is even then need to push two elements to middle array as both are the "middle"
    middleArray.push(array[midIndex - 1], array[midIndex]);
  } else if (array.length % 2 !== 0) {
    //only need to push one element because it is odd
    middleArray.push(array[midIndex]);
  }
  return middleArray;
};

//TEST CODE

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArraysEqual(middle(["e", "m", "i", "l", "y"]), ["i"]));