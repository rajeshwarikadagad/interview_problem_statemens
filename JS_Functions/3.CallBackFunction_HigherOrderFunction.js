// -------------------callback() -----------------------------------
// A callback is a function passed as an argument to another function.
// where one function has to wait for another function
// Note:
// When you pass a function as an argument, remember not to use parenthesis.

// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().

// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());

// ----------------Example 1----------------------
function displayVal(res) {
console.log('result: '+ res);
}


function calculator(num1, num2, callBack) {
         let sum = num1 + num2;
         callBack(sum);
}
 
calculator(2, 3, displayVal);
//-----------------------------Example 2--------------------
function display() {
console.log('Hello Raji');
}


 
setTimeout(display,3000);

//-------------------------> higher order function-------------------------------
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// How to Use Higher Order Functions(HOFs):
// You can use higher order functions in a variety of ways.
// When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.
// When working with objects, you can use the Object.entries() function to create a new array from an object.
// When working with functions, you can use the compose() function to create complex functions from simpler ones.



//-------------------------------Example 1-------------------
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]

//-------------------------------Example 2------------------

const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [1, 3, 5]

//-------------------------------Example 3------------------

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum); // 15




