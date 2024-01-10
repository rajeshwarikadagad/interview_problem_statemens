// find the longest unique sub array

//--------------------- Method-1  ----------------------------------//
function findLongestSubString(str) {
  
  let longestSubString = '';
  
  for(let i=0; i< str.length; i++) { 
    let subStr = '';
     
    for(let j=i; j< str.length; j++) {
      subStr += str[j];
      isRepeated =false;
       
      subStr.split('').forEach((item, index) => {
        if(subStr.indexOf(item) !== index) {
          isRepeated =true;
        }   
      });
          
      if(!isRepeated && subStr.length > longestSubString.length) {
        longestSubString = subStr;
      }
    }
 }
  return longestSubString;
}





let str = 'aabcbdef';

console.log(findLongestSubString(str))

//------------------------ Method -2 --------------------------------//


function longestUniqueSubarray(str) {
    if (!str || str.length === 0) {
        return '';
    }

    let longestSubarray = '';
    
    for (let i = 0; i < str.length; i++) {
        let currentSubarray = '';
        let charSet = new Set();

        for (let j = i; j < str.length; j++) {
            const currentChar = str[j];

            if (charSet.has(currentChar)) {
                break;
            }

            charSet.add(currentChar);
            currentSubarray += currentChar;
        }

        if (currentSubarray.length > longestSubarray.length) {
            longestSubarray = currentSubarray;
        }
    }

    return longestSubarray;
}

// Example usage
const inputString = "abcabcbb";
const result = longestUniqueSubarray(inputString);
console.log(result);
