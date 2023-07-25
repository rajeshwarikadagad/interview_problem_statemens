//  calculate the sum of digits, 


let str = "abc234hjb675hyk896";

/* method-1 sum of each digits */ 
str= str.match(/\d/g);
let numStr=0;
str.forEach(item => numStr += +item);
console.log(numStr);


/* method -2 some of 234+675+896   */
let numsArr = [];
let count =0;
let newStr='';
for(let i=0; i<=str.length; i++) {
  if(!isNaN(str[i])) {
    newStr += str[i] ; //  numsArr.push(str[i])
    count =1;
  } else {
   count ?  numsArr.push(newStr) : '';
   newStr='';
   count = 0;
  }
}
numsArr.forEach(item => numStr += +item);
console.log(numStr);
