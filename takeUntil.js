

//ACTUAL FUNCTION

const takeUntil = function(array, callback) {
  let index = 0;
  for (let item of array) {
    if (callback(item)) {
      index = array.indexOf(item);
    }
  }
  let result = array.slice(0, index);
  return result;
};

module.exports = takeUntil;



