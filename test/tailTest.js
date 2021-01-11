
const assertEqual = require('../assertEqual');
const tail = require('../tail')

//TESTING CODE

let words = ["Yo Yo", "Lighthouse", "Labs"];

//testing to make sure returning the tail end of the array
const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

//testing to make sure original array was not modified
assertEqual(words.length, 3);

//testing for one word array, to make sure it returns empty array
let testOne = ["hi"];
console.log(tail(testOne));

