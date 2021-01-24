const assertEqual = require('./assertEqual');

//NOTE it is ok right now for function to not return true for nested arrays or arrays of objects that are identical

const eqArrays = function(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) || Array.isArray(arrayTwo[i])) {
      if (!eqArrays(arrayOne[i], arrayTwo[i])) { //recursive call 
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false; //base case
    } 
  }
  
  return true;

};

module.exports = eqArrays;

