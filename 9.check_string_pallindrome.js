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
//check whether a give string can be rearranged as a pallindrome or not 

let obj ={};
let str ="civci";

for(let i=0;i<str.length;i++) {
 obj[str[i]] = obj[str[i]] ? obj[str[i]]+1 : 1;
}
console.log(obj)
console.log((Object.values(obj).filter(count => count%2 ==1).length) <= 1? 'it s a palindrome ' : 'not a pallindrome')


