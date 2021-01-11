
const assertEqual = require('./assertEqual');
//tail function for returning all elements in array except first one (index 0)

const tail = function(arrayInput) {
  if (arrayInput.length === 0) {
    return "undefined";
  } else {
    let tailArray = arrayInput.slice(1);
    return tailArray;
  }
};

module.exports = tail;

