

const without = function(sourceArr, removeItemArr) {
  let filteredArr = sourceArr.slice(); //slice() creates a copy of the original array
  for (let i = 0; i < filteredArr.length; i++) {
    for (let j = 0; j < removeItemArr.length; j++) {
      if (filteredArr[i] === removeItemArr[j]) {
        let spot = filteredArr.indexOf(filteredArr[i]);
        filteredArr.splice(spot, 1);
      }
    }
  }
  return filteredArr;
};

module.exports = without;

//armin's alternative way - no need for double loop 
// const without = function(source, itemsToRemove) {
//   if (eqArrays(source, itemsToRemove)) console.log([]);
//   let resultArray = [];
//   for (let i = 0; i < source.length; i++) {
//     if (!itemsToRemove.includes(source[i])) {
//       resultArray.push(source[i]);
//     }
//   }
//   return resultArray;
// };
