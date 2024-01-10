// find the longest unique sub array




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
