// check given two strings are anagram or not
let str1 = "abcdda";
let str2 = "bcadad";

if(str1.length !== str2.length) console.log('not a anagram');
let s1 = (str1.toLocaleLowerCase()).split('').sort().join('');
let s2 = (str2.toLocaleLowerCase()).split('').sort().join('')
if(s1 == s2) {
  console.log('it is a anagram');
} else {
  console.log('not a anagram');

}
