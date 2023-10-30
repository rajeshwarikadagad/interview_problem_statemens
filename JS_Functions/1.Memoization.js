// memoization example for addition and multiplication.
// Def:It is an optimization technique that makes applications more efficient and hence faster by cacheing the result of sub problems.
// The concept of memoization in JavaScript relies on two concepts:1. Closures,  2. Higher Order Functions.



 
 var memoObject = {};
 var memoObject2 = {};

  // memoization function
function memonizedFun(func) {
  console.log('func', func.name == 'funcA');
  return function (inPutVal) {
    if (func.name == 'funcA') {
      return checkval(inPutVal, func, memoObject);
    } else {
      return checkval(inPutVal, func, memoObject2);

    }
  } 
}

function checkval(inPutVal, func, memoObject) {
  if (memoObject[inPutVal]) {
    console.log('Do not Call function ' + func.name);
    return memoObject[inPutVal];
  } else { 
    console.log('Call function ' + func.name);
    let val = func(inPutVal);
    return memoObject[inPutVal] = val;
  }
}

// call back function
function funcA(input) {
  return input * 6;
}

// call back function
function funcB(input) {
  return input + 10;
}


var memA = memonizedFun(funcA);
var memB = memonizedFun(funcB);

console.log(memA(1)); //Call functiuon funcA
console.log(memA(2)); //Call functiuon funcA
console.log(memA(3));;//Call functiuon funcA
console.log(memA(2)); //Do not call function funcA
console.log(memA(1)); //Do not call function funcA

console.log(memoObject)
console.log(memB(1)); //Call functiuon funcB
console.log(memB(2)); //Call functiuon funcB
console.log(memB(2)); //Do not call function funcB


// ------------------------ Fib example
function memoize(fn) {

  return function (n) {
    // console.log(n);
    return fib(n);
  }
}

function fib(n) {
  if (n <= 1) return n;
  else {
    if (memoizeObj[n]) {
      // console.log('memoized '+ obj[n]);
      return memoizeObj[n];
    } else {
      memoizeObj[n] = fib(n - 1) + fib(n - 2);
      // console.log('call fun ' + obj[n]);
    }
    console.log(memoizeObj[n])
    return memoizeObj[n];
  }

}
var memoizeObj = {};
var res = memoize(fib);
res(5);
