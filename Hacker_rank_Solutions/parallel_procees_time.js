/*
 * Complete the 'minTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY files
 *  2. INTEGER numCores
 *  3. INTEGER limit
 */

function minTime(files, numCores, limit) {
  
    // Write your code here
    let minTime=0;
    let reduceTime =[];
     files.forEach(item => {
         if(item % numCores !== 0 && numCores !== 1) {
             minTime += item;
         } else {
             reduceTime.push(item);
         }
     });
     
     reduceTime = reduceTime.sort((a, b) => b - a);

  for (let i = 0; i < reduceTime.length; i++) {
    if (limit > 0) {
      const processingTime = reduceTime[i] / numCores;
      minTime += processingTime;
      limit--;
    } else {
      minTime += reduceTime[i];
    }
  }
    
     return minTime;
}


let files = [3,1,5];
let numCores = 1;
let limit = 5;

 minTime(files, numCores, limit);

