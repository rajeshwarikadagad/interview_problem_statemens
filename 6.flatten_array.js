// flatten the given nested array

//-------------------------- method-1 ---------------------------------------


const myArr = [1, 3, [2, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);


console.log(newArr)
// console.log(Math.max(...newArr)); 



//-------------------------- method-2  Recursive Method---------------------------------------
function flattenDeep(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4, [5, 6]], 7], 8, [9, [10]]];
const flattenedArray = flattenDeep(nestedArray);
console.log(flattenedArray);

//-------------------------- method-3 ---------------------------------------
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

//-------------------------- method-4 ---------------------------------------

const _ = require('lodash');
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = _.flattenDeep(nestedArray);
//-------------------------- method-5 ---------------------------------------

function flattenDeep(arr) {
  return [].concat(...arr.map(item => (Array.isArray(item) ? flattenDeep(item) : item)));
}
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenDeep(nestedArray);


