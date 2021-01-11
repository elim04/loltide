const assertEqual = require('./assertEqual');

//NOTE it is ok right now for function to not return true for nested arrays or arrays of objects that are identical

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

module.exports = eqArrays;

