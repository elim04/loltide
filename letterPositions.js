//ASSERTION TEST 
const eqArrays = function(arrayOne, arrayTwo) {
  //revised my eqArray function to include what happens if i want to test for undefined
  //first 3 if statements are for these purposes
  if (typeof(arrayOne) === "undefined" && typeof(arrayTwo) === "undefined") {
    return true;
  }

  if (typeof(arrayOne) === "undefined" && typeof(arrayTwo) !== "undefined") {
    return false;
  }

  if (typeof(arrayOne) !== "undefined" && typeof(arrayTwo) === "undefined") {
    return false;
  }

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

//create function that will return all of the inces in wthe string where each character is found, returning multiple numbers might be required 

const letterPositions = function(sentence) {
  //just make sure there are no upperCase that could interfere with the letters
  console.log(sentence);
  let revisedWord = sentence.toLowerCase()
  //declare empty object to add each letter to 
  const results = {};

  //create for loop to move through each letter and record and push the position into results 

  for(let i = 0; i < revisedWord.length; i++) {
    if (results[revisedWord[i]]) {
      results[revisedWord[i]].push(i); //remember if you want the index of the current value you are counting, you can just use i!!! 

    } else {
      results[revisedWord[i]] = [];
      results[revisedWord[i]].push(i);

    }
  }
  console.log(results.f);
  return results;
};
module.exports = letterPositions; 

console.log(letterPositions("hello"));
//TEST CODE 

assertArraysEqual(letterPositions("hello").e, [1]);assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").f, [8]);