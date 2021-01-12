
//ACTUAL FUNCTION

// words parameter will be for the word you want to count each letter for
const countLetters = function(words) {
//turn everything to lowerCase and remove spaces to only count letters
  let revisedWord = words.split(" ").join("").toLowerCase();

  //define an empty object to store our letter count in
  const result = {};

  for (let letter of revisedWord) {
    if (result[letter]) {
      result[letter] += 1;
    }   else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters; 

console.log(countLetters("Emily lim is a new coder"));