//assert Equal function to determine if error in code or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//tail function for returning all elements in array except first one (index 0)

const tail = function(arrayInput) {
  if (arrayInput.length === 0) {
    return "undefined";
  } else {
    let tailArray = arrayInput.slice(1);
    return tailArray;
  }
};


//TESTING CODE

let words = ["Yo Yo", "Lighthouse", "Labs"];

//testing to make sure returning the tail end of the array
const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

//testing to make sure original array was not modified
assertEqual(words.length, 3);

//testing for one word array, to make sure it returns empty array
let testOne = ["hi"];
console.log(tail(testOne));

