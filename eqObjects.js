
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    } else if (typeof object1[key] === "object" || typeof object2[key] === "object") {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

module.exports = eqObjects; 

// else if (object1[key] !== object2[key]) {
//   return false;

