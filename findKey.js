//TEST ASSERTION CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL CODE

//implement function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. if no key is found then it should return undefined

const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) { //remember to use square bracket b/c key needs to evaluate to the specific value
      return key;
    }
  }
  return undefined;
};

//TEST CODE

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

//rewritten callback function in the non arrow format for reference

let test = function(x) {
  return x.stars === 2;
};

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5)

assertEqual(result1, "noma");
assertEqual(result2, undefined);

