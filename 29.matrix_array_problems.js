



function rotate(matrix) {
  const n = matrix.length;


 for(let i=0; i<n; i++) {
   for(let j=0; j<i; j++) {

        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
   }
 }
 
   for(let arr of matrix) {
     arr.reverse();
    }

}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotate(matrix);

console.log(matrix);


//---------------------------------Example-2 M*N-----------------------

function rotate(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let  newMatrix = Array(m).fill(0).map(() => new Array(n).fill(0));
  // console.log(newMatrix)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        [newMatrix[j][i], matrix[i][j]] = [matrix[i][j], newMatrix[j][i]];
    }
  }

  for (let arr of newMatrix ) {
    arr.reverse();
  }
 return newMatrix;
}
 
// Example usage:
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
const res = rotate(matrix);

console.log(res);
