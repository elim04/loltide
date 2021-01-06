//TEST ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION

// words parameter will be for the word you want to count each letter for
const countLetters = function(words) {
//turn everything to lowerCase and remove spaces to only count letters
  let revisedWord = words.split(" ").join("").toLowerCase();

  //define an empty object to store our letter count in
  const result = {};

  for (let letter of revisedWord) {
    if (result[letter]) {
      result[letter] += 1;
    }   else {
      result[letter] = 1;
    }
  }
  return result;
};


//TEST CODE

const result1 = countLetters("Emily lim is a new coder");
console.log(result1);
assertEqual(result1["e"], 3);
assertEqual(result1["m"], 2);
assertEqual(result1["i"], 3);
assertEqual(result1["k"], undefined);
assertEqual(result1["w"], 1);
assertEqual(result1["y"], 1);