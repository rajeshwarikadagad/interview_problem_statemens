// print the all possible combinations of an array nCr


let arr = [0, -1, 2, -3, 1];

function printAllCombinations(arr) {
    function generateCombinations(index, currentCombination) {
      
           console.log(currentCombination);
            //let sum = currentCombination.reduce((acc, item) => acc +=item, 0); // this logic is to find the combinations whose sum is equal to zero.
            // console.log(sum === 0 ? currentCombination : '' )
        for (let i = index; i < arr.length; i++) {
         
            generateCombinations(i + 1, [...currentCombination, arr[i]]);
      
        }
    }

    generateCombinations(0, []);
}

// Example usage
const inputArray = [1, 2, -3];
printAllCombinations(arr);

