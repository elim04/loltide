
//ACTUAL CODE

//create function that takes in an object (obj) and a value (keyValue) and scan the object and return the first key that contains that value 
//if no key has that value then return undefined 

const findKeyByValue = function(obj, keyValue) {
  let keyList = Object.keys(obj);
  for (let key of keyList) {
    if (obj[key].includes(keyValue)) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


