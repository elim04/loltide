//TEST ASSERTION CODE

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL CODE

//create function that takes in an object (obj) and a value (keyValue) and scan the object and return the first key that contains that value 
//if no key has that value then return undefined 

const findKeyByValue = function(obj, keyValue) {
  let keyList = Object.keys(obj);
  for (let key of keyList) {
    if (obj[key].includes(keyValue)) {
      return key;
    }
  }
};


//TEST CODE 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");