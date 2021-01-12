
//head function to get the first item in the first index of the array

const head = function(arrayInput){
  if (arrayInput.length === 0) {
    return "undefined";
  } else {
    return arrayInput[0];
  }
};

module.exports = head;

