//ASSERTION TEST CODE 
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


//Map to take in two arguments, an array to map and a callback function
//it will return an ew array based on the results from the callback function


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2, 3, 4]
const phrases = ["hi", "hello", "bonjour"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



const results1 = map(words, word => word[0]);

const results2 = map(numbers, function(num) {
  return num * 2;
});

const results3 = map(phrases, function(phrase) {
  return phrase + " my name is emily";
})

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [4, 6, 8]);
assertArraysEqual(results3, ["hi my name is emily", "hello my name is emily", "bonjour my name is emily"]);