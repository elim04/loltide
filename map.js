

//Map to take in two arguments, an array to map and a callback function
//it will return an ew array based on the results from the callback function


//ACTUAL FUNCTION

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

