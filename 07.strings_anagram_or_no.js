//--------------------------------Example-1--------------------------------------------------------//
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




//---------------------------------------------Example-2---------------------------------------------------------------------
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  
var strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]];
function groupAnagrams(strs) {
  var anagramGroup = {};
  for(let str of strs ) {
    let ch = str.split('').sort().join('').toLocaleLowerCase();
    if(!anagramGroup[ch]) {
      anagramGroup[ch] =[str];
   }  else {
       anagramGroup[ch].push(str); 
   }
 }
 return Object.values(anagramGroup);
}

console.log(groupAnagrams(strs))
