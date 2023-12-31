// Closure & Currying & Parial Application


//--------------------------------------->  Closure()-----------------------------------
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

function myCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  }
}
var count = myCounter();
console.log(count());
console.log(count());
console.log(count());


// ----------------------------------> Currying-------------------------------------
// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
// This technique converts N arguments function calls into N function call chains, with each function call having a single argument

//-----------------------------------Example -1---------------------------------------
// traditional function
function add(a,b) {
    return a + b;
}

// curried function
function curried_add(a) {
    // The outer function returns a nested single-argument function
    return function nested_func(b) {
        return a + b;
   }
}

//-----------------------------------Example -2---------------------------------------
function curriedMultiply(a) {
   return function(b) {
       return a * b
   }
}
// Write your code here
var result = curriedMultiply(2);
var result2 = result(3);

console.log(result(4));
console.log(result2);
---------------------------- Example-3---------------------
function myDisplay(location) {
  return function(fName) {
    return function(lname) {
      return fName + ' ' + lname + ' is from ' + location;    
    }
  }
}


// console.log(myDisplay('Pune')('Ravi')('Sharma'));
let res = myDisplay('Pune')('Ravi')('Sharma');
console.log(res);

//----------------------------------> Partial Application-------------------------------

// Partial application allows us to fix a function's arguments. 
// partial application, which fixes the value of some of a function’s arguments without fully evaluating the function.

//parial application

function displayName(location) {
       return function(fName, lname) {
           return fName + ' ' + lname + ' is from ' + location;
       }
}



let userDetails = (...details) => {
  return displayName('Bangalore')(...details);
};
let user1 = userDetails('Raji', 'Kadagad');
let user2 = userDetails('Aayush', 'Tiwari');


console.log(user1);  
console.log(user2); 



