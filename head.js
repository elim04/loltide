//assert Equal function to determine if error in code or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//head function to get the first item in the first index of the array

const head = function(arrayInput){
  if (arrayInput.length === 0) {
    return "undefined";
  } else {
    return arrayInput[0];
  }
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),"test1");
assertEqual(head([1]), 1);


