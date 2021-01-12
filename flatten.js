
// our flatten will only handle one level of nesting

const flatten = function(arrayToFlatten) {
  let flattenedArr = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let j = 0; j < arrayToFlatten[i].length; j++) {
        flattenedArr.push(arrayToFlatten[i][j]);
      }
    } else {
      flattenedArr.push(arrayToFlatten[i]);
    }
  }
  return flattenedArr;
};

module.exports = flatten;

