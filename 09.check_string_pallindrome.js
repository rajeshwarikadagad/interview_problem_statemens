//check given string is pallindrome or not

let str = "madam";

/* method-1 */
let rvrstr = str.split("").reverse().join("");
// console.log(str === rvrstr ? "it is a palindrome" : "not a palindrome");

let isPallindrome = true;
/* method-2 */
for(let i=0; i<str.length/2; i++) {
if(str[i] !== str[str.length-1-i]) {
  isPallindrome = false;
  break;
 }
}
console.log('pallindrome: ', isPallindrome); 




//##############################
//check whether a give string can be rearranged as a pallindrome or not , if yes then rearrange the string as palindrome
let str ="civci";
let obj ={};

for(let i=0;i<str.length;i++) {
 obj[str[i]] ? obj[str[i]]++ : obj[s[i]] = 1;
}
console.log(obj);

let ch = '';
let isPallindrome = Object.keys(obj).filter(item => {
  if(obj[item]%2 !== 0){
    ch = item;
    return true;
  }
}).length <= 1;

console.log(isPallindrome ? 'it s a palindrome ' : 'not a pallindrome');

// re arranging a string as palindrome
if (isPallindrome) {
  str =str.split('').sort().join('');  
  let arr = ch;
  for(let i=0; i< s.length; i++) {
   if(s[i] !==ch) {
     if(i%2 == 0) {
      arr = s[i] + arr;
    } else {
      arr = arr + s[i];
    }
  }
 }
}
console.log(arr)


