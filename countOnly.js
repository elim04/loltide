
//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
//create a for loop to run throught the allItems list 
  for (const item of allItems) {
    //create a conditional to only count items in itemsToCount list
    if (itemsToCount[item]) {
      //create if statement to either add item to results list or continue to iterate +1 if multiples of item
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly; 


