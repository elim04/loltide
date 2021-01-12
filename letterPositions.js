
//ACTUAL FUNCTION 

//create function that will return all of the inces in wthe string where each character is found, returning multiple numbers might be required 

const letterPositions = function(sentence) {
  //just make sure there are no upperCase that could interfere with the letters
  console.log(sentence);
  let revisedWord = sentence.toLowerCase()
  //declare empty object to add each letter to 
  const results = {};

  //create for loop to move through each letter and record and push the position into results 

  for(let i = 0; i < revisedWord.length; i++) {
    if (results[revisedWord[i]]) {
      results[revisedWord[i]].push(i); //remember if you want the index of the current value you are counting, you can just use i!!! 

    } else {
      results[revisedWord[i]] = [];
      results[revisedWord[i]].push(i);

    }
  }

  return results;
};
module.exports = letterPositions; 

