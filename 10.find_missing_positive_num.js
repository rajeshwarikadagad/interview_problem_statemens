//find missing msallest positive numberfrom a given array


let arr =[1,2,4,-1,5,-2,0];
let missingNum = 1;

/* method-1 */
arr.forEach(item => {
  if(!arr.includes(missingNum)) {
    // console.log('missingNum', missingNum);
    return;
  } else{
    missingNum++;
  }
});


/* method-2 */
//sort the given array and find the index of first positive element

        var posNum =1;
        var uniqArr = Array(...new Set(A));
        var sortedArray = uniqArr.sort((a,b)=> a-b);
        var start = sortedArray.findIndex(item => item>0);

        if (start == -1) return 1;
        
        for(i=start;i<sortedArray.length;i++) {
            if(posNum !== sortedArray[i] ) {
                break;
            } else {
                ++posNum;
            }
        }
        return posNum;
