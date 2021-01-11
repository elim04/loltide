
//ACTUAL FUNCTION

//WHAT I HAVE TO DO
//Create a function that returns the middle part of the array that is input as a parameter 

//for arrays with 1 or 2 elements, there is no middle, return empty array

//for arrays with odd number of elements, return array with single middle element

//for arrays with even number of elements, return array with both elements returned 

const middle = function(array) {
  //determine what the middle index is using the array length and dividing in half
  let midIndex = Math.floor(array.length/2);
  //declare an empty array to push middle elements to
  let middleArray = [];
  //determine if array is odd or even using modulus operator to use if statement and decide if two elements are pushed or one is to middleArray
  //if array is 1 or 2 in length, return middle array as empty array
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  }

  if (array.length % 2 === 0) {
    //if array is even then need to push two elements to middle array as both are the "middle"
    middleArray.push(array[midIndex - 1], array[midIndex]);
  } else if (array.length % 2 !== 0) {
    //only need to push one element because it is odd
    middleArray.push(array[midIndex]);
  }
  return middleArray;
};

module.exports = middle;

